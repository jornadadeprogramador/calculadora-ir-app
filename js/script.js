function calcular() {
    // Recuperar o valor do salário informado
    let salario = Number(document.getElementById('salario').value).toFixed(2);

    // Valor do Imposto a Pagar
    let impostoAPagar = 0;

    // Calcular as faixas
    let salarioFaixa28 = salario - 4500;
    if (salarioFaixa28 > 0) {
        impostoAPagar = salarioFaixa28 * 28 / 100;
        salario = salario - salarioFaixa28;
    }

    let salarioFaixa18 = salario - 3000;
    if (salarioFaixa18 > 0) {
        impostoAPagar += salarioFaixa18 * 18 / 100;
        salario = salario - salarioFaixa18;
    }

    let salarioFaixa8 = salario - 2000;
    if (salarioFaixa8 > 0) {
        impostoAPagar += salarioFaixa8 * 8 / 100;
    }

    let currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

    // Exibir o valor total a pagar de imposto
    document.getElementById('total-pagar').innerText = impostoAPagar > 0 ? currencyFormatter.format(impostoAPagar) : 'ISENTO';
}