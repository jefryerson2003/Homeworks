const todoItems = [];

function agregarTarea(titulo, descripcion, siguienteTarea) {
  const tarea = {
    titulo,
    descripcion: descripcion || null,
    siguienteTarea: siguienteTarea || null,
  };
  todoItems.push(tarea);
}

function imprimirTareas() {
  for (const tarea of todoItems) {
    console.log(`- ${tarea.titulo}`);
    if (tarea.descripcion) {
      console.log(`  Descripción: ${tarea.descripcion}`);
    }
    if (tarea.siguienteTarea) {
      console.log(`  Siguiente Tarea: ${tarea.siguienteTarea.titulo}`);
    }
  }
}

agregarTarea('Comprar frutas', 'Leche', 'Huevos');
agregarTarea('Ir al gimnasio', 'Hacer ejercicio');
agregarTarea('Escribir un libro', 'Escribir el capítulo 1', 'Revisar capítulo 2');

imprimirTareas();
