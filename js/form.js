/**
 * Created by rafaellucenamartinez on 27/12/2018.
 */



export function setForm() {


    let form = document.querySelector('#contacto')
    let oContact = {}
    form.addEventListener('submit',enviar)

    function enviar(){
        console.dir(oEv)
        oEv.preventDefault()
        oContact.name = document.querySelector('#name').value
        oContact.email = document.querySelector('#email').value
        oContact.phone = document.querySelector('#selecion').value
        oContact.message = document.querySelector('#numero').value
        oContact.condiciones = document.querySelector('#textarea').checked

        console.log(oContact)

    }



}