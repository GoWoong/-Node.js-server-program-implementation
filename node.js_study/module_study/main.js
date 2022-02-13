// const math = require('./math-tools');

// console.log(math.add(1,2));
// console.log(math.subtract(4,2));
// console.log(math.multiply(3,4));
// console.log(math.divide(4,2));

//const fs = require('fs');

// let fileList = fs.readdirSync('.');
// console.log(fileList);

// fs.writeFileSync('new', 'hello node.js!');

// const os = require('os');

// console.log(os.cpus());

// const cowsay = require('cowsay');

// console.log(cowsay.say({
//   text : "I love javascript",
// }));


// const fs = require('fs');

// console.log('start');

// let constent = fs.readFile('./new', 'utf8', (error, data) => {
//   console.log(data);
// });
// console.log(content)

// console.log('finish');

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('test', () => {
  console.log('Success!');
});
myEmitter.emit('test');
myEmitter.emit('test');