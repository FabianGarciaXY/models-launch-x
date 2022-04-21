
const UserService = require('./../services/service');

class UserView {

    static createUser(payload) {

        if (payload == null) {
            const error = {error: 'payload no existe'}
            return error;
        }
        else if (!payload.id || !payload.username || !payload.name) {
            const error =  { error: 'necesitan tener un valor válido' }
            return error;
        } 
        else if (payload.id == null || payload.username == null || payload.username == null){
            const error =  {error: 'necesitan tener un valor válido'}
            return error;
        }
        else {
            return UserService.create(payload.id, payload.username, payload.name)
        }
    }
}

module.exports = UserView;