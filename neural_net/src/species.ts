import { Genome } from './genome';

export class Species {
    id: number;
    topFitness: number;
    staleness: number;
    genomes: Genome[];
    averageFitness: number;

    constructor(id: number) {
        this.id = id;
        this.topFitness = 0;
        this.staleness = 0;
        this.genomes = [];
        this.averageFitness = 0;
    }

    calculateAverageFitness(): void {
        let sum = this.genomes.reduce((total, genome) => total + genome.rank, 0);
        this.averageFitness = sum / this.genomes.length;
    }

    breedChild(): Genome {
        let child;
        if (Math.random() < 0.75 && this.genomes.length > 1) {
            let g1 = this.genomes[Math.floor(Math.random() * this.genomes.length)];
            let g2 = this.genomes[Math.floor(Math.random() * this.genomes.length)];
            child = g1.fitness > g2.fitness ? g1.crossover(g2) : g2.crossover(g1);
        } else {
            child = this.genomes[0].copy();
        }
        child.mutate();
        return child;
    }

    cullSpecies(): void {
        this.genomes.sort((a, b) => b.fitness - a.fitness);
        let remaining = Math.ceil(this.genomes.length / 2);
        this.genomes = this.genomes.slice(0, remaining);
    }

    setTopFitness(): void {
        let top = this.genomes[0].fitness;
        this.topFitness = top;
    }
}