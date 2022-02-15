function mostrar()
{
	//tomo la edad  
let edad = document.getElementById("txtIdEdad").value;

if (edad <= 13 || edad >= 17) {

	alert("no sos adolescente");
}

alert("Fin de la función");

}//FIN DE LA FUNCIÓN