'use strict'

//Definimos el array de análisis
const users =[
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: false},
    {username: 'sergio58', age: 26, premium: true}
];

users.map(function (user) {
    if (user.premium) {
        console.log("El usuario "+ user.username + ", de edad " + user.age + " años, es un usuario premium.")
    }
});

const usernopremium = users.filter(user=>!user.premium);
console.log(usernopremium);