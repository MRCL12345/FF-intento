//!---------------------------------------------------------------------------ACELERACION
function aceleracion() {
  swal(`Que problema necesitas?`, {
    buttons: {
      cancel: "Cancelar",
      infi: "Inicial-Final",
      basica: "Basica",
    },
  }).then((value) => {
    switch (value) {
      case "cancel":
        break;
      case "infi":
        aif();
        break;
      case "basica":
        abasica();
        break;
      default:
        break;
    }
  });
}
function abasica() {
  let velocidad = parseFloat(prompt("Introduzca su velocidad"));
  let tiempo = parseFloat(prompt("Introduzca el tiempo empleado"));
  let r = velocidad / tiempo;
  swal(
    `
  ACELERACIÓN`,
    `Formula:
    a = v/t
    ------
    Recursos:
    v = ${velocidad}m/s
    t =  ${tiempo}s
    ------
    Resultado:
    a = ${r}m/s²
  `
  );
}
function aif() {
  let vi = parseFloat(prompt("Ingresa tu velocidad inicial"));
  let vf = parseFloat(prompt("Ingresa velocidad final"));
  let tiempo = parseFloat(prompt("Ingresa el tiempo"));
  let r = (vf - vi) / tiempo;
  swal(
    `ACELERACIÓN Vi-Vf`,
    `Formula:
    a = Vf - Vi/t 
    -----
    Recursos:
    Vi = ${vi}m/s
    Vf = ${vf}m/s
    t = ${tiempo}s
    -----
    Resultado:
    a = ${r}m/s²`
  );
}
//!-------------------------------------------------------------------------------------EC
function ecbasica() {
  let masa = parseFloat(prompt(`Introduce la masa`));
  let velocidad2 = parseFloat(prompt(`Introduce la velocidad al cuadrado`));
  let r = velocidad2 * velocidad2 * masa * 0.5;
  swal(
    `
  ENERGIA CINÉTICA`,
    `Formula:
  Ec = v²·m/2 
  -----
  Recursos:
  v² = ${velocidad2}m/s²
  m = ${masa}kg
  ----
  Resultado:
  Ec = ${r}J
  `
  );
}
//!-------------------------------------------------------------------------------------EMEC
function emecbasica() {
  let Ec = parseFloat(prompt("Ingresa la Energía Cinética"));
  let Ep = parseFloat(prompt("Ingresa la Energía Potencial"));
  let r = Ec + Ep;
  swal(
    `ENERGIA MECÁNICA`,
    `Formula:
    Emec. = Ec + Ep
    -----
    Recursos:
    Ec = ${Ec}J
    Ep = ${Ep}J
    -----
    Resultado:
    Emec. = ${r}J`
  );
}
//!-------------------------------------------------------------------------------------EP
function epbasica() {
  let masa = parseFloat(prompt("Introduce la masa"));
  let altura = parseFloat(prompt("Introduce la altura"));
  let r = masa * altura * 9.81;
  swal(
    `
  ENERGIA POTENCIAL`,
    `Formula:
  Ep = m·g·h
  -----
  Recursos:
  m = ${masa}kg
  h = ${altura}m
  g = 9.81m/s²
  -----
  Resultado:
  Ep = ${r}J
  `
  );
}

//!-------------------------------------------------------------------------------------FUERZA
function fbasica() {
  let masa = parseFloat(prompt("Introduzca su masa"));
  let aceleracion = parseFloat(prompt("Introduzca su aceleración"));
  let r = masa * aceleracion;
  swal(
    `
  Fuerza`,
    `Formula:
  F = m·a
  -----
  Recursos:
  m = ${masa}kg
  a = ${aceleracion}m/s²
  -----
  Resultado:
  F = ${r}N
  `
  );
}

//!-------------------------------------------------------------------------------------POTENCIA
function pbasica() {
  let tmec = parseFloat(prompt("Introduzca el trabajo mecánico"));
  let t = parseFloat(prompt("Introduzca el tiempo empleado"));
  let r = tmec * t;
  swal(
    `Potencia Basica`,
    `Formula:
    P = Tmec · t
    ------
    Recursos:
    Tmec = ${tmec}
    t = ${t}
    ------
    Resultado:
    P = ${r} Watts`
  );
}

//!-------------------------------------------------------------------------------------TMEC
function tmecbasica() {
  let fuerza = parseFloat(prompt("Ingrese la fuerza"));
  let distancia = parseFloat(prompt("Ingrese la distancia"));
  let r = fuerza * distancia;
  swal(
    `TRABAJO MECÁNICO`,
    `Formula:
    Tmec. = F·d
    -----
    Recursos: 
    F = ${fuerza}N
    d = ${distancia}m
    -----
    Resultado:
    Tmec. = ${r}J`
  );
}
//!-------------------------------------------------------------------------------------T
function tbasica() {
  let f = parseFloat(prompt("Introduzca la fuerza"));
  let d = parseFloat(prompt("Introduzca la distancia"));
  let r = f * d;
  swal(
    `Trabajo`,
    `Formula:
    W = f · d
    ------
    Recursos:
    F = ${f}
    d = ${d}
    ------
    Resultado: 
    W = ${r}J`
  );
}

//!-------------------------------------------------------------------------------------VELOCIDAD
function vbasica() {
  let distancia = parseFloat(prompt("Introduce tu distancia"));
  let tiempo = parseFloat(prompt("Introduce el tiempo"));
  let r = distancia / tiempo;
  swal(
    `Velocidad`,
    `Formula:
    v = d/t
    -----
    Recursos:
    d = ${distancia}m
    t = ${tiempo}s
    -----
    Resultado: 
    v = ${r}m/s`
  );
}

//!-------------------------------------------------------------------------------------ENERGIAS
function energias() {
  swal({
    buttons: {
      cancel: "Cancelar",
      ep: "Potencial",
      ec: "Cinética",
      e: "Energia",
      emec: "Mecánica",
    },
  }).then((value) => {
    switch (value) {
      case "ep":
        epbasica();
        break;
      case "ec":
        ecbasica();
        break;
      case "e":
        e();
        break;
      case "emec":
        emecbasica();
        break;
    }
  });
}
//_______________________ENERGIA EN SI
function e() {
  swal("Fórmula:", "E = mc²");
}
//!-------------------------------------------------------------------------------------
