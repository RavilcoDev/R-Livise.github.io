function redirigir(ev) {
    let section = ev.target.id

    document.getElementById('nav-info').classList.remove("resalta")
    document.getElementById('nav-work').classList.remove("resalta")
    document.getElementById('nav-contact').classList.remove("resalta")

    ev.target.classList.add("resalta")
    //window.location.hash = '#' + section.split("-")[1];

    let div = document.getElementById(section.split("-")[1])
    console.log(div.offsetTop)
    if (div != null) {
        document.scrollingElement.scrollTop = div.offsetTop - 100;
    }

}

function redirigirFocus(ev) {
    if (ev.key == "Enter") {
        redirigir(ev);

    }

}

function prueba(ev) {
    console.log(ev)
}

document.getElementById('nav-info').addEventListener('click', redirigir)
document.getElementById('nav-work').addEventListener('click', redirigir)
document.getElementById('nav-contact').addEventListener('click', redirigir)
document.getElementById('nav-info').addEventListener('keyup', redirigirFocus)
document.getElementById('nav-work').addEventListener('keyup', redirigirFocus)
document.getElementById('nav-contact').addEventListener('keyup', redirigirFocus)