
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

    // Requerimiento 3
    test('Requirement 3: testing static method updateUserUsername', () => {

        const user = UserService.create(1, 'FabianXY', 'Fabian');
        UserService.updateUserUsername(user, 'FabianGahezz');
               
        expect(user.id).toBe(1);
        expect(user.username).toBe('FabianGahezz');
        expect(user.name).toBe('Fabian')
    });

    // Requerimiento 4
    test('Requirement 4: test case for getAllUsernames', () => {
        
        const user1 = UserService.create(1, 'FabianXY', 'Fabian');
        const user2 = UserService.create(2, 'JavierXD', 'Javier');
        const user3 = UserService.create(3, 'Juan123', 'Juan');
        const user4 = UserService.create(4, 'Luisa#1', 'Luisa');

        const listOfUsers = [user1, user2, user3, user4];
        const listOfUsernames = UserService.getAllUsernames(listOfUsers);

        expect(listOfUsernames).toEqual(['FabianXY', 'JavierXD', 'Juan123', 'Luisa#1']);
    })
})