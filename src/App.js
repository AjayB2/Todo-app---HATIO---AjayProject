import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectView from './pages/ProjectView';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectView />} />
            </Routes>
        </div>
    );
};

export default App;
