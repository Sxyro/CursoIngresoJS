/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);	
	let num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	let num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	resultadoSuma = num1 + num2 + num3;
	alert(`El total es de ${resultadoSuma}`);
}

function Promedio () 
{
	let num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);	
	let num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	let num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	resultadoPromedio = (num1 + num2 + num3) / 3;
	alert(`El total es de ${resultadoPromedio}`);
}

function PrecioFinal () 
{
	let num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);	
	let num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
	let num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
	let iva = (num1 + num2 + num3) * 0.21;
	resultadoFinal = (num1 + num2 + num3) * 1.21;
	alert(`El total es de ${resultadoFinal} siendo el IVA de ${iva}`);
}