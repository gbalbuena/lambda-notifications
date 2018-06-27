import format from 'string-template';

export default {
  getContent: (template, fields) => format(template, fields),
};
