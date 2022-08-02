import { ClipboardText } from 'phosphor-react'
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
            <span className={styles.created}>
              Tarefas criadas
            </span>
              <p>{list.length}</p>
          </div>
          <div>
            <span className={styles.finished}>
              Concluídas
            </span>
            <p>{list.filter(item => item.concluded).length} de {list.length}</p>
          </div>
        </div>
      </header>

      <div className={list.length === 0 ? styles.listEmpty : ''}>
        {list.length > 0 
          ? list.map((item: Task) => {
            return(
              <Item key={item.id} task={item} onDeleteTask={onDeleteTask} onConcludeTask={onConcludeTask}/>
            )
          })
          : (
            <>
              <ClipboardText size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </>
          )
        }
      </div>

    </div>
  )
}