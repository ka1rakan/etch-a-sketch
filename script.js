const container = document.querySelector(".container");

let boxPerRow = 25;
function createBoxes(boxPerRow) {
    for (let i = 0; i < Math.pow(boxPerRow, 2); i++) {
        let box = document.createElement("div");
        box.className = "box";

        box.style.width = (450 / boxPerRow).toString() + "px";
        box.style.height = (450 / boxPerRow).toString() + "px";

        box.addEventListener("mouseover", (e) => {
            let opacity = window.getComputedStyle(e.target).opacity;
            if (Number(opacity) < 1) {
                opacity = Number(opacity) + 0.1;
            }
            e.target.style.opacity = opacity.toString();
        })
        container.appendChild(box);
    }
}
function removeBoxes() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const slider = document.querySelector(".slider");
const dimensions = document.querySelector(".dimensions");
slider.addEventListener("change", (e) => {
    removeBoxes();
    createBoxes(e.target.value);
    dimensions.textContent = slider.value + " x " + slider.value;
});

createBoxes(slider.value);
dimensions.textContent = slider.value + " x " + slider.value;

function clearBox(box) {
    box.style.opacity = "0";
}
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    let children = container.childNodes;
    children.forEach(c => clearBox(c));
})

let rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", () => {
    let children = container.childNodes;
    children.forEach(c => {
        clearBox(c);
        let x = Math.random() * 255;
        let y = Math.random() * 255;
        let z = Math.random() * 255;
        c.style.backgroundColor = `rgb(${x},${y},${z})`;
    })
})
