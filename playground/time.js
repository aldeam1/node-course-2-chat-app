var moment = require('moment');
// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

// var date = moment ();
// date.add(1, 'year').subtract(9,'months');
// console.log(date.format('MMM Do YYYY'));

new Date().getTime();
var someTimeStamp = moment().valueOf(da);
console.log(someTimeStamp);

var createdAt =1234;
var date = moment(createdAt);
console.log(date.format('hh:mm a'));