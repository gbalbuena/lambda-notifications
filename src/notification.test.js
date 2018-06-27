import notification from './notification';

describe('notification', () => {
  it('executes as expected', () => {
    const cb = jest.fn();

    const event = {
      body: '{"template": "Hi {name}", "fields": { "name": "John" } }',
    };
    notification(event, {}, cb);
    expect(cb).toBeCalled();
    expect(cb).toMatchSnapshot();
  });
});
