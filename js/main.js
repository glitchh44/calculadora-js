function calcular(){
    var valor1 = parseFloat(document.getElementById("txtValor1"));
    var valor2 = parseFloat(document.getElementById("txtValor2"));
    var operacao = document.getElementById("cbxOperacao");
    var resultado;
    if (operacao == "+"){
        resultado = valor1 + valor2;
    }
    else if (operacao == "-"){
        resultado = valor1 - valor2;
    }
    else if (operacao == "*"){
        resultado = valor1 * valor2;
    }
    else if (operacao == "/"){
        resultado = valor1 / valor2;
    }
    document.getElementById("txtResultado").innerHTML = resultado;
    
}
calcular()