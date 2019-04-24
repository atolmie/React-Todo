import * as React from 'react';
import './Todo.scss';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {};

    }
    render() {
        return (
            <div className="todolistMain">
                <div className="header">
                    <form>
                        <input placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Todo; 