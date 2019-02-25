import { createLogger, format, transports } from 'winston';
const { combine, timestamp, colorize, printf, label } = format;

const environment = process.env.NODE_ENV;

const combinedFormat = combine(
    label({ label: '→ LOGGER' }),
    timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    printf((info) => ` ${info.label} | ${info.timestamp} | ${info.level} : ${info.message}`),
);

export const logger = createLogger({
    level:      'debug',
    format:     combinedFormat,
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
    ],
});

if (environment !== 'production') {
    logger.add(
        new transports.Console({ format: combine(colorize({ all: true }), combinedFormat) }),
    );
}
