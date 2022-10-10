export type TaskPreviewProps = {
  criticalLvl: TaskCriticalLvl
  completeDate: string
  author: string
}

export enum TaskCriticalLvl {
  veryHigh = 'Очень высокая',
  high = 'Высокая',
  medium = 'Средняя',
  low = 'Низкая'
}
