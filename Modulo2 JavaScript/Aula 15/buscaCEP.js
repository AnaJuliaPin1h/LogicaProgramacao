

// API: Interface de Programação de Aplicações.
// É uma forma de comunicação entre sistemas. Neste caso, estamos consultando a API do ViaCEP,
// que retorna os dados de endereço a partir de um CEP digitado pelo usuário.

// MÉTODOS DE REQUISIÇÃO HTTP:
// GET    → Consultar dados (usado neste código)
// POST   → Cadastrar dados
// PUT    → Atualizar dados
// DELETE → Excluir dados

// PROMISES: são "promessas" de que uma resposta virá no futuro.
// Uma promise pode estar em 3 estados:
// - pending (pendente): ainda aguardando a resposta.
// - fulfilled (resolvida): deu tudo certo e retornou o resultado.
// - rejected (rejeitada): deu erro (ex: CEP inválido ou servidor fora do ar).

// O método fetch() retorna uma promise, e por isso usamos 'await' para esperar a resposta.
// O uso de async/await evita travar o site enquanto a resposta da API é processada.

// TRY / CATCH: serve para tratar erros.
// O "try" executa o código principal, e o "catch" trata o erro se algo der errado.


// ---------------------------
// CAPTURA DO EVENTO DE ALTERAÇÃO DO CAMPO CEP


const cep = document.getElementById("cep")

// Adiciona um "ouvinte" de evento no campo CEP.
// O evento "change" é disparado quando o usuário altera o valor e sai do campo.
// Quando isso ocorre, chamamos a função buscaCEP() passando o valor digitado.
cep.addEventListener("change", (evento)=> {
    let cepUsuario = evento.target  
    buscaCEP(cepUsuario.value)
})



//  FUNÇÃO PRINCIPAL - BUSCAR CEP NA API


async function buscaCEP(cepUsuario){

    // Limpa mensagens de erro antes de cada nova busca
    let erroCep = document.getElementById("erro")
    erroCep.innerHTML = ""

    try {
        // Faz uma requisição GET para a API do ViaCEP usando o CEP digitado
        // O fetch retorna uma promise → usamos "await" para aguardar a resposta
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)

        // Converte a resposta da API (que vem em formato texto) para JSON
        let consultaCEPJson = await consultaCEP.json()

        // Se o JSON retornar { "erro": true }, o CEP não existe
        if(consultaCEPJson.erro){
            throw Error ("CEP INEXISTENTE");
        }
        
        // Se estiver tudo certo, chama a função que preenche os campos com os dados recebidos
        preencheCampos(consultaCEPJson)
    }
    catch {
        // Se der erro (CEP inválido, erro 400 ou servidor fora do ar)
        // Mostra mensagem de erro e apaga os campos do endereço
        erroCep.innerHTML = "CEP INVÁLIDO, TENTE NOVAMENTE !!"
        apagaCampo()
    }
}



//  FUNÇÃO PARA PREENCHER OS CAMPOS COM OS DADOS DO CEP


function preencheCampos(cepJson) {
    // Cada dado do JSON recebido é atribuído ao campo correspondente no formulário
    let rua = document.getElementById("rua");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");

    // A API retorna os dados no formato JSON:
    // logradouro → nome da rua
    // bairro → nome do bairro
    // localidade → cidade
    // uf → estado
    rua.value = cepJson.logradouro
    bairro.value = cepJson.bairro
    cidade.value = cepJson.localidade
    estado.value = cepJson.uf
}


// ---------------------------
// FUNÇÃO PARA LIMPAR OS CAMPOS (CASO OCORRA ERRO)


function apagaCampo(){
    // Limpa os campos do endereço, caso o CEP seja inválido
    let rua = document.getElementById("rua");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");

    rua.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""
}


// 
//RESUMO 
// 1. O usuário digita um CEP.
// 2. O evento "change" dispara a função buscaCEP().
// 3. A função faz uma requisição GET à API do ViaCEP.
// 4. O retorno vem em formato JSON.
// 5. Se o CEP for válido → preenche os campos.
// 6. Se for inválido → mostra mensagem de erro e limpa os campos.
