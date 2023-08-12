import { NeuralNet } from '../models/NeuralNet';
import { NeuralNetService } from '../services/NeuralNetService';

class NeuralNetInteraction {
  private neuralNetService: NeuralNetService;
  private neuralNet: NeuralNet | null;

  constructor() {
    this.neuralNetService = new NeuralNetService();
    this.neuralNet = null;
    this.init();
  }

  private async init() {
    this.neuralNet = await this.neuralNetService.getNeuralNet();
    this.render();
  }

  private render() {
    const neuralNetInteractionElement = document.getElementById('neural-net-interaction');
    if (neuralNetInteractionElement && this.neuralNet) {
      neuralNetInteractionElement.innerHTML = this.neuralNet.toString();
    }
  }

  public async interactWithNeuralNet(input: any) {
    if (this.neuralNet) {
      const output = this.neuralNet.processInput(input);
      this.neuralNetService.updateNeuralNet(this.neuralNet);
      return output;
    }
    throw new Error('Neural net not initialized');
  }
}

export default NeuralNetInteraction;