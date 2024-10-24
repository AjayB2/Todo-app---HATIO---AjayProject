import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
        };
        fetchProjects();
    }, []);

    const createProject = async () => {
        await axios.post('/api/projects', { title });
        setTitle('');
        // Fetch projects again
        const response = await axios.get('/api/projects');
        setProjects(response.data);
    };

    return (
        <div>
            <h1>Todo Projects</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project Title"
            />
            <button onClick={createProject}>Create Project</button>
            <ul>
                {projects.map((project) => (
                    <li key={project._id}>
                        <a href={`/project/${project._id}`}>{project.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
