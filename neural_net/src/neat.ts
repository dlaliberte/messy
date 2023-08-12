import { Genome } from './genome';
import { Population } from './population';
import { Innovation } from './innovation';
import { Utils } from './utils';

export class NEAT {
    private population: Population;
    private innovation: Innovation;
    private utils: Utils;

    constructor(populationSize: number, inputSize: number, outputSize: number) {
        this.innovation = new Innovation();
        this.utils = new Utils();
        this.population = new Population(populationSize, inputSize, outputSize, this.innovation, this.utils);
    }

    public evolve(): void {
        this.population.evolve();
    }

    public getBestGenome(): Genome {
        return this.population.getBestGenome();
    }

    public setInputs(inputs: number[]): void {
        this.population.setInputs(inputs);
    }

    public getOutputs(): number[] {
        return this.population.getOutputs();
    }
}