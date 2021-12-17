const Employee = require('../lib/Employee');

describe('Creates an employee object', () => {
    const employee = new Employee("Demi", 33, "demi@more.com");
    it('getRole method', () => {
        const role = employee.getRole();
        expect(role).toBe('Employee');
    });

    it('getName method', () => {
        const name = employee.getName();
        expect(name).toBe("Demi");
    });

    it('getId method', () => {
        const id = employee.getId();
        expect(id).toBe(33);
    });

    it('getEmail method', () => {
        const email = employee.getEmail();
        expect(email).toBe("demi@more.com");
    });
});