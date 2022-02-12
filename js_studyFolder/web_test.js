// fetch('https://learn.codeit.kr/api/members')
//   .then((response)=>response.text())
//   .then((result)=>{console.log(result);});

// const newMember = {
//   name: 'Jerry',
//   email: 'jerry@codeitmail.kr',
//   department: 'engineering'
// };

// fetch('https://learn.codeit.kr/api/members',{
//   method: 'POST',
//   body: JSON.stringify(newMember),
// })
//   .then((response)=>response.text())
//   .then((result)=>{console.log(result);});

// const Member = {
//   name: 'Alice',
//   email: 'alice@codeitmail.kr',
//   department: 'marketing'
// };

// fetch('https://learn.codeit.kr/api/members/2',{
//   method: 'PUT',
//   body: JSON.stringify(Member),
// })
//   .then((response)=>response.text())
//   .then((result)=>{console.log(result);});

fetch('https://learn.codeit.kr/api/members/2',{
  method: 'DELETE'
})
  .then((response)=>response.text())
  .then((result)=>{console.log(result);});