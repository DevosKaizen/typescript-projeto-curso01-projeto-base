
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";  //any define uma flexibilidade nos tipos de variaveis de entrada (recupera comportamento padrao do JS)

qualquer = 22;

//arrays

const lista: number[] = [];
lista.push();


// tipos personalisados (type Alias, TIPO ILHA)


type transacao = {   //garante o padrao da estrutura PRINCIPAL FUNÇAO DO TYPE
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: transacao = {
    tipoTransacao:"Pagamento com boleto",
    data: new Date(),
    valor: 0,
}

console.log(novaTransacao);
