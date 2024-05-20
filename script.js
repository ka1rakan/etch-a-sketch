const container = document.querySelector(".container");

let boxPerRow = 25;
function createBoxes(boxPerRow) {
    for (let i = 0; i < Math.pow(boxPerRow, 2); i++) {
        let box = document.createElement("div");
        box.className = "box";

        box.style.width = (450 / boxPerRow).toString() + "px";
        box.style.height = (450 / boxPerRow).toString() + "px";
        container.appendChild(box);
    }
}
function removeBoxes() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const slider = document.querySelector(".slider");
slider.addEventListener("change", (e) => {
    removeBoxes();
    createBoxes(e.target.value);
});
createBoxes(slider.value);


