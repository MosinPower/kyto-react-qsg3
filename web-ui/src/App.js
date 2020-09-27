import React from 'react';
import TodoListBox from "./Todo/TodoListBox";
import Context from "./Context";
import AddTodo from "./Todo/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить хлеб'},
        {id: 2, completed: false, title: 'Купить масло'},
        {id: 3, completed: false, title: 'Купить молоко'},
    ])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))

    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title: title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeTodo: removeTodo}}>
            <div className='wrapper'>
                <h1>React tutorial</h1>
                <AddTodo onCreate={addTodo}/>
                {
                    todos.length ?
                        <TodoListBox todos={todos} onToggle={toggleTodo}/>
                        :
                        <p>No todos</p>
                }

            </div>
        </Context.Provider>
    )
}

export default App;
