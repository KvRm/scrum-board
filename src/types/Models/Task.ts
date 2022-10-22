export interface Task {
  id: string
  title: string
  criticalLvl: TaskCriticalLvl
  tags: string[]
  completeDate: string
  authorId: string
  executorId: string
  description: string
  comments: Comment[]
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
