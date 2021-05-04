function Myfunction(){
	var x = document.getElementById("mynav");
	if (x.className === 'menu') {
		x.className += " av";
	}else{
		x.className = "menu";
	}
}

function Mylight(){
	var a = document.querySelector('.section-login').style.background = "#fff";
	var b = document.querySelector('.form-background').style.background = "#fff";
	var c = document.querySelector('.form-background').style.border = "1px solid burlywood";
	var d = document.querySelector('.form-background').style.color = "black";
	var e = document.querySelector('.section-login').style.color = "black";
}

function Mydark(){
	var a = document.querySelector('.section-login').style.background = "#22201f";
	var b = document.querySelector('.form-background').style.background = "#22201f";
	var c = document.querySelector('.form-background').style.border = "2px solid cyan";
	var d = document.querySelector('.form-background').style.color = "#fff";
	var e = document.querySelector('.section-login').style.color = "#fff";
}

function MyBasic(){
	var a = document.querySelector('.section-login').style.background = "#FEC09B";
	var b = document.querySelector('.form-background').style.background = "#E9AB9C";
	var d = document.querySelector('.form-background').style.color = "black";
	var e = document.querySelector('.section-login').style.color = "black";
	var c = document.querySelector('.form-background').style.border = "none";
}



