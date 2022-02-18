/*
danteSaldivar
Switch 10
Enunciado:
Una agencia de viajes nos piden informar si hacemos viajes a lugares según 
la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar.

En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja".
En Verano: Se viaja a Mar del plata y Cataratas solamente.
En Otoño: Se viaja a todos los destinos.
En primavera: solo no se viaja a Bariloche.
*/
function mostrar()
{
	let destinoIngresado;
	let estacionIngresada;
	let viaje;
	let mensaje;

	destinoIngresado= document.getElementById('txtIdDestino').value;
	estacionIngresada= document.getElementById('txtIdEstacion').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					viaje= " SI";
				break;
				default:
					viaje= " NO";
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					viaje= " SI";
				break;
				default:
					viaje= " NO";
				break;
			}
		break;
		case "Otoño":
			viaje= " SI";
		break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					viaje= " NO";
				break;
				default:
					viaje= " SI";
				break;
			}
		break;
	}

	mensaje=("En la estacion de "+estacionIngresada + ", al destino "+ destinoIngresado +
		viaje+ " se viaja.");
	
	alert(mensaje);	

}//FIN DE LA FUNCIÓN