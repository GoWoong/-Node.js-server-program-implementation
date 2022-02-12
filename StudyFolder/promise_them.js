/*
fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    return newMembers;
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMembers),
  }))
  .then((response) => { 
    if (response.status === 200) {
      return response
    } else {
      throw new Error('New members not added');
    }
  })
  .then((response) => response.json())
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  });
*/

/*
const s = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('success'); }, 2000);
});

s.then((result) => { console.log(result); });
*/
//프로미스 객체를 만드는 예제
const p = new Promise((resolve, reject) => {
  setTimeout(() => { reject(new Error('fail')); }, 2000);
});

p.catch((error) => { console.log(error); });