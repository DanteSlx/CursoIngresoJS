/*
DanteSaldivar
If 05
"Al ingresar una edad solo debemos informar si la persona NO es adolescente."
*/
function mostrar()
{
	let edadIngresada;

	edadIngresada= document.getElementById('txtIdEdad').value;

	edadIngresada= parseInt(edadIngresada);

	if (edadIngresada<13||edadIngresada>17)
	 {
	 	alert("Usted no es un adolescente, tiene "+ edadIngresada+ " años.");
	 }


}//FIN DE LA FUNCIÓN


	/*if (edadIngresada<13)
	 {
	 	alert("Usted no es un adolescente, tiene "+edadIngresada+ " años.");
	 }
	if (edadIngresada>17) 
	 {
	 	alert("Usted no es un adolescente, tiene "+edadIngresada+ " años.");
	 } 

	 (Esta horriblemente mal)
	*/
