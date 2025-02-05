function openButton() {
    let paragraph = document.querySelector(".main__first_paragraph");
    let newText = " Meu nome é GUILHERME";

    let button = document.querySelector(".button_on_text");
    button.remove();

    let newTextSpan = document.createElement("span");
    newTextSpan.textContent = newText;

    paragraph.appendChild(newTextSpan);

    newTextSpan.style.color = "#42de80";
    newTextSpan.style.transition = "background-color 0.7s ease, border-radius 0.7s ease";
    newTextSpan.style.borderRadius = "10px";
    newTextSpan.style.padding = "2px";
    newTextSpan.style.backgroundColor = "#868181";

    setTimeout(() => {
        newTextSpan.style.backgroundColor = "transparent";
    }, 10);
}
