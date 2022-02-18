function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		default: 
			alert("Aún no llegó el invierno");
		break;
		case "Agosto":
		case "Julio":
			alert("Abrigate que hace frio");
		break;
	}
}