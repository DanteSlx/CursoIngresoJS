/*
danteSaldivar
If 06
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	let edadIngresada;

	edadIngresada= document.getElementById('txtIdEdad').value;

	edadIngresada= parseInt(edadIngresada);

	if (edadIngresada>17)
	 {
	 	alert("Su edad es "+edadIngresada+ " y es mayor.");
	 }
	 else
	 {
	 	if (edadIngresada<13)
	 	 {
	 	 	alert("Su edad es "+ edadIngresada+ " y es menor.");
	 	 }
	 	 else
	 	 {
	 	 	alert("Su edad es "+ edadIngresada+ " y es adolescente.");
	 	 }
	 }


}//FIN DE LA FUNCIÓN
/*
	// 4 a 3 procesos	
	if(edadIngresada>17)
	{
		alert("mayor");
	}
	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("adolescente");
	}
	if(edadIngresada<13)
	{
		alert("menor");
	}

	//1 o 2 procesos
	if(edadIngresada>17)
	{
		alert("mayor");
	}
	else
	{
		if(edadIngresada<13)
		{
			alert("menor");
		}else
		{
			alert("adolescente");
		}
	}
	
	//error
	if(edadIngresada>17)
	{
		alert("mayor");
	}

	if(edadIngresada<13)
	{
		alert("menor");
	}else
	{
		alert("adolescente");
	}


*/