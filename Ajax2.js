console.log(`Welcome to ajax-tutorials.... USING XML DATA-TYPE`);

backupBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  // setting a new request based to "POST-REQUEST" : to send  the data

  //Instantiate an xhr object(ie creating a object) using XMLHttpRequest's class constructor
  const xhr = new XMLHttpRequest();
  console.log('Ready state before opening the request:', xhr);

  // open the object to make request: open(method,url/file, sync_operation/ async_operation(specify true), userName, Password )
  // use the below url to add a new user
  xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
  // it means we are sending the data in url
  xhr.getResponseHeader('Content-type', 'application/json');
  console.log('ready state after opening request: ', xhr);

  // What to do on progress-----> use with spinners and loading view
  xhr.onprogress = function () {
    console.log(`On Progress....`);
    console.log(`Ready state on progress of the request: `, xhr);
  };

  //sending the post request
  params = { name: 'test', salary: '123', age: '23' };
  xhr.send(params);
  console.log(`ready state after sending request: `, xhr);

  //OTHER WAY TO KNOW STATUS USING onReadyStateChange status  METHOD [0-4]
  xhr.onreadystatechange = function () {
    console.log('onReadyStateChange status is ', xhr.readyState);
  };

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log(`No such file is found`);
    }
    console.log(`ready state after getting response: `, xhr);
  };

  console.log('we are done');
}
//******************************************************************************** */
// based on populate button
let popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click', popHandler);

function popHandler() {
  // setting a new request based to "POST-REQUEST" : to send  the data

  //Instantiate an xhr object(ie creating a object) using XMLHttpRequest's class constructor
  const xhr = new XMLHttpRequest();
  console.log('Ready state before opening the request:', xhr);

  // open the object to make request: open(method,url/file, sync_operation/ async_operation(specify true), userName, Password )
  // use the below url to get employee list
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

  // What to do on progress-----> use with spinners and loading view
  xhr.onprogress = function () {
    console.log(`On Progress....`);
    console.log(`Ready state on progress of the request: `, xhr);
  };

  //sending the get request
  xhr.send();
  console.log(`ready state after sending request: `, xhr);

  //OTHER WAY TO KNOW STATUS USING onReadyStateChange status  METHOD [0-4]
  xhr.onreadystatechange = function () {
    console.log('onReadyStateChange status is ', xhr.readyState);
  };

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list_target = document.getElementById('list');
      let str = '';
      for (ele in obj) {
        console.log(obj[ele]);
        str += `<li>${obj[ele].name}</li>`;
        console.log(str);
      }
      console.log('finally: ', str);
      list_target.innerHTML = str;
    } else {
      console.log(`No such file is found`);
    }
    console.log(`ready state after getting response: `, xhr);
  };

  console.log('we are done fetching employees');
}
