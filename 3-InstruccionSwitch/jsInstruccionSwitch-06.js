function mostrar()
{
	let hora = document.getElementById("txtIdHora").value;
	let tiempo = "Esa hora no existe.";
	switch (hora) {
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			tiempo = "Es de mañana.";
		break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			tiempo = "Es de tarde.";
		break;
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
			tiempo = "Es de noche.";
	}
		alert(tiempo);
}
	// let hora = document.getElementById("txtIdHora").value;
	// let tiempo = "Esa hora no existe.";

	// if (hora >=7 && hora <=11) {
	// 	tiempo = "Es de mañana."
	// }
	// else if (hora >=12 && hora <=19) {
	// 	tiempo = "Es de tarde."
	// }
	// else if (hora >=0 && hora <=6 || hora >=20 && hora <=24) {
	// 	tiempo = "Es de noche."
	// }
	// 	alert(tiempo);