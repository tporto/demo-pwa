import { Specialty } from "./Specialty";

export class Professional {
    id: number
    name: string
    specialties: Specialty[]

    constructor(
        { id,  name, specialties }: 
        { id: number, name: string; specialties: any[] }
    ) {
        this.id = id;
        this.name = name;
        this.specialties = specialties.map(specialty => Specialty.buildFromObject(specialty));
    }

    static buildFromObject(value: any) {
        return new Professional({
            id: value['id'] || -1,
            name: value['nome'] || '',
            specialties: value['especialidade'] || [{}],
        });
    }
}