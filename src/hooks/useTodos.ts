import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

type TodoProps = {
    id: string;
    title: string;
    completed: boolean;
};

const useTodos = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [todos, setTodos] = useState<TodoProps[]>([]);
    const [title, setTitle] = useState<string>("");
    const [selected, setSelected] = useState<string>("");
    const [error, setError] = useState<string>("");

    const addTodo = () => {
        if (!title) {
            setError("Please enter a title");
            return;
        }
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                title: title,
                completed: false,
            },
        ]);
        setTitle("");
    };

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    });

    const toggleTodo = (id: string) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };

    const removeTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id: string, text: string) => {
        setSelected(id);
        inputRef.current && inputRef.current.focus();
        buttonRef.current && (buttonRef.current.innerText = "Update todo");
        const oldText = text;
        setTitle(oldText);
    };

    const updateTodo = (id: string) => {
        const newTitle = title;
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title: newTitle,
                    };
                }
                return todo;
            })
        );
        setTitle("");
        setSelected("");
        buttonRef.current && (buttonRef.current.innerText = "Add todo");
    };

    return {
        error,
        title,
        setTitle,
        addTodo,
        toggleTodo,
        removeTodo,
        editTodo,
        updateTodo,
        todos,
        selected,
        inputRef,
        buttonRef,
    };
};

export default useTodos;
