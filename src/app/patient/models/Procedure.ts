export class Procedure {
    id: number;
    name: string;
    table: string;

    constructor({id, name, table}: {id: number, name: string, table: string}) {
        this.id = id;
        this.name = name;
        this.table = table;
    }

    static buildFromObject(value: any) {
        return new Procedure({
            id: value['id'] || value['idProcedimento'] || -1,
            name: value['procedimento'] || '',
            table: value['tabela'] || ''
        });
    }

    public get title() {
        return '[' + this.table + "] " + this.name;
    }
}