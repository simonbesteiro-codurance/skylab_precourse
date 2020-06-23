/*
Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el usuario deberá adivinar qué palabra estamos tratando, por ejemplo:
'>>>'With the letter "M", Capital of Spain, located in the center of the country.
'>>>' "Madrid"
'>>>'Correct, you have 1 Point!

Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. El juego deberá, cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.
*/

function pasapalabra() {
    var questions = [];
    var answer = [];
    for (var i = 0; i < questions.length; i++) {
        console.log(/*aqu reproduce las prguntas del array */);
        var userAnswer= prompt();
        /*IDEA: el array questions tiene dentro otros array con la pregunta y e esado acertada, fallada o ninguna cuando hacemos apsapaabra quedara en ninguna y se recorera de nuevo
        si falla el estado cabia y podemos usar eso pra contabilizar loa aciertos y fallos en funciones aparte */
        if (questions[i][2]=="none") {
            if (userAnswer.toUpperCase()!=="PASAPALABRA") {
                if (userAnswer.toUpperCase()===answ[i]) {
                    console.log("Correct, you have "+correctNum+" Point!")
                }
            }   
        }
        
    }

    
}
pasapalabra();