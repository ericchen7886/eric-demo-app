export const userSays = 'Hello!';

export function sayHello(name) {
    console.log(name + ': ' + userSays);
}

export const user = {
    name: 'John Doe',
    id: 1234,
    email: 'johndoe@gmail.com'
};

export class User {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    sayHello() {
        console.log(this.name + ': Hello!');
    }
}
