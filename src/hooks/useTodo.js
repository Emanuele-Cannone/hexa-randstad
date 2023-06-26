import { useState } from "react"


const useTodo = () => {

    const [todoList, setTodoList] = useState(
        [
          {
            id: 1,
            title: 'Compra il pane',
            done: true 
          },
          {
            id: 2,
            title: 'Compra il latte',
            done: false
          },
          {
            id: 3,
            title: 'Compra il vino',
            done: false
          }
        ]
      )
    
    
    const [newTodo, setNewTodo] = useState('')

    const changeNewTodo = (e) => {

        setNewTodo(e.target.value)
    
      }
    
      const setStatusHandler = (todo) => {
    
    
        const newList = todoList.map((el) => {
    
          if(el.id === todo.id){
            
            el.done = !el.done
            
          }
    
          return el
    
        })
    
    
        setTodoList(newList)
    
      }
    
      const deleteTODO = (todo) => {
    
        const newList = todoList.filter( (element) => todo.id !== element.id)
    
        setTodoList(newList)
      }
    
      const addTodo = (e) => {
    
        e.preventDefault();
    
        const newItemTodo = {
          id: 4,
          title: newTodo,
          done: true
        }
    
        const newItemList = [...todoList, newItemTodo]
    
    
        setTodoList(newItemList)
    
        setNewTodo('')
    
    
    }



    return {
        newTodo,
        todoList,
        addTodo,
        deleteTODO,
        changeNewTodo,
        setStatusHandler

    }




}




export default useTodo