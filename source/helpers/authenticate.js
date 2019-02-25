import { getPassword } from './getPassword';

export const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    const password = getPassword();

    if (authorization === password) {
        next();
    } else {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }
};
