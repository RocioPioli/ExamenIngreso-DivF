function mostrar()
{
  let nombre;
  let situacionLaboral;
  let materias;
  let sexo;
  let edad;
  let notaPromedio;
  let seguir;

  
  let nombreEstudianteViejo;
  let maxPromedioNombre;
  let maxPromedio;


  do{

    nombre= prompt("Ingrese su nombre: ");
		while(!isNaN(nombre)){
			nombre= prompt("El nombre no puede ser un numero. Ingrese el nombre: ");
    }
    
    situacionLaboral = prompt("Ingrese su situacion laboral buscando/trabajando/soloEstudiante: ");
  		while (situacionLaboral!= "trabajando" && situacionLaboral!= "buscando" && situacionLaborall!="soloEstudiante"){
      situacionLaboral = prompt("Error. Ingrese su situacion laboral buscando/trabajando/soloEstudiante: ");
		}
  
    sexo= prompt("Ingrese su sexo f/m/noBinario: ").toLowerCase();
    while(sexo!="f" && sexo!='m' && sexo!=noBinario){
      sexo= prompt("Ingrese su sexo f/m/noBinario: ").toLowerCase();
    }

    notaPromedio=parseInt(prompt("Ingrese nota promedio"));
    	while((nota>0 && nota<=10) || isNaN(nota)){ 
        notaPromedio=parseInt(prompt("Ingrese nota promedio"));
      }

    edad=parseInt(prompt("Ingrese su edad: "));
		while(edad<=17 || isNaN(edad)){
		edad=parseInt(prompt("Ingrese una edad valida: "));
    }
    

    if (!(condicionLlaboral== 'estudiando')){
      maxPromedio=notaPromedio;
      maxPromedioNombre=nombre;
      
  }





    seguir=prompt("Desea continuar?: "); 
  }while (seguir=='s)';


}
