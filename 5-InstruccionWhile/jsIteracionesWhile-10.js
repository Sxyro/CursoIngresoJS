/* Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numeroIngresado;
	let sumaPositivos = 0;
	let sumaNegativos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let sumaCeros = 0;
	let cantidadNumerosPares = 0;
	let promedioPositivos = 1;
	let promedioNegativos = 1;
	let diferencia;
	let respuesta = "si";

	do{
		
		numeroIngresado = parseInt(prompt("Ingrese un número: ")); // Solicito un numero
		
		if (numeroIngresado == 0){
			sumaCeros++;
		}
		else if (numeroIngresado > 0) {
			cantidadPositivos++;
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else {
			cantidadNegativos++;
			sumaNegativos = sumaNegativos + numeroIngresado;
		}

		if (numeroIngresado % 2 == 0) {
			cantidadNumerosPares++;
		}

		respuesta = prompt("Para ingresar otro número escriba 'si'");
	}while (respuesta == 'si');

	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write(`1. La suma de positivos es: ${sumaPositivos} <br>
					2. La suma de negativos es: ${sumaNegativos} <br>
					3. La cantidad de positivos es: ${cantidadPositivos} <br>
					4. La cantidad de negativos es: ${cantidadNegativos} <br>
					5. La cantidad de ceros es: ${sumaCeros} <br>
					6. La cantidad de numeros pares es: ${cantidadNumerosPares} <br>
					7. El promedio de los números positivos es: ${promedioPositivos} <br>
					8. El promedio de los números negativos es: ${promedioNegativos} <br>
					9. La diferencia entre positivos y negativos es: ${diferencia}`);
}