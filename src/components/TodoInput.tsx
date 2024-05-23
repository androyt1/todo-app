type TodoInputProps = {
    title: string;
    selected: string;
    setTitle: (title: string) => void;
    addTodo: () => void;
    updateTodo: (id: string) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    buttonRef: React.RefObject<HTMLButtonElement>;
};

const TodoInput = ({
    title,
    selected,
    inputRef,
    buttonRef,
    setTitle,
    addTodo,
    updateTodo,
}: TodoInputProps) => {
    return (
        <div>
            <label htmlFor='todoInput' className='block text-sm font-medium text-gray-700'>
                Enter Todo
            </label>
            <input
                ref={inputRef}
                id='todoInput'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter Todo'
                className='w-full px-3 my-1 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 sm:text-sm'
            />
            <button
                ref={buttonRef}
                onClick={() => {
                    buttonRef.current?.innerText === "Add todo" ? addTodo() : updateTodo(selected);
                }}
                className='bg-slate-200 px-6 py-2 rounded-lg font-semibold mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                aria-label='Add or update a todo'>
                Add todo
            </button>
        </div>
    );
};

export default TodoInput;
