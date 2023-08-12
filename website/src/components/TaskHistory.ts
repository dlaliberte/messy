import { Task } from '../models/Task';
import { TaskService } from '../services/TaskService';

class TaskHistory {
    private taskService: TaskService;
    private taskHistoryElement: HTMLElement;

    constructor(taskService: TaskService) {
        this.taskService = taskService;
        this.taskHistoryElement = document.getElementById('task-history');
        this.taskService.on('taskCreated', this.addTaskToHistory.bind(this));
        this.taskService.on('taskSelected', this.highlightSelectedTask.bind(this));
    }

    private addTaskToHistory(task: Task): void {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.name;
        taskElement.addEventListener('click', () => this.taskService.selectTask(task));
        this.taskHistoryElement.appendChild(taskElement);
    }

    private highlightSelectedTask(task: Task): void {
        const taskElements = Array.from(this.taskHistoryElement.getElementsByTagName('li'));
        taskElements.forEach(taskElement => {
            if (taskElement.textContent === task.name) {
                taskElement.classList.add('selected');
            } else {
                taskElement.classList.remove('selected');
            }
        });
    }
}

export { TaskHistory };