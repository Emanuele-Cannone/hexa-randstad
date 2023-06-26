import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/todo';
import useTodo from './hooks/useTodo';
// import TodoForm from './components/TodoForm';
import { TodoForm } from './components/TodoForm';



function App() {

  const { newTodo, todoList, addTodo, deleteTODO, changeNewTodo, setStatusHandler } = useTodo()

  return (
    <div className="container">

      <h1 className="text-center mt-2">Todo List</h1>

      <div className='d-flex justify-content-center'>
        <div className="input-group mb-3 w-50">
          <TodoForm 
            addTodo = {addTodo}
            changeNewTodo = {changeNewTodo}
            newTodo = {newTodo}
          />
        </div>
      </div>


      <div className="d-flex justify-content-between">
        <div>
          <h4>Da Fare</h4>
          <div className="d-flex mt-3">
            {todoList.map( (element, index) => {
              
              if(element.done){

                return(
                  <Todo
                    key = {index}
                    title = {element.title}
                    status = {element.done}
                    changeStatus = {setStatusHandler}
                    deleteElement = {deleteTODO}
                    element = {element}
                  />
                )

              }
              return ''

            })}
          </div>
        </div>
        <div>
          <h4>Fatti</h4>
          <div className="d-flex mt-3">
            {todoList.map( (element, index) => {
              
              if(!element.done){

                return(
                  <Todo
                    key = {index}
                    title = {element.title}
                    status = {element.done}
                    changeStatus = {setStatusHandler}
                    deleteElement = {deleteTODO}
                    element = {element}
                  />
                )

              }
              
              return ''

            })}
          </div>
        </div>
      </div>


      
    </div>
  );
}

export default App;
