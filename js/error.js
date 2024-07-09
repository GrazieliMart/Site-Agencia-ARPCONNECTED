  // Verifica se a página foi carregada completamente
  document.addEventListener("DOMContentLoaded", function() {
    // Verifica se a página retornou um erro 404
    if (document.querySelector("h1").innerText.includes("ERRO 404")) {
        // Redireciona para a página 404.html se não encontrar o caminho
        window.location.href = "404.html";
    }
});