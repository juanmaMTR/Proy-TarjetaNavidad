/**
 * @file tarjeta.js
 * Archivo de javascript para dar interactividad a la página
 * @author Juan Manuel Toscano Reyes <jtoscanoreyes.guadalupe@alumnado.fundacionloyola.net>
 * @license GPL V.3 2021
 */
'use strict'


window.onload=iniciar

function iniciar(){
   
    $('header nav ul li a').click(function(e){
        //Evitamos que se haga el scroll
        e.preventDefault();
        //Capturamos el ancla
        var ancla = $(this).attr('href');
        //Le quitamos el # para quedarnos solo con el nombre
        ancla = ancla.substring(1);
        //Obtenemos la posicion de la seccion
        var position = $('#'+ancla).position();
        //Hacemos el efecto scroll y restamos algunos pixeles
        $('html, body').animate({scrollTop: (position.top - 80)}, 0);
    })
}