import { Diagnosis } from './Diagnosis';
import { Medicine } from './Medicine';
import { Procedure } from './Procedure';
import { MedicalRecordProfessional } from './Professional';

export interface MedicalRecord {
  id: number;
  idEmpresa: number;
  idPaciente: number;
  idProfissional: number;
  dataAtendimento: string;
  definitivo: string;
  idTipoAtendimento: string;
  ativo: string;
  duracao: number;
  planoCuidado: string;
  criadoPor: number;
  alteradoPor: number;
  historiaDoencaAtual?: string; // Evolução Paciente
  diagnosticos: Diagnosis[];
  medicamentos: Medicine[];
  procedimentos: Procedure[];
  profissional: MedicalRecordProfessional;
}
