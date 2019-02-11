import React, { Component, Suspense } from 'react';
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
        <Suspense fallback={<div>Loading...</div>}>
          <TodoList />
        </Suspense>        
      </AppWrapper>
    );
  }
}

export default App;
