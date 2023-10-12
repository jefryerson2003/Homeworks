class Persona {
    constructor(nombre, apellido, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }
}

class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.hijos = [];
    }

    esHoja() {
        return this.hijos.length === 0;
    }
}

class ArbolNario {
    constructor() {
        this.raiz = null;
    }

    buscar(nombre, apellido, nodo = this.raiz) {
        if (!this.raiz) {
            return null;
        }

        if (nodo.valor.nombre === nombre && nodo.valor.apellido === apellido) {
            return nodo;
        } else {
            const hijos = nodo.hijos;
            const encontradoEnHijos = hijos.find(item => item.valor.nombre === nombre && item.valor.apellido === apellido);

            if (encontradoEnHijos) {
                return encontradoEnHijos;
            } else {
                let tieneHijo;
                hijos.forEach(item => {
                    if (tieneHijo) {
                        return;
                    }
                    tieneHijo = this.buscar(nombre, apellido, item);
                });

                return tieneHijo;
            }
        }
    }

    insertar(valor, padre) {
        const nuevoNodo = new Nodo(valor);

        if (!padre) {
            if (!this.raiz) {
                this.raiz = nuevoNodo;
            } else {
                return null;
            }
        } else {
            const nodoPadre = this.buscar(padre.nombre, padre.apellido);
            if (nodoPadre) {
                nodoPadre.hijos.push(nuevoNodo);
            } else {
                return null; // Padre no encontrado
            }
        }
    }

    preOrden(nodo = this.raiz) {
        if (!nodo) {
            return;
        }

        console.log(`${nodo.valor.nombre} ${nodo.valor.apellido}`);
        nodo.hijos.forEach(elemento => {
            this.preOrden(elemento);
        });
    }

    postOrden(nodo = this.raiz) {
        if (!nodo) {
            return;
        }

        nodo.hijos.forEach(elemento => {
            this.postOrden(elemento);
        });

        console.log(`${nodo.valor.nombre} ${nodo.valor.apellido}`);
    }

    enOrden(nodo = this.raiz) {
        if (!nodo) {
            return;
        }

        if (nodo.hijos.length === 0) {
            console.log(`${nodo.valor.nombre} ${nodo.valor.apellido}`);
        } else {
            this.enOrden(nodo.hijos[0]);
            console.log(`${nodo.valor.nombre} ${nodo.valor.apellido}`);

            for (let i = 1; i < nodo.hijos.length; i++) {
                this.enOrden(nodo.hijos[i]);
            }
        }
    }
}

const arbol = new ArbolNario();

arbol.insertar(new Persona("Harold", "G", "1944-12-12"), null);
arbol.insertar(new Persona("Juan", "G", "1945-12-11"), new Persona("Harold", "G"));
arbol.insertar(new Persona("Manuel", "Z", "1967-03-31"), new Persona("Harold", "G"));
arbol.insertar(new Persona("Ri", "F", "1965-04-11"), new Persona("Harold", "G"));
arbol.insertar(new Persona("Mark", "J", "2004-01-19"), new Persona("Ri", "F"));

console.log("Recorrido en Preorden:");
arbol.preOrden();

console.log("Recorrido en Inorden:");
arbol.enOrden();

console.log("Recorrido en Postorden:");
arbol.postOrden();
