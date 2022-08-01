import { Task } from '../App'
import { Item } from './Item'
import styles from './TaskList.module.css'

interface TaskListProps {
  list: Task[]
  onDeleteTask: (taskId: string) => void
  onConcludeTask: (task: Task) => void
}

export function TaskList({ list, onDeleteTask, onConcludeTask }: TaskListProps) {

  

  return(
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <div>
            <span>
              Tarefas criadas
            </span>
              <span>{list.length}</span>
          </div>
          <div>
            <span>
              Concluídas
            </span>
            <span>{list.filter(item => item.concluded).length} de {list.length}</span>
          </div>
        </div>
      </header>

      <div className={list.length === 0 ? styles.listEmpty : ''}>
        {list.map((item: Task) => {
          return(
            <Item key={item.id} task={item} onDeleteTask={onDeleteTask} onConcludeTask={onConcludeTask}/>
          )
        })}
      </div>

    </div>
  )
}