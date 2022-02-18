/* 
Dante Saldivar
E/S 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado = prompt ("ingrese su nombre", "Natalia");
	document.getElementById('txtIdNombre').value = "su nombre es " + nombreIngresado;
}

