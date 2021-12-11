const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super();
        this.school = school;
        this.role = "Employee";
    }

    getSchool() {

    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;