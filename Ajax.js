console.log(`Welcome to ajax-tutorials.... USING XML DATA-TYPE`);

let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  // setting a new request based to "GET-REQUEST" : to get the data

  //Instantiate an xhr object(ie creating a object) using XMLHttpRequest's class constructor
  const xhr = new XMLHttpRequest();
  console.log('Ready state before opening the request:', xhr);

  // open the object to make request: open(method,url/file, sync_operation/ async_operation(specify true), userName, Password )
  xhr.open('GET', 'ajay.txt', true);
  console.log('ready state after opening request: ', xhr);

  // What to do on progress-----> use with spinners and loading view
  xhr.onprogress = function () {
    console.log(`On Progress....`);
    console.log(`Ready state on progress of the request: `, xhr);
  };

  //sending the request
  xhr.send();
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
}
