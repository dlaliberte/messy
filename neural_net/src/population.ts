import { Genome } from './genome';
import { Species } from './species';
import { Innovation } from './innovation';

export class Population {
    genomes: Genome[];
    species: Species[];
    innovation: Innovation;
    generation: number;

    constructor(size: number, inputs: number, outputs: number) {
        this.genomes = [];
        this.species = [];
        this.innovation = new Innovation(inputs, outputs);
        this.generation = 0;

        for (let i = 0; i < size; i++) {
            this.genomes.push(new Genome(this.innovation, inputs, outputs));
        }
    }

    speciate() {
        this.species = [];
        this.genomes.forEach(genome => {
            let foundSpecies = false;
            this.species.forEach(species => {
                if (!foundSpecies && species.isSameSpecies(genome)) {
                    species.addGenome(genome);
                    foundSpecies = true;
                }
            });

            if (!foundSpecies) {
                this.species.push(new Species(genome));
            }
        });
    }

    evolve() {
        this.speciate();
        this.species.forEach(species => species.evolve());
        this.generation++;
    }

    getBestGenome() {
        let bestGenome = this.genomes[0];
        this.genomes.forEach(genome => {
            if (genome.fitness > bestGenome.fitness) {
                bestGenome = genome;
            }
        });
        return bestGenome;
    }
}