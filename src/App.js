import React from 'react';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  // need method for adding task to state
  // this will handle to onClick method from TodoForm
  handleChanges = event => {
    console.log(event.target.value);
    const newTask = {
      task: event.target.value,
      id: Date.now(),
      completed: false
    };
    const taskList = this.state.tasks.slice();
    taskList.push(newTask);
    this.setState({tasks: taskList});
  };

  var destination = document.querySelector('#container');

  React DOM render (
    <div>
    <p>Todo</p>
    </div>,
    destination
  );

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {/* <TodoForm onCreate={handleChanges} /> */}
        {/* Todo form */}
        {/* Todo list - inside, loop through state tasks and render each item in Todo.js */}
      </div>
    );
  }
}

export default App;

