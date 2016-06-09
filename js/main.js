function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "|";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

var texto = "HOLA, SOY DANIELA, CODER DE LABORATORIA.";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("maquinas",texto,100);



$("#prueba").hover(
    function () {
      $("#texto-animado").addClass("animated fadeInLeft")
       },
    function () {
      $("#texto-animado").removeClass("animated fadeInLeft")
    }
);


$("#prueba2").hover(
    function () {
      $("#texto-animado2").addClass("animated fadeInLeft")
       },
    function () {
      $("#texto-animado2").removeClass("animated fadeInLeft")
    }
);

$("#prueba3").hover(
    function () {
      $("#texto-animado3").addClass("animated fadeInLeft")
       },
    function () {
      $("#texto-animado3").removeClass("animated fadeInLeft")
    }
);

$("#prueba4").hover(
    function () {
      $("#texto-animado4").addClass("animated fadeInLeft")
       },
    function () {
      $("#texto-animado4").removeClass("animated fadeInLeft")
    }
);

$("#prueba5").hover(
    function () {
      $("#texto-animado5").addClass("animated fadeInLeft")
       },
    function () {
      $("#texto-animado5").removeClass("animated fadeInLeft")
    }
);

$("#prueba6").hover(
    function () {
      $("#texto-animado6").addClass("animated fadeInLeft")
       },
    function () {
      $("#texto-animado6").removeClass("animated fadeInLeft")
    }
);






$("#prueba").hover(
    function () {
      $("#p-animado").addClass("animated fadeInRight")
       },
    function () {
      $("#p-animado").removeClass("animated fadeInRight")
    }
);

$("#prueba2").hover(
    function () {
      $("#p-animado2").addClass("animated fadeInRight")
       },
    function () {
      $("#p-animado2").removeClass("animated fadeInRight")
    }
);

$("#prueba3").hover(
    function () {
      $("#p-animado3").addClass("animated fadeInRight")
       },
    function () {
      $("#p-animado3").removeClass("animated fadeInRight")
    }
);

$("#prueba4").hover(
    function () {
      $("#p-animado4").addClass("animated fadeInRight")
       },
    function () {
      $("#p-animado4").removeClass("animated fadeInRight")
    }
);

$("#prueba5").hover(
    function () {
      $("#p-animado5").addClass("animated fadeInRight")
       },
    function () {
      $("#p-animado5").removeClass("animated fadeInRight")
    }
);

$("#prueba6").hover(
    function () {
      $("#p-animado6").addClass("animated fadeInRight")
       },
    function () {
      $("#p-animado6").removeClass("animated fadeInRight")
    }
);



