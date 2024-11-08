// Variables para contar respuestas
let respuestas = {
    grasa: 0,
    seca: 0,
    mixta: 0,
    sensible: 0
};

// Función para registrar las respuestas
function responder(tipo) {
    respuestas[tipo]++;
}

// Función para determinar el tipo de piel
function determinarTipoPiel() {
    let tipoPiel = Object.keys(respuestas).reduce((a, b) => respuestas[a] > respuestas[b] ? a : b);
    return tipoPiel;
}

// Función que se ejecuta al finalizar la encuesta
function obtenerRecomendaciones() {
    let tipoPiel = determinarTipoPiel();
    localStorage.setItem('tipoPiel', tipoPiel); // Guardar en localStorage
    window.location.href = 'collection.html'; // Redireccionar a la página de resultados
}

// Código para collection.html
if (window.location.pathname.includes("collection.html")) {
    document.addEventListener('DOMContentLoaded', function () {
        let tipoPiel = localStorage.getItem('tipoPiel');
        
        // Definir recomendaciones basadas en el tipo de piel
        let recomendaciones = {
            grasa: {
                descripcion: "Tienes piel grasa.",
                productos: "Productos que regulen la producción de sebo. Usar una crema hidratante ligera y no comedogénica. Protección solar: Usar protector solar de amplio espectro y sin aceite. Si hay acné, utilizar productos con ingredientes como ácido salicílico o peróxido de benzoilo.",
                momento: "Usar en la mañana y en la noche. Limpiar el rostro dos veces al día con un limpiador suave y libre de aceites. ",
                uso: "Aplicar productos en áreas propensas al brillo. Exfoliar suavemente 2-3 veces por semana para eliminar células muertas"
            },
            seca: {
                descripcion: "Tienes piel seca.",
                productos: "Productos hidratantes y cremas nutritivas. Usar mascarillas hidratantes regularmente.Usar aceites faciales para hidratar en profundidad.",
                momento: "Usar después de cada lavado. Aplicar una crema hidratante rica varias veces al día.",
                uso: "Limpiar suavemente con un limpiador cremoso y evitar el agua caliente. Exfoliar suavemente 1 vez por semana."
            },
            mixta: {
                descripcion: "Tienes piel mixta.",
                productos: "Productos para equilibrar zonas grasas y secas.  Usar un hidratante ligero en la zona T y uno más rico en las mejillas. Tratar las zonas grasas y secas con productos específicos para cada una.",
                momento: "Usar en la mañana y en la noche. Exfoliar 1-2 veces por semana.",
                uso: "Aplicar productos según las necesidades de cada zona. Limpiar la zona T (frente, nariz y barbilla) con un limpiador suave y el resto del rostro con un hidratante ligero."
            },
            sensible: {
                descripcion: "Tienes piel sensible. ",
                productos: "Productos suaves y sin fragancias. Hidratación: Usar hidratantes hipoalergénicos y sin alcohol. Usar productos calmantes con ingredientes como aloe vera o avena",
                momento: "Usar cuando sientas irritación. No excederse con el uso de productos. Evitar productos con fragancias fuertes.",
                uso: "Aplicar suavemente sin frotar cada producto."
            }
        };

        // Mostrar recomendaciones
        if (tipoPiel && recomendaciones[tipoPiel]) {
            document.getElementById('tipoPielResultado').innerText = recomendaciones[tipoPiel].descripcion;
            document.getElementById('productosUsar').innerText = recomendaciones[tipoPiel].productos;
            document.getElementById('momentoUsar').innerText = recomendaciones[tipoPiel].momento;
            document.getElementById('comoUsar').innerText = recomendaciones[tipoPiel].uso;
        }
    });
}
