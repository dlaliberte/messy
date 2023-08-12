export class Neuron {
    id: number;
    type: string;
    incoming: Array<Link>;
    outgoing: Array<Link>;

    constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
        this.incoming = [];
        this.outgoing = [];
    }

    addIncoming(link: Link): void {
        this.incoming.push(link);
    }

    addOutgoing(link: Link): void {
        this.outgoing.push(link);
    }
}