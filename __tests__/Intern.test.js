const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern("Joe", 12, "joe@wick.com", "UM");
    const role = intern.getRole();
    const school = intern.getSchool();
  
    expect(role).toBe('Intern');
    expect(school).toBe("UM");
});