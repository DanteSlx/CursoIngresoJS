/*
danteSaldivar
While 04	
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	let mensaje;

	numeroIngresado= prompt("Ingrese un numero entre 0 y 9");

	numeroIngresado= parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado= prompt("El numero ingresado no es valido, ingrese nuevamente.");
	}

	mensaje=("El numero ingresado es "+ numeroIngresado+ " y es valido.");

	document.getElementById('txtIdNumero').value= mensaje;
	
}//FIN DE LA FUNCIÓN