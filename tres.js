function mostrar() {
  /*
  Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)
  */

  let tipo;
  let origen;
  let precio;
  let seguir;
  let cantidad;
  let iva;

  //punto a
  let acumPelota;
  let contadorPelota;
  let acumRompecabezas;
  let contadorRompecabezas;
  let acumMuñeca;
  let contadorMuñeca;
  let JugueteMasVendido;
  let contadorJuguete;
  let acumuladorJuguete;
  //punto b
  let promJugueteImport;
  let contJugueteImport;
  //Punto c
  let recaudaciontotal;
  //punto d
  let precioRompeNacional;
  let rompeCabezasMasBarato;

  do {
    tipo = prompt("Ingrese juguete (muñeca/rompecabezas/pelota)").toLowerCase();
    while (!(tipo == "muñeca" || tipo == "rompecabezas" || tipo == "pelota")) {
      tipo = prompt("Error. Reingrese Juguete invalido").toLowerCase();
    }
    origen = prompt("Ingrese el origen (nacional/importado)").toLowerCase();
    while (!(origen == "nacional" || origen == "importado")) {
      origen = prompt(
        "Origen invalido. Ingrese (nacional/importado): "
      ).toLowerCase();
    }
    precio = parseInt(prompt("Ingrese el precio entre 1000 y 5000 pesos"));
    while (isNaN(precio) || precio < 1000 || precio > 5000) {
      precio = parseInt(
        prompt("Error. Reingrese el precio entre 1000 y 5000 pesos")
      );
    }

    if (tipo == "pelota") {
      acumPelota = acumPelota + contadorPelota;
      contadorPelota++;
    } else if (tipo == "rompecabezas") {
      acumRompecabezas += contadorRompecabezas;
      contadorRompecabezas++;
    } else {
      acumMuñeca += contadorMuñeca;
      contadorMuñeca++;
    }

    seguir = prompt("Desea seguir ingresando juguetes: (si/no)");
  } while (seguir == "si");
}
