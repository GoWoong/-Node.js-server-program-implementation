/*
async function fetchAndPrint() {
  try{
    const response = await fetch('https://www.google.com');
    const result = await response.text();
    console.log(result);
  }catch(error){
    console.log(error);
  }
}

fetchAndPrint();
*/


//try catch finally
/*
async function fetchAndPrint() {
  try{
    const response = await fetch('https://www.google.com');
    const result = await response.text();
    console.log(result);
  }catch(error){
    console.log(error);
  }finally{
    console.log('exit');
  }
}

fetchAndPrint();
*/


// async는 프로미스 객체를 리턴한다.
/*
async function fetchAndPrint() {
  return 3;
}
fetchAndPrint();
*/

//
async function fetchAndPrint() {
  return fetch('https://jsonplaceholder.typicode.com/users')
          .then((response)=> response.text());
}
fetchAndPrint();