var numberOfFaces = 5;
var imgSrc = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
var imgMaxRange = 400;



function generateFaces(){
	var theBody = document.getElementsByTagName("body")[0];
	var theLeftSide = document.getElementById("leftSide");
	var theRightSide = document.getElementById("rightSide");
	clearSides();
	var i = 0;
	//Add faces to left side div
	while(i < numberOfFaces){
		var img = document.createElement("img");
		// If we not add 1 then math.floor(math.random()) return value from range [0;399] but we want from [0;400]
		var topImg = Math.floor(Math.random() * (imgMaxRange + 1)) 
		var leftImg = Math.floor(Math.random() * (imgMaxRange + 1)) 
		img.src = imgSrc;
		img.style.top = topImg + "px";
		img.style.left = leftImg + "px";
		theLeftSide.appendChild(img);
		i++;
	};

	lastChild = leftSide.lastChild;

	//Set onclick event on last face in left side
	lastChild.onclick = nextLevel;

	//Set onclick event on body element which causes game over if click
	theBody.onclick = function(){
		gameOver(theBody, lastChild);
	};

	//Clone faces from left side, remove last child and set to right side
	var leftSideImgs = theLeftSide.cloneNode(true);
	leftSideImgs.removeChild(leftSideImgs.lastChild)
	theRightSide.appendChild(leftSideImgs)
}

function nextLevel (event) {
	event.stopPropagation();
	numberOfFaces += 5;
	generateFaces();
}

function gameOver(theBody, leftSideLastChild){
	alert("Game Over!");
	theBody.onclick = null;
	leftSideLastChild.onclick = null;
}

function clearSides(){
	removeAllChildren(document.getElementById("leftSide"));
	removeAllChildren(document.getElementById("rightSide"));
}

function removeAllChildren (node) {
	while(node.firstChild){
		node.removeChild(node.firstChild);
	};
}