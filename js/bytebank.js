var saldo = 3000;
//                      fução chama do css   |elemento|class do css|as HTMLElement; asegurar em tempo de compilação
var elementoSaldo = document.querySelector(" .saldo-valor .valor");
if (elementoSaldo != null) {
    // pegavariavel .converte o imput pra text
    elementoSaldo.textContent = saldo.toString(); //.toString converte numero em texto 
}
//                        fução chama do css         |elemento|      form => classe do css
var elementoFormulario = document.querySelector(" .block-nova-transacao form"); // indicar o tipo de elemento que chega em HTML
// variavel      |adiciona evento so clicar| chama função e tipo de açao
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault(); //previne o recarrregamento padrao ao submeter o form
    // teste se formulario esta completo        
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor Preencha todos os campos!");
        return;
    }
    else {
        alert(" o formulario esta valido! ");
    } // falta if para filtrar por data passada
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao"); // indicar o tipo de elemento que chega em HTML
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    // COLETA OS VALORES
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber; // .valueAsNumber; converte pra number |explicito|
    var data = new Date(inputData.value); // Date é exatamente assim e new Date( inputData.value); tambem
    if (tipoTransacao == "Depósito") {
        saldo += valor; //Recebe uma string e concatena ARRUMAR         
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tpo de Transação é invalido!");
        return;
    }
    elementoSaldo.textContent = saldo.toString(); //.toString() converte de modo explicito
    //OBJETO 
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
