// Core
import express from 'express';

// Routes
import * as domains from './domains';

//Instruments
import { logger } from './middleware/winston';

const app = express();

app.use(
    express.json({
        limit: '10kb',
    }),
);

app.use((req, _res, next) => {
    logger.debug(`${req.method} : ${JSON.stringify(req.body)}`);
    next();
});

app.use('/api/teachers', domains.teachers);
app.use('/api/pupils', domains.pupils);
app.use('/api/parents', domains.parents);
app.use('/api/classes', domains.classes);
app.use('/api/subjects', domains.subjects);

export { app };
