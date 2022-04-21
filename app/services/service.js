const User = require('../models/user');

class Service{

    // Requirement 1
    static create(id, username, name){
        return new User(id, username, name, 'My bio');
    }

    // Requirement 1
    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio];
    }

    // Requirement 2
    static updateUserUsername(user, newName) {
        user.username = newName;
    }

}

module.exports = Service;