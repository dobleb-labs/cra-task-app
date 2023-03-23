import Container from '../../layout/Container'
import CreateTask from './components/CreateTask/CreateTask'
import TaskList from './components/TaskList'
import useTaskApp from './hooks/useTaskApp'

export default function TaskApp() {
  const { tasks, addTask, removeTask } = useTaskApp()
  return (
    <main className="h-full text-white flex flex-col justify-center">
      <Container>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Task App
        </h1>
        <CreateTask onTaskAdd={addTask} />
        <TaskList tasks={tasks} onTaskRemove={removeTask} />
      </Container>
    </main>
  )
}
