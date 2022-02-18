/*
danteSaldivar
Switch 08
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.
*/

function mostrar()
{
	let destinoIngresado;
	let temperatura;
	let mensaje;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			temperatura= "Frio";
		break;
		default:
			temperatura= "Calor";
		break;
	}

	mensaje= "En su destino hace "+ temperatura+ " en estos momentos.";

	alert(mensaje);


}//FIN DE LA FUNCIÓN