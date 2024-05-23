import { motion } from "framer-motion";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ItemVariant } from "../constants";

type TodoProps = {
    id: string;
    title: string;
    completed: boolean;
    toggleTodo: (id: string) => void;
    editTodo: (id: string, text: string) => void;
    removeTodo: (id: string) => void;
};

const TodoItem = ({ id, title, completed, toggleTodo, editTodo, removeTodo }: TodoProps) => {
    const { inital, animate, exit, transition } = ItemVariant;

    return (
        <motion.li
            initial={inital}
            animate={animate}
            transition={transition}
            exit={exit}
            key={id}
            className={` even:bg-slate-100 ${completed ? "line-through" : ""}`}>
            <div className='grid grid-cols-9 w-full my-2'>
                {" "}
                <div className='border col-span-4 p-2'>{id}</div>
                <div className='border col-span-2 p-2'>{title}</div>
                <div key={id} className='border col-span-1 p-2 flex justify-start items-center'>
                    <input
                        type='checkbox'
                        checked={completed}
                        className='w-4 h-4 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        onChange={() => toggleTodo(id)}
                        id={`checkbox-${id}`}
                        aria-label={`Mark todo as ${
                            completed ? "incomplete" : "complete"
                        }: ${title}`}
                    />
                </div>
                <div className='border col-span-1 p-2 flex justify-start items-center'>
                    <button
                        onClick={() => editTodo(id, title)}
                        className='cursor-pointer p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        aria-label={`Edit todo: ${title}`}>
                        <FiEdit />
                    </button>
                </div>
                <div className='border col-span-1 p-2 flex justify-start items-center'>
                    <button
                        onClick={() => removeTodo(id)}
                        className='cursor-pointer p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500'
                        aria-label={`Delete todo: ${title}`}>
                        <RiDeleteBin5Fill />
                    </button>
                </div>
            </div>
        </motion.li>
    );
};

export default TodoItem;
