let preguntas = ["a.png","imgA.png","imgB.png","imgC.png","imgD.png","imgE.png", "imgF.png"];

let guardarOp = [0,0,2,1,1,0,1];

let opciones =[];

opciones.push(["UN LENGUAJE", "UN PROGRAMA", "CAPTURADOR DE DATOS"]);
opciones.push(["PRIMITIVOS", "FACILES", "SIMPLES"]);
opciones.push(["_PARENT", "_SELF", "_BLANK"]);
opciones.push(["DISPLAY:HIDDEN", "DISPLAY:NONE", "DISPLAY:CONTENT"]);
opciones.push(["INSECT", "BUG", "BICHO"]);
opciones.push(["*(ASTERISCO)", "#(NUMERAL)", "%(PORCENTAJE)"]);
opciones.push(["VARIABLE", "CICLO", "FUNCION"]);


let posActual = 0;
let cantidadAcertada = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertada = 0;
    document.getElementById('pantalla-inicial').style.display = "none";
    document.getElementById('pantalla-juego').style.display = "block";
    cargarPreguntas();
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function cargarPreguntas(){
    if(preguntas.length<=posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();
        document.getElementById("imgCosa").src = "img/"+ preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}


function comprobarRespuesta(opElegida){
    if(opElegida == guardarOp[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
    }
    else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + guardarOp[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + guardarOp[posActual]).className = "letra letraAcertada";
    }
    posActual++;

    setTimeout(cargarPreguntas,1000);
}

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display= "none";  
    document.getElementById("pantalla-final").style.display= "block";

    document.getElementById("numCorrectas").innerHTML = cantidadAcertada;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertada;
}

function volverAlInicio(){
    
    document.getElementById("pantalla-final").style.display= "none";  
    document.getElementById("pantalla-inicial").style.display= "block";
    document.getElementById("pantalla-juego").style.display= "none";

}