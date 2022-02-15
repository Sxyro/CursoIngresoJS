function mostrar()
{
	//tomo la edad  
let edad = document.getElementById("txtIdEdad").value;

if (edad <= 13) {

	alert("Sos un niño");
}
else if (edad >= 13 && edad <= 17) {
	alert ("Sos adolescente");
}
else {
	alert("Sos mayor de edad");
}
}//FIN DE LA FUNCIÓN