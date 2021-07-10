const ul = document.getElementById('profiles')

fetch('https://randomuser.me/api/?results=30')
    .then((resp) => resp.json()) 
    .then(function (data) {
        let users = data.results;
        return users.map((user) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const p = document.createElement('p');
            
            
            
        

            ul.appendChild(li)
            let paragraph = li.appendChild(p);
            let image = li.appendChild(img);
            
        

            let firstName = user.name.first;
            let lastName = user.name.last;
            let email = user.email;
            let city = user.city;
            let country = user.country;
            console.log(user.city)
            paragraph.innerHTML = `${firstName} ${lastName} ${email} ${city} ${country}`
            image.src = user.picture.large;
    });
      
})  .catch((error) => console.log(error));;
