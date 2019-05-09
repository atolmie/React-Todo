import * as React from 'react';
import './Todo.scss';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div onClick={() => this.props.toggleComplete(this.props.task.id)}
                className={this.props.task.completed ? 'complete' : ''}>
                {this.props.task.task}
            </div>
        );
    }
}

export default Todo;



