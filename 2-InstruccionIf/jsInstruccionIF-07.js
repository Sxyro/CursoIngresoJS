function mostrar()
{
	//tomo la edad  
let edad = document.getElementById("txtIdEdad").value;
let estadoCivil = document.getElementById("estadoCivil").value;

if (edad <= 17 && estadoCivil != "Soltero") {
	alert("Sos muy joven para no ser soltero.");
}
else {
	alert("xd");
}

}//FIN DE LA FUNCIÓN