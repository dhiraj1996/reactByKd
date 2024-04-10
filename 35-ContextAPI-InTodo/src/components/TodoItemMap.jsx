import TodoItem from "./TodoItem"

function TodoItemMap({ todoData, handleDelete }) {
    return (
        <>
            {todoData.map((list, index) =>
                <TodoItem key={index}
                todoName={list.name} 
                todoDate={list.dueDate} 
                handleDelete={handleDelete}>
                </TodoItem>
            )}
        </>
    )
}

export default TodoItemMap