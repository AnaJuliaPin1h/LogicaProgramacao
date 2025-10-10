
const form = document.querySelector('#formAluno');
const lista = document.querySelector('#listaAlunos');
const btnTodos = document.querySelector('#mostrarTodos');
const btnAprovados = document.querySelector('#mostrarAprovados');

const alunos = []; // array para armazenar os alunos


form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = document.querySelector('#nome').value.trim();
  const nota = parseFloat(document.querySelector('#nota').value);

  if (!nome || isNaN(nota)) {
    alert('Preencha todos os campos corretamente.');
    return;
  }

  alunos.push({ nome, nota });
  form.reset();
  exibirAlunos(alunos);
});

// Função para exibir alunos na tela
function exibirAlunos(listaDeAlunos) {
  lista.innerHTML = ''; 
  listaDeAlunos.forEach(aluno => {
    const li = document.createElement('li');
    li.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;
    li.className = aluno.nota >= 7 ? 'aprovado' : 'reprovado';
    lista.appendChild(li);
  });
}


btnTodos.addEventListener('click', () => exibirAlunos(alunos));


btnAprovados.addEventListener('click', () => {
  const aprovados = alunos.filter(a => a.nota >= 7);
  exibirAlunos(aprovados);
});
