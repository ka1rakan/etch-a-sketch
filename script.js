const container = document.querySelector(".container");

let boxPerRow = 16;
for (let i = 0; i < Math.pow(boxPerRow, 2); i++) {
    let box = document.createElement("div");
    box.className = "box";

    box.style.width = (450 / boxPerRow).toString() + "px";
    box.style.height = (450 / boxPerRow).toString() + "px";
    container.appendChild(box);
}
