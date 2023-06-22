import React from "react";

const ToDolist = (props) => {

    return (
        <>
            <div className="todo_style">
                <i 
                className="fa fa-times" 
                aria-hidden="true" 
                onClick={()=>{
                    return props.onSelect(props.id);
                }} />
                <li> {props.text} </li>
            </div>
        </>

    );

};

export default ToDolist;