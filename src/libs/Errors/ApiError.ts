interface ApiExceptionData {
    instance: string;
}

export class ApiException extends Error {
    /**
     *
     */
    constructor(statusCode: number, message: string, options?: ApiExceptionData) {
        super(message);
        this.statusCode = statusCode;
        this.instance = options?.instance;
    }

    public statusCode: number;
    public instance?: string;
}
