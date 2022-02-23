import React, { Component } from 'react';
import List from './List';

class App extends Component {
  state = { 
    todos: [
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn Redux', complete: false },
    ]
  }

  render() {
    const { todos } = this.state;
 
    return (
      <div>
      <List name="Coding Todo List" items={todos} />
      <List name = "Fun Todo List" items={todos}/>
      </div>
    );
  }
}

export default App;