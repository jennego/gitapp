const fetch = require("node-fetch");

console.log('hi');


  getUserRepo (params) {
    return fetch(
    `https://api.github.com/users/${params}/repos`,
      {
        headers: {
          'Content-Type': 'daapplication/json'
        }
      }
    ).then(res => res.json(console.log()))
  }
