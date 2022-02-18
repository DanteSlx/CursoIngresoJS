/*
DanteSaldivar
If 03
Al ingresar una edad debemos informar si la persona es mayor de edad,
 sino informar que es un menor de edad.
 */

function mostrar()
{
	let edadIngresada;

	edadIngresada= document.getElementById('txtIdEdad').value;

	edadIngresada= parseInt(edadIngresada);

	if (edadIngresada > 17) 
	{
		alert("Usted es mayor y tiene "+ edadIngresada+ " años.");
	}
	if (edadIngresada < 18) 
	{
		alert("Usted es menor y tiene "+ edadIngresada+ " años.");
	}


}//FIN DE LA FUNCIÓN