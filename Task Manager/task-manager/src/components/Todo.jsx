import { useState } from "react";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo,  updateSearchTerm} from "../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
    const dispatch = useDispatch();

    const[newTodoText, setNewTodoText] = useState("");
    const[searchTerm, setSearchTerm] = useState("");
    
    const handleAddToDo = (text) => {
      dispatch(addTodo(text))
    }
    const handleAddToDoClick  = () =>{
      if(newTodoText.trim() !== ""){
        handleAddToDo(newTodoText.trim());
        setNewTodoText("")
      }
    }

    const handleSearchChange = (value) => {
      setSearchTerm(value);
      dispatch(updateSearchTerm(value));
    }


  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-200   rounded" >
        <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">PERSONAL TODO APP</h2>    
        <div className="flex items-center mb-4">

            <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)}
             type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" 
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"/>
          
            <button className="ml-4 p-3 bg-green-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleAddToDoClick}><FaPlusCircle /></button>
        </div> 


        <div className="flex items-center justify-between">

          <FilterButton/> 
          <div className="flex items-center mb-4">
          
          <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} 
          type="text" name="searchTodoInput" id="searchTodoInput" placeholder="Search Todo" 
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"/>
          
          <button className="ml-4 p-3 bg-green-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => dispatch({ type: "FILTER_TODOS" })}><FaSearch /></button>
          </div>

          </div>
          <TodoList/>
    </div>

  )
}

export default Todo