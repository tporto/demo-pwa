export class Specialty {
    id: number
    description: string

    constructor(
        { id,  description}: 
        { id: number, description: string }
    ) {
        this.id = id;
        this.description = description;
    }

    static buildFromObject(value: any) {
        return new Specialty({
            id: value['id'] || value['codeesp'] || -1,
            description: value['descricao'] || value['descri'] || '',
        });
    }
}