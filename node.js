// server.js
require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
console.log(`I am ${process.env.name}, wilder in ${process.env.city}, and I love ${process.env.language}`)