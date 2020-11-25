alert('hello');

document.writeln('Hello World '); 
 

var customerName = prompt("What show would you like to watch");

var x = new String("friends");             
var y = new String("John");


 if( customerName == x ) {
   document.writeln(customerName);
   
   var obj = {"video": {
  "value": "<iframe title='YouTube video player' type=\"text/html\" width='480' height='320' src='https://www.youtube.com/watch?v=sLisEEwYZvw' frameborder='0' allowFullScreen></iframe>"
}}
document.write(obj.video.value);

   
 } 
else if( customerName == y) {
	document.writeln(customerName);
}
else {
	document.writeln(customerName + " is invalid");
}