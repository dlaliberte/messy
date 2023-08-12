import { Task } from '../models/Task';

class TaskService {
  private tasks: Task[] = [];

  createTask(task: Task): void {
    this.tasks.push(task);
    window.dispatchEvent(new CustomEvent('taskCreated', { detail: task }));
  }

  selectTask(taskId: string): Task | undefined {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      window.dispatchEvent(new CustomEvent('taskSelected', { detail: task }));
    }
    return task;
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}

export const taskService = new TaskService();