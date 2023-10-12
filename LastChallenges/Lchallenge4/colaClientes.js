class Cola {
    constructor(){
        this.cola = [];
    }

    encolar(valor){
        this.cola.push(valor);
        return this.cola;
    }

    desencolar(){
        return this.cola.shift();
    }

    verFrente(){
        return this.cola[0];
    }

    tamaño(){
        return this.cola.length;
    }

    estaVacia(){
        return this.cola.length === 0;
    }

    imprimir(){
        console.log("Contenido de la cola:");
        this.cola.forEach(item => {
            console.log(`- ${item.nombre} (Hora de llegada: ${item.horaLlegada})`);
        });
    }
}

class Cliente {
    constructor(nombre, horaLlegada) {
        this.nombre = nombre;
        this.horaLlegada = horaLlegada;
    }
}

const colaEspera = new Cola();

const datosClientes = [
    { nombre: "Lucía", horaLlegada: "10:00 AM" },
    { nombre: "Carlos", horaLlegada: "10:15 AM" },
    { nombre: "Juan", horaLlegada: "10:30 AM" },
    { nombre: "Laura", horaLlegada: "11:00 AM" },
    { nombre: "María", horaLlegada: "11:20 AM" },
    { nombre: "Pedro", horaLlegada: "11:30 AM" },
    { nombre: "Ana", horaLlegada: "12:00 PM" },
    { nombre: "Luis", horaLlegada: "12:15 PM" },
    { nombre: "Elena", horaLlegada: "12:30 PM" },
    { nombre: "Gabriel", horaLlegada: "12:45 PM" }
];

datosClientes.forEach(clienteData => {
    const cliente = new Cliente(clienteData.nombre, clienteData.horaLlegada);
    colaEspera.encolar(cliente);
});

colaEspera.imprimir();

console.log("Tamaño de la cola de espera:", colaEspera.tamaño());

console.log("Próximo cliente en ser atendido:", colaEspera.verFrente());

console.log("Tamaño de la cola de espera después de procesar:", colaEspera.tamaño());
    