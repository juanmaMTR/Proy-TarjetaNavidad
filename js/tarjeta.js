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
    let e1=document.getElementById('eleccion1')
    e1.onclick= eleccion1
    let e2=document.getElementById('eleccion2')
    e2.onclick=eleccion2
    let e3=document.getElementById('eleccion3')
    e3.onclick=eleccion3
    let e4=document.getElementById('eleccion4')
    e4.onclick=eleccion4
}
/**
 * Función que recoge el evento de la imagen seleccionada
 * @param {*} evento 
 */
function eleccion1(evento){
    let e1=document.getElementById('eleccion1')
    let cvalor='eleccion1'
    console.log('eleccion1');
    crearCookie(cvalor)
    señalar(e1)
}
/**
 * Función que recoge el evento de la imagen seleccionada
 * @param {*} evento 
 */
function eleccion2(evento){
    let cvalor='eleccion2'
    console.log('eleccion2');
    crearCookie(cvalor)
    let e2=document.getElementById('eleccion2')
    señalar(e2)
}
/**
 * Función que recoge el evento de la imagen seleccionada
 * @param {*} evento 
 */
function eleccion3(evento){
    let cvalor='eleccion3'
    console.log('eleccion3');
    crearCookie(cvalor)
    let e3=document.getElementById('eleccion3')
    señalar(e3)
}
/**
 * Función que recoge el evento de la imagen seleccionada
 * @param {*} evento 
 */
function eleccion4(evento){
    let cvalor='eleccion4'
    console.log('eleccion4');
    crearCookie(cvalor)
    let e4=document.getElementById('eleccion4')
    señalar(e4)
}

/**
 * Función crearCookie para guardar el valor de la elección
 * @param {*} cvalor 
 */
function crearCookie(cvalor){
    let d=new Date()
    d.setDate(d.getDate()+30)
    let expires= 'expires='+ d
    document.cookie= "eleccion="+cvalor+"; "+expires
}
/**
 * Función señalar para resaltar la elección
 * @param {*} e 
 */
function señalar(e){
    let imagenes = document.getElementsByClassName('imagenesfrases')
    for (const imagen of imagenes) {
        console.log(imagen.style.filter.value);
        imagen.style.filter = 'none'
    }
    e.style.filter='drop-shadow(0px 0px 10px #FC716F)'
}