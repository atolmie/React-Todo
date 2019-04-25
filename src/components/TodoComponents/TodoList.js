import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderList = () => {
        const taskList = this.props.tasks.map(task => {
            return <Todo key={task.task} taskName={task.task} />
        })
        return <div>{taskList}</div>
    }

    render() {
        return this.renderList()
    }

}

export default TodoList;

