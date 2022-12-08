function displayHome(){

	const homeDiv = document.createElement('div');
	const intro = document.createElement('p');
	intro.classList.add('intro');
	intro.textContent = 'Welcome to The Restraunt.';

	const introSlogan = document.createElement('p');
	introSlogan.classList.add('intro');
	introSlogan.textContent = 'Good Food, Good Mood!'


	homeDiv.appendChild(intro);
	homeDiv.appendChild(introSlogan);
	
	const content = document.getElementById('content');
	content.appendChild(homeDiv);
}

export default displayHome;