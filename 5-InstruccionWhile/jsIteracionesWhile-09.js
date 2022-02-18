/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta = 'si';
	let banderaDelPrimero= "Es el primero";
	
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == "Es el primero")
		{
			banderaDelPrimero = "Ya no es el primero"
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else 
		{	
			if (numeroIngresado>numeroMaximo) 
			{
				numeroMaximo = numeroIngresado;
			}
			if (numeroIngresado<numeroMinimo) 
			{
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta=prompt("Ingrese 'si' para continuar");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}