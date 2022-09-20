const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

const intern = new Intern('sabrina', 2, 'test@test.com', 'school');


describe('school', () => {
    it('Should return school name', () => {
        expect(intern.school).toBe('school')
    })
})