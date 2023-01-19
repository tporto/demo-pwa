export class Medicine {
    id: number;
    name: string;
    dosage: string;

    constructor({id, name, dosage}: {id: number, name: string, dosage: string}) {
        this.id = id;
        this.name = name;
        this.dosage = dosage;
    }

    static buildFromObject(value: any) {
        return new Medicine({
            id: value['id'] || value['idExterno'] || -1,
            name: value['nome'] || '',
            dosage: value['posologia'] || ''
        });
    }

    public get title() {
        return this.name + " " + this.dosage;
    }
}