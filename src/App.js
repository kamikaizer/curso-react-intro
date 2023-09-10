import { TodoCounter } from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItems.js';
import { CreateTodoButton } from './CreateTodoButton.js';


import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />

    </div>
  );
}





// TodoItem es un componente reutilizable

export default App;
// export default TodoItem; 
// se puede llamar asi o como en la linea 8 <TodoItem />
