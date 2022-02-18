/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750")
	{
		claveIngresada = prompt("La clave es incorrecta, Ingrese el número clave nuevamente.");
	}
	alert("Bienvenido!");

	// if (claveIngresada != "utn750") 
	// {
	// 	claveIngresada = prompt("La clave es incorrecta, Ingrese el número clave nuevamente.");
	// 	if (claveIngresada != "utn750") {
	// 		claveIngresada = prompt("La clave es incorrecta, Ingrese el número clave nuevamente.");
	// 	}
	// 	else
	// 	{

	// 	}
	// }
	// else 
	// {
	// 	alert("Bienvenido");
	// }
}//FIN DE LA FUNCIÓN
