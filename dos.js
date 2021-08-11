function mostrar() {
  
  /*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
 */
  
  let nombre;
  let carrera;
  let sexo;
  let cantidad;
  let nota;
  let edad;
  //punto a
  let nombreProAlum
  let promFisica;
  let acumFisica;
  let contadorFisica;
  //punto b
  let alumnaMasJoven;
  let nombreMujerMasJoven;

  //punto c
  let porcEstCarrera;
  let contadorEst;
  let acumuladorEst;
  //punto d
  let estMasCarrera;
  let nombreEstMasCarrera;

  for (let i = 0; i < 1; i++){

    nombre = prompt("Ingrese su nombre").toLowerCase();
		while(nombre.length < 3 || nombre.length > 10){
			nombre = prompt("Nombre fuera de rango. Reingrese nombre: ");
		}

    carrera = prompt("Ingrese carrera(quimica/fisica/sitemas)").toLowerCase();
		while(!(carrera == "quimica" || carrera == "fisica" || carrera == "sistemas")){ 
			carrera = prompt("Error. Reingrese carrera").toLowerCase();
		}

    sexo = prompt("ingrese f ó m").toLowerCase();
		while (sexo != "f" && sexo != "m"){ //(!(sexo == `f` && sexo == `m`))
		sexo = prompt("Error. reingrese f ó m").toLowerCase();
		}
    cantidad = parseInt(prompt("Ingrese cantidad de materias entre 1 y 5"));
    while(isNaN(cantidad) || cantidad < 1 || cantidad > 5){
      cantidad = parseInt(prompt("Error. Reingrese cantidad de materias entre 1 y 5"));
    }
    nota = parseInt(prompt("Ingrese nota promedio de alumno entre 0 y 10"));
    while(isNaN(nota) || nota < 0 || nota > 10){
      nota = parseInt(prompt("Error. Reingrese cantidad de materias entre 0 y 10"));
    }
    edad = parseInt(prompt("Ingrese su edad"))
		while (isNaN(edad)){
			edad = parseInt(prompt("Edad invalidad. Ingrese una edad:"));
    }

    if(carrera == "fisica"){
      nombreProAlum = 
      acumFisica = 
      contadorFisica++;
    }


  }
}
