
import { Todo } from "../Pages/TodoListPage";

type TodoProps = Todo & {
    deleteTodo: (id: number) => void,
    toggleDone: (id: number) => void,
};

export const TodoComponent = ({
    id,
    todo,
    isDone,
    deleteTodo,
    toggleDone,
}: TodoProps) => {
    return (
        <li
            className={isDone ? "todo done" : "todo"}
        >
            <div onClick={() => toggleDone(id)}>
                {isDone ? <p><s>{todo}</s></p>
                        : <p>{todo}</p>}
            </div>
            <button onClick={() => deleteTodo(id)}>delete</button>
        </li>
    );
};