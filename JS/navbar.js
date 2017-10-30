
// RESPONSIVE THINGS
//[

	// ONLOAD RESPONSIVE
	window.onload = function() {
		if(window.innerWidth<=860)
		{
			var marg = window.innerWidth/50;

			document.getElementById("logo-li").style.marginRight = marg+"%";
		}

		if(window.innerWidth>700) {

			document.getElementById("navbar-icon").style.display = "none";
		}
		
		if(window.innerWidth<700) {
			var lista = document.getElementsByClassName("navbar-btn");
			
			for(j=0;j<4;j++) {

				lista[j].style.display = "none";
			}
		}
	};

	
	//RESIZE RESPONSIVE
	window.onresize = function() {

		var lista = document.getElementsByClassName("navbar-btn");
			
		if(window.innerWidth<=700) {

			document.getElementById("navbar-icon").style.display = "inline-block";
			
			for(j=0;j<4;j++) {

				lista[j].style.display = "none";
			}

		} else {

			document.getElementById("navbar-icon").style.display = "none";

			for(j=0;j<4;j++) {
				lista[j].style.display = "inline-block"
				lista[j].style.width = "122px"


			}
		}

		if(window.innerWidth<=860) {
			var marg = window.innerWidth/50;

			document.getElementById("logo-li").style.marginRight = marg+"%";
		} else {

			document.getElementById("logo-li").style.marginRight = "30%";

		}

		if(window.innerWidth<700) {
			var lista = document.getElementsByClassName("navbar-btn");
			
			for(j=0;j<4;j++) {

				lista[j].style.display = "none";
			}
		}
	};



	function changeActive(esse) {

		var lista = document.getElementsByClassName("navbar-btn");
		
		for(j=0;j<4;j++) {

			if(lista[j].classList.contains('active')) {
			
				lista[j].classList.remove('active');
			}
		}

			
		esse.setAttribute("class","active navbar-btn");
	}

//]
//SHOW NAVBAR IN LIST FORMAT
//[
	function showNavbar() {

		var lista = document.getElementsByClassName("navbar-btn");
		if(lista[1].style.display == "none") {

      		document.getElementById("navbar-ul").style.backgroundColor = "rgb(200,200,160";
			for(j=0;j<4;j++) {

				lista[j].style.display = "";
				lista[j].style.width = "100%";
			}

		} else {

			for(j=0;j<4;j++) {

				lista[j].style.display = "none";
			}
		}

	}
//]