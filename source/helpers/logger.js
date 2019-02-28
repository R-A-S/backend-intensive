import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf, colorize } = format;

const combinedFormat = combine(
    timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    printf(
        ({ level, message, label, timestamp }) => ` [${label}] ${timestamp} | ${level} : ${message}`,
    ),
);

export const devLogger = createLogger({
    level:      'debug',
    format:     combine(colorize({ all: true }), label({ label: 'server' }), combinedFormat),
    transports: [ new transports.Console() ],
});

export const errorLogger = createLogger({
    level:      'error',
    format:     combine(timestamp(), printf(({ message, timestamp }) => `${timestamp} ${message}`)),
    transports: [
        new transports.File({ filename: 'logs/errors.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log', level: 'error' }),
    ],
});
