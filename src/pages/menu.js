export default function displayMenu(){
    const menuContainer=document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuItem=document.createElement("div");
    menuContainer.appendChild(menuItem);
    
    const content= document.getElementById("content");
    content.appendChild(menuContainer);
}