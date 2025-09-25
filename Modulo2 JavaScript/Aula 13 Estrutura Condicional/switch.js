let formaPagamento = "Pix"
let valorGasto = 1000

switch (formaPagamento){
    case "Pix":
        console.log(valorGasto * 0.9);
        break

    case "Debito":
        console.log(valorGasto * 0.95);
        break

    case "Credito":
        console.log(valorGasto);
        break
}
