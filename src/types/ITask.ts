export interface ITaskPreview {
  title: string
  criticalLvl: TaskCriticalLvl
  completeDate: string
  author: string
  executor: string
  shortDescription: string
  // после добавления ссылок сделать обязательным
  link?: string
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
