const container = document.querySelector("#container");


for(let i=0; i<240; i++){
    const div = document.createElement("div");
    container.appendChild(div);
}

const dividers = document.querySelectorAll("#container div")
dividers.forEach((div)=>{
    div.addEventListener("mouseover",({target})=>{
        target.style.backgroundColor ="rgba(108, 108, 108, 0.94)"
    })
})

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target.id)
    })
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", (e)=>{
    dividers.forEach((div)=>{
        div.style.backgroundColor = "rgba(202, 202, 202, 0.94)"
    })
})