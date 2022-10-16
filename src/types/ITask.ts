import { IBoard } from './IBoard'

export interface IMyTask extends ITaskPreview {
  board: IBoard
  completeDate: string
  author: string
}

export interface ITaskPreview {
  // сделать обязательным после добавления бд
  id?: string
  title: string
  criticalLvl: TaskCriticalLvl
  tags: string[]
  link: string
}

export interface ITask extends IMyTask {
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
