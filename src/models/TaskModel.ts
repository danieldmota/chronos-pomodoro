import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completedDate: number | null; //quando a tarefa for completada
  interruptedDate: number | null; //quando a tarefa for interrompida
  type: keyof TaskStateModel['config'];
};
