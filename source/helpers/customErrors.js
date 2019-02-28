class ExtendableError extends Error {
    constructor(...args) {
        super(...args);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(args[ 0 ]).stack;
        }
    }
}

export class ValidationError extends ExtendableError {
    constructor(...args) {
        super(...args);
        this.statusCode = args[ 1 ] || 400;
    }
}

export class NotFoundError extends ExtendableError {
    constructor(...args) {
        super(...args);
        this.statusCode = args[ 1 ] || 404;
    }
}
