/*
danteSaldivar
Switch 07
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste.
*/

function mostrar()
{
	let destinoIngresado;
	let puntoCardinal;
	let mensaje;

	destinoIngresado= document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			puntoCardinal= "Oeste";
		break;
		case "Cataratas":
			puntoCardinal= "Norte";
		break;
		case "Mar del plata":
			puntoCardinal= "Este";
		break;
		case "Ushuaia":
			puntoCardinal= "Sur";
		break;
	} 
	mensaje= "Se encuentra al "+ puntoCardinal + " de nuestro pais.";

	alert(mensaje);

}//FIN DE LA FUNCIÓN