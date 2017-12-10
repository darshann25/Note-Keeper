console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// var res = notes.addNote();
// console.log(res);

// var sum = notes.add(73, 27);
// console.log('Result :', sum);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.\n`, function (err) {
//     if (err) {
//         console.log('Unable to write to file.');
//     }
// });

// console.log(_.isString(true))
// console.log(_.isString('Darshan'))

var filterArray = _.uniq(['Darshan', 1, 'Darshan', 1, 2, 2, 3, 4]);
console.log(filterArray);