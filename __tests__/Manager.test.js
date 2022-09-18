const Manager = require('../lib/Manager');

const man = new Manager('sabrina', 2, 'test@test.com', 6);


describe('officeNumber', () => {
    it('Should return office number', () => {
        expect(man.officeNumber).toBe(6)
    })

});
