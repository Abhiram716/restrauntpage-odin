function displayHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("intro-container");
  const intro = document.createElement("p");
  intro.classList.add("intro");
  intro.textContent = "Welcome to The Restraunt.";

  const introSlogan = document.createElement("p");
  introSlogan.classList.add("intro");
  introSlogan.textContent = "Good Food, Good Mood!";

  homeDiv.appendChild(intro);
  homeDiv.appendChild(introSlogan);

  console.log(homeDiv.innerHTML);
  const content = document.getElementById("content");
  content.appendChild(homeDiv);
}

export default displayHome;
