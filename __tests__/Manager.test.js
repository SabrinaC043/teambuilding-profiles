const Manager = require('../lib/Manager');

const man = new Manager('sabrina', 2, 'test@test.com', 6, "Manager");


describe('officeNumber', () => {
    it('Should return office number', () => {
        expect(man.officeNumber).toBe(6)
    })

});
describe('Role', () => {
    it('Should returnManager', () => {
        expect(man.getRole()).toBe('Manager');
    })

});