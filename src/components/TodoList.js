import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { useQuery } from 'react-apollo-hooks';

import Todo from './Todo';

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 3rem;
    height: auto;
`;

const GET_TODO_LIST = gql`
    query GetTodoList {
        todos @client {
            id
            text
            isCompleted
        }
    }
`;

const TodoList = () => {
    const { data } = useQuery(GET_TODO_LIST);
    const { todos } = data;

    return (     
        <TodoListContainer>
            {todos.map((todo) => {
                const { id } = todo;
                return (
                    <Todo key={id} {...todo} />
                )
            })}
        </TodoListContainer>  
    )
}

export default TodoList
export { GET_TODO_LIST }