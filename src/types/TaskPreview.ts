export type TaskPreviewProps = {
  criticalLvl: TaskCriticalLvl
  completeDate: string
  author: string
  executor: string
}

export enum TaskCriticalLvl {
  veryHigh = 'Очень высокая',
  high = 'Высокая',
  medium = 'Средняя',
  low = 'Низкая'
}
