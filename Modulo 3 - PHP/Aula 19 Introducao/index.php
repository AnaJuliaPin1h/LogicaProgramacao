<!--  exemplo introdutório de como integrar PHP com HTML.
-->

<!DOCTYPE html> 
<html lang="pt-br"> 
<head>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Introdução PHP</title> 
</head>
<body>
    
<h1>
    <?php
        // O código PHP começa aqui.
        // O comando "echo" imprime texto na tela.
        echo "Hello World"; // Exibe "Hello World" dentro do <h1>
    ?>
</h1>

<h2> Variáveis em PHP </h2>

<p>
    <?php
    // Declaração de variáveis em PHP.
    // Sempre começam com o símbolo $
    $nome = "Ana";           // Cria uma variável chamada $nome com o valor "Ana"
    $sobrenome = "Pinheiro"; // Cria uma variável chamada $sobrenome com o valor "Pinheiro"

    // Exibe o conteúdo das variáveis na tela com "echo"
    echo "Nome: $nome <br>";      // <br> serve para quebrar linha no HTML
    echo "Sobrenome: $sobrenome <br>";
    ?>
</p>

<h2>Constantes em PHP</h2>

<p>
    <?php
        // Constantes são valores que não mudam durante a execução do código.
        // São declaradas usando "const" e NÃO usam o símbolo $.
        const faculdade = "UMC";
        const cidade = "Mogi das Cruzes";

        // Exibe o valor das constantes concatenando (juntando) strings com o ponto (.)
        echo "Faculdade: " . faculdade . "<br>"; 
        echo "Cidade: " . cidade . "<br>";
    ?>
</p>

</body>
</html>


 <!--


     Onde colocar o arquivo:
    - O PHP precisa estar dentro da pasta do servidor local.
      Caminho padrão: Este Computador > Disco Local (C:) > xampp > htdocs
      Exemplo: C:\xampp\htdocs\Modulo-3\index.php

     Como executar:
    - Abra o XAMPP.
    - Inicie o "Apache" (ele é o servidor que interpreta o PHP).
    - No navegador, acesse: http://localhost/Modulo-3/

     Diferença entre HTML e PHP:
    - HTML → Linguagem de marcação usada para estruturar o conteúdo da página (estático).
    - PHP → Linguagem de programação que roda no servidor (dinâmica). Permite gerar HTML personalizado, usar variáveis, conectar ao banco de dados, etc.
    - PHP e HTML podem ser misturados no mesmo arquivo.

    Conceitos:
    - echo → Exibe dados na tela.
   /* - br → Pula linha no HTML.*/
    - ; → Toda instrução em PHP termina com ponto e vírgula.
    - Variáveis → Mudam de valor, começam com $ (ex: $nome).
    - Constantes → Valor fixo, declaradas com "const" (ex: const faculdade = "UMC";).
    - . (ponto) → Operador de concatenação (junta textos).

     Sobre o servidor:
    - O Apache no XAMPP simula um servidor web.
    - O PHP não funciona diretamente clicando no arquivo — ele precisa ser interpretado pelo servidor (Apache).

     Diferença cliente x servidor:
    - Cliente-side → Código executado no navegador (HTML, CSS, JS).
    - Server-side → Código executado no servidor (PHP, banco de dados, regras de negócio).

    
    - Sempre salve o arquivo antes de atualizar (F5).
    - Verifique se o nome da pasta e o caminho no navegador são exatamente iguais.

*/
