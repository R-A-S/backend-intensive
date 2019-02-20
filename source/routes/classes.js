import express from 'express';
import dg from 'debug';

const route = express.Router();
const debug = dg('router:classes');

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

    .get('/:classId', (req, res) => {
        try {
            debug('/:classId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })

    .post('/:classId', (req, res) => {
        try {
            debug('/:classId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })

    .put('/:classId', (req, res) => {
        try {
            debug('/:classId');

            const data = {};

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })

    .delete('/:classId', (req, res) => {
        try {
            debug('/:classId');

            res.sendStatus(204);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })

    .get('/:classId/gradebook', (req, res) => {
        try {
            debug('/:classId/gradebook');

            const data = [];

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })

    .post('/:classId/gradebook', (req, res) => {
        try {
            debug('/:classId/gradebook');

            const data = [];

            res.status(200).json({ data });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

export { route as classesRoute };
