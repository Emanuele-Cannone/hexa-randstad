function Todo({title, status, changeStatus, deleteElement, element}){

    return(
        <div className="card mt-2">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="card-footer">
                { status && <button className="mx-2 btn btn-success" onClick={() => changeStatus(element)}>Fatto</button> }
                { !status && <button className="mx-2 btn btn-secondary" onClick={() => changeStatus(element)}>Da Fare</button> }
                <button className="mx-2 btn btn-danger" onClick={() => deleteElement(element)}>Elimina</button>
            </div>
 
        </div>
    )
}

export default Todo; 