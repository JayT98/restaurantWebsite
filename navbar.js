const toggleButton = document.getElementsByClassName("toggleButton")[0]
const navbarLinks = document.getElementsByClassName("navbarLink")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})

document.querySelectorAll(".navLink")
.forEach(n=>n.addEventListener("click", () =>{
    navbarLinks.classList.remove("active");
}))


const ul = document.querySelector("ul");
const activeLink = document.querySelectorAll("li a");

activeLink.forEach(Active => {
    Active.addEventListener("click", function(){
        ul.querySelector(".active").classList.remove("active")
        Active.classList.add("active")
    })
})
