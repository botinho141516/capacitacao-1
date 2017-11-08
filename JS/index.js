
// RESPONSIVE THINGS
//[

  // ONLOAD RESPONSIVE
  window.onload = function() {
    

      header = '<link rel="stylesheet" type="text/css" href="CSS/navbar.css"><div id="navbar" class=""><ul id="navbar-ul" class="navbar "><li class="navbar-logo " id="logo-li"><a id="logo-a" href="#home"><img class="navbar-img" src="IMG/MEJ.png"></a></li><li id="whoNav" onclick="(changeActive(this))" class="navbar-btn active"><a href="#home">Quem Somos</a></li><li id="valoresNav" onclick="(changeActive(this))" class="navbar-btn"><a href="#valores">Valores</a></li><li id="parceirosNav" onclick="(changeActive(this))" class="navbar-btn "><a href="#parceiros">Parceiros</a></li><li id="contactNav" onclick="(changeActive(this))" class="navbar-btn "><a href="#contact">Fale-Conosco</a></li><li onclick="(showNavbar())" id="navbar-icon" class="navbar-icon ">&#9776;</li></ul></div>';
      footer = '<link rel="stylesheet" type="text/css" href="CSS/footer.css"><div class="footer-frame"><div class="footer-logo-mej"><a href="https://www.brasiljunior.org.br"><img class="footer-logo-mej-img" src="IMG/MEJ.png"></a></div><div class="footer-logo-byron"><label class="footer-logo-byron-text">Desenvolvido por:</label><a href="https://www.facebook.com/byron.solutions/"><img class="footer-logo-byron-img" src="IMG/byronTrans.png"></a></div><div class="footer-social"><a class="icon-detail" href="https://www.facebook.com/brasiljunior/"><span class="fa fa-facebook footer-mej-link-fb"></span></a><a class="icon-detail" href="https://www.instagram.com/bjnoinsta/"><span class="fa fa-instagram footer-mej-link-fb"></span></a><a class="icon-detail" href="https://www.youtube.com/user/BrasilJuniorVideos"><span class="fa fa-youtube-play footer-mej-link-fb"></span></a></div></div>';
      document.getElementById("header").innerHTML = header;
      document.getElementById("footer").innerHTML = footer;

    slides(1);
    changeActiveByScroll();
    if(window.innerWidth<=860) {
      var marg = window.innerWidth/50;

      document.getElementById("logo-li").style.marginRight = marg+"%";
    }

    if(window.innerWidth>700) {

      document.getElementById("navbar-icon").style.display = "none";
    }
    
    if(window.innerWidth<=700) {
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
    if(window.innerWidth < 700)
      showNavbar();
  }

//]

//CORRECT NAVBAR METHOD
//[
function changeActiveByScroll() {
  var who = document.getElementById("who").offsetTop;
  var val = document.getElementById("valores").offsetTop;
  var parc = document.getElementById("parceiros").offsetTop;
  var cont = document.getElementById("contact").offsetTop;

  if(Math.abs(who - window.scrollY) < 20)
  {
    changeActive(whoNav);
  	showNavbar();
  }
  else if(Math.abs(val - window.scrollY) < 20)
  {
    changeActive(valoresNav);
  	showNavbar();
  }
  else if(Math.abs(parc - window.scrollY) < 20)
  {
    changeActive(parceirosNav);
  	showNavbar();
  }
  else if(Math.abs(cont - window.scrollY) < 20 || Math.abs(window.scrollY - document.body.scrollHeight+window.innerHeight) < 50)
  {
    changeActive(contactNav);
  	showNavbar();
  }  
};
//]

//SHOW NAVBAR IN LIST FORMAT
//[
  function showNavbar() {

    var lista = document.getElementsByClassName("navbar-btn");
    if(lista[1].style.display == "none") {

      document.getElementById("navbar-ul").style.backgroundColor = "rgb(200,200,180)";
      
      for(j=0;j<4;j++) {

        lista[j].style.display = "";
        lista[j].style.width = "100%";
      

      }

    } else {

      document.getElementById("navbar-ul").style.backgroundColor = "rgba(200,200,180,0.6)";
      for(j=0;j<4;j++) {

        lista[j].style.display = "none";
        document.getElementsByClassName("navbar")[0].style.backgorundColor = "rgb(200,200,180)";
      }
    }

  }
//]

//SlideShow {
  var slideIndex = 1;
  showSlides(slideIndex);

  function slides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(n>slides.length) {

      slideIndex = 1;
    }    

    if(n < 1) {

      slideIndex = slides.length;
    }
    for(i=0;i<slides.length;i++) {

      slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
  }
//} Fim SlideShow



