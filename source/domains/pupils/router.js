// Core
import express from 'express';

// Handlers
import * as pupils from './';
import * as person from './person';

// Instruments
import { authenticate as auth } from '../../middleware/authenticate';

const route = express.Router();

route.get('/', auth, pupils.get);
route.post('/', auth, pupils.post);

route.get('/:personId', auth, person.get);
route.post('/:personId', auth, person.post);
route.put('/:personId', auth, person.put);
route.delete('/:personId', auth, person.remove);

export { route as pupils };
