/*
DanteSaldivar
e/s 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividendo;
	let numerodivisor;
	let resto;

	numeroDividendo= document.getElementById('txtIdNumeroDividendo').value;
	numerodivisor= document.getElementById('txtIdNumeroDivisor').value;

	numeroDividendo= parseInt(numeroDividendo);
	numerodivisor=parseInt(numerodivisor);

	resto= 2%10;
	resto= 10%2;
	//continuara...

	
}
//El resto se saca con "%".

