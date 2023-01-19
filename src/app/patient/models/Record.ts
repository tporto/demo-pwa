import { Diagnosis } from "./Diagnosis";
import { Medicine } from "./Medicine";
import { Procedure } from "./Procedure";
import { Professional } from "./Professional";
import { Specialty } from "./Specialty";

export class Record {
    id: number
    pacientId: number
    date: string
    historicoDoencaAtual: string
    professional: Professional
    specialty: Specialty
    medicines: Medicine[] = []
    diagnoses: Diagnosis[] = []
    procedures: Procedure[] = []

    constructor(
        { id, pacientId, date, professional, specialty, medicines, diagnoses, procedures, historicoDoencaAtual }:
        { id: number, pacientId: number, date: string; professional: any, specialty: Specialty, medicines: Medicine[], diagnoses: Diagnosis[], procedures: Procedure[], historicoDoencaAtual: string }
    ) {
        this.id = id;
        this.date = date;
        this.professional = typeof professional === 'string' ? Professional.buildFromObject({nome: professional}) : Professional.buildFromObject(professional);
        this.specialty = Specialty.buildFromObject(specialty);
        this.pacientId = pacientId;
        this.medicines = medicines.map(medicine => Medicine.buildFromObject(medicine))
        this.diagnoses = diagnoses.map(diagnosis => Diagnosis.buildFromObject(diagnosis))
        this.procedures = procedures.map(procedure => Procedure.buildFromObject(procedure))
        this.historicoDoencaAtual = historicoDoencaAtual;
    }

    static buildFromObject(value: any) {
        return new Record({
            id: value['id'] || -1,
            pacientId: value['idPaciente'] || -1,
            date: value['dataAtendimento'] || `${value['dataAtendimentoAntigo']}T${value['horaAtendimentoAntigo']}Z`,
            historicoDoencaAtual: value['historiaDoencaAtual'] || '',
            professional: value['profissional'] || {
                id: -1,
                name: '',
                especialidade: [],
            },
            specialty: value?.atendimentoComplemento?.dados?.especialidade || {
                id: -1,
                description: ''
            },
            medicines: value['medicamentos'] || [],
            diagnoses: value['diagnosticos'] || [],
            procedures: value['procedimentos'] || [],
        });
    }

    getRecordSpecialty() {
      if(this.specialty.id != -1) return this.specialty.description;

      return this.professional.specialties[0].description;
    }

    hasMedicines() {
      return this.medicines.length > 0;
    }

    hasDiagnosis() {
      return this.diagnoses.length > 0;
    }

    hasProcedures() {
      return this.procedures.length > 0;
    }
}
