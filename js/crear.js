/**
 * @file crear.js
 * Archivo de javascript para crear la tarjeta de navidad
 * @author Juan Manuel Toscano Reyes <jtoscanoreyes.guadalupe@alumnado.fundacionloyola.net>
 * @license GPL V.3 2021
 */
'use strict'

window.onload=iniciar
/**
 * Función que se ejecuta cuando se carga window
 */
function iniciar(){
    let valor=leerCookie()
    console.log(valor);
    if(valor=='eleccion1'){
        let frase='Tengo un sueño, un solo sueño, seguir soñando. Soñar con la libertad, soñar con la justicia, soñar con la igualdad y ojalá ya no tuviera la necesidad de soñarlas.'
        tarjeta(frase)
    }else{
        if(valor=='eleccion2'){
            let frase='Mi partido es la justicia social; mi bandera la igualdad y tengo como única meta la felicidad de todos.'
            tarjeta(frase)
        }else{
            if(valor=='eleccion3'){
                let frase='La justicia social no puede ser conseguida por la violencia. La violencia mata lo que intenta crear.'
                tarjeta(frase)
            }else{
                let frase='Saber lo que es justo y no hacerlo es la peor de las cobardías.'
                tarjeta(frase)
            }
        }
    }
}
/**
 * Función para leer una cookie
 * @returns Devuelve el valor de la cookie
 */
function leerCookie(){
    let name="eleccion="
    let ca=document.cookie.split(';')
    for(let i=0;i<ca.length;i++){
        let c=ca[i]
        while(c.charAt(0)==' '){
            c=c.substring(1)
        }
        if(c.indexOf('eleccion')==0){
            return c.substring(name.length,c.length)
        }
    }
    return ''
}
/**
 * Función para crear la tarjeta
 * @param {*} frase 
 */
function tarjeta(frase){
    console.log(frase);
    //Cojo el div de la tarjeta
    let divtarjeta=document.getElementById('tarjeta')
    let divfrase=document.getElementById('frasecrear')
    divtarjeta.style.width='100%'
    //Creo el elemento para la imagen
    let img=document.createElement('img')
    img.src='recursos/img/tarjeta.jpg'
    img.style.width='100%'
    divtarjeta.appendChild(img)
    let p=document.createElement('p')
    p.innerHTML=frase
    p.style.textAlign='center'
    p.style.fontFamily='Imperial Script'
    p.style.fontSize='3rem'
    divfrase.appendChild(p)
    divfrase.style.width='40%'
    divfrase.style.position='absolute'
    divfrase.style.top='500px'
    divfrase.style.right='20%'
}
