function mostraraleatorio() {
    let imagenes = [
        {
            src: "mderecha.gif",
            width: "150",
            height: "150"
        },
        {
            src: "lderecha.gif",
            width: "150",
            height: "150"
        },
        {
            src: "pcorriendo.gif",
            width: "150",
            height: "150"
            
        }
    ];

    let bufferImagenes = [];

    for (const e of imagenes) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes.push(imagen);
    }

    let indiceImagenAleatoria = generarEnteroAleatorio(imagenes.length);
    let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];
    
    let nuevoElementoImagen = document.body.appendChild(imagenAleatoria);
}

function generarEnteroAleatorio(cantidadImagenes) {
    return Math.floor(Math.random() * cantidadImagenes);
}