import notificationService from './services/notificationService';
import templateService from './services/templateService';

import { successResponse, runWarm } from './utils';

const notification = (event, context, callback) => {
  const { template, fields } = JSON.parse(event.body);
  const content = templateService.getContent(template, fields);

  const response = successResponse({
    status: notificationService.send(content),
    content,
  });

  callback(null, response);
};

export default runWarm(notification);
