const botaoMenu = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

// Abrir e fechar o menu
botaoMenu.addEventListener("click", function () {
    const menuAberto = menu.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", menuAberto);

    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = menuAberto ? "×" : "☰";
});

// Fechar o menu após clicar em um link
const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.textContent = "☰";
    });
});

// Atualizar o ano automaticamente
const anoAtual = document.querySelector("#ano");

anoAtual.textContent = new Date().getFullYear();