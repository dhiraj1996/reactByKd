import TodoItem from "./TodoItem"

function TodoItemMap({ todoData }) {
    return (
        <>
            {todoData.map((list) =>
                <TodoItem todoName={list.name} todoDate={list.dueDate}>
                </TodoItem>
            )}
        </>
    )
}

export default TodoItemMap