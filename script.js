const container = document.querySelector(".container");

for (let i = 0; i < 64; i++) {
    let box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}
