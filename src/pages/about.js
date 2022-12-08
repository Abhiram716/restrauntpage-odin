function displayAboutUs() {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const aboutHeader = document.createElement("div");
  aboutHeader.classList.add("about-header");
  aboutHeader.innerText = "About Us";
  aboutContainer.appendChild(aboutHeader);

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");
  aboutContent.innerText = "This restraunt is verygood";
  aboutContainer.appendChild(aboutContent);

  const aboutFooter = document.createElement("div");
  aboutFooter.classList.add("about-footer");
  aboutFooter.innerText = "Contact us at:a4abhiram125@gmail.com";
  aboutContainer.appendChild(aboutFooter);

  const content = document.getElementById("content");
  content.appendChild(aboutContainer);
}

export default displayAboutUs;
