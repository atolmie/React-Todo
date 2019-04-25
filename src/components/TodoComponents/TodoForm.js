import React from 'react';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: ''
        }
    }

    setTaskName = (event) => {
        this.setState({taskName: event.target.value});
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <input placeholder="enter task" onChange={(e) => this.setTaskName(e)} value={this.state.taskName}/>
                    <button type="submit" onClick={() => this.props.addItem(this.state.taskName)}>add</button>
                </div>
            </div>
        );
    }
}

export default TodoList;