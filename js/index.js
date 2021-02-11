  // Ocultar boton al hacer scrooll
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      $('#scroll-top').slideDown(100);
    } else {
      $('#scroll-top').slideUp(100);
    }
  } // Fin ocultar boton

  // Agregar desplazamiento suave a todos los links dependiendo del navegador
  $("a").on('click', function (event) {
    if (window.navigator.vendor == 'Apple Computer, Inc.') {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          window.location.hash = hash;
        });
      }
    } else {
      $('html').css('scroll-behavior', 'smooth');
    }
  });