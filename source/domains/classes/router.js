// Core
import express from 'express';

// Handlers
import * as classes from './';
import * as classId from './class';
import * as gradebook from './gradebook';

// Instruments
import { authenticate as auth } from '../../middleware/authenticate';

const route = express.Router();

route.get('/', classes.get);
route.post('/', auth, classes.post);

route.get('/:classId', auth, classId.get);
route.post('/:classId', auth, classId.post);
route.put('/:classId', auth, classId.put);
route.delete('/:classId', auth, classId.remove);

route.get('/:classId/gradebook', auth, gradebook.get);
route.post('/:classId/gradebook', auth, gradebook.post);
route.put('/:classId/gradebook', auth, gradebook.put);
route.delete('/:classId/gradebook', auth, gradebook.remove);

export { route as classes };
