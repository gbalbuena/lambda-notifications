import notificationService from './notificationService';

describe('Notification Service', () => {
  it('should send a SNS', () => {
    expect(notificationService.send({ content: 'test' })).toBe('success');
  });
});
