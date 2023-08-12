export interface Task {
    id: string;
    name: string;
    description: string;
    inputs: any[];
    evaluation: (response: any) => boolean;
}

export class TaskModel implements Task {
    id: string;
    name: string;
    description: string;
    inputs: any[];
    evaluation: (response: any) => boolean;

    constructor(id: string, name: string, description: string, inputs: any[], evaluation: (response: any) => boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.inputs = inputs;
        this.evaluation = evaluation;
    }
}