const Employee = require('../lib/Employee');

const emp = new Employee('sabrina', 2, 'test@test.com');

describe('name', () => {
    it('Should return Employee name', () => {
        expect(emp.name).toBe('sabrina')
    })

});

describe('id', () => {
    it('Should return id number', () => {
        expect(emp.id).toBe(2)
    })

});


describe('email', () => {
    it('Should return email address', () => {
        expect(emp.email).toBe('test@test.com')
    })
});

