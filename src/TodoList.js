function TodoList (props) {
    return (
      <ul>
        {props.children}
      </ul>
    );
  }

export { TodoList };

// react entiende que children es todo lo que va entre (en sete caso los UL) completando con la info de TodoItems