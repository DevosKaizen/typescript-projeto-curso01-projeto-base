
// let saldo = 3000;



// //                      fução chama do css   |elemento|class do css|as HTMLElement; asegurar em tempo de compilação
// const elementoSaldo = document.querySelector(" .saldo-valor .valor") as HTMLElement; 
// if (elementoSaldo != null ) {
//     // pegavariavel .converte o imput pra text
// elementoSaldo.textContent = saldo.toString(); //.toString converte numero em texto 

// }

// //                        fução chama do css         |elemento|      form => classe do css
// const elementoFormulario = document.querySelector(" .block-nova-transacao form") as HTMLFormElement; // indicar o tipo de elemento que chega em HTML
// // variavel      |adiciona evento so clicar| chama função e tipo de açao
// elementoFormulario.addEventListener("submit", function(event){

//     event.preventDefault(); //previne o recarrregamento padrao ao submeter o form

// // teste se formulario esta completo        
//     if (!elementoFormulario.checkValidity()) {
//         alert("Por favor Preencha todos os campos!");
//         return;
//     } else {
//         alert (" o formulario esta valido! ");
        
//     } // falta if para filtrar por data passada

//     const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;// indicar o tipo de elemento que chega em HTML
//     const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
//     const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

//     // COLETA OS VALORES
//     let tipoTransacao: string = inputTipoTransacao.value;
//     let valor: number = inputValor.valueAsNumber; // .valueAsNumber; converte pra number |explicito|
//     let data: Date = new Date( inputData.value ); // Date é exatamente assim e new Date( inputData.value); tambem

//     if (tipoTransacao == "Depósito") {
//         saldo += valor;         //Recebe uma string e concatena ARRUMAR         
//     } else if ( tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
//         saldo -= valor;

//     } else {
//         alert("Tpo de Transação é invalido!");
//         return;
//     }

//     elementoSaldo.textContent = saldo.toString(); //.toString() converte de modo explicito
        
//     //OBJETO 
//     const novaTransacao = {
//         tipoTransacao: tipoTransacao,
//         valor: valor,
//         data: data
//     }
//     console.log(novaTransacao);
//     elementoFormulario.reset();

// });