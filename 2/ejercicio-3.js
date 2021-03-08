/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 3 Un alumno desea saber ¿cuál será su calificación final en una materia específica?, dicha calificación se compone de los siguientes porcentajes:
•	55% del promedio de las tres calificaciones parciales.
•	30% de la calificación del examen final.
•	15% de la calificación de un trabajo final.*/

function calcular() {

    parcial1 = parseInt(document.getElementsByName('tCP1')[0].value, 10);
    parcial2 = parseInt(document.getElementsByName('tCP2')[0].value, 10);
    parcial3 = parseInt(document.getElementsByName('tCP3')[0].value, 10);
    examenFinal = parseInt(document.getElementsByName('tEF')[0].value, 10);
    trabajoFinal = parseInt(document.getElementsByName('tTF')[0].value, 10);

    let promedioParciales = Math.floor((parcial1+ parcial2 + parcial3) / 3);
    let porcentajePromedio = 55;
    let porcentajeExamen = 30;
    let porcentajeTrabajo = 15;
    let calificacionFinal = Math.floor(promedioParciales * 0.55 + examenFinal * 0.30 + trabajoFinal * 0.15);

    document.getElementsByName('tPro')[0].value = promedioParciales;
    document.getElementsByName('tPar')[0].value = porcentajePromedio;
    document.getElementsByName('tPEF')[0].value = porcentajeExamen;
    document.getElementsByName('tPTF')[0].value = porcentajeTrabajo;
    document.getElementsByName('tCF')[0].value = calificacionFinal;
}



