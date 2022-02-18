/*
DanteSaldivar
E/s 10Bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let numeroDescuento;
	let descuento;
	let resultado;

	importe= document.getElementById('txtIdImporte').value;
	numeroDescuento= prompt("Ingresa porcentaje de descuento deseado","0%");

	importe= parseInt(importe);
	numeroDescuento= parseInt(numeroDescuento);

	
	descuento= importe*numeroDescuento/100;
	resultado= importe-descuento;


	document.getElementById('txtIdResultado').value= resultado;
}
