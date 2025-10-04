function calcularPagamento(){
    let valorGasto = parseFloatdocument.getElementById("ValorCompra".value)
    let formaPagamento = document.getElementById("formaPagamento".value)
    let resultado = document.querySelector("#resultado")
    let valorFinal
    
    switch (formaPagamento) {
        case "Pix":
            valorFinal = valorGasto * 0.9
            resultado.innerHTML = " O Valor a ser pago é de R$" + valorFinal.toFixed(2)
            break
        
        case "Debito":
            valorFinal= valorGasto * 0.95
            resultado.innerHTML= "O Valor a ser pago é de R$" + valorFinal.toFixed(2)
            break

        case "Credito":
            resultado.innerHTML= "O Valor a ser pago é de R$ " + valorGasto.toFixed(2)
            break

        default:
            resultado.innerHTML = "Opção Inválida"
            break
    }
}
