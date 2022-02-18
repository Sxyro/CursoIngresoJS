/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado = prompt("ingrese f ó m.");

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Error, ingrese un sexo válido.")
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;

}//FIN DE LA FUNCIÓN