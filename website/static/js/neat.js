import * as tf from '@tensorflow/tfjs';

class Neuron {
  constructor(id) {
    this.id = id;
    this.inputSum = 0;
    this.outputValue = 0;
    this.outputConnections = [];
    this.layer = 0;
  }
}

class ConnectionGene {
  constructor(from, to, weight, innov) {
    this.fromNode = from;
    this.toNode = to;
    this.weight = weight;
    this.innovationNo = innov;
    this.enabled = true;
  }
}

class Genome {
  constructor() {
    this.genes = [];
    this.nodes = [];
    this.inputs = 0;
    this.outputs = 0;
    this.layers = 2;
    this.nextNode = 0;
    this.nextConnectionNo = 0;
    this.network = [];
  }
}

class Species {
  constructor() {
    this.players = [];
    this.bestFitness = 0;
    this.champ = null;
    this.averageFitness = 0;
    this.staleness = 0;
  }
}

class Population {
  constructor(size) {
    this.players = [];
    this.bestPlayer = null;
    this.bestFitness = 0;
    this.gen = 0;
    this.innovationHistory = [];
    this.genPlayers = [];
    this.species = [];
    this.massExtinctionEvent = false;
    this.newStage = false;
  }
}

export function createNeuralNet() {
  const neuralNet = new Population(100);
  return neuralNet;
}