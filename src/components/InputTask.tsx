import styles from './InputTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { Task } from '../App'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'

interface InputTask {
  onCreateTask: (item: Task) => void
}

export function InputTask({ onCreateTask }: InputTask) {

  const [ taskTitle, setTaskTitle ] = useState<Task>({
    id: '',
    content: '',
    concluded: false
  })

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle({
      ...taskTitle,
      content: event.target.value,
      id: uuid()
    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onCreateTask(taskTitle)
    setTaskTitle({
      ...taskTitle,
      content: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <input onChange={handleChangeTask} value={taskTitle.content} placeholder="Adicione uma nova tarefa"/>
      <button type='submit'>
        <span>Criar</span>
        <PlusCircle />
      </button>
    </form>
  )
}