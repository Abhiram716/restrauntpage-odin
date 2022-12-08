export default function addHeader() {
  const header = document.createElement("header");

  const titleContaier = document.createElement("div");

  const title = document.createElement("h1");
  title.innerText = "Lorem Ipsum";

  const subTitle = document.createElement("div");
  subTitle.classList.add("sub-title");
  subTitle.innerText = "The best food you can get at a reasonable price.";

  header.appendChild(title);
  header.appendChild(subTitle);

  const otherPages = document.createElement("div");
  const pagesList = document.createElement("ul");

  const homeItem = document.createElement("li");
  homeItem.innerText="Home";
  homeItem.setAttribute("id","home");
  otherPages.appendChild(homeItem);

  const menuItem = document.createElement("li");
  menuItem.innerText="Menu";
  menuItem.setAttribute("id","menu");
  otherPages.appendChild(menuItem);

  const aboutItem = document.createElement("li");
  aboutItem.innerText="About";
  aboutItem.setAttribute("id","about");
  otherPages.appendChild(aboutItem);
  header.appendChild(otherPages);
  
  const content=document.getElementById("content");
  content.appendChild(header);
}
