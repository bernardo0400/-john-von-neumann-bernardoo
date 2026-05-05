function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// animação ao rolar
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// curiosidades dinâmicas
function mostrarCuriosidade() {
    const curiosidades = [
        "Participou da criação da bomba atômica.",
        "Era considerado um dos homens mais inteligentes do século XX.",
        "Influenciou a inteligência artificial moderna."
    ];

    const random = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("extra").innerText = curiosidades[random];
}
