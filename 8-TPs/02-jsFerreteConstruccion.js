/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo = parseInt(document.getElementById("txtIdLargo").value);
	let ancho = parseInt(document.getElementById("txtIdAncho").value);
	let perimetro;
	let alambre;

	perimetro = (largo * 2) + (ancho * 2);
	alambre = perimetro * 3

	alert(`Se necesitan ${alambre} metros de alambre`);

}
function Circulo () 
{
	const PI = Math.PI;
	let radio = parseInt(document.getElementById("txtIdRadio").value);
	let perimetro = 2 * PI * radio;
	let alambre = perimetro.toFixed(2) * 3;

	alert(`Se necesitan ${alambre} metros de alambre`);

}
function Materiales () 
{
	let largo = parseInt(document.getElementById("txtIdLargo").value);
	let ancho = parseInt(document.getElementById("txtIdAncho").value);
	let area = largo * ancho;
	let bolsasDeCementoTotal = area * 2
	let bolsasDeCalTotal = area * 3
	alert(`Para un contrapiso de ${area}m2 se necesitan ${bolsasDeCementoTotal} bolsas de cemento y ${bolsasDeCalTotal} bolsas de cal`);
}