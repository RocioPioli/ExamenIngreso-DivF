
function mostrar()
{

let tipo;
let precio;
let cantidad;
let categoria;
let fabricante;


//A
let promedioAlcohol;
let contAlcohol=0;
let acumAlcohol=0;

let promedioIAC;
let contIAC=0;
let acumIAC=0;

let promedioQUAT;
let contQUAT=0;
let acumQUAT=0;


//B
let maxCategoria;

//C
let acumDetergente=0;

//D
let fabricanteCaro;
let categoriaCaro;
let flagFabricante=0;
let maxPrecio;
let mensajeA= "La categoria mas cara es ";
let mensajeB= "El fabricante mas caro es ";

	for(let i=0; i<5; i++){

		tipo = prompt("Ingrese el tipo ALCOHOL/IAC/QUAT: ");
		while (tipo!= "ALCOHOL" && tipo!= "IAC" && tipo!="QUAT"){
			tipo = prompt("Error. Ingrese un tipo válido ALCOHOL/IAC/QUAT: ");
		}

		precio= parseFloat(prompt("Ingrese el precio entre $100 y $300 "));
		while(isNaN(precio) || precio<100 || precio>300 ){
			precio=parseFloat(prompt("Error. Ingrese un valor valido: "));
		}
	
		cantidad= parseInt(prompt("Ingrese la cantidad max 1000 unidades: "));
    while(cantidad<=0 || cantidad>1000){ // 
        cantidad= parseInt(prompt("Error. Ingrese una cantidad valida: "));
		}
		
		categoria= prompt("Ingrese la categoria desinfectante/bactericida/detergente: ");
		while (tipo!= "desinfectante" && tipo!= "bactericida" && tipo!="detergente"){
			tipo = prompt("Error. Ingrese una categoria valida desinfectante/bactericida/detergente: ");
		}

		fabricante= prompt("Ingrese el fabricante: ");
	

		switch (tipo){
			case "ALCOHOL":
				acumAlcohol += cantidad;
		        contAlcohol++;
				break;

			case "IAC":
				acumIAC += cantidad;
		        contIAC++;
				break;

			case "QUAT":
				acumQUAT += cantidad;
		        contQUAT++; 
				break;
		}


	
		if(categoria== 'detergente' && precio<=200){
		acumDetergente+= cantidad;
		}

		if (flagFabricante == 0|| precio>maxPrecio){
			maxPrecio= precio;
			maxFabricante= tipo;
			flag=1;
		}
		
	}

	if(acumAlcohol>acumIAC && acumA>acumQUAT){
		maxCategoria= "ALCOHOL";
		promedioAlcohol= acumAlcohol/contAlcohol;
	}
	else if (acumIAC>=acumAlcohol && acumIAC>acumQUAT){
		maxCategoria= "IAC";
		promedioIAC= acumIAC/contIAC;
	}
	else {
		maxCategoria= "QUAT";
		promedioQUAT= acumQUAT/contQUAT;
	}

console.log("A. El promedio de cantidad de los ALCOHOLES es " + promedioAlcohol);
console.log("A. El promedio de cantidad de los IAC es " + promedioIAC );
console.log("A. El promedio de cantidad de los QUAT es " + promedioQUAT);


console.log("B. Categoria con mas unidades compradas " + maxCategoria);

console.log("C. Unidades de detergente con precios menos a 200 (inclusive) que se compraron: " + acumDetergente);

   if (flagFabricante){
	mensajeA="D. Fabricante mas caro: " + fabricanteCaro +
	"\nCategoria mas cara : " + categoriaCaro
	}

}
