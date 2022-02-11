/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

let nombre = prompt("Cual es tu nombre?");

function mostrar()
{
	document.getElementById("txtIdNombre").value = nombre
}

