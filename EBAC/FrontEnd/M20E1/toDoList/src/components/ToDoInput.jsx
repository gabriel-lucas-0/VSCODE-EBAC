import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListAtom } from '../atoms/toDoListAtom'

export default function TodoInput() {
const [text, setText] = useState('')
const setTodoList = useSetRecoilState(todoListAtom)

const addTodo = () => {
if (!text.trim()) return

setTodoList(old => [
...old,
{ id: Date.now(), text, completed: false },
])
setText('')
}

return (
<div className="input-container">
<input
value={text}
onChange={e => setText(e.target.value)}
placeholder="Nova tarefa"
/>
<button onClick={addTodo}>Adicionar</button>
</div>
)
}