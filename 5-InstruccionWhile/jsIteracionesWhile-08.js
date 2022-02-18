/* Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let contador = 0;
	let respuesta ='si';
	let sumaPositivos = 0;
	let multiplicacionNegativos = 1;

	while (respuesta == 'si')
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else if (numeroIngresado < 0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt(`Escriba "si" para continuar.`);
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}