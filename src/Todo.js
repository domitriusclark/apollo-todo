import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

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
`



const REMOVE_TODO = gql`
    mutation RemoveTodo($id: Int!) {
        removeTodo(id: $id) @client
    }
`

const TOGGLE_TODO = gql`
    mutation ToggleTodo($id: Int!) {
        toggleTodo(id: $id) @client
    }
`

const Todo = (props) => {
    const { id, text, isCompleted } = props;
    return (
        <Mutation mutation={REMOVE_TODO} variables={{ id }}>
            {(removeTodo) => {
                return (                    
                    <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
                        {toggleTodo => {
                            return (
                                <TodoContainer key={id} className="SingleTodo">
                                    <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{text}</p> 
                                    <div>
                                        <TodoButton onClick={toggleTodo}>Complete</TodoButton>
                                        <TodoButton danger onClick={removeTodo}>Delete</TodoButton>
                                    </div>                                                                     
                                </TodoContainer>
                            )
                        }}                            
                    </Mutation>                                               
                )
            }}
        </Mutation>
    )
};

export default Todo;