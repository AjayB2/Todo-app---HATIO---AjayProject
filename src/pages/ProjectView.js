import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectView = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const fetchProject = async () => {
            const response = await axios.get(`/api/projects/${id}`);
            setProject(response.data);
        };
        fetchProject();
    }, [id]);

    const addTodo = async () => {
        await axios.post('/api/todos', { projectId: id, description: newTodo });
        setNewTodo('');
        // Fetch project again
        const response = await axios.get(`/api/projects/${id}`);
        setProject(response.data);
    };

    if (!project) return <div>Loading...</div>;

    return (
        <div>
            <h1>{project.title}</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="New Todo"
            />
            <button onClick={addTodo}>Add Todo</button>
            <h2>Todos</h2>
            <ul>
                {project.todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.description} - {todo.status}
                        {/* Add buttons to edit, complete, and delete todos */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectView;
