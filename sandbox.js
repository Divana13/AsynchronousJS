const getTodos = (resource) => {
  return new Promise((resolve, reject) =>{

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos('boss/rockie.json').then(data =>{
  console.log('rockie mission', data);
  return getTodos('boss/junior.json');
}).then(data =>{
  console.log('Junior mission:', data);
  return getTodos('boss/senior.json');
}).then(data =>{
  console.log('senior mission:', data);
}).catch(err =>{
  console.log(err);
});
