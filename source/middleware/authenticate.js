export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const password = process.env.PASSWORD;

    if (!password) {
        res.status(500).json({
            status:  500,
            message: '💀 We\'re sorry, a server error occurred. Please wait a bit and try again.',
        });

        return;
    }

    if (!authHeader || authHeader !== password) {
        res.status(401).json({
            status:  401,
            message: '❌ Unauthorized. Access is denied.',
        });
    } else if (authHeader === password) {
        next();
    }
};
