function displayMenu() {
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  const burger = document.createElement("div");
  const burgerTitle = document.createElement("h3");
  burgerTitle.textContent = "The Chicken Burger";

  burger.appendChild(burgerTitle);

  const pizza = document.createElement("div");
  const pizzaTitle = document.createElement("h3");
  pizzaTitle.textContent = "The Peparoni Pizza";
  pizza.appendChild(pizzaTitle);
  const cake = document.createElement("div");
  const cakeTitle = document.createElement("h3");
  cakeTitle.textContent = "The Good Cake";
  cake.appendChild(cakeTitle);

  const ice = document.createElement("div");
  const iceTitle = document.createElement("h3");
  iceTitle.textContent = "The Good Icecream";
  ice.appendChild(iceTitle);

  menuContent.appendChild(burger);
  menuContent.appendChild(pizza);
  menuContent.appendChild(cake);
  menuContent.appendChild(ice);

  const content = document.getElementById("content");
  content.appendChild(menuContent);
}

export default displayMenu;
