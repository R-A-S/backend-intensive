// Core
import dg from 'debug';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

// Instruments
import { getPassword } from '../../helpers';

const debug = dg('router:auth');
const sign = promisify(jwt.sign);

export const post = async (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const token = await sign({ name: 'John' }, getPassword());
        res.setHeader('X-Token', token);
        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
