// Core
import express from 'express';

// Handlers
import * as teachers from './teachers';
import * as subjects from './subjects';

const route = express.Router();

route.get('/', teachers.get);
route.post('/', teachers.post);

route.get('/:teacherId/subjects', subjects.get);
route.post('/:teacherId/subjects', subjects.post);

export { route as teachersRoute };
