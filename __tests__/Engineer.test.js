const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Joe', '123', 'abc@email.com');
    const role = engineer.getRole();
    const github = engineer.getGithub();

    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toBe('123');
    expect(role).toBe('Engineer');
    expect(engineer.email).toBe('abc@email.com');
    expect(github).toBe(`https://github.com/${engineer.name}`);
});