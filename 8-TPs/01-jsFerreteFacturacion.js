/*1.	
	DanteSaldivar
	Tp1
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let sumar;

	precioUno= document.getElementById('txtIdPrecioUno').value;
	precioDos= document.getElementById('txtIdPrecioDos').value;
	precioTres= document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
	precioDos= parseInt(precioDos);
	precioTres= parseInt(precioTres);

	suma= precioUno+precioDos+precioTres;

	alert("La suma es "+ suma);


}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precioTotal;
	let promedio;

	precioUno= document.getElementById('txtIdPrecioUno').value;
	precioDos= document.getElementById('txtIdPrecioDos').value;
	precioTres= document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
	precioDos= parseInt(precioDos);
	precioTres= parseInt(precioTres);

	precioTotal= precioUno+precioDos+precioTres;
	promedio= precioTotal/3;

	alert("El promedio es "+ promedio.toFixed(2));
	
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precioTotal;
	let impuestoIva;
	let precioFinal;

	precioUno= document.getElementById('txtIdPrecioUno').value;
	precioDos= document.getElementById('txtIdPrecioDos').value;
	precioTres= document.getElementById('txtIdPrecioTres').value;

	precioUno= parseInt(precioUno);
	precioDos= parseInt(precioDos);
	precioTres= parseInt(precioTres);

	precioTotal= precioUno+precioDos+precioTres;

	impuestoIva= precioTotal*0.21;
	precioFinal= precioTotal+impuestoIva;
	

	alert("El Precio final es "+ precioFinal);

	
}