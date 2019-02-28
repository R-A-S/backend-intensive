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

const errorLogCreator = (logger) => createLogger({
    level:      'error',
    format:     combine(timestamp(), printf(({ timestamp, message }) => `${timestamp} ${message}`)),
    transports: [
        new transports.File({ filename: `logs/${logger}.log` }),
        new transports.File({ filename: 'logs/combined.log' }),
    ],
});

export const errorLogger = errorLogCreator('errors');
export const validationLogger = errorLogCreator('validation_errors');
export const notFoundLogger = errorLogCreator('not_found_errors');
