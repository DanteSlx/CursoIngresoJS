/*
danteSaldivar
While 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese el número clave.");

console.log(claveIngresada);

	switch(claveIngresada)
	{
		case null:
			alert("Pensalo un rato");
		break;
		default:
		while(claveIngresada != "utn750" && claveIngresada != null )
			{
				claveIngresada= prompt("La clave no es valida, ingrese nuevamente.");
			}
			alert("Bienvenido usuario.");
		break;
	}


	
}//FIN DE LA FUNCIÓN

/*

	while(claveIngresada != "utn750" && claveIngresada != null )
	{
		claveIngresada= prompt("La clave no es valida, ingrese nuevamente.");
	}

	alert("Bienvenido usuario.");
*/