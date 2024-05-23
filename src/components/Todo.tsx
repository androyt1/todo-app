import { motion, AnimatePresence } from "framer-motion";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";
import { ItemVariant } from "../constants";

const { inital, animate, exit, transition } = ItemVariant;
const Todo = () => {
    const {
        error,
        title,
        selected,
        todos,
        setTitle,
        addTodo,
        toggleTodo,
        removeTodo,
        buttonRef,
        inputRef,
        editTodo,
        updateTodo,
    } = useTodos();

    return (
        <div className='max-w-3xl mx-auto border p-5 overflow-hidden	'>
            <h1 className='text-4xl font-semibold text-center my-4'>Todo App</h1>
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={inital}
                        animate={animate}
                        exit={exit}
                        transition={transition}
                        key={"error"}
                        className='text-slate-800 my-4 bg-red-200 p-2 text-left'>
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
            <TodoInput
                title={title}
                selected={selected}
                setTitle={setTitle}
                addTodo={addTodo}
                updateTodo={updateTodo}
                inputRef={inputRef}
                buttonRef={buttonRef}
            />
            <div className='mt-4'>
                <ul>
                    <li className='grid grid-cols-9 w-full my-2'>
                        <span className='border col-span-4 p-2'>ID</span>
                        <span className='border col-span-2 p-2'>Title</span>
                        <span className='border col-span-1 p-2'>Status</span>
                        <span className='border col-span-1 p-2'>Edit</span>
                        <span className='border col-span-1 p-2'>Delete</span>
                    </li>

                    <AnimatePresence>
                        {todos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                                removeTodo={removeTodo}
                            />
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
        </div>
    );
};

export default Todo;
