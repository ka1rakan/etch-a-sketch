const container = document.querySelector("#container");


const boxPerRow = prompt("Box per row (max 100): ")
if(boxPerRow<=100){
    for(let i=0; i<boxPerRow**2; i++){
        const div = document.createElement("div");
        div.style.width=`${100/boxPerRow}%`;
        div.style.height = `${100/boxPerRow}%`
        container.appendChild(div);
    }
}else{
    alert('You did not enter a valid value!')
}

const dividers = document.querySelectorAll("#container div")

dividers.forEach((div)=>{
    div.addEventListener("mouseover",({target})=>{
        target.style.backgroundColor ="rgba(108, 108, 108, 0.94)"
    })
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", (e)=>{
    dividers.forEach((div)=>{
        div.style.backgroundColor = "rgba(202, 202, 202, 0.94)"
    })
})

/**
             ('--..--`)
            .-- )( --.

            .-/    \-.
            ( (  \/  ) )
            ' '----' '
                '__'
**/
