const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager("Tim", 22, "tim@ball.com", 1);
    const role = manager.getRole();
    const officeNumber = manager.getOfficeNumber();
  
    expect(role).toBe('Manager');
    expect(officeNumber).toBe(1);
});