/*
Dante Saldivar
E/S 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	nombreIngresado= document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	alert("Usted se llama "+ nombreIngresado+ " y tiene "+ edadIngresada+ " años");
}

/* 
Salida:

alert()

document.getElementById('unID').value=" mensaje" + variable;


Entrada:

variable=prompt()

=document.getElementById('unID').value;
*/