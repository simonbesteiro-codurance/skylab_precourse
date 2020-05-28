function whaleTalk(inputText) {
    var saverText = "";
    for (var i = 0; i < inputText.length; i++) {
        if (inputText[i] === "a" || inputText[i] === "i" || inputText[i] === "o") {
            saverText += inputText[i].toUpperCase();
        }
        if (inputText[i] === "e" || inputText[i] === "u"){
            saverText += (inputText[i]+inputText[i]).toUpperCase();
        }
        /*
         Other options:

         1- use switch instead of if

         2- save an array with the wanted characters and make a double for

        */
    }
    return saverText;
}
var whaleTalksText = "Frase de prueba";
console.log(whaleTalk(whaleTalksText));
