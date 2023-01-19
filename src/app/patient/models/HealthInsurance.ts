export class HealthInsurance {
    name: string
    companyName: string
    number: string
    motherName: string
    fatherName: string

    constructor({name, companyName, number, motherName, fatherName}: {name: string, companyName: string, number: string, motherName: string, fatherName: string}) {
        this.name = name;
        this.companyName = companyName;
        this.number = number;
        this.motherName = motherName;
        this.fatherName = fatherName;
    }

    static buildFromObject(value: any) {
        const parents = value['Parentes'] || [];

        const mother = parents.find((parent: any) => parent?.codGrauParentesco === 2)?.Parente;
        const father = parents.find((parent: any) => parent?.codGrauParentesco === 1)?.Parente;

        const healthInsuranceInfo = value['PacienteConvenios'][0] || {};

        return new HealthInsurance({
            name: healthInsuranceInfo?.Convenio?.Razao_social || '',
            companyName: healthInsuranceInfo?.Convenio?.Razao_social || '',
            number: healthInsuranceInfo?.num_associado_convenio || '',
            motherName: mother?.nome || '',
            fatherName: father?.nome || '',
        });
    }
}
