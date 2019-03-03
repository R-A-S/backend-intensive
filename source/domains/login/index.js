// Core
import dg from 'debug';

const debug = dg('router:login');

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        req.session.email = req.body.email;
        res.sendStatus(200);
    } catch ({ message }) {
        res.status(400).json({ message: message });
    }
};
