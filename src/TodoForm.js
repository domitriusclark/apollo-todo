import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';

const TodoFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
        font-size: 5rem;
    }

    & input {
        border: 1px solid rebeccapurple;
        font-size: 1.3rem;
        border-radius: 4px;
        padding: 1rem;
    }

    & button {
        padding: 1.3rem;
        background: rebeccapurple;
        color: white;
        border-radius: 4px;
        
        

        &:hover {
            cursor: pointer;
        }

    }
`

const StyledForm = styled.form`
    display: flex;
`

const ADD_TODO = gql`
    mutation AddTodo($text: String!) {
        addTodo(text: $text) @client {
            id
        }
    }
`

const TodoForm = () => {
    return (
        <Mutation mutation={ADD_TODO}>
            {(addTodo) => {
                let input;
                return (
                    <TodoFormContainer>
                        <h1>Todos</h1>
                        <StyledForm onSubmit={(e) => {
                            e.preventDefault();
                            addTodo({ variables: { text: input.value}});
                            input.value = ''
                        }}>
                            <input ref={node => {input = node}} />
                            <button>Add</button>
                        </StyledForm>          
                    </TodoFormContainer>
                )
            }}
        </Mutation>

    )
}

export default TodoForm;