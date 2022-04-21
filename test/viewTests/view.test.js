
const User = require('../../app/models/user');
const UserView = require('./../../app/userView/userView');

describe('Tests for User View', () => {

    // Requirement 1
    test('Validating payload isn\'t null', () => {

        const payload = null;
        const response = UserView.createUser(payload);

        expect(response.error).toMatch(/payload no existe/);
    });

    //Requirement 2
    test('Requirement 2: validating any key in the payload has a null value', () => {
        const payload = {
            id: null,
            username: 'FabianXY',
            name: 'Fabian'
        }

        const response = UserView.createUser(payload);
        expect(response.error).toMatch(/necesitan tener un valor válido/);
    });

    // Requirement 3
    test('Requirement 3: validating payload has all its properties', () => {

        const payload = {
            id: 2,
            username: 'Fabian'
        }

        const response = UserView.createUser(payload);
        expect(response.error).toMatch(/necesitan tener un valor válido/);
    })

    test('Create a User by given a valid payload', () => {

        const payload = {
            id: 1,
            username: 'FabianXY',
            name: 'Fabian'
        }

        response = UserView.createUser(payload)
        expect(response.id).toEqual(1);
        expect(response.username).toBe('FabianXY');
        expect(response.name).toBe('Fabian');
    })
})