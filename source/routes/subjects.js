import express from 'express';
import dg from 'debug';

const route = express.Router();
const debug = dg('router:subjects');


route
    .get('/', (req, res) => {
        try {
            debug('/');

            const data = [];

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .post('/', (req, res) => {
        try {
            debug('/');

            const data = [];

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })


    .get('/:subjectId', (req, res) => {
        try {
            debug('/:subjectId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .post('/:subjectId', (req, res) => {
        try {
            debug('/:subjectId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .put('/:subjectId', (req, res) => {
        try {
            debug('/:subjectId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .delete('/:subjectId', (req, res) => {
        try {
            debug('/:subjectId');

            res.sendStatus(204);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })


    .get('/:subjectId/seasons', (req, res) => {
        try {
            debug('/:subjectId/seasons');

            const data = [];

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .post('/:subjectId/seasons', (req, res) => {
        try {
            debug('/:subjectId/seasons');

            const data = [];

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })


    .get('/:subjectId/seasons/:seasonId', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .post('/:subjectId/seasons/:seasonId', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .put('/:subjectId/seasons/:seasonId', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .delete('/:subjectId/seasons/:seasonId', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId');

            res.sendStatus(204);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })


    .get('/:subjectId/seasons/:seasonId/lessons', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId/lessons');

            const data = [];

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .post('/:subjectId/seasons/:seasonId/lessons', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId/lessons');

            const data = [];

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })


    .get('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId/lessons/:lessonId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .post('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId/lessons/:lessonId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .put('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId/lessons/:lessonId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
    .delete('/:subjectId/seasons/:seasonId/lessons/:lessonId', (req, res) => {
        try {
            debug('/:subjectId/seasons/:seasonId/lessons/:lessonId');

            res.sendStatus(204);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });


export { route as subjectsRoute };
