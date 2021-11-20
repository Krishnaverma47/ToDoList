import React from 'react';

function TodoList(props){
    return (
        <>
        <div className="crossStyle">
            <i class="fas fa-trash-alt icon" onClick={()=>{props.onSelect(props.id)}}></i>
            <li className="listItem">{props.text}</li>
        </div>
        </>
    )
}
export default TodoList;