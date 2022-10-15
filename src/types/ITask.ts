export interface IMyTask extends ITaskPreview {
  boardName: string
  boardLink: string
  criticalLvl: TaskCriticalLvl
  completeDate: string
  author: string
}

export interface ITaskPreview {
  title: string
  link: string
}

export interface ITask extends ITaskPreview {
  description: string
  executor: string
  comments: IComment[]
}

export interface IComment {
  author: string
  dateAndTime: string
  text: string
}

export enum TaskCriticalLvl {
  veryHigh = 'Очень высокая',
  high = 'Высокая',
  medium = 'Средняя',
  low = 'Низкая'
}
