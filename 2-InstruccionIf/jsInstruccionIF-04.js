/*
DanteSaldivar
If 04
"Al ingresar una edad debemos informar si la persona es adolescente,
edad entre 13 y 17 años (inclusive) ."
*/
function mostrar()
{
	let edadIngresada;

	edadIngresada= document.getElementById('txtIdEdad').value;

	edadIngresada= parseInt(edadIngresada);

	if (edadIngresada>12)
	 {
	 	if (edadIngresada<18)
	 	 {
	 	 	alert("Usted es un adolescente de "+ edadIngresada+ " años." );
	 	 }
	 }
	 

}//FIN DE LA FUNCIÓN

/*
	if (edadIngresada<12 && edadIngresada>18)
	 {
		alert("Usted es un adolescente de "+ edadIngresada+ " años." );
	 }

	 // es la forma mas optima.
*/