<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receber os dados que estão vindo do formulário</title>
    <link rel="stylesheet" href="stylephp.css"> 
</head>
<body>
    <main class="conteiner"> 
        <h1>Dados Enviados</h1>

        <?php 
            /* 
                Aqui começa o código PHP.
                Ele será executado pelo servidor (Apache no XAMPP).
                O PHP vai capturar os dados enviados por um formulário HTML.
            */

            // Captura os valores enviados pelo formulário com o método POST.
            // As chaves entre colchetes ["nome"], ["sobreNome"], ["email"], ["senha"]
            // devem ser iguais ao atributo name="" usado nos campos do formulário.
            $nome = $_POST["nome"];
            $sobrenome = $_POST["sobreNome"];
            $email = $_POST["email"];
            $senha = $_POST["senha"];

            /* 
                $_POST → variável superglobal do PHP.
                Ela guarda os dados que vieram de um formulário com method="post".

                method="post" → envia os dados de forma "invisível" (não aparecem na URL).
                method="get"  → envia os dados visíveis na URL (ex: ?nome=Ana&email=...).
            */

            // Exibe as informações capturadas na tela.
            // O comando "echo" imprime textos ou variáveis no HTML.
            // Cada <p> cria um parágrafo novo no navegador.

            echo "<p><strong>O seu nome é:</strong> $nome</p>";
            echo "<p><strong>O seu sobrenome é:</strong> $sobrenome</p>";
            echo "<p><strong>O seu e-mail é:</strong> $email</p>";
            echo "<p><strong>A sua senha é:</strong> $senha</p>";

            /* 
                Dicas importantes:
                - PHP diferencia maiúsculas de minúsculas, então $sobrenome ≠ $sobreNome.
                - Sempre feche as tags HTML dentro dos "echo" (<p></p>) para evitar erros de formatação.
                - Use "htmlspecialchars()" se quiser proteger o site contra códigos maliciosos (XSS).
            */

            // Exemplo de depuração: mostra o conteúdo completo enviado pelo formulário.
            // Pode ser usado para verificar se os dados chegaram corretamente.
            // echo "<pre>"; var_dump($_POST); echo "</pre>";
        ?>
    </main>
</body>
</html>

<!--  GERAL:

    Este arquivo (processa.php) é o responsável por "processar" as informações que vêm de um formulário HTML.

    EXEMPLO DE FORMULÁRIO QUE ENVIA PARA ESTE PHP:
    ------------------------------------------------
    <form action="processa.php" method="post">
        <input type="text" name="nome" placeholder="Digite seu nome">
        <input type="text" name="sobreNome" placeholder="Digite seu sobrenome">
        <input type="email" name="email" placeholder="Digite seu e-mail">
        <input type="password" name="senha" placeholder="Digite sua senha">
        <button type="submit">Enviar</button>
    </form>

    COMO FUNCIONA:
    ---------------
     O usuário preenche os campos e clica em "Enviar".
     O navegador envia os dados para o arquivo indicado em "action" (processa.php).
     O PHP usa $_POST["nome"], $_POST["email"], etc. para acessar cada valor.
     O PHP exibe ou manipula esses dados como desejar (exibir, salvar no banco, etc).

    GET x POST:
    ------------
    - GET → mostra os dados na URL (usado para pesquisas, filtros, etc.)
    - POST → envia os dados ocultos (usado para formulários de login, cadastro, etc.)

    LOCAL DE EXECUÇÃO:
    -------------------
    - Este arquivo precisa estar dentro da pasta:
        C:\xampp\htdocs\nomeDaPasta\
    - O Apache do XAMPP precisa estar iniciado.
    - Para abrir: acesse no navegador → http://localhost/nomeDaPasta/processa.php

    TESTE DE VARIÁVEIS:
    --------------------
    - Para ver o que está chegando:
        echo var_dump($_POST["nome"]);
      Mostra o tipo e valor da variável, ex:
        string(9) "Ana Julia"

    -----------
    ✔ O HTML coleta as informações.
    ✔ O PHP recebe e processa os dados.
    ✔ O navegador exibe o resultado na tela.
-->
