import winston from 'winston';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  transports: [],
});

if (process.env.NODE_ENV === 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
      colorize: true,
    })
  );
} else if (typeof global.it === 'function') {
  logger.add(
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  );
  logger.add(new winston.transports.File({ filename: 'combined.log' }));
} else {
  logger.add(
    new winston.transports.File({ filename: 'error.log', level: 'severe' })
  );
}

export default logger;
