// Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
// 1) Ana, Osvaldo, Raúl, Celia, María, Antonio
// (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

let clasificaciones = ['Ana', 'Osvaldo', 'Raúl', 'Celia', 'María', 'Antonio'];

// 2)  Imprime la clasificación actual

document.write(clasificaciones + "<br><br>");

// 3) Antes de comenzar la carrera se solicita que se ordenen alfabéticamente según su nombre

clasificaciones.sort();

// El concurso continua, y se van modificando esas posiciones anteriores. Debemos cambiar en el array:
// 4) Raul es descalificado y se elimina del concurso

clasificaciones.splice(5,1);

// 5) Delante de Ana y  Antonio se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden

clasificaciones.unshift('Roberto', 'Amaya');

// 6) Hay una nueva participante que se suma al final de la lista: Marta

clasificaciones.push('Marta');

// 7) Ocurre un imprevisto y se invierte el orden de los concursantes

clasificaciones.reverse();

// 8) Imprime la clasificación actualizada y menciona en un h1 a quien ganó

document.write(clasificaciones + "<br>");
document.write(`<h1>El primer puesto es para ${clasificaciones[0]}!`);