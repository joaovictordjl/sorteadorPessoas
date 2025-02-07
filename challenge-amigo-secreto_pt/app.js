const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const inputAmigo = document.getElementById('amigo');
const buttonAdd = document.querySelector('.button-add');
const buttonDraw = document.querySelector('.button-draw');
let amigos = [];

function adicionarAmigo() {
  const nome = inputAmigo.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  if (amigos.includes(nome)) {
    alert('Este nome já foi adicionado.');
    return;
  }

  amigos.push(nome);

  const li = document.createElement('li');
  li.textContent = nome;
  listaAmigos.appendChild(li);

  inputAmigo.value = '';
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert('Adicione pelo menos um nome.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  resultado.innerHTML = `
    <li>Seu amigo secreto é: ${amigoSorteado}</li>
  `;

  // Limpar a lista de amigos (opcional)
  // amigos = [];
  // listaAmigos.innerHTML = '';
}

buttonAdd.addEventListener('click', adicionarAmigo);
buttonDraw.addEventListener('click', sortearAmigo);