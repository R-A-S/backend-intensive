// Core
import express from 'express';

// Handlers
import * as subject from './';
import * as seasons from './seasons';
import * as season from './seasons/season';
import * as lessons from './seasons/lessons';
import * as lesson from './seasons/lessons/lesson';

const route = express.Router();

route.get('/:subjectsId', subject.get);
route.post('/:subjectsId', subject.post);
route.put('/:subjectsId', subject.put);
route.delete('/:subjectsId', subject.remove);

route.get('/:subjectsId/seasons', seasons.get);
route.post('/:subjectsId/seasons', seasons.post);

route.get('/:subjectsId/seasons/:seasonId', season.get);
route.post('/:subjectsId/seasons/:seasonId', season.post);
route.put('/:subjectsId/seasons/:seasonId', season.put);
route.delete('/:subjectsId/seasons/:seasonId', season.remove);

route.get('/:subjectsId/seasons/:seasonId/lessons', lessons.get);
route.post('/:subjectsId/seasons/:seasonId/lessons', lessons.post);

route.get('/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.get);
route.post('/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.post);
route.put('/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.put);
route.delete('/:subjectsId/seasons/:seasonId/lessons/:lessonId', lesson.remove);

export { route as subjects };
