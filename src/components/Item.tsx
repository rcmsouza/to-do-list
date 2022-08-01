import { Trash } from 'phosphor-react'
import { Task } from '../App'
import styles from './Item.module.css'

interface ItemProps {
  task: Task
  onDeleteTask: (taskId: string) => void
  onConcludeTask: (task: Task) => void
}

export function Item({task, onDeleteTask, onConcludeTask}: ItemProps) {

  function handleDeleteTask(){
    onDeleteTask(task.id)
  }

  function handleConcludeTask() {
    const taskToConclude = {
      ...task,
      concluded: !task.concluded
    }
    onConcludeTask(taskToConclude)
  }

  return (
    <div className={styles.itemWrapper}>
      <input onChange={handleConcludeTask} type='checkbox'/>
      <p
       className={
        task.concluded 
        ? styles.taskConcluded 
        : styles.taskNotConcluded
       }
      >
        {task.content}
      </p>
      <button onClick={handleDeleteTask} title='Deletar comentário'>
      <Trash />
      </button>
    </div>
  )
}