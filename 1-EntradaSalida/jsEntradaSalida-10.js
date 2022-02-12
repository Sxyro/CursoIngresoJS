/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo = parseFloat(document.getElementById("txtIdImporte").value);
	let descuento = sueldo * 0.25;
	let total = sueldo - descuento;
	document.getElementById("txtIdResultado").value = total;
}
