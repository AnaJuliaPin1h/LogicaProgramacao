function CalcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(nota1) || isNaN(nota2)) {
        resultado.textContent = "Por favor, digite duas notas válidas.";
        return; 
    }

    const media = (nota1 + nota2) / 2;
    resultado.textContent = `A média é: ${media.toFixed(2)}`;
}
// isNaN() é uma função que verifica se um valor não é um número após tentar convertê-lo para um número
// toFixed permite arredondar um número para um número específico de casas decimais