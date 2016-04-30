var numberOfFaces = 5;
var imgSrc = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
var imgMaxRange = 400;

function generateFaces(){

	var theLeftSide = document.getElementById("leftSide");
	var i = 0;
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
}