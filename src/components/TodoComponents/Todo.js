import * as React from 'react';
import './Todo.scss';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {};

    }
    render() {
        return (
            <div> {this.props.taskName}</div>
        );
    }
}

export default Todo; 