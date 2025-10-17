// types.ts

export interface Task {
    id: string;
    name: string;
    completed: boolean;
}

export interface TaskContextType {
    tasks: Task[];
    userName: string;
    setUserName: (name: string) => void;
    addTask: (name: string) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
}