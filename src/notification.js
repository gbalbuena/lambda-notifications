import { successResponse, runWarm } from './utils';

const notification = (event, context, callback) => {
  const response = successResponse({
    message: 'Hello World!',
  });

  callback(null, response);
};

export default runWarm(notification);
