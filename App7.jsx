import React, { useState } from "react";
import ToDolist from "./ToDolist";

const App7 = () => {

    const [inputList, setInputList] = useState("");

    // [] shows we are using array
    const [Items, setItems] = useState([]);


    const InputEvent = (event) => {
        setInputList(event.target.value);
    };
    const ChangeList = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        //use the last value of array as a oldItems than push it with the new items
        // we have uses sprade operator here

        setInputList("");
    };

    const deleteItems = (id) => {
        // console.log("clicked");
        setItems((oldItems) => {
            return oldItems.filter((arrElm, index) => {
                return index !== id;
            })
        });
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        type="text"
                        name=""
                        id=""
                        value={inputList}
                        placeholder="Add a items"
                        onChange={InputEvent}
                    />
                    <button onClick={ChangeList} > + </button>

                    <ol>
                        {/* for the using javascript in html we have to use curly braces */}
                        {Items.map((itemval, index) => {
                            return (
                                <ToDolist
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItems}
                                />);
                        })}

                    </ol>
                </div>
            </div>
        </>
    );

};

export default App7;