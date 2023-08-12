import { neuralNet, taskList } from './neat.js';
import { setupTask, evaluateTask } from './task.js';
import { saveTask, loadTasks } from '../database.py';

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

document.getElementById('task-setup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const taskData = new FormData(event.target);
  setupTask(taskData);
});

document.getElementById('task-evaluation-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const evaluationData = new FormData(event.target);
  evaluateTask(evaluationData);
});

document.getElementById('saved-tasks-list').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const taskId = event.target.dataset.taskId;
    const task = taskList.find(task => task.id === taskId);
    if (task) {
      neuralNet.load(task.neuralNet);
    }
  }
});

window.addEventListener('task-setup', () => {
  saveTask();
});

window.addEventListener('task-evaluation', () => {
  saveTask();
});

window.addEventListener('task-save', () => {
  loadTasks();
});