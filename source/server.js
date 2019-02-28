// Core
import express from 'express';

// Routes
import * as domains from './domains';

// Instruments
import { devLogger, errorLogger, requireJsonContent, NotFoundError } from './helpers';

const app = express();

app.use(
    express.json({
        limit: '10kb',
    }),
);

app.use(requireJsonContent);

if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        const body
            = req.method === 'GET' ? 'Body not supported for GET' : JSON.stringify(req.body, null, 2);

        devLogger.debug(`${req.method}\n${body}`);
        next();
    });
}

app.use('/api/teachers', domains.teachers);
app.use('/api/pupils', domains.pupils);
app.use('/api/parents', domains.parents);
app.use('/api/classes', domains.classes);
app.use('/api/subjects', domains.subjects);

app.all('*', function(req, _res, next) {
    const error = new NotFoundError(`${req.method}: ${req.originalUrl}`);
    next(error);
});

if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-unused-vars
    app.use((error, _req, res, _next) => {
        res.status(500).json({ message: error.message });
        errorLogger.error(`${error.name}: ${error.message}`);
    });
}

export { app };
