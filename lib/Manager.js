const Employee = require('../lib/Employee');

class Manager extends Employee {

    constructor(names, id, email, officeNumber) {
        super(names, id, email)

        this.officeNumber = officeNumber;

    }
    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {

        return 'Manager';
    }

}



module.exports = Manager;