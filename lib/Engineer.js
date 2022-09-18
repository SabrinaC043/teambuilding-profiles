const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(names, id, email, github) {
        super(names, id, email,)

        this.github = github;
    }

    getGithub() {

        return this.github;
    }
    getRole() {
        return 'Engineer';
    }

}



module.exports = Engineer;