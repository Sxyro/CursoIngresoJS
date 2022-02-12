/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);
	let centrigados = (fahrenheit - 32) * (5/9);
	centrigados = centrigados.toFixed(2);
	alert(`${fahrenheit} grados Fahrenheit son ${centrigados} grados Centigrados`)
}

function CentigradosFahrenheit () 
{
	let centigrados = parseInt(document.getElementById("txtIdTemperatura").value);
	let fahrenheit = (centigrados * 1.8) + 32;
	fahrenheit = fahrenheit.toFixed(2);
	alert(`${centigrados} grados Centigrados son ${fahrenheit} grados Fahrenheit`);
}


// un grado Fahrenheit es (X °C * 1.8) + 32

// un grado Celsius es (X °F - 32) * (5/9)