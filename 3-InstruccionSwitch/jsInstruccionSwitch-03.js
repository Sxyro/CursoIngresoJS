function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		default: 
			alert("Este mes tiene 30 o 31 días");
		break;
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
		break;
	}
}