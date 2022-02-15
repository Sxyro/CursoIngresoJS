function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota = Math.round(Math.random() * 9 + 1);
	if (nota >= 9) {
		alert("Excelente.")
	}	
	else if (nota <= 8 && nota >= 5) {
		alert("Aprobó");
	}
	else {
		alert("No pasa nada capo, la próxima será.")
	}
}//FIN DE LA FUNCIÓN