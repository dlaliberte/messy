export class Link {
    inputNeuronId: number;
    outputNeuronId: number;
    weight: number;
    isEnabled: boolean;
    innovationNumber: number;

    constructor(inputNeuronId: number, outputNeuronId: number, weight: number, isEnabled: boolean, innovationNumber: number) {
        this.inputNeuronId = inputNeuronId;
        this.outputNeuronId = outputNeuronId;
        this.weight = weight;
        this.isEnabled = isEnabled;
        this.innovationNumber = innovationNumber;
    }

    toggleEnabled(): void {
        this.isEnabled = !this.isEnabled;
    }

    setWeight(newWeight: number): void {
        this.weight = newWeight;
    }
}