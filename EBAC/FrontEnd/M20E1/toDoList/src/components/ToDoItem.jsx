import { useRecoilState } from 'recoil'
import { todoListAtom } from '../atoms/toDoListAtom'

export default function TodoItem({ item }) {
const [todoList, setTodoList] = useRecoilState(todoListAtom)

const toggleComplete = () => {
setTodoList(
todoList.map(todo =>
todo.id === item.id
? { ...todo, completed: !todo.completed }
: todo
)
)
}

const removeTodo = () => {
setTodoList(todoList.filter(todo => todo.id !== item.id))
}

return (
<li className={item.completed ? 'completed' : ''}>
<span>{item.text}</span>
<div>
<button onClick={toggleComplete}>✔</button>
<button onClick={removeTodo}>✖</button>
</div>
</li>
)
}