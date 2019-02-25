// Core
import express from 'express';

// Handlers
import * as parent from './parent';
import * as pupils from './pupils';
import * as person from './pupils/person';

// Instruments
import { authenticate as auth } from '../../middleware/authenticate';

const route = express.Router();

route.get('/:parentId', auth, parent.get);
route.post('/:parentId', auth, parent.post);
route.put('/:parentId', auth, parent.put);
route.delete('/:parentId', auth, parent.remove);

route.get('/:parentId/pupils', auth, pupils.get);
route.post('/:parentId/pupils', auth, pupils.post);

route.get('/:parentId/pupils/:personId', auth, person.get);
route.post('/:parentId/pupils/:personId', auth, person.post);
route.put('/:parentId/pupils/:personId', auth, person.put);
route.delete('/:parentId/pupils/:personId', auth, person.remove);

export { route as parents };
