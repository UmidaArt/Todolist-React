import React, {useEffect, useState} from 'react';
import TodoItem from "../TodoItem";
import "./TodoList.css"

const TodoList = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [newTodo, setNewTodo] = useState('')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handlePress = (e) => {
        if (e.code === 'Enter' && newTodo.length) {
           addNewItem()
        }
    }

    const addNewItem = () => {
        setTodos([...todos, {title: newTodo, isDone: false}])
        setNewTodo('')
    }

    const handleDone = (e, index) => {
        const updatedArray = todos.map((item,idx) => {
            if (index === idx) {
                return {...item, isDone: e.target.checked}
            }
            return item
        })
        setTodos(updatedArray)
    }

    const deleteItem = (index) => {
        const filteredList = todos.filter((item, idx) => index !== idx)
        setTodos(filteredList)
    }
    return (
        <div className="todo">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="todoTitle">TO D0 LIST </h1>
                    <h3>Counter new items : {todos.length}</h3>
                    <input type="text"
                           className="form-control"
                           onChange={handleChange}
                           value={newTodo}
                           onKeyPress={handlePress}
                    />
                    <button className="btn btn-success w-100 mt-3"
                            onClick={addNewItem}
                            disabled={newTodo.trim().length === 0}>Add new item
                    </button>
                    <ul className="list-group mt-5">
                        {
                            todos.map((item, idx) => (
                                <TodoItem key={idx}
                                          item={item}
                                          index={idx}
                                          handleDone ={handleDone}
                                          deleteItem={deleteItem}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;