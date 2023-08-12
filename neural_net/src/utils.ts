export function randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function sigmoid(x: number): number {
    return 1 / (1 + Math.exp(-x));
}

export function relu(x: number): number {
    return x < 0 ? 0 : x;
}

export function tanh(x: number): number {
    return Math.tanh(x);
}

export function softmax(arr: number[]): number[] {
    const sum = arr.reduce((a, b) => a + Math.exp(b), 0);
    return arr.map((x) => Math.exp(x) / sum);
}

export function argMax(arr: number[]): number {
    return arr.indexOf(Math.max(...arr));
}

export function cloneDeep<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}