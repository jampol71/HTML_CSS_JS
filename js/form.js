/**
 * Created by rafaellucenamartinez on 27/12/2018.
 */



export function setForm() {


    let form = document.querySelector('#contacto')
    let oContact = {};
    console.log("HOla")
    form.addEventListener('submit',enviar)

    function enviar(oEv){
        console.log("Enviando datos")
        console.dir(oEv)
        oEv.preventDefault()
        oContact.name = document.querySelector('#name').value
        oContact.email = document.querySelector('#email').value
        oContact.phone = document.querySelector('#seleccion').value
        oContact.message = document.querySelector('#numero').value
        oContact.condiciones = document.querySelector('#textarea').checked

        console.log(oContact)

    }



}