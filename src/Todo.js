import React from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

const TodoContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 20rem;
    margin-top: 2rem;
`

const REMOVE_TODO = gql`
    mutation RemoveTodo($id: Int!) {
        removeTodo(id: $id) @client
    }
`

const Todo = (props) => {
    const { id, text } = props;
    return (
        <Mutation mutation={REMOVE_TODO} variables={{ id }}>
            {(removeTodo) => {
                return (
                    <TodoContainer key={id} className="SingleTodo">
                        <input type="checkbox" />
                        <p>{text}</p>
                        <button onClick={removeTodo}>Delete</button>
                    </TodoContainer>
                )
            }}
        </Mutation>
    )
};

export default Todo;