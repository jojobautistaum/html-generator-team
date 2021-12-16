const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee("Demi", 33, "demi@more.com");
    const role = employee.getRole();
    const name = employee.getName();
    const id = employee.getId();
    const email = employee.getEmail();
  
    expect(role).toBe('Employee');
    expect(name).toBe("Demi");
    expect(id).toBe(33);
    expect(email).toBe("demi@more.com");
});