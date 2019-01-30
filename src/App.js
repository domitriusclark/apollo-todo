import React, { Component } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const AppWrapper = styled.div`
	margin: 7rem;
`

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
		<TodoForm />
		<TodoList />
      </AppWrapper>
    );
  }
}

export default App;
