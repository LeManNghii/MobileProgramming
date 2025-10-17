// app/context/context.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Task, TaskContextType } from '../types';

// Giá trị khởi tạo mặc định cho Context
const defaultContextValue: TaskContextType = {
    tasks: [],
    userName: 'User',
    setUserName: () => {},
    addTask: () => {},
    toggleTask: () => {},
    deleteTask: () => {},
};

const TaskContext = createContext<TaskContextType>(defaultContextValue);

const initialTasks: Task[] = [
    { id: '1', name: 'To check email', completed: true },
    { id: '2', name: 'UI task web page', completed: false },
    { id: '3', name: 'Learn javascript basic', completed: true },
    { id: '4', name: 'Learn HTML Advance', completed: true },
    { id: '5', name: 'Medical App UI', completed: false },
    { id: '6', name: 'Learn Java', completed: false },
];

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [userName, setUserName] = useState<string>('Twinkle');

    const addTask = (name: string) => {
        const newId = Date.now().toString(); 
        const newTask: Task = { id: newId, name, completed: false };
        setTasks((prevTasks) => [newTask, ...prevTasks]);
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };
    
    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const value: TaskContextType = {
        tasks,
        userName,
        setUserName,
        addTask,
        toggleTask,
        deleteTask,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTasks = () => useContext(TaskContext);