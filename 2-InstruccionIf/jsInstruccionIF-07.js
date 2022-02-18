/*
DanteSaldivar
02
If 07 BIS V1 
*/

function mostrar()
{
	let edadIngresada;
	let estadoCivil;
	let nombreIngresado;
	let mensaje;

	edadIngresada= document.getElementById('txtIdEdad').value;
	estadoCivil= document.getElementById('estadoCivil').value;
	nombreIngresado= prompt("Por favor ingrese su nombre", "Dante");

	edadIngresada=parseInt(edadIngresada);

	if (edadIngresada<13)
	{
		mensaje=("Feliz dia.");	

		 if (nombreIngresado=="Ricardo")
		 {
		 	mensaje= (mensaje+ " Muy chiquito para ese nombre.")
		 }
	}
	else
	{
		
			if (edadIngresada<18)
			{
			 	mensaje= ("Usted es adolescente.");
			 	
			 	if (nombreIngresado=="Violeta")
			 	{
			 	 	mensaje= (mensaje+ " Se llama como el color!!");
			 	}
			 	if (edadIngresada>16) 
			 	{
			 		mensaje=(mensaje + " Ultimo año!!!");
			 	}
			}
			 else
			{
				mensaje= ("Tienes edad para laburar.");

				if (edadIngresada==33)
				{
				  mensaje= (mensaje+ " Como Cristo.");
				}

				if (edadIngresada>59) 
				{
				  	mensaje=("A jubilarse.");

				 	if (nombreIngresado=="Alfredo")
				 	{
				 		mensaje= (mensaje+ " Como el de QUEEN.");
				 	}

					if (edadIngresada==88)
				 	{
				  		mensaje= (mensaje+" Lindo numero.");
				 	}
				}		
			}
			if (estadoCivil=="Casado")
			{
		 		mensaje=(mensaje+" Casada quiere casa.");
		 	}	
	} 

	if (edadIngresada%2==0) 
	{
		mensaje=mensaje+ " Sos par!!";
	}

	 alert(mensaje);
}
//FIN DE LA FUNCIÓN	
 /*}




	 }
	 */

/*	let edadIngresada;
	let estadoCivil;

	edadIngresada= document.getElementById('txtIdEdad').value;
	estadoCivil= document.getElementById('estadoCivil').value;

	edadIngresada= parseInt(edadIngresada);

	if (edadIngresada<18 && estadoCivil!= "Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero.");
	
	}

		
	 
	*/