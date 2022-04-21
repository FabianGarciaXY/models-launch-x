const User = require('./user');

class Service{

    static create(id, username, name){
        return new User(id, username, name, 'No bio');
    }
}

module.exports = Service;