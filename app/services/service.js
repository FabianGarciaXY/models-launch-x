const User = require('../models/user');

class Service{

    static create(id, username, name){
        return new User(id, username, name, 'My bio');
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio];
    }
}

module.exports = Service;