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

/*
const ul = document.getElementById('candidates')
fetch('https://randomuser.me/api/?results=10')
    .then((resp) => resp.json()) 
    .then(function (data) {
        let users = data.results;
        return users.map((user) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const p = document.createElement('p');


            ul.appendChild(li)
            let paragraph = li.appendChild(p);
            let image = li.appendChild(img)

            let firstName = user.name.first;
            let lastName = user.name.last;
            console.log(user.picture.large)
            paragraph.innerHTML = `${firstName} ${lastName}`
            image.src = user.picture.large;
    });
      
})  .catch((error) => console.log(error));;
*/

//HANDLING POST REQUESTS
let data = {
    name: 'Micheal Angelo',
};

button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/?results=10'), 
        method ('POST'),
        body (data),
    
    .then(function (data) {
        console.log(data);
    });
});
