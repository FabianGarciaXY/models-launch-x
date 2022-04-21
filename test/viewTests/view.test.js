
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

})