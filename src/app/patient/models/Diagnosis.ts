export class Diagnosis {
    id: number;
    name: string;
    table: string;

    constructor({id, name, table}: {id: number, name: string, table: string}) {
        this.id = id;
        this.name = name;
        this.table = table;
    }

    static buildFromObject(value: any) {
        return new Diagnosis({
            id: value['id'] || value['idDiagnostico'] || -1,
            name: value['diagnóstico'] || value['diagnostico'] || '',
            table: value['tabela'] || ''
        });
    }

    public get title() {
        return '[' + this.table + "] " + this.name;
    }
}