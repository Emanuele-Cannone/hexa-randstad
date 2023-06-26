export function TodoForm( {addTodo, changeNewTodo, newTodo} ){

    return (
        <form onSubmit={addTodo}>
            <input type="text" className="form-control" placeholder="Add Todo Field" aria-describedby="btnAddTodo" onChange={changeNewTodo} value={newTodo} />
            <button className="btn btn-outline-success" type="submit">Add</button>
        </form>
    )



}


// export default TodoForm