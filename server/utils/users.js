[{
    id: '',
    name: 'Andrew',
    room: 'the office fans'
}]

//addUser(id, name, room)
//removeUser(id)
//getUser(id) -->fetch user
//getUserList(room)

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    //return user that was removed
    removeUser(id) {
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !==id)  // va crea un nou array (this.users) care nu va contine elementul selectat(id)
        }

        return user;
    }
    getUser(id){
        return this.users.filter((user)=> user.id === id)[0];
    }
    getUserList(room){
        var users = this.users.filter((user) => {
            return user.room === room;
        });
        // se putea scrie si asa: var users = this.users.filter((user) => user.room === room)
        var namesArray = users.map((user)=>{
            return user.name
        });
        // se putea scrie si var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}


module.exports = {Users};


// class Person {
//     constructor (name, age) {
//        this.name= name;
//        this.age= age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }

// var me = new Person('Mihai', 35);
// console.log('this.name', me.name);
// console.log('this.age', me.age);
// var description = me.getUserDescription();
// console.log(description);