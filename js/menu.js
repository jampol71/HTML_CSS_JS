/**
 * Created by rafaellucenamartinez on 20/12/2018.
 */



export function setMenu() {
    let aMenuItems = document.querySelectorAll("nav.menu1 a")
    let aSections = document.querySelectorAll("section")
    let oOffsets = []
    console.log(aMenuItems)
    console.log(aSections)
    prepararNavegacion()
    window.addEventListener('scroll', changeMenuStyle)



    function prepararNavegacion() {
        aSections.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
        console.log(oOffsets)
    }

    function changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >=  oOffsets['#portada'] && pageOffset < oOffsets['#quiensoy']) {
            menuItem = 0
        } else if (pageOffset >= oOffsets['#quiensoy'] && pageOffset < oOffsets['#estudios']) {
            menuItem = 1
        } else if (pageOffset >= oOffsets['#estudios'] && pageOffset < oOffsets['#experiencia']) {
            menuItem = 2
        } else if (pageOffset >= oOffsets['#experiencia'] && pageOffset < oOffsets['#sobremi']) {
            menuItem = 3
        } else if (pageOffset >= oOffsets['#experiencia'] && pageOffset < oOffsets['#sobremi']) {
            menuItem = 4
        } else {
            menuItem = 5
        }

        aMenuItems.forEach(
            (item) => item.classList.remove('active')
        )
        aMenuItems[menuItem].classList.add('active')
    }
}
