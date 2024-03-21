


// ES5

// console.log("love you")
// function dosomething(){
    // alert("i have been coding since 12")

// console.log(document)

var hamburgerdiv= document.querySelector(".hamburger");
var mobileLinks = document.querySelector(".mobile-links-holder");
var backdrop = document.querySelector(".backdrop");
function dosomething() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-links-holder")
    backdrop.classList.toggle("show-backdrop")
}