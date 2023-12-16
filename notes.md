# Ajax Tutorial

AJAX is an acronym for Asynchronous JavaScript and XML. It is a group of inter-related technologies like JavaScript, DOM, XML, HTML/XHTML, CSS, XMLHttpRequest etc.

AJAX allows you to send and receive data asynchronously without reloading the web page. So it is fast.

No page refresh or reload is required

AJAX allows you to send only important information to the server not the entire page. So only valuable data from the client side is routed to the server side. It makes your application interactive and faster.

<!-- ***************************************************************************** -->

WHY TO USE AJAX ?

- no page refresh or reload required
- -save network bandwidth ---> Retrieving/ passing only the small data instead of whole page

Modern website use JSON instead of XML for data transfer because json is more reliable, easy to understand.Xml is more secure than json

Where it is used?
There are too many web applications running on the web that are using ajax technology like gmail, facebook,twitter, google map, youtube etc.

<!-- ******************************************************************************* -->

AJAX Technologies
As describe earlier, ajax is not a technology but group of inter-related technologies. AJAX technologies includes:

HTML/XHTML and CSS
DOM
XML or JSON
XMLHttpRequest
JavaScript
HTML/XHTML and CSS
These technologies are used for displaying content and style. It is mainly used for presentation.

DOM
It is used for dynamic display and interaction with data.

XML or JSON
For carrying data to and from server. JSON (Javascript Object Notation) is like XML but short and faster than XML.

XMLHttpRequest
For asynchronous communication between client and server. For more visit next page.

JavaScript
It is used to bring above technologies together.

Independently, it is used mainly for client-side validation.

<!-- ************************************************************************** -->

source :<https://www.javatpoint.com/understanding-synchronous-vs-asynchronous>

Understanding Synchronous vs Asynchronous
Before understanding AJAX, let’s understand classic web application model and ajax web application model first.

Synchronous (Classic Web-Application Model)
A synchronous request blocks the client until operation completes i.e. browser is unresponsive. In such case, javascript engine of the browser is blocked.

synchronous request
full page is refreshed at request time and user is blocked until request completes.

how synchronous request works

Asynchronous (AJAX Web-Application Model)
An asynchronous request doesn’t block the client i.e. browser is responsive. At that time, user can perform another operations also. In such case, javascript engine of the browser is not blocked.

asynchronous request
As you can see in the above image, full page is not refreshed at request time and user gets response from the ajax engine.

how asynchronous request works
Note: every blocking operation is not synchronous and every unblocking operation is not asynchronous.

<!-- ************************************************************************** -->

HOW AJAX WORKS

SOURCE:<https://www.javatpoint.com/how-ajax-works>

IMG ADDRESS --> <https://static.javatpoint.com/images/ajax/howajaxworks.png>

User sends a request from the UI(browser) and a javascript call goes to XMLHttpRequest object(also called xhr object).
HTTP Request is sent to the server by XMLHttpRequest object.
here the protocol can be http or https
Server interacts with the database using JSP, PHP, Servlet, ASP.net etc.
Data is retrieved.
Server sends XML data or JSON data or .txt file or .html file to the XMLHttpRequest callback function.
HTML and CSS data is displayed on the browser (result shown to the user).

<!-- ************************************************************************* -->

Understanding XMLHttpRequest

An object of XMLHttpRequest is used for asynchronous communication between client and server.

It performs following operations:

1- Sends data from the client in the background
2- Receives the data from the server
3- Updates the webpage without reloading it.

Properties of XMLHttpRequest object :

The common properties of XMLHttpRequest object are as follows:

<!-- Property ----------------> Description -->

(A) onReadyStateChange ---------------------->It is called whenever readystate attribute changes. It must not be used with synchronous requests.

(B) readyState -------> represents the state of the request. It ranges from 0 to 4.
0 MEANS : UNOPENED open() is not called.

1 MEANS : OPENED open is called but send() is not called.

2 MEANS : HEADERS_RECEIVED send() is called, and headers and status are available.

3 MEANS : LOADING Downloading data; responseText holds the data.

4 MEANS : DONE The operation is completed fully.

(C) reponseText ----> returns response as text.
(D) responseXML -----> returns response as XML

Methods of XMLHttpRequest object
The important methods of XMLHttpRequest object are as follows:

<!-- Method ----------> Description -->

void open(method, URL) ---> opens the request specifying get or post method and url.
void open(method, URL, async) -----> same as above but specifies asynchronous or not.
void open(method, URL, async, username, password) -----> same as above but specifies username and password.
void send() -----> sends get request.
void send(string) -----> send post request.
setRequestHeader(header,value) -----> it adds request headers.

<!-- ***************************************************************************** -->
