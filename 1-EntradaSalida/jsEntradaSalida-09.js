/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	let aumento = sueldo * 0.1;
	let total = sueldo + aumento;
	document.getElementById("txtIdResultado").value = total;
}
