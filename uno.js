function mostrar(){
  /*
  Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad

*/
let nombre;
let tipo;
let sangre;
let edad;
let sexo;
let seguir;

//punto a
let promEdadReptil = 0;
let contadorReptiles = 0;
let acumuladorReptiles = 0;
// punto b
let mascotaMasJoven;
let acumuladorMascMasJoven;
let contadorMascMasJoven;
let flagMascJoven = 1;
// punto c
let totalMasc;
let porcentajeAves = 0;
let acumuladorAves = 0;
let contadorAves = 0;
let acumMamiferos = 0;
let contadorMamifero = 0;

// punto d
let contadorMamifero;
let maxCantMasc;

do{
  nombre = prompt("Ingrese nombre de su mascota").toLowerCase();
  while(nombre.length < 3 || nombre.length > 8){ // (!(nombre.length >= 3 && nombre.length <= 10))
nombre = prompt("Nombre fuera de rango. Reingrese nombre mascota: ");
}
edad = parseInt(prompt("Ingrese edad de su mascota"))
  while (isNaN(edad) || edad < 0){	// (!(edad >= 1))
    edad = parseInt(prompt("Edad invalidad. Reingrese edad:"));
}
sexo = prompt("ingrese m (macho) ó h (hembra)").toLowerCase();
  while (sexo != "m" && sexo != "h"){ //(!(sexo == `m` && sexo == `h`))
  sexo = prompt("Error. reingrese m ó h").toLowerCase();
}
tipo = prompt("Ingrese tipo (mamifero/ ave/ reptil").toLowerCase();
  while(!(tipo == "mamifero" || tipo == "ave" || tipo == "reptil")){
    tipo = prompt("Error. Reingrese tipo(mamifero/ave/reptil)").toLowerCase();
  }
sangre = prompt("Ingrese si es de sangre fria o calida").toLowerCase();
while(sangre == "caliente" && tipo == "reptil"){
 sangre = prompt("No puede ser reptil y sangre caliente");
}
seguir = prompt("Desea Ingresar una nueva mascota? (si/no)").toLowerCase();
}while(seguir == "si");

if(tipo == "ave"){

  acumuladorAves += contadorAves;
  contadorAves++;
}else if(tipo == "mamifero"){
  acumMamiferos += contadorMamifero;
  contadorMamifero++;
}else{
  acumuladorReptiles += contadorReptiles;
  contadorReptiles++;
}





}
