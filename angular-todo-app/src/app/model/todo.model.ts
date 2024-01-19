import { todoType } from '../todo/todo.component';

export interface todo {
  id?: number;
  title: string;
  description: string;
  status: todoType;
}
