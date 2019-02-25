// Core
import express from 'express';

// Handlers
import * as subject from './';
import * as seasons from './seasons';
import * as season from './seasons/season';
import * as lessons from './seasons/lessons';
import * as lesson from './seasons/lessons/lesson';

// Instruments
import { authenticate as auth } from '../../middleware/authenticate';

const route = express.Router();

route.get('/:subjectsId', subject.get);
route.post('/:subjectsId', auth, subject.post);
route.put('/:subjectsId', auth, subject.put);
route.delete('/:subjectsId', auth, subject.remove);

route.get('/:subjectsId/seasons', seasons.get);
route.post('/:subjectsId/seasons', auth, seasons.post);

route.get('/:subjectsId/seasons/:seasonId', season.get);
route.post('/:subjectsId/seasons/:seasonId', auth, season.post);
route.put('/:subjectsId/seasons/:seasonId', auth, season.put);
route.delete('/:subjectsId/seasons/:seasonId', auth, season.remove);

route.get('/:subjectsId/seasons/:seasonId/lessons', lessons.get);
route.post('/:subjectsId/seasons/:seasonId/lessons', auth, lessons.post);

route.get('/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.get);
route.post('/:subjectsId/seasons/:seasonId/lessons/:lessonId', auth, lesson.post);
route.put('/:subjectsId/seasons/:seasonId/lessons/:lessonId', auth, lesson.put);
route.delete('/:subjectsId/seasons/:seasonId/lessons/:lessonId', auth, lesson.remove);

export { route as subjects };
