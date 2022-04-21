class User {
    constructor(id, username, name, bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
    // Requerimiento 3
    get getDateCreated() { return this.dateCreated; }
    get getLastUpdated() { return this.lastUpdated; }
    // Requerimiento 4
    set setUsername(username) { this.username = username;}
    set setBio(bio) { this.bio = bio;}
}

module.exports = User;