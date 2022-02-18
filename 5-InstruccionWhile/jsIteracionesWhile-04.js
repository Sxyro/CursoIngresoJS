/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado = prompt("Ingrese un número entre 0 y 9.");

	while (numeroIngresado <= 0 || numeroIngresado >= 10) 
	{
		numeroIngresado = prompt("Ese número está fuera del rango solicitado. Ingrese nuevamente");
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;

}//FIN DE LA FUNCIÓN