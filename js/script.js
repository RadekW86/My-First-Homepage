{
    const init = () => {
        console.log("Hi!");
    };
    init();
}

{
    const portraitElement = document.querySelector(".js-portrait");
    portraitElement.addEventListener("click", () => {
        alert("Tak, to ja!");
    });
}

{
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", () => {
        const bodyElement = document.querySelector(".js-body");
        const theme = document.querySelector(".js-theme");
        bodyElement.classList.toggle("bodyDark");
        (bodyElement.classList.contains("bodyDark")) ? (theme.innerText = "JAŚNIEJSZE") : (theme.innerText = "CIEMNIEJSZE");
    });
}

