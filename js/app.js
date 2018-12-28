/**
 * Created by rafaellucenamartinez on 17/12/2018.
 */



import { setMenu } from '/js/menu.js'
import { setForm } from '/js/form.js'


function app() {
    setMenu()
    setForm()

}


/* funcion para limitar a 150 palabras */

function contador(flobj, max) {

    var count = 0
    var len = 0
    var formcontent=flobj.value //coge el texto del textarea
    formcontent = formcontent.split("") //separa las palabras en un array
    for (i=0; i<formcontent.length; i++){

        if(formcontent[i]==" ") //cuenta el número de espacios
        {
            count++
        }
    }

    len = formcontent.length - count //quita los espacios del tamaño total
    window.status = "Has introducido" + len + "palabras"
    if (len>max){
        alert("No se pueden introducir más palabras")

    }
}




function hola() {

    alert("Hola Mundo")
}



document.addEventListener('DOMContentLoaded', app)



