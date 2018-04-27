var i = 0;

function handleNextButton()
{		
	if (i === 0){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "I am Sir Apple, it's ap pleasure to meet you!";
	}
	else if(i === 1){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "I am sorry to bother you but, I am in dire need of assistance!";
	}
	else if(i === 2){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "As you can see, I am currently being waylaid by this awful pumpkin creature!...";
	}
	else if(i === 3){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "...or was it I who was waylaying him?...";
	}
	else if(i === 4){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "...I can't remember... anyway!";
	}
	else if(i === 5){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "I need your help in sending him back to the soil from whence he grew!";
	}
	else if(i === 6){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "In order to do this, I need to teach you a few things.";
	}
	else if(i === 7){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "First of all, do you see this metal board behind me?";
	}
	else if(i === 8){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "That is where questions (or words) will appear.";
	}
	else if(i === 9){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "Do you see that chain dangling below it?";
	}
	else if(i === 10){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "That is where the answers (or definitions) will appear.";
	}
	else if(i === 11){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "If you pick the right answer (or definition) to the question (or word), it will give me the power to make a devastating strike!";
	}
	else if(i === 12){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "If you pick the wrong answer, it will leave me wide open for attack!";
	}
	else if(i === 13){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "So choose wisely!";
	}
	else if(i === 14){
		displayAndHide();
	}
	else if(i === 15){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "But wait just a granule! Why isn't anything happening?";
	}
	else if(i === 16){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "Oh, you don't have the game yet?";
	}
	else if(i === 17){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "And the game is only on the iOS platform?";
	}
	else if(i === 18){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "...And the teams' web-developer is too lazy to implement the game in JavaScript?";
	}
	else if(i === 19){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "Well, go to the app store and get the game quick! Then I can be freed from stasis and we can pulverize this pumpkin!";
	}
	else if(i === 20){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "What? What's in it for you?";
	}
	else if(i === 21){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "Well by my core! This is no ordinary Fruit RPG game!";
	}
	else if(i === 22){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "We could have a bushel of fun smashing different fruits and vegetables!";
	}
	else if(i === 23){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "We could collect legendary weapons and armour together!";
	}
	else if(i === 24){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "And you'll learn a lot while you do it!";
	}
	else if(i === 25){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "Well, whether or not you want to go to the app store and buy the game, I've got one more thing to show you...";
	}
	else if(i === 26){	
		var wallPaper = document.getElementById("HowToPlayPage");
		wallPaper.style.backgroundImage = "url('Images/DoorSentence.jpg')";
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "This is a door I've been having troubles getting through...";
	}
	else if(i === 27){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "Behind it is rumoured to be a monster so terrible that it can rot an apple to the core with one corrosive breath!";
	}
	else if(i === 28){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "It guards a treasure horde so large and shiny that if we claimed it we would shine brighter than the sun!";
	}
	else if(i === 29){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "All one needs to do is drag these words onto the plate above in the correct order";
	}
	else if(i === 30){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "What say you? Are you up the task?";
	}
	else if(i === 31){
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.innerHTML = "Well, I'll be here until you make up your mind! Farewell and good hunting!";
	}
	else if(i === 32){
		i = -1;			
		var nextButton = document.getElementById("NextButton");
		nextButton.style.display = "none";
		var appleHead = document.getElementById("SirAppleHead");
		appleHead.style.display = "none";
		var appleSpeak = document.getElementById("AppleSpeak");
		appleSpeak.style.display = "none";
		var appleTalkBox = document.getElementById("AppleTalkBox");
		appleTalkBox.style.display = "none";
		var wallPaper = document.getElementById("HowToPlayPage");
		window.location.href = "Index.html";
	}
	i++;
}

function displayAndHide()
{
	var appleHead = document.getElementById("SirAppleHead");
	appleHead.style.display = "none";
	var nextButton = document.getElementById("NextButton");
	nextButton.style.display = "none";
	var appleSpeak = document.getElementById("AppleSpeak");
	appleSpeak.style.display = "none";
	var appleTalkBox = document.getElementById("AppleTalkBox");
	appleTalkBox.style.display = "none";
	var pomme = document.getElementById("Pomme");
	pomme.style.display = "block";		
	var appleButton = document.getElementById("AppleButton");
	appleButton.style.display = "block";
	var palmButton = document.getElementById("PalmButton");
	palmButton.style.display = "block";
	var peachButton = document.getElementById("PeachButton");
	peachButton.style.display = "block";
}
function hideAndDisplay()
{
	var appleHead = document.getElementById("SirAppleHead");
	appleHead.style.display = "block";
	var nextButton = document.getElementById("NextButton");
	nextButton.style.display = "block";
	var appleSpeak = document.getElementById("AppleSpeak");
	appleSpeak.style.display = "block";
	var appleTalkBox = document.getElementById("AppleTalkBox");
	appleTalkBox.style.display = "inline-block";
	var pomme = document.getElementById("Pomme");
	pomme.style.display = "none";		
	var appleButton = document.getElementById("AppleButton");
	appleButton.style.display = "none";
	var palmButton = document.getElementById("PalmButton");
	palmButton.style.display = "none";
	var peachButton = document.getElementById("PeachButton");
	peachButton.style.display = "none";
}

function handleAppleButton()
{
	hideAndDisplay();
	var appleSpeak = document.getElementById("AppleSpeak");	
	appleSpeak.innerHTML = "Correct! Great job! Now let's smash this pumpkin!";
}

function handlePalmButton()
{
	hideAndDisplay();
	var appleSpeak = document.getElementById("AppleSpeak");
	appleSpeak.innerHTML = "Wrong! Oh no! Now I'm going to get attacked for sure!";
}

function handlePeachButton()
{
	hideAndDisplay();
	var appleSpeak = document.getElementById("AppleSpeak");
	appleSpeak.innerHTML = "Wrong! Oh no! Now I'm going to get attacked for sure!";
}

window.onload = init;

function init()
{
	var nextButton = document.getElementById("NextButton");
	nextButton.onclick = handleNextButton;
	var appleButton = document.getElementById("AppleButton");
	appleButton.onclick = handleAppleButton;
	var palmButton = document.getElementById("PalmButton");
	palmButton.onclick = handlePalmButton;
	var peachButton = document.getElementById("PeachButton");
	peachButton.onclick = handlePeachButton;
}