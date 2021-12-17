const Manager = require('../lib/Manager');

describe('Creates a manager object', () => {
    const manager = new Manager("Tim", 22, "tim@ball.com", 1);
    it('getRole method', () => {
        const role = manager.getRole();
        expect(role).toBe('Manager');
    });

    it('getOfficeNumber method', () => {
        const officeNumber = manager.getOfficeNumber();
        expect(officeNumber).toBe(1);
    });
});