const size = document.querySelector(".size"),
select = size.querySelector(".select"),
option = size.querySelectorAll(".option"),
selecttxt = size.querySelector(".select-txt")

     // For Displaying the list
select.addEventListener("click",()=> size.classList.toggle("click"))

    // For selecting the option

option.forEach(option=>{
    option.addEventListener("click",()=>{
        let optiontxt = option.querySelector(".option-txt").innerHTML
        selecttxt.innerHTML = optiontxt

        // For closing list after selecting
        size.classList.remove("click")
    })
})


// To add to favorites
const cart = document.querySelector(".cart"),
favorite = cart.querySelector(".like")

favorite.addEventListener("click",()=> cart.classList.toggle("onclick"))

function myFunction() {
	document.getElementsByClassName("like").style.backgroundColor = "lightblue";
}