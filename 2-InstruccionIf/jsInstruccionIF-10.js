/*
danteSaldivar
If 10
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4.
*/

function mostrar()
{
	let numeroRandom;

	numeroRandom= Math.floor(Math.random()*10)+1;
	
	if (numeroRandom>8)
	 {
	 	alert("EXCELENTE");
	 }
	 else
	 {
	 	if (numeroRandom>3)
	 	 {
	 	 	alert("APROBÓ");
	 	 }
		 else
	 	 {
	 	 	alert("Vamos,la proxima se puede.");
	 	 }
	 		
	 }
}//FIN DE LA FUNCIÓN