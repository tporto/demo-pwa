import { HealthInsurance } from "./HealthInsurance"

export class Patient {
    id: number
    patientId: number
    name: string
    birthday: string
    gender: string
    email: string
    phone?: string
    healthInsurance?: HealthInsurance

    constructor(
        { id, patientId, nome, dataNascimento, sexo, email, telefone, celular, ddd, healthInsurance }:
        { id: number, patientId: number, nome: string; dataNascimento: string; sexo: string; email: string; telefone?: string; celular?: string; ddd?: string, healthInsurance: HealthInsurance }
    ) {
        this.id = id;
        this.patientId = patientId;
        this.name = nome;
        this.birthday = dataNascimento;
        this.gender = sexo;
        this.email = email;
        this.phone = telefone || `(${ddd}) ${celular}`;
        this.healthInsurance = healthInsurance;
    }

    static buildFromObject(value: any) {
        return new Patient({
            id: value['idUsuario'] || -1,
            patientId: value['idPaciente'] || -1,
            nome: value['nome'] || '',
            dataNascimento: value['dataNascimento'] || '',
            email: value['email'] || '',
            sexo: value['sexo'] || '',
            ddd: value['dddCelular'],
            celular: value['telCelular'],
            telefone: value['telefone'],
            healthInsurance: value['healthInsurance'] || undefined
        });
    }

    hasHealthInsurance() {
        return !!this.healthInsurance;
    }

    public get motherName() {
        return this.healthInsurance?.motherName || '';
    }

    public get fatherName() {
        return this.healthInsurance?.fatherName || '';
    }
}
