export interface IMyTask {
  title: string
  boardName: string
  boardLink: string
  criticalLvl: TaskCriticalLvl
  completeDate: string
  author: string
  link: string
}

export interface ITaskPreview extends IMyTask {
  executor: string
  shortDescription: string
}

export interface ITask extends ITaskPreview {
  description: string
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
