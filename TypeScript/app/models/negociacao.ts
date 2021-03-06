export class Negociacao {


    constructor(
        public _data: Date,
        public readonly quantidade: number, /* readonly faz com que a propriedade somente seja lida */
        public readonly valor: number,
         ) {}



    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}