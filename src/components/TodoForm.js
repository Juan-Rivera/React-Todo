import React from 'react';
class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            todoNote: '',
        };
    }

    handleChanges = e => {
        this.setState({
            todoNote: e.target.value
        });
    };
    submitForm = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoNote);
        this.setState({
            todoNote: ''
        });
    };
    render(){
        return(
            <form onSubmit={this.submitForm}>
                <input
                    onChange={this.handleChanges}
                    type='text'
                    name='todo'
                    value={this.state.todoNote}
                />
                <button>Add ToDo</button>
            </form>
        );
    }
}
export default TodoForm;