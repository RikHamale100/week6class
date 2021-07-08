/*const user = {
    name: 'Richard',
    username: 'Richardmoney1234',
    email: 'richardmoney@yahoo.com',
    age: 27,
    blog: ['My first blogpost', 'Bad guy blog', 'How e be'],
    greet(){
        console.log(`Hello ${this.name}`)
    },
    logIn(){
        console.log(`${this.name} is logged in`)
    },
    logOut(){
        console.log('You are logged out')
    },

}
user.greet();
user.logIn();
console.log(user.blog[1]);*/

//CLASS DECLARATION


/*class user{
    constructor(username, age, email){
        this.username = username;
        this.age = age;
        this.email = email;
    }
}

const userOne = new user('rikki', 56, 'rikki@gmail.com');
const userTwo = new user('Labba', 70, 'labbalabba@gmail.com');

console.log(userOne)
console.log(userTwo)

class Admin extends {
    constructor(){
        
    }
}
*/

fetch('https://randomuser.me/api/?results=10')
.then(resp => {
   return resp.json()
}) 
    .then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});


