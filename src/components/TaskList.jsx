import React from "react";

const TaskList = (props) =>{
    const {tasks, editTask, deleteTask} = props;

    return(
        <div>
            <h1>Task List</h1>
            <div>
                {tasks.length > 0? (
                    <div>
                        {tasks.map((task, index) => {
                            return (
                                <div className="card mb-3" style={{ maxWidth: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{task.title}</h5>
                                    <p className="card-text">{task.description}</p>
                                    <p className="card-text"><small className="text-muted">Due: {task.dueDate}</small></p>
                                    <p className="card-text"><small className="text-muted">Status: {task.status}</small></p>
                                    <button className="btn btn-warning btn-sm" onClick={() => editTask(index)}>Edit</button>
                                    <button className="btn btn-danger btn-sm m-1" onClick={deleteTask}>Delete</button>
                                </div>
                                </div>
                            );
                        })
                        }
                    </div>
                ):(
                    <p className="text-center">No tasks available</p>
                )
                }
            </div>
            
        </div>
    )
}

export default TaskList