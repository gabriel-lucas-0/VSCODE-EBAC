import { useRecoilValue } from 'recoil'
import { filteredTodoListSelector } from '../selectors/filteredToDoListSelector'
import TodoItem from './ToDoItem'

export default function TodoList() {
const todoList = useRecoilValue(filteredTodoListSelector)

return (
<ul>
{todoList.map(item => (
<TodoItem key={item.id} item={item} />
))}
</ul>
)
}