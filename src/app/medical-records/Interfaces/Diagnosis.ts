export interface Diagnosis {
  idProblema: number;
  idDiagnostico: number;
  diagnostico: string;
  observacao: string;
  prognostico: string;
  tabela: string;
  tipo: string;
  dataInicio: string;
  dataInicioPrecisao: string;
  cronico: boolean;
  quantidadeObservacoes: number;
}
