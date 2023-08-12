import { Task } from '../models/Task';
import { NeuralNetService } from '../services/NeuralNetService';

class TaskEvaluation {
  private neuralNetService: NeuralNetService;

  constructor() {
    this.neuralNetService = new NeuralNetService();
  }

  public evaluateTask(task: Task, inputs: any[]): any {
    const neuralNet = this.neuralNetService.getNeuralNet();
    const outputs = neuralNet.run(inputs);
    return task.evaluate(outputs);
  }
}

export default TaskEvaluation;