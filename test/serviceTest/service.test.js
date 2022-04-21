
const UserService = require('../../app/services/service');

describe('Suite of tests for Service class', () => {

    // Requerimiento 1
    test('Requirement 1: using a class UserService', () => {

        const user = UserService.create(1, 'FabianXY', 'Fabian');
        expect(user.id).toBe(1);
        expect(user.name).toBe('Fabian');
        expect(user.username).toBe('FabianXY');
        expect(user.bio).not.toBeUndefined();
    })

    // Requerimiento 2
    test('Requirement 2: testig static method getInfo', () => {

        const user = UserService.create(1, 'FabianXY', 'Fabian');
        const userInfo = UserService.getInfo(user)
        
        expect(userInfo[0]).toBe(1);
        expect(userInfo[1]).toBe('FabianXY');
        expect(userInfo[2]).toBe('Fabian');
        expect(userInfo[3]).toBe('My bio');

    })
})