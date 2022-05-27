import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        const newTodosArray = [...this.state.todos, data];
        this.setState({ todos: newTodosArray });
      });
  }

  toggleCompleted(todoId) {
    const findIndex = this.state.todos.find(todo => todo.todoId === todoId);
    const { isCompleted } = findIndex;
    const oppositeComplete = { isCompleted: !isCompleted };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(oppositeComplete)
    })
      .then(res => res.json())
      .then(data => {
        const updatedTodos = this.state.todos.map(todo => {
          if (todo.todoId === data.todoId) {
            return data;
          } else {
            return todo;
          }
        });
        this.setState({ todos: updatedTodos });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
