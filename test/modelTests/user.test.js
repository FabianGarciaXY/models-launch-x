const User = require('./../../app/models/user');

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
        // Verifiryn its values are not undifined
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });

    // Adding getters
    test('Testing getters', () => {
        const newUser = new User(2, 'FabyanXY', 'Fabi', 'My Bio');
        expect(newUser.username).toBe('FabyanXY');
        expect(newUser.name).toBe('Fabi');
        expect(newUser.bio).toBe('My Bio');
        expect(newUser.getDateCreated).not.toBeUndefined();
        expect(newUser.getLastUpdated).not.toBeUndefined();
    });

    test('Adding Setters', () => {
        const user = new User(3, 'FabianGahezz', 'Fabian', 'Bio');
        user.setUsername = 'FabianXY';
        expect(user.username).toBe('FabianXY');
        user.bio = 'My new Bio';
        expect(user.bio).toBe('My new Bio');
    })
})