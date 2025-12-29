import { selector } from 'recoil'
import { todoListAtom } from '../atoms/toDoListAtom'
import { todoFilterAtom } from '../atoms/toDoFilterAtom'

export const filteredTodoListSelector = selector({
key: 'filteredTodoListSelector',
get: ({ get }) => {
const filter = get(todoFilterAtom)
const list = get(todoListAtom)

switch (filter) {
case 'completed':
return list.filter(item => item.completed)
case 'pending':
return list.filter(item => !item.completed)
default:
return list
}
},
})