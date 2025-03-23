function crearteBubble(){
    const section = document.querySelector('section');
    const crearteElement = document.createElement('span');
    var size = Math.random()*60;

    crearteElement.style.width = 20 + size + 'px';
    crearteElement.style.height = 20 + size + 'px';
    crearteElement.style.left = Math.random()*innerWidth +'px';
    section.appendChild(crearteElement);

    setTimeout(() => {
        crearteElement.remove()
    },4000)
}

setInterval(crearteBubble,50)
