/*
danteSaldivar
E/s 09Bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let numeroAumento;
	let incremento;
	let resultado;

	sueldo= document.getElementById('txtIdSueldo').value;
	numeroAumento= prompt ("Ingresa el porcentaje de aumento deseado", "0");
	
	sueldo= parseInt(sueldo);
	numeroAumento= parseInt(numeroAumento);

	
	incremento= sueldo*numeroAumento/100;
	resultado= sueldo+incremento;

	document.getElementById('txtIdResultado').value= resultado;
}
