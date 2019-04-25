import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  // need method for adding task to state
  // this will handle to onClick method from TodoForm
  handleChanges = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    const taskList = this.state.tasks.slice();
    taskList.push(newTask);
    this.setState({ tasks: taskList });
  };



  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>
          <div className="todoListMain">
            <div className="header">
              <TodoForm addItem={this.handleChanges} />
              <TodoList tasks={this.state.tasks} />
            </div>
          </div>

        </h2>

      </div>
    );
  }
}

export default App;

{/* <TodoForm onCreate={handleChanges} /> */ }
{/* Todo form */ }
{/* Todo list - inside, loop through state tasks and render each item in Todo.js */ }
