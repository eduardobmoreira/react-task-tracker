import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => (
    <li className={task.completed ? 'completed' : ''}>
        <span onClick={() => onToggle(task.id)}>{task.text}</span>
        <button onClick={() => onDelete(task.id)} style={{marginLeft: '12px'}}>Delete</button>
    </li>    
);

export default TaskItem;