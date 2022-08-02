import { Header } from "./components/Header"
import { InputTask } from './components/InputTask'
import { TaskList } from "./components/TaskList"
import styles from './App.module.css'
import { v4 as uuid } from 'uuid'

import "./global.css"
import { useState } from "react"

export interface Task {
  id: string,
  content: string,
  concluded: boolean,
}


function App() {

  const [list, setList] = useState<Task[]>([{
    id: uuid(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    concluded: false
  },
  {
    id: uuid(),
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    concluded: false
  }])

  function handleDeleteTask(taskIdToDelete: string) {
    const newTaskList = list.filter(task => {return task.id !== taskIdToDelete})

    setList(newTaskList)
  }

  function handleCreateList(taskToCreate: Task) {
    setList([taskToCreate, ...list])
  }

  function ordenateTasks(x: Task, y: Task) {
      return (x.concluded === y.concluded) ? 0 : x.concluded ? 1 : -1;
  }


  function handleConcludeTask(taskToConclude: Task) {
    const newTaskList: Task[] = list.filter(task => { return task.id !== taskToConclude.id })
    newTaskList.push(taskToConclude)
    newTaskList.sort(ordenateTasks)
    setList(newTaskList)
  } 

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <InputTask onCreateTask={handleCreateList}/>
        <TaskList list={list} onDeleteTask={handleDeleteTask} onConcludeTask={handleConcludeTask}/>
      </div>
    </>
  )
}

export default App
