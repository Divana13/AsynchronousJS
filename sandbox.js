const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

getTodos("boss/rockie.json", (err, data) => {
  const red = document.getElementById("result");
  if (err) {
    console.log(err);
  }
  if (data) {
    red.innerText = data;
  }
});
