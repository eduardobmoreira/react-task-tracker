import React, { useState } from 'react';

const TaskForm = ({ setTasks }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;

        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
        };

        setTasks(prev => [...prev, newTask]);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task ..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;