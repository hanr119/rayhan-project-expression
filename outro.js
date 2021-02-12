for (var i = 0; i < 30; i++){
	createError();
}

function createError(){
var img = document.createElement("img");
img.src = "https://i.imgur.com/orMsGog.png"
img.style.left = Math.random()* 300 + "px";
img.style.bottom = Math.random()* 100 + "px";
var container = document.getElementById("container");
container.appendChild(img);
}
