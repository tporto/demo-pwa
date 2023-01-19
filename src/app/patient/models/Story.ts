export class Story {
  id: number;
  texto: string;

  constructor(
    {id, texto}:
    {id: number, texto: string}
  ) {
    this.id = id;
    this.texto = texto;
  }

  static buildFromObject(value: any): Story {
    return new Story({
      id: -1,
      texto: value['historiaDoencaAtual'] || ''
    });
  }
}
