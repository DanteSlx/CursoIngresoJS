/*
Dante Saldivar
E/S 06			
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let sumar;

	numeroUno= document.getElementById('txtIdNumeroUno').value;
	numeroDos= document.getElementById('txtIdNumeroDos').value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	suma= numeroUno+numeroDos;


	alert("La suma es "+ suma);

	//alert(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value));
	//Es un codigo horriblemente escrito.
	//o
	// Al intentar agregar texto lineal se cancela la función de sumar.
}

