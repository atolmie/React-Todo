import * as React from 'react';
import './Todo.scss';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {};

    }
    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                        placeholder="enter task">
                </input>
                <button type="submit">add</button>
              </form>
            </div>
          </div>
        );
      }
}

export default Todo; 