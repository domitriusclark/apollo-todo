import gql from 'graphql-tag';

let nextTodoId = 0;

export default {
    Mutation: {
        addTodo: (_, { text}, { cache }) => {
            const query = gql`
                query GetTodos {
                    todos @client {
                        id 
                        text
                        isCompleted
                    }
                }
            `

            const previousState = cache.readQuery({ query });
    
            const newTodo = {
                __typename: 'TodoItem',
                id: nextTodoId++,
                text,
                isCompleted: false,
            }
    
            const data = {
                todos: previousState.todos.concat([newTodo])
            };
    
            cache.writeData({ data });
            return newTodo
    
        },
        removeTodo: (_, { id }, { cache }) => {
            const query = gql`
                query GetTodos {
                    todos @client {
                        id 
                        text
                        isCompleted
                    }
                }
            `

            const currentTodos = cache.readQuery({ query });

            const removedTodoArr = currentTodos.todos.filter(todo => {
                    return todo.id !== id; 
            })

            const data = {
                todos: removedTodoArr
            }

            cache.writeData({ data });
            
            return null;
        }
    },
}