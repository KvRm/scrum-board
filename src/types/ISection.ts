import { ITaskPreview } from './ITask'

export interface IStatusSection {
  // обзяательное после создание бд
  id?: string
  title: string
  tasks: ITaskPreview[]
}
