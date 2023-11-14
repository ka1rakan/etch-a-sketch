const container = document.querySelector("#container");
const slider = document.querySelector("#myRange");
const output = document.getElementById("demo");

function deleteChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

output.innerText = slider.value; // Display the default slider value
let boxPerRow = slider.value;
for(let i=0; i<boxPerRow**2; i++){
    const div = document.createElement("div");
    div.style.width=`${100/boxPerRow}%`;
    div.style.height = `${100/boxPerRow}%`
    container.appendChild(div);
}

let dividers = document.querySelectorAll("#container div")
dividers.forEach((div)=>{
    div.addEventListener("mouseover",({target})=>{
        target.style.backgroundColor ="rgba(108, 108, 108, 0.94)"
    })
})

let reset = document.querySelector("#reset");
reset.addEventListener("click", (e)=>{
    dividers.forEach((div)=>{
        div.style.backgroundColor = "rgba(202, 202, 202, 0.94)"
    })
})



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerText = this.value;
    boxPerRow = this.value;
    deleteChildren(container)
    for(let i=0; i<boxPerRow**2; i++){
        const div = document.createElement("div");
        div.style.width=`${100/boxPerRow}%`;
        div.style.height = `${100/boxPerRow}%`
        container.appendChild(div);
    }
    let dividers = document.querySelectorAll("#container div")
    dividers.forEach((div)=>{
        div.addEventListener("mouseover",({target})=>{
            target.style.backgroundColor ="rgba(108, 108, 108, 0.94)"
        })
    })
    let reset = document.querySelector("#reset");
    reset.addEventListener("click", (e)=>{
        dividers.forEach((div)=>{
            div.style.backgroundColor = "rgba(202, 202, 202, 0.94)"
        })
    })
}

/**
             ('--..--`)
            .-- )( --.

            .-/    \-.
            ( (  \/  ) )
            ' '----' '
                '__'
**/

