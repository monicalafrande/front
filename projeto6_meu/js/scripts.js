const numero = document.querySelector("#numero");
const multiplicador = document.querySelector("#multiplicador");
const tabuada = document.querySelector("#containerTabuada");
const numeroSpan = document.querySelector("#numeroSpan");

// Função para criar a tabela

const criarTabela = (numero, multiplicador) => {
  tabuada.innerHTML = "";

  for (let i = 1; i <= multiplicador; i++) {
    const paragrafoTabuada = document.createElement("p");
    const resultado = numero * i;

    paragrafoTabuada.innerText = `${numero} x ${i} = ${resultado}`;

    containerTabuada.appendChild(paragrafoTabuada);

    numeroSpan.innerText = numero;
  }
};

// Criar evento

botaoCalcular.addEventListener("click", (e) => {
  e.preventDefault();

  let valorNumero = numero.value;
  let valorMultiplicador = multiplicador.value;

  if (!valorNumero || !valorMultiplicador) return;

  criarTabela(valorNumero, valorMultiplicador);
});
