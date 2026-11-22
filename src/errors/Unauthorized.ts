export class Unauthorized extends Error {
    public statusCode: number = 401;

    constructor(message: string) {
        super(message);
    }
}