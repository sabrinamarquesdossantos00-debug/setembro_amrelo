const mensagens = [
  "Sua vida importa!" 💛
"Falar salva vidas!" 🗣️
"Você não está só!" 🤝
"Ouvir é um ato de amor!" 👂
"Setembro é amarelo, a vida é preciosa!" 🌟
"Peça ajuda, é sinal de força!" 💪
"Acolha com o coração!" ❤️
"Juntos somos mais fortes!" 🤗
"Cuide da mente, cuide da vida!" 🧠
"Espalhe amor e esperança!" 🌻
  ];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.floor(Math.random() *mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
