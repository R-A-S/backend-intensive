// Core
import express from 'express';

// Instruments
import * as routes from './routes';

const app = express();

app.use('/teachers', routes.teachersRoute);
app.use('/pupils', routes.pupilsRoute);
app.use('/parents', routes.parentsRoute);
app.use('/classes', routes.classesRoute);
app.use('/subjects', routes.subjectsRoute);

export { app };
