import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      list
    }
  }

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTodo]
    });
  };

  toggleTodo = id => {
    this.setState({
      list: this.state.list.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(todo => !todo.completed)
    })
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ToDo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          list={this.state.list}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
