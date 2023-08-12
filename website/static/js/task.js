import { createNeuralNet } from './neat.js';

let neuralNet;
let taskList = [];

const TaskSchema = {
  name: '',
  inputs: [],
  evaluation: () => {},
};

function setupTask(taskData) {
  const task = { ...TaskSchema, ...taskData };
  taskList.push(task);
  neuralNet = createNeuralNet(task.inputs.length);
}

function evaluateTask(taskName, inputs) {
  const task = taskList.find(t => t.name === taskName);
  if (!task) {
    throw new Error(`Task "${taskName}" not found.`);
  }

  const output = neuralNet.predict(inputs);
  return task.evaluation(output);
}

function getTasks() {
  return taskList;
}

export { setupTask, evaluateTask, getTasks, neuralNet, taskList };