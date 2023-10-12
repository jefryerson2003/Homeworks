class Pelicula {
    constructor(titulo, año, director, genero) {
        this.titulo = titulo;
        this.año = año;
        this.director = director;
        this.genero = genero;
    }
}

class PilaPeliculas {
    constructor() {
        this.pila = [];
    }

    push(valor) {
        this.pila.push(valor);
        return this.pila;
    }

    pop() {
        return this.pila.pop();
    }

    peek() {
        return this.pila[this.pila.length - 1];
    }

    size() {
        return this.pila.length;
    }

    print() {
        console.log("Pila de Películas:");
        this.pila.forEach((pelicula, index) => {
            console.log(`${index + 1}. ${pelicula.titulo} (${pelicula.año}) - Director: ${pelicula.director}`);
        });
    }
}

const peliculas = [
    new Pelicula("Pelicula 1", 2022, "Director A", "Drama"),
    new Pelicula("Pelicula 2", 2020, "Director B", "Comedia"),
    new Pelicula("Pelicula 3", 2019, "Director C", "Acción"),
    new Pelicula("Pelicula 4", 2021, "Director D", "Ciencia Ficción"),
    new Pelicula("Pelicula 5", 2018, "Director E", "Aventura"),
];

const pilaDePeliculas = new PilaPeliculas();

peliculas.forEach(pelicula => pilaDePeliculas.push(pelicula));

pilaDePeliculas.print();

console.log("Pelicula en la parte superior:", pilaDePeliculas.peek());

pilaDePeliculas.pop();

pilaDePeliculas.print();

console.log("Tamaño de la pila de películas:", pilaDePeliculas.size());
