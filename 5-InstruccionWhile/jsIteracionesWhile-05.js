/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	sexoIngresado= prompt("ingrese f ó m .");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado= prompt("No es valido, ingrese 'f' o 'm'");

	}

	switch(sexoIngresado)
	{
		case "f":
			sexoIngresado="Femenino";
		break;
		case "m":
			sexoIngresado="Masculino";
		break;
	}

	document.getElementById('txtIdSexo').value= sexoIngresado;

}//FIN DE LA FUNCIÓN