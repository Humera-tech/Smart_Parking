let menu = document.getElementById("menu")
let navMenu = document.getElementById("navMenu")
let cross = document.getElementById("cross")
let nav_link=document.querySelectorAll(".nav_link")
menu.addEventListener("click",()=>{
    navMenu.classList.remove('hidden')
})

cross.addEventListener("click",()=>{
    navMenu.classList.add('hidden')
})

nav_link.forEach(link => {
    link.addEventListener("click",()=>{
        navMenu.classList.add('hidden')
    })

});

