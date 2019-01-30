import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import Todo from './Todo';

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 3rem;
    height: auto;
`
const GET_TODO_LIST = gql`
    query GetTodoList {
        todos @client {
            id
            text
            isCompleted
        }
    }
` 

const TodoList = () => {
    return (
        <Query query={GET_TODO_LIST}>
            {({data, error, loading}) => {
                if (error) return <h1>Error...</h1>
                if (loading) return <h1>loading...</h1>

                return (                
                    <TodoListContainer>
                        {data.todos.map((todo) => {
                            const { id, text } = todo;
                            return (
                                <Todo id={id} text={text} />
                            )
                        })}
                    </TodoListContainer>                    
                )
            }}
        </Query>
    )
}

export default TodoList
export { GET_TODO_LIST }