/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1 = document.getElementById("txtIdNumeroUno").value;
	let num2 = document.getElementById("txtIdNumeroDos").value;
	let resultado = parseInt(num1) + parseInt(num2);
	alert(`El resultado de la suma es ${resultado}`);
}

