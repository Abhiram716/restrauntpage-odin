export default function addHeader() {
  const headerContainer = document.getElementById("header-content");
  const header = document.createElement("header");

  const titleContaier = document.createElement("div");
  titleContaier.classList.add("title-container");
  const title = document.createElement("h1");
  title.innerText = "Lorem Ipsum";

  const subTitle = document.createElement("div");
  subTitle.classList.add("sub-title");
  subTitle.innerText = "The best food you can get at a reasonable price.";

  titleContaier.appendChild(title);
  titleContaier.appendChild(subTitle);

  const navContaienr = document.createElement("nav");
  const list = document.createElement("ul");

  const homeItem = document.createElement("li");
  homeItem.textContent = "Home";
  homeItem.setAttribute("id", "home");
  list.appendChild(homeItem);

  const menuItem = document.createElement("li");
  menuItem.textContent = "Menu";
  menuItem.setAttribute("id", "menu");
  list.appendChild(menuItem);

  const aboutItem = document.createElement("li");
  aboutItem.textContent = "About";
  aboutItem.setAttribute("id", "about");
  list.appendChild(aboutItem);
  navContaienr.appendChild(list);

  header.appendChild(titleContaier);
  header.appendChild(navContaienr);
  headerContainer.appendChild(header);
  console.log(headerContainer);
}
