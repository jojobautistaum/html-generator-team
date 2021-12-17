const Intern = require('../lib/Intern');

describe('Creates an intern object', () => {
    const intern = new Intern("Joe", 12, "joe@wick.com", "UM");
    it('getRole method', () => {
        const role = intern.getRole();
        expect(role).toBe('Intern');
    });

    it('getSchool method', () => {
        const school = intern.getSchool();
        expect(school).toBe("UM");
    });
});