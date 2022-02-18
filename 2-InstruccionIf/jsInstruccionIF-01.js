/* 
DanteSaldivar
If 01
Al ingresar una edad que sea igual a 15, 
mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	//tomo la edad
	let edadIngresada;

	edadIngresada=document.getElementById('txtIdEdad').value;
	
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada==15)
	{
		alert("Niña bonita.")
	}


}//FIN DE LA FUNCIÓN