// Bucle While
/*let entrada = prompt ("Ingrese su destino soñado de playa");

while (entrada != "ESC") {
    switch (entrada) {
        case "ARUBA":
            alert ("Amamos Aruba");
            break;
        
        case "MIAMI":
            alert ("Party in Maiameeee");
            break;

        case "BRASIL":
            alert ("Na praia du Brasil");
            break;
        
        default:
            alert ("No le gusta la playa??");
            break;
    }

    entrada = prompt ("Ingrese su destino soñado de playa");

}*/

// if
/*let saludo = prompt("Salude").toLocaleLowerCase();
if (saludo == "hola"){
    alert("Hola, cómo estás?");
}
else {
    alert("salude, maleducado!");
}


//Otro if
let numero = prompt ("Qué número estoy pensando? (Del 1 al 100)");

if (numero < 77){
    alert ("Ese número es muy bajo. Intenta con uno más alto.");
    numero =prompt ("Qué número estoy pensando? (Del 1 al 100)");
}
if (numero > 77){
    alert ("Ese número es muy alto. Intenta con uno más bajo.");
    numero =prompt ("Qué número estoy pensando? (Del 1 al 100)");
}
if (numero = 77) {
    alert ("Ganaste! Estaba pensando en (numero)!!");
}
*/

// Función
function calcular (numero1, numero2, operacion){
    switch (operacion){
        case "+":
            return numero1 + numero2;
            break;

        case "-":
            return numero1 - numero2;
            break;

        case "*":
            return numero1 * numero2;
            break;

        case "/":
            return numero1 / numero2;
            break;
        
        default:
            return "Esa operación no puede realizarse.";
        }
    }

let numero1 = Number(prompt("Ingrese el número 1"));
let operacion = prompt ("Ingrese la operación que desea realizar");
let numero2 = Number(prompt("Ingrese el número 2"));


let resultado = calcular (numero1, numero2, operacion);
alert (`${numero1} ${operacion} ${numero2} = ${resultado}`);
