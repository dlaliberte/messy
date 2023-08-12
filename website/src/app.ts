import express from 'express';
import path from 'path';
import { TaskService } from './services/TaskService';
import { NeuralNetService } from './services/NeuralNetService';

const app = express();
const taskService = new TaskService();
const neuralNetService = new NeuralNetService();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/tasks', (req, res) => {
    res.json(taskService.getTasks());
});

app.post('/api/tasks', (req, res) => {
    const task = taskService.createTask(req.body);
    res.json(task);
});

app.get('/api/tasks/:id', (req, res) => {
    const task = taskService.selectTask(req.params.id);
    res.json(task);
});

app.put('/api/neuralnet', (req, res) => {
    const neuralNet = neuralNetService.updateNeuralNet(req.body);
    res.json(neuralNet);
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});

export default app;