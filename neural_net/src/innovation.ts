export class Innovation {
    private static currentInnovation: number = 0;

    static getNewInnovation(): number {
        return this.currentInnovation++;
    }

    static reset(): void {
        this.currentInnovation = 0;
    }
}