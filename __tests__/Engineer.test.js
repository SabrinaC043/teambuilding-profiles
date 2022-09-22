const Engineer = require('../lib/Engineer');

const eng = new Engineer('sabrina', 2, 'test@test.com', 'git@github.com', 'Engineer');

describe('github', () => {
    it('Should return github email', () => {
        expect(eng.github).toBe('git@github.com');
    })

});

describe('Role', () => {
    it('Should return Engineer', () => {
        expect(eng.getRole()).toBe('Engineer');
    })

});

