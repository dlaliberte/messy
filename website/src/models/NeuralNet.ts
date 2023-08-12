export interface NeuralNet {
    id: string;
    architecture: string;
    inputs: any[];
    outputs: any[];
    evaluation: any;
    tasks: string[];
}

export class NeuralNetModel implements NeuralNet {
    id: string;
    architecture: string;
    inputs: any[];
    outputs: any[];
    evaluation: any;
    tasks: string[];

    constructor(id: string, architecture: string, inputs: any[], outputs: any[], evaluation: any, tasks: string[]) {
        this.id = id;
        this.architecture = architecture;
        this.inputs = inputs;
        this.outputs = outputs;
        this.evaluation = evaluation;
        this.tasks = tasks;
    }
}