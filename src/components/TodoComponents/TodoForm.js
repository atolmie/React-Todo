import React from 'react';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: ''
        }
    }

    setTaskName = (event) => {
        this.setState({ taskName: event.target.value });
    }

    handleSubmit = () => {
        this.props.addItem(this.state.taskName);
        this.setState({ taskName: '' });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <input placeholder="enter task" onChange={this.setTaskName} value={this.state.taskName} />
                    <button type="submit" onClick={this.handleSubmit}>add</button>
                </div>
            </div>
        );
    }
}

export default TodoList;