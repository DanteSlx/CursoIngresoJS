/*
danteSaldivar
Switch 09 
Enunciado:
Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000
 por cada estadia como base, se pide el ingreso de una estacion del año y
  localidad para vacacionar para poder calcular el precio final.
En Invierno: bariloche tiene un aumento del 20%
 cataratas y Cordoba tiene un descuento del 10%
  Mar del plata tiene un descuento del 20%.
En Verano: bariloche tiene un descuento del 20%
 cataratas y Cordoba tiene un aumento del 10% 
 Mar del plata tiene un aumento del 20%.
En Otoño y Primavera: bariloche tiene un aumento del 10%
 cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10%
 y Cordoba tiene el precio sin descuento.

*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let porcentaje;
	let precioFinal;
	let mensaje;

	estacionIngresada= document.getElementById('txtIdEstacion').value;
	destinoIngresado= document.getElementById('txtIdDestino').value;

	switch (estacionIngresada)
	{
		case "Invierno":
		switch (destinoIngresado)
			{
				case "Bariloche":
					porcentaje= 20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje= -10;
				break;
				default:
					porcentaje= -20;
				break; 
			}
		break;
		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					porcentaje= -20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje= 10;
				break;
				default:
					porcentaje= 20;
				break; 
			}
		break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Cordoba":
					porcentaje= 0;
				break;
				default:
					porcentaje= 10;
				break;
			}
		break;
	}
	
	porcentaje= 15000*(porcentaje/100);
	precioFinal= 15000+porcentaje;

	mensaje= ("Viajar a "+ destinoIngresado+ " en "+ estacionIngresada+
	" tiene un coste de "+ precioFinal+ " pesos.");

	alert(mensaje);



}//FIN DE LA FUNCIÓN