

//Menú Fixed

$(document).ready(function(){
   $(window).on('scroll', function(){
      if($ (window).scrollTop() > 80){
          $("nav").addClass('nav-fixed');
      }else{
          $("nav").removeClass('nav-fixed');
      }
   });

});


//logo-fixed

$(document).ready(function(){
    $(window).on('scroll', function(){
       if($ (window).scrollTop() > 80){
           $("header div figure").addClass('logo-fixed');
       }else{
           $("header div figure").removeClass('logo-fixed');
       }
    });
 
 });

//Formulario

$(document).ready(function() {
     $("#btn-correo").click(function(){
       $(".contacto").fadeIn(1000);
     });
          $("#btn-cerrar",).click(function(){
              $(".contacto").fadeOut(2000)

          })

          $("#btn-enviar").click(function(){
              $(".contacto").fadeOut(2000);
          });
});


//Scroll lento

$(document).ready(function() {
     $("a[href^='#']").click(function(event){
        event.preventDefault();

        var position = $($(this).attr("href")).offset().top;

         $("body, html").animate({
                scrollTop: position

         });

         
     
     });  

});

//Menu responsive
$(document).ready(main);
var contador= 1;

function main() {
    
    $(".menu_bar img").click(function() {
        if(contador == 1){
            $("nav").animate({
                left: '0'
            });
            contador = 0

        }else{

            contador = 1;
            $("nav").animate({
                left: '-100%'
 
                
            }); 
      }
    })
}