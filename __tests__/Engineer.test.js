const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer("Jack", 22, "jack@jill.com", "jackGitHub");
    const role = engineer.getRole();
    const github = engineer.getGithub();
  
    expect(role).toBe('Engineer');
    expect(github).toBe("jackGitHub");
});