let respuesta1 = prompt("Te gustaría comprar una planta?");

const calcularRespuesta = (servicio) => {
   switch (servicio) {
     case "monstera":
       alert("El precio por unidad es $30.000");
       break;

     case "agapanthus":
       alert("El precio por unidad es $20.000");
       break;

     case "palo de agua":
       alert("El precio por unidad es $15.000");
       break;

     default:
       alert("producto no disponible");
       break;
       servicio = prompt("Te gustaría comprar una monstera, agapanthus o un palo de agua?");
   }
 };

 while (respuesta1 != "no") {
   let servicio = prompt("Te gustaría comprar una monstera, agapanthus o un palo de agua?");
   calcularRespuesta(servicio);
   let respuesta2 = prompt("Te gustaría agregar una maceta por $10.000?");
   
 if (respuesta2 != "no"){
    alert ("Listo! Agregaste una maceta a tu carrito.");
    break;
    }
 else {
    break;
 }
 }
 alert("Gracias por ingresar a nuestra página");