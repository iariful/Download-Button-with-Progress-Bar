let button = document.querySelector(".button");
button.addEventListener("click",()=>{
    button.classList.add("active");


    setTimeout(()=>{
        button.classList.remove("active");
        document.querySelector("svg").classList.replace("")

    },6000)
})