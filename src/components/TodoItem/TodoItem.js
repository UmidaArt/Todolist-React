import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import "./TodoItem.css"

const TodoItem = ({item, index, handleDone, deleteItem}) => {
    return (
        <div>
            <li key={item.id} className="list-group-item d-flex justify-content-between">
                <div>
                    <input type="checkbox"
                           className="form-check-input"
                           id="exampleCheck1"
                           onChange={(e) => handleDone(e, index)}
                    />
                    <span className={`ms-2 ${item.isDone ? 'text-decoration-line-through' : ''}`}>{item.title}</span>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => deleteItem(index)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </li>
        </div>
    );
};

export default TodoItem;