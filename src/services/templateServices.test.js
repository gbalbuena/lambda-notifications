import templateService from './templateService';

describe('Template Service', () => {
  it('should replace fields', () => {
    expect(templateService.getContent('Hi {name}', { name: 'John' })).toBe(
      'Hi John'
    );
  });
});
