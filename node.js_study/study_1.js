//require http module
const http = require('http');

/*
//create server object
let server = http.createServer((request,response)=>{
  console.log(request.url);
  //response.end('<h1>Hello world!</h1>');
});
*/

const users = ['Tom','Andy','Jessica','Paul','Ko'];
const server = http.createServer((request,response)=>{
  if(request.url === '/'){
    response.end('<h1>Welcome!</h1>');
  }else if(request.url === '/users'){
    response.end(`<h1>${users}</h1>`);
  }else if(request.url.split('/')[1] === 'users'){
    const userIdx = request.url.split('/')[2];
    const userName = users[userIdx -1];
    response.end(`<h1>${userName}</h1>`);
  }else{
    response.end('<h1>Page Not Available</h1>');
  }
});
//3000 is fort number
server.listen(3000);