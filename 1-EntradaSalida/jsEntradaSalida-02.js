/*
Dante Saldivar
E/S 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let NombreIngresado; 
	NombreIngresado = prompt("Ingese su nombre ", "Natalia");
	alert("Su nombre es " + NombreIngresado);
	//"Prompt" es una ventana pop up. 
	// alert(NombreIngresado); (Sin las comillas se selecciona la variable usada función) + El "espacio" es una posible solución al problema de la separación del Es.
}

