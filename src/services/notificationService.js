import logger from '../utils/logger';

export default {
  send: content => {
    logger.debug('Send', { content });
    return 'success';
  },
};
