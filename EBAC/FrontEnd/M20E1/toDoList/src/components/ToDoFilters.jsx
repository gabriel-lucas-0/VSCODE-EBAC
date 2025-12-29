import { useRecoilState } from 'recoil'
import { todoFilterAtom } from '../atoms/toDoFilterAtom'

export default function TodoFilters() {
const [filter, setFilter] = useRecoilState(todoFilterAtom)

return (
<div className="filters">
<button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todas</button>
<button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Concluídas</button>
<button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pendentes</button>
</div>
)
}