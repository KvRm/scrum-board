export interface Task {
  id: string
  title: string
  criticalLvl: TaskCriticalLvl
  tags: string[]
  completeDate: string
  author: string
  executor: string
  description: string
  comments: Comment[]
  boardId: string
  statusSectionLink: string
}

interface Comment {
  id: string
  author: string
  creatingTime: string
  text: string
}

export enum TaskCriticalLvl {
  veryHigh = 'Очень высокая',
  high = 'Высокая',
  medium = 'Средняя',
  low = 'Низкая'
}
