import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import {loadTasks, saveTasks} from './utils/storage';

function App() {
    const [tasks, setTasks] = useState(loadTasks());
    const [filter, setFilter] = useState('all');
    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    return (
        <div className="App">
            <Header />
            <TaskForm setTasks={setTasks} />
            <TaskFilters filter={filter} setFilter={setFilter} />
            <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />       
        </div>
    );
}

export default App;