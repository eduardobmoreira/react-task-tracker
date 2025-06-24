import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks, filter }) => {
    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if(filter === 'completed')  return task.completed;
        if(filter === 'pending') return !task.completed;
        return true;
    });

    return (
        <ul>
            {filteredTasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={toggleComplete}
                    onDelete={deleteTask}
                />
            ))}
        </ul>
    );
};

export default TaskList;