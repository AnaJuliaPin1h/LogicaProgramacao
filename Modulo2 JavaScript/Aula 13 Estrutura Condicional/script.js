function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    const resultado = document.getElementById("resultado");

    // Verifica se os campos estão preenchidos com o isNan
    if (isNaN(num1) && isNaN(num2)) {
      resultado.innerHTML = "Preencha todos os campos";
      resultado.style.color = "red";
      return;
    }

    //n
    if (num1 > Infinity || num2 > Infinity) {
      resultado.innerHTML = "Digite valores menores ou iguais a 10";
      resultado.style.color = "red";
      return;
    }

    
    let res;

    if (operacao === "+") {
      res = num1 + num2;
    } else if (operacao === "-") {
      res = num1 - num2;
    } else if (operacao === "*") {
      res = num1 * num2;
    } else if (operacao === "/") {
      if (num2 === 0) {
        resultado.innerHTML = "Divisão por zero não é permitida";
        resultado.style.color = "red";
        return;
      }
      res = num1 / num2;
    } else {
      resultado.innerHTML = "Operação inválida";
      resultado.style.color = "red";
      return;
    }

    resultado.innerHTML = "O resultado desta operação foi: " + res;
    resultado.style.color = "green";
  }