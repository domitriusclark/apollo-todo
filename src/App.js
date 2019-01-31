import React, { Component } from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
