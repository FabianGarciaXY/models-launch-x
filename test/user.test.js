
const User = require('./../app/user');

describe("Suite test for class User", () => {

    test('Test case 1', () => {

        const user = new User(
            1, 
            'FabianGarciaXY', 
            'Fabian', 
            'Hola mi nombre es Fabian',
            '20 de Abril 2022',
            '20 de Abril 2022'
        )
        expect(user.username).toBe('F');
    })
})