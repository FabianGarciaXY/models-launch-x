
const UserService = require('./../app/service');

describe('Suite of tests for Service class', () => {

    test('Requirement 1: using a class UserService', () => {

        const user = UserService.create(1, 'FabianXY', 'Fabian');

        expect(user.id).toBe(1);
        expect(user.name).toBe('Fabian');
        expect(user.username).toBe('FabianXY');
        expect(user.bio).not.toBeUndefined();
    })
})