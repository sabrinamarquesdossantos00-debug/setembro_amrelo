const mensagens = [
  "você é mais forte do que imagina 💛",
  "Nunca se esqueça: sua vida importa🌻",
  "você não está sozinho,estamos juntos🤝",
  "Acredite: dias melhores virão ☀️",
  "Sempre existe esperança🌈"
  ];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.floor(Math.random() *mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
