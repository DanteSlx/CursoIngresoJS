/*
danteSaldivar
Switch 03 
Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	let mesIngresado;
	let mensaje;

	mesIngresado= document.getElementById('txtIdMes').value;

	switch(mesIngresado)
	{
		case "Febrero":
			mensaje= "Este mes no tiene más de 29 días.";
		break;
		default:
			mensaje= "Este mes tiene 30 o más días.";
		break;
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN