// Core
import dg from 'debug';

import jwt from 'jsonwebtoken';

const debug = dg('router:login');
const options = { expiresIn: '2m' };

export const post = (req, res) => {
    debug(`${req.method} — ${req.originalUrl}`);

    try {
        const { email, password } = req.body;
        const emailStr = Buffer.from(email, 'base64').toString();
        const passwordStr = Buffer.from(password, 'base64').toString();
        const token = jwt.sign({ email: emailStr }, passwordStr, options);
        res.setHeader('X-Token', token);
        res.sendStatus(200);
    } catch ({message}) {
        res.status(400).json({ message: message });
    }
};
