import React from "react";

const TaskFilters = ({ filter, setFilter }) => {
    return (
        <div className="filters">
            <button 
                onClick={() => setFilter('all')} 
                className={`filter-btn ${filter === 'all' ? 'active all' : ''}`}>
                All
            </button>
            <button 
                onClick={() => setFilter('completed')} 
                className={`filter-btn ${filter === 'completed' ? 'active completed' : ''}`}>
                Completed
            </button>
            <button 
                onClick={() => setFilter('pending')} 
                className={`filter-btn ${filter === 'pending' ? 'active pending' : ''}`}>
                Pending
            </button>
        </div>
    );
};

export default TaskFilters;