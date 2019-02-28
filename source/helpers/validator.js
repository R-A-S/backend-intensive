import Ajv from 'ajv';

import { ValidationError } from '../helpers';

export const validator = (schema) => (req, res, next) => {
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(schema);
    const valid = validate(req.body);

    if (valid) {
        next();
    } else {
        const errors = validate.errors.map(({ message }) => message);
        const error = new ValidationError(
            `${req.method}: ${req.originalUrl} ${errors} ${JSON.stringify(req.body)}`,
            400,
        );
        res.status(error.status).json({ data: errors });
        next(error);
    }
};
