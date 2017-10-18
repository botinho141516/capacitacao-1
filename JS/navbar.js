
// RESPONSIVE THINGS
//[

	// ONLOAD RESPONSIVE
	window.onload = function() {

			
		if(window.innerWidth<=700)
		{
			if(document.getElementById("logo-li").style.display == "")
				document.getElementById("logo-li").style.display = "none";
		}
		else
		{
			if(document.getElementById("logo-li").style.display == "none")
				document.getElementById("logo-li").style.display = "";
		}

		if(window.innerWidth<=860)
		{
			var marg = window.innerWidth/50;

			document.getElementById("logo-li").style.marginRight = marg+"%";
		}
	};

	//RESIZE RESPONSIVE
	window.onresize = function() {

			
		if(window.innerWidth<=700)
		{
			if(document.getElementById("logo-li").style.display == "")
				document.getElementById("logo-li").style.display = "none";
		}
		else
		{
			if(document.getElementById("logo-li").style.display == "none")
				document.getElementById("logo-li").style.display = "";
		}

		if(window.innerWidth<=860)
		{
			var marg = window.innerWidth/50;

			document.getElementById("logo-li").style.marginRight = marg+"%";
		}
		else
		{
			document.getElementById("logo-li").style.marginRight = "30%";
		}
	};



	function changeActive(esse) {

		var lista = document.getElementsByClassName("navbar-btn");
		
		for(j=0;j<4;j++)
		{
			if(lista[j].classList.contains('active')) {
			
				lista[j].classList.remove('active');
			}
		}

			
		esse.setAttribute("class","active navbar-btn");
	}

//]