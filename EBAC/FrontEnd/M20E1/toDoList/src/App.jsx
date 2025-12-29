import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'

export default function App() {
  return (
    <div className="container">
      <h1>To-do List (Recoil)</h1>
      <TodoInput />
        <TodoFilters />
      <TodoList />
    </div>
  )
}