import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    const password = '123456'; //Все по ТЗ, ничего не проверяем.
    const token = jwt.verify(authorization, password);
    if (token) {
        next();
    } else {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }
};
