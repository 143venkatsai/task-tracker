import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

const TaskForm = (props) =>{
    const {addTask} = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDudate] = useState("");
    const [status, setStatus] = useState("Pending");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTask = { id:uuidv4(), title, description, dueDate, status}
        addTask(newTask);
        setTitle("");
        setDescription("");
        setDudate("");
        setStatus("Pending");
    }

    return(
        <form onSubmit={handleSubmit} className="mb-4 row">
            <div className="mb-3 col-md-6">
                <label htmlFor="title" className="form-label">Task Title</label>
                <input 
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    placeholder="Enter title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3 col-md-6">
                <label htmlFor="description" className="form-label">Task Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3 col-md-6">
                <label htmlFor="dueDate" className="form-label">Due Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDudate(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3 col-md-6">
                <label htmlFor="status" className="form-label">Status</label>
                <select
                    className="form-select"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default TaskForm