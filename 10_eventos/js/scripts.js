// Adicionando eventos

// const meubotao = document.querySelector("#my-button");

// meubotao.addEventListener("click", function() {
//   console.log("Clicou no botão!");
// });

// Removendo eventos

// const meuBotao = document.querySelector("#botao");

// function imprimirMensagem() {
//     console.log("Teste");
// }

// meuBotao.addEventListener("click", imprimirMensagem);

// const outroBotao = document.querySelector("#outro-botao");

// outroBotao.addEventListener("click", () => {
//     console.log("Evento removido!");
//     meuBotao.removeEventListener("click", imprimirMensagem);
// });

// Argumento do evento

// const id = document.querySelector("#id");

// id.addEventListener("click", (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.pointerType);
//     console.log(event.offsetX);
// });

// Eventos de tecla

// document.addEventListener("keyup", (e) => {
//     console.log(`Soltou a tecla ${e.key}`);
// });
// document.addEventListener("keydown", (e) => {
//     console.log(`Soltou a tecla ${e.key}`);
// });

// Eventos de mouse

// const mouse = document.querySelector("#mouse");

// mouse.addEventListener("mousedown", (e) => {
//   console.log("Pessionou o botão!");
// });
// mouse.addEventListener("mouseup", (e) => {
//   console.log("Soltou o botão!");
// });
// mouse.addEventListener("dblclick", (e) => {
//   console.log("Clique duplo!");
// });

// document.addEventListener("mousemove", (e) => {
//   console.log(`X: ${e.x} | Y: ${e.y}`);
// });

// Evento de scroll

// window.addEventListener("scroll", (e) => {
//   if(window.pageXOffset > 200) {
//     console.log("Passou de 200px");
//   }
// });

// Evento de focus
// const input = document.querySelector("#input");

// input.addEventListener("focus", (e) => {
//   console.log("Entrou no input!");
// });
// input.addEventListener("blur", (e) => {
//   console.log("Saiu do input!");
// });

// Debounce

// const debounce = (f, delay) => {
//   let timeout;

//   return (...args) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }

//     timeout = setTimeout(() => {
//       f.apply(args);
//     }, delay);
//   };
// };

// window.addEventListener(
//   "mousemove",
//   debounce(() => {
//     console.log("Executando evento!");
//   }, 400)
// );


