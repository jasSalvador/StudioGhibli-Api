/*deberás consumir la API https://studio-ghibli-films-api.herokuapp.com. Dentro de la lista podrás 
escoger una de las películas. La información que deberás pintar en la página web es: La imagen de 
la película, el título en inglés, la descripción de la misma, el título romanizado (el título japonés con
ortografía occidental), la fecha de estreno y el director de la película */

let selectPelicula = document.getElementById("selectPelicula");

selectPelicula.addEventListener("change", function (event) {
    event.preventDefault();

    let selectOpcion = this.options[selectPelicula.selectedIndex];
    //console.log(selectOpcion.value);

    let peliculaId = selectOpcion.value; // opción seleccionada

    if (selectPelicula.selectedIndex === 0) {
        let cardOculta = document.getElementById("card");
        cardOculta.classList.add("ocultarCard");
        return
    }

    let url = "https://studio-ghibli-films-api.herokuapp.com/api/" + peliculaId;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let imagenPelicula = data.poster;
            let tituloPelicula = data.title;
            let synopsisPelicula = data.synopsis;
            let tituloRom = data.hepburn
            let estrenoPelicula = data.release;
            let directorPelicula = data.director;

            //cargando la info
            let imagen = document.getElementById("cardImg");
            imagen.setAttribute("src", imagenPelicula);

            let titulo = document.getElementById("cardTitulo");
            titulo.innerText = tituloPelicula;

            let sinopsis = document.getElementById("cardDesc");
            sinopsis.innerText = synopsisPelicula;

            let romanizado = document.getElementById("cardRoma");
            romanizado.innerText = ("Titulo Romanizado: ") + tituloRom;

            let estreno = document.getElementById("cardEstreno");
            estreno.innerText = ("Año de estreno: ") + estrenoPelicula;

            let director = document.getElementById("cardDirector");
            director.innerText = ("Director: ") + directorPelicula;

            // Mostrar tarjeta al seleccionar una imagen
            let card = document.getElementById("card");
            card.classList.remove("ocultarCard");

            card.scrollIntoView({ behavior: 'smooth' }); //para que la ventana se desplace a la seccion dnd se muestra la tarjeta
        })
        .catch(error => alert("Ah ocurrido un error"))
});










