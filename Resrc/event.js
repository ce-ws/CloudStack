function j(str,event) {
	var left = event.getBoundingClientRect().left;
	var top = event.getBoundingClientRect().top;
	
	var xf = document.getElementById("xf");
	xf.style.left =  left +   "px";
	xf.style.top = (-200+ top) +   "px";
	xf.style.display = "block";
	
    var aa = document.getElementsByClassName(str);
	
	for (var i = 0; i < aa.length; i++) {
		aa[i].setAttribute("class", str+" y")
	}
	
	
}

function c(str,event) {
	var xf = document.getElementById("xf");
	xf.style.display = "none";
	var aa = document.getElementsByClassName(str);
	
	for (var i = 0; i < aa.length; i++) {
		aa[i].setAttribute("class", str+" x")
	}
}