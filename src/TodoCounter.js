//Primera forma, agregar estilos mediente la variable const "estilos"

// const estilos = {
//   backgroundColor: 'red'
// }

// function TodoCounter ({ total, completed }) {
//     return (
//       <h1 style={estilos}>Completaste {completed} de {total} TODOs</h1>
//     );
//   }

// export { TodoCounter };


// segunda forma, agregar los estilos directo en el compomente

// function TodoCounter ({ total, completed }) {
//     return (
//       <h1 style={{
//         fontSize: '50px', // no es necesaro poner px pero para declarar el formato es una buena practica
//         textAlign: 'center',
//         margin: 0,
//         padding: '48px',
//       }}>Completaste {completed} de {total} TODOs</h1>
//     );
//   }

// export { TodoCounter };

// Tercer forma, agregar los estilos mediante un archivo externo
// en los metodos anteriores los parametros de CSS no van separados por un guion "fontSize" mientras que en CSS puro "font-size"

import './TodoCounter.css';

function TodoCounter ({ total, completed }) {
    return (
        <h1>Completaste {completed} de {total} TODOs</h1>

    );
  }

export { TodoCounter };