export class CustomerNotFoundException extends Error {
    constructor(public readonly id: string) {
        super(`Customer not found ${id}`);
    }
}