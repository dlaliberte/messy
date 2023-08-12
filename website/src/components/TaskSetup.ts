import { Task } from '../models/Task';
import { createTask } from '../services/TaskService';

class TaskSetup {
    private taskNameInput: HTMLInputElement;
    private taskDescriptionInput: HTMLInputElement;
    private taskInputsInput: HTMLInputElement;
    private taskEvaluationInput: HTMLInputElement;
    private createTaskButton: HTMLButtonElement;

    constructor() {
        this.taskNameInput = <HTMLInputElement>document.getElementById('task-name-input');
        this.taskDescriptionInput = <HTMLInputElement>document.getElementById('task-description-input');
        this.taskInputsInput = <HTMLInputElement>document.getElementById('task-inputs-input');
        this.taskEvaluationInput = <HTMLInputElement>document.getElementById('task-evaluation-input');
        this.createTaskButton = <HTMLButtonElement>document.getElementById('create-task-button');

        this.createTaskButton.addEventListener('click', () => this.handleCreateTask());
    }

    private handleCreateTask(): void {
        const taskName = this.taskNameInput.value;
        const taskDescription = this.taskDescriptionInput.value;
        const taskInputs = JSON.parse(this.taskInputsInput.value);
        const taskEvaluation = this.taskEvaluationInput.value;

        const newTask = new Task(taskName, taskDescription, taskInputs, taskEvaluation);
        createTask(newTask);
    }
}

export const taskSetup = new TaskSetup();