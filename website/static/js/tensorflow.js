import * as tf from '@tensorflow/tfjs';

// Define the neural network architecture
class NeuralNet {
    constructor() {
        this.model = tf.sequential();
    }

    // Method to add a layer to the neural network
    addLayer(units, activation, inputShape = null) {
        let layerConfig = {
            units: units,
            activation: activation,
            useBias: true
        };

        if (inputShape) {
            layerConfig.inputShape = [inputShape];
        }

        this.model.add(tf.layers.dense(layerConfig));
    }

    // Method to compile the neural network
    compile(loss, optimizer) {
        this.model.compile({
            loss: loss,
            optimizer: optimizer
        });
    }

    // Method to train the neural network
    async train(inputs, outputs, epochs) {
        const xs = tf.tensor2d(inputs);
        const ys = tf.tensor2d(outputs);

        await this.model.fit(xs, ys, {
            epochs: epochs
        });
    }

    // Method to predict the output for a given input
    predict(inputs) {
        const xs = tf.tensor2d([inputs]);
        return this.model.predict(xs).dataSync();
    }
}

export { NeuralNet };