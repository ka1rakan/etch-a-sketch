const container = document.querySelector("#container");


for(let i=0; i<256; i++){
    const div = document.createElement("div");
    container.appendChild(div);
}

const dividers = document.querySelectorAll("#container div")
dividers.forEach((div)=>{
    div.addEventListener("mouseover",({target})=>{
        target.style.backgroundColor ="red"
    })
})