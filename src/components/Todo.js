import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { useMutation } from 'react-apollo-hooks';

const TodoContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    width: auto;
    margin-top: 2rem;
    font-size: 1.3rem;
    border-radius: 4px;
    padding: 5px;

    & p {
        margin-right: 1rem;
    }
`

const TodoButton = styled.button`
    background: ${props => props.danger ? "#f90404" : "#5cc623"};
    padding: 1.2rem 1rem;
    border-radius: 4px;
    color: white;
`;

const REMOVE_TODO = gql`
    mutation RemoveTodo($id: Int!) {
        removeTodo(id: $id) @client
    }
`;

const TOGGLE_TODO = gql`
    mutation ToggleTodo($id: Int!) {
        toggleTodo(id: $id) @client
    }
`;


const Todo = (props) => {
    const { id: todoId, text, isCompleted } = props;
    const removeTodo = useMutation(REMOVE_TODO, {
        variables: { id: todoId }
    })
    const toggleTodo = useMutation(TOGGLE_TODO, {
        variables: { id: todoId }
    });

    return (
        <TodoContainer key={todoId} className="SingleTodo">
            <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{text}</p> 
            <div>
                <TodoButton onClick={toggleTodo}>Complete</TodoButton>
                <TodoButton danger onClick={removeTodo}>Delete</TodoButton>
            </div>                                                                     
        </TodoContainer>
    )

};

export default Todo;