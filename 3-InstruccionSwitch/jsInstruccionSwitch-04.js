/*
danteSaldivar
Switch 04
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	let mesIngresado;
	let mensaje;

	mesIngresado= document.getElementById('txtIdMes').value;

	switch(mesIngresado)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje= "Este mes tiene 30 días.";
		break;
		case "Febrero":
			mensaje= "Este mes tiene 28 días.";
		break;
		default:
			mensaje= "Este mes tiene 31 días";
		break;
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN