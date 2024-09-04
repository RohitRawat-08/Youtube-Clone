let toggleButton = document.getElementById("toggleButton");
console.log(toggleButton);


let hide_items =document.getElementsByClassName("hide_items");

console.log(hide_items);

toggleButton.addEventListener("click",() =>{
    console.log("Clicking......");

    for (let val of hide_items){
        console.log(val);

        val.classList.toggle("hidden_content")
    }

})