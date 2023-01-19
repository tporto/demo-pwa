export interface Status {
  codAgendamentoStatus: number;
  descricao: string;
}

export interface GrupoProcedimento {
  codGrupoProcedimento: number;
  nome: string;
  gerarTeleconsulta: number;
}

export interface PacienteConvenio {
  numeroCarteirinha: string;
  validade?: any;
}

export interface Paciente {
  codUsuario: number;
  nome: string;
  dataNascimento: Date;
  sexo: string;
  email: string;
  dddCelular: string;
  telCelular: string;
  cpf: string;
  PacienteConvenios: PacienteConvenio[];
}

export interface Profissional {
  codUsuario: number;
  nome: string;
  dataNascimento: Date;
  sexo: string;
  email: string;
  dddCelular: string;
  telCelular: string;
}

export interface Convenio {
  codConvenio: number;
  descricaoConvenio: string;
}

export interface Plano {
  codPlano: number;
  plano: string;
}

export interface Sala {
  codSala: number;
  nomeSala: string;
}

export interface MetaData {
  idAgendamento: number;
  idEmpresa: number;
}

export interface Participant {
  name: string;
  host: boolean;
  idRoom: string;
  metaData?: any;
  lastSeen?: any;
  lastSeenContext?: any;
  deletedAt?: any;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  accessUrl: string;
}

export interface Raw {
  title: string;
  expectedStartDate: Date;
  expectedEndDate: Date;
  metaData: MetaData;
  participants: Participant[];
  deletedAt?: any;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DetalhesTeleconsulta {
  idSistema: number;
  idExterno: string;
  url: string;
  raw: Raw;
}

export interface Complemento {
  link: string;
  termo_aceite?: any;
  id_sala_zoom: string;
  reembolso: number;
  detalhesTeleconsulta: DetalhesTeleconsulta;
  motivoAgendamento?: any;
}

export interface Especialidade {
  id: number;
  descricao: string;
}

export interface Especialidade2 {
  codesp: number;
  cod_profis: number;
  descri: string;
  id_empresa: number;
}

export interface Agendamento {
  data: Date;
  hora: string;
  status: number;
  encaixe: string;
  retorno: string;
  ativo: string;
  atendente?: any;
  intervalo: number;
  Status: Status;
  GrupoProcedimento: GrupoProcedimento;
  Paciente: Paciente;
  Profissional: Profissional;
  Convenio: Convenio;
  Plano: Plano;
  Sala: Sala;
  complemento: Complemento;
  Especialidade: Especialidade;
  especialidade: Especialidade2;
  codAgendamento: number;
  codEmpresa: number;
  codPaciente: number;
  codProfissional: number;
  dataFinal?: any;
  codPlano: number;
  codConvenio: number;
  codProcedimento: number;
  codSala: number;
  horaChegada?: any;
  dataInclusao: Date;
  horaInclusao: string;
  observacoes: string;
  primeiraVezProf: string;
  idEspecialidade: number;
  dataHoraRegistroUTC: Date;
  dataHoraUTC: Date;
  dataUltimaConsulta: Date;
  quantidadeConsultas: number;
  quantidadeFaltas: number;
}
