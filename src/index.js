import addHeader from "./pages/pageload";
import displayHome from "./pages/home";
import displayMenu from "./pages/menu";
import displayAboutUs from "./pages/about";

addHeader();
displayHome();

const content = document.getElementById("content");

const home = document.getElementById("home");
home.addEventListener("click",function(){
    content.innerText="";
    displayHome();
})

const aboutUs = document.getElementById("about");
aboutUs.addEventListener("click",function(){
    content.innerText="";
    displayAboutUs();
})

const menu = document.getElementById("menu");
menu.addEventListener("click",function(){
    content.innerText="";
    displayMenu();
})