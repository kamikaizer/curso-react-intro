import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItems.js';
import { CreateTodoButton } from './CreateTodoButton.js';

import './App.css';
import React from 'react';

// Primera forma de renderizar creando un div

// function App() {
//   return (
//     <div className="App">

//       <TodoCounter completed={16} total={25}/>
//       <TodoSearch />

//       <TodoList>
//         <TodoItem />
//         <TodoItem />
//         <TodoItem />
//       </TodoList>

//       <CreateTodoButton />

//     </div>
//   );
// }

// segunda forma de renderizar usando React.Fragment

// function App() {
//   return (
//     <React.Fragment>
//       <TodoCounter completed={16} total={25} />
//         <TodoSearch />

//           <TodoList>
//             <TodoItem />
//             <TodoItem />
//             <TodoItem />
//           </TodoList>

//         <CreateTodoButton />
//     </React.Fragment>
//    );
// }

// Tercera forma de renderizar usando array
// se declaran los todoitems mediante array para que sean renderizados despues en el todolist

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortar papas', completed: true },
  { text: 'terminar el curso', completed: false },
  { text: 'llorar con la llorona', completed: false },
];

function App () {
  return (
    <React.Fragment>
       <TodoCounter completed={16} total={25} />

         <TodoSearch />

           <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
              />
            ))}
           </TodoList>

         <CreateTodoButton />

    </React.Fragment>
  )
}




// TodoItem es un componente reutilizable

export default App;
// export default TodoItem; 
// se puede llamar asi o como en la linea 8 <TodoItem />
