
const User = require('./../app/user');

describe("Suite test for class User", () => {

    test('Test case 1', () => {

        // Creating a new object from the class User
        const user = new User(
            1, 
            'FabianGarciaXY', 
            'Fabian', 
            'Hola mi nombre es Fabian',
            'date',
            'last date'
        )

        // Here goes each test case
        expect(user.id).toBe(1);
        expect(user.username).toBe('FabianGarciaXY');
        expect(user.name).toBe('Fabian');
        expect(user.bio).toBe('Hola mi nombre es Fabian');
        expect(user.dateCreated).toBe('date');
        expect(user.lastUpdated).toBe('last date');
    })
})