import React,{useState} from "react";
import TodoList from "./TodoList";
function Todo() {
    const [inputList,setInputList] = useState("");
    const [addItem,setAddItem] = useState([]);
    function inputEvent(event){
        setInputList(event.target.value);
    }
    function saveChanges(){
        setAddItem((oldItem)=>{
            return [...oldItem,inputList];
        });
        setInputList("");
    }
    function deleteItems(id){
        setAddItem((oldItem)=>{
            return oldItem.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }
    return (
        <>
            <section className="mainSection">
                <div class="container mainContainer">
                    <h3 class="text-center mainHeading">Todos List</h3>
                    <div className="mianSubDiv">
                        <input
                            type="text"
                            class="mainInput"
                            placeholder="Add Item"
                            onChange={inputEvent}
                            value ={inputList}
                        ></input>
                        <button type="submit" className="mainBtn" onClick={saveChanges}>
                            +
                        </button>
                    </div>
                    <div className="item">
                        <ul className="innerItem">
                            {addItem.map((itemVal,index)=>{
                                return <TodoList text={itemVal} id ={index}
                                onSelect ={deleteItems}/>
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Todo;
