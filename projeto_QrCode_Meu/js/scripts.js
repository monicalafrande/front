const input = document.querySelector(".input");
const botao = document.querySelector(".botao");
const imagem = document.querySelector(".imagem img");
const formulario = document.querySelector(".formulario");

// Função

function gerarQrCode() {
  const inputValue = input.value;
  if (!inputValue) return;

  botao.innerText = "Gerando código...";

  imagem.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

  imagem.addEventListener("load", () => {
    botao.innerText = "Código criado!";
    document.querySelector(".imagem").style.display = "block";
  });

  input.addEventListener("keyup", () => {
    if (!input.value) {
      botao.innerText = "Gerar QR Code";
      document.querySelector(".imagem").style.display = "none";
    }
  });
}

// Eventos
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  gerarQrCode();
});

formulario.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    gerarQrCode();
  }
});
