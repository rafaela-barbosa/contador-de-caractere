const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toggleButton = document. querySelector("#toggle");

let mode = "characters";

//change the count button
toggleButton.addEventListener("click", () => {
    mode = mode === "characters" ? "words" : "characters"; 
    toggleButton.textContent = mode === "characters" ? "Contar Palavras" : "Contar Caracteres";
    input.dispatchEvent(new Event("input"));
});

//count characters and words
input.addEventListener("input", () => {
    let count = 0;

    if(mode === "characters") {
        count= input.value.length;

        counter.textContent = `${count} Caracteres`;
    }

    else {
        const words = input.value.trim().split(/\s+/); //trim -> cuts the space between words
        count = input.value.trim() === "" ? 0 : words.length;
        counter.textContent = `${count} Palavras`;
    }
});