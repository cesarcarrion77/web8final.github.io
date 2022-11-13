
var muestraFoto=document.getElementById("visor");

document.getElementById("boton-ciencia").addEventListener("click", function(){
    muestraFoto.src = "imagen/ciencia.jpg";
});

document.getElementById("boton-tecnologia").addEventListener("click", function(){
    muestraFoto.src = "imagen/tecnologia.jpg";
});

document.getElementById("boton-ingenieria").addEventListener("click", function(){
    muestraFoto.src = "imagen/ingenieria.jpg";
});

document.getElementById("boton-arte").addEventListener("click", function(){
    muestraFoto.src = "imagen/arte.jpg";
});

document.getElementById("boton-matematicas").addEventListener("click", function(){
    muestraFoto.src = "imagen/matematica.jpg";
});

let frases = [];
frases[0] = "Planificar es traer el futuro al presente para que puedas hacer algo al respecto ahora";
frases[1] = "La columna vertebral del éxito es el trabajo duro, la determinación, la buena planificación y la perseverancia";
frases[2] = "La riqueza es a menudo el resultado de un estilo de vida de trabajo duro, perseverancia, planificación y, sobre todo, autodisciplina";
frases[3] = "Planificar para el éxito te hará aún más creativo";
frases[4] = "Cuando es obvio que no se pueden alcanzar los objetivos, no ajuste los objetivos, ajuste los pasos de acción";
frases[5] = "Cuanto antes comiences a planificar tu vida, antes vivirás la vida que sueñas";
frases[6] = "Sin objetivos y planes para alcanzarlos, eres como un barco que zarpó sin destino";
frases[7] = "Con una planificación adecuada, pasión y perseverancia, puedes lograr los objetivos dados por Dios";
frases[8] = "Levántate más temprano y tómate un tiempo para planificar tu día. Cada minuto extra que pases planeando agregará más tiempo y poder a tu vida";
frases[9] = "Sin saltos de imaginación o sueños, perdemos la emoción de las posibilidades. Soñar, después de todo, es una forma de planificación";

let botonFrase1 = document.getElementById("frase1");
let botonFrase2 = document.getElementById("frase2");
let botonFrase3 = document.getElementById("frase3");
let botonFrase4 = document.getElementById("frase4");
let botonFrase5 = document.getElementById("frase5");
let botonFrase6 = document.getElementById("frase6");
let botonFrase7 = document.getElementById("frase7");
let botonFrase8 = document.getElementById("frase8");
let botonFrase9 = document.getElementById("frase9");
let botonFrase10 = document.getElementById("frase10");
let frasedia = document.getElementById("frasedia");

botonFrase1.addEventListener("click", function(){
    frasedia.innerHTML = frases[0];
})
botonFrase2.addEventListener("click", function(){
    frasedia.innerHTML = frases[1];
})
botonFrase3.addEventListener("click", function(){
    frasedia.innerHTML = frases[2];
})
botonFrase4.addEventListener("click", function(){
    frasedia.innerHTML = frases[3];
})
botonFrase5.addEventListener("click", function(){
    frasedia.innerHTML = frases[4];
})

// INTERCAMBIO DE TIEMPO
function CambiarTexto(){
    let aleatorio = Math.floor(Math.random() * 5)
    frasedia.innerHTML = frases[aleatorio];
}
setInterval(CambiarTexto, 500);