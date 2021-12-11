const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.github = `https://github.com/${name}`;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    };

    getRole() {
        return this.role;
    };

}

module.exports = Engineer;