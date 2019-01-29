import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TODO_LIST = gql`
  query GetTodoList {
    todos @client {
      list
    }
  }
`

class App extends Component {
  render() {
    return (
      <Query query={GET_TODO_LIST}>
        {({ loading, error, data}) => {
          if (error) return <h1>ERROR...</h1>
          if (loading) return <h1>Loading</h1>

          return (
            <div className="App">
              {data.todos.list.map((todo) => {
                return <p>{todo}</p>
              })}
            </div>
          )
        }}
      </Query>
      
    );
  }
}

export default App;
