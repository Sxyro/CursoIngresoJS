/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


	var num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	var num2 = parseInt(document.getElementById("txtIdNumeroDos").value);	

function sumar()
{	

	let num1 = document.getElementById("txtIdNumeroUno").value;
	let num2 = document.getElementById("txtIdNumeroDos").value;
	let resultadoSuma = parseInt(num1) + parseInt(num2);
	alert(`El resultado de la suma es ${resultadoSuma}`);
}

function restar()
{
	let num1 = document.getElementById("txtIdNumeroUno").value;
	let num2 = document.getElementById("txtIdNumeroDos").value;
	let resultadoResta = parseInt(num1) - parseInt(num2);
	alert(`El resultado de la resta es ${resultadoResta}`);
}

function multiplicar()
{ 
	let num1 = document.getElementById("txtIdNumeroUno").value;
	let num2 = document.getElementById("txtIdNumeroDos").value;
	let resultadoMultiplicacion = parseInt(num1) * parseInt(num2);
	alert(`El resultado de la multiplicación es ${resultadoMultiplicacion}`);
}

function dividir()
{
	let num1 = document.getElementById("txtIdNumeroUno").value;
	let num2 = document.getElementById("txtIdNumeroDos").value;
	let resultadoDivision = parseInt(num1) / parseInt(num2);
	alert(`El resultado de la división es ${resultadoDivision}`);
}