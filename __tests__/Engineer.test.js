const Engineer = require('../lib/Engineer');

describe('Creates an engineer object', () => {
    const engineer = new Engineer("Jack", 22, "jack@jill.com", "jackGitHub");
    it('getRole method', () => {
        const role = engineer.getRole();
        expect(role).toBe('Engineer');
    });

    it('getGithub method', () => {
        const github = engineer.getGithub();
        expect(github).toBe("jackGitHub");
    });
});