function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperatura;
	let precio=600;
	let seguir;
   
    


	let contOSDESexagenario=0;
	let flag=1;
	let minEdad;
	let contMujerJovenPAMI=0;
	let acumMujerJovenPAMI=0;
	let nombreMujerJovenPAMI;
	let temperaturaMujerJovenPAMI


	
	let acumPAMI=0;;
	let precioNeto;
	let precioBruto;
	let descuento=0; 
	let subtotal;

	do{

		nombre= prompt("Ingrese su nombre: ");
		while(!isNaN(nombre)){
			nombre= prompt("El nombre no puede ser un numero. Ingrese el nombre: ");
		}

		obraSocial = prompt("Ingrese su Obra SOCIAL PAMI/OSDE/Otras: ");

		while (obraSocial!= "PAMI" && obraSocial!= "OSDE" && obraSocial!="Otras"){
		obraSocial = prompt("Error. Ingrese su Obra SOCIAL PAMI/OSDE/Otras: ");
		}
	
		edad=parseInt(prompt("Ingrese su edad: "));
		while(edad<=17 || isNaN(edad)){
		edad=parseInt(prompt("Ingrese una edad valida: "));
		}
		
		temperatura=parseFloat(prompt("Ingrese temperatura"));
    	while(temperatura<=0 || isNaN(temperatura)){ 
        temperatura=parseFloat(prompt("Ingrese temperatura"));
   		}

		sexo= prompt("Ingrese su sexo f/m: ").toLowerCase();
        while(sexo!="f" && sexo!='m'){
        sexo= prompt("Error. Ingrese su sexo f/m: ").toLowerCase();
        }


		precio.toFixed();


		seguir=prompt("Desea ingresar mas datos?: ");
	}while(seguir=='s');


	if(obraSocial=='OSDE' && edad>60){
		contOSDESexagenario++;
	}

	if (flag || edad> minEdad){
		minEdad=edad;
		flag=0;
	}

	if(sexo=='f' && edad==minEdad){
		acumMujerJovenPAMI +=edad;
		contMujerJovenPAMI++;
		nombreMujerJovenPAMI=nombre;
		temperaturaMujerJovenPAMI=temperatura;
	}


precioBruto= cantidad*precio;
subtotal+= precioBruto;

if (descuento !=0){
	console.log("b. El viaje sin descuento sale" + precioBruto);
  }




if (obraSocial){
	neto= subtotal - subtotal * descuento;
	console.log("C. Importe neto a pagar $ " + neto);
  }
  
  
  

console.log("A. La cantidad de personas con OSDE de mas de 60 años es: " + contOSDESexagenarios);

console.log("B. Nombre de la mujer mas joven con PAMI es "+ nombreMujerJovenPAMI+ "y su temperatura coporal es: " + temperaturaMujerJovenPAMI + " °C.");



}
