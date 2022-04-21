
const UserService = require('./../services/service');

class UserView {

    static createUser(payload) { {}
        if (payload == null) {
            const error = {error: 'payload no existe'}
            return error;
        } else {
            return UserService.create(payload);
        }
    }
}

module.exports = UserView;