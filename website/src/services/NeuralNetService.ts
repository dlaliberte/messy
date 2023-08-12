import { NeuralNet } from '../models/NeuralNet';
import { neat, utils } from '../../neural_net/src/index';

class NeuralNetService {
  private neuralNet: NeuralNet;

  constructor() {
    this.neuralNet = new NeuralNet();
  }

  public updateNeuralNet(inputs: number[]): void {
    const output = neat.run(inputs);
    this.neuralNet.update(output);
  }

  public getNeuralNet(): NeuralNet {
    return this.neuralNet;
  }

  public resetNeuralNet(): void {
    this.neuralNet = new NeuralNet();
    utils.resetInnovations();
  }
}

export const neuralNetService = new NeuralNetService();