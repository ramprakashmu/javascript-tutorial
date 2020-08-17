JAvascript API calling
----------------------

var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()


JavaScript Object
-----------------

A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

JavaScript is an object-based language. Everything is an object in JavaScript.

JavaScript is template based not class based.

There are 3 ways to create objects.

#1. By object literal

Syntax:
object={property1:value1,property2:value2.....propertyN:valueN}  

Example:
<script>  
emp={id:102,name:"Shyam Kumar",salary:40000}  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
</script>  

#2. By creating instance of Object directly (using new keyword)
Syntax:
var objectname=new Object();   

Example:
<script>  
var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
</script>  


#3. By using an object constructor (using new keyword)
Here, you need to create function with arguments. Each argument value can be assigned in the current object by using this keyword.

The this keyword refers to the current object.

The example of creating object by object constructor is given below.

<script>  
function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
e=new emp(103,"Vimal Jaiswal",30000);  
</script>



JS Array
---------
JavaScript array is an object that represents a collection of similar type of elements.

There are 3 ways to construct array in JavaScript
    By array literal -> var arrayname=[value1,value2.....valueN];  
    By creating instance of Array directly (using new keyword) - > var arrayname=new Array();  
    By using an Array constructor (using new keyword) - > var emp=new Array("Jai","Vijay","Sam");  

Few Regular function:
        pop()	It removes and returns the last element of an array.
        push()	It adds one or more elements to the end of an array.
        reverse()	It reverses the elements of given array.
        forEach()	It invokes the provided function once for each element of an array.
        sort()	It returns the element of the given array in a sorted order.
        isArray()	It tests if the passed value ia an array.
        includes()	It checks whether the given array contains the specified element.

JS String
---------
JavaScript String
The JavaScript string is an object that represents a sequence of characters.

There are 2 ways to create string in JavaScript

By string literal -> var stringname="string value";  
By string object (using new keyword) -> var stringname=new String("string literal");  

Few Regular functions:
        charAt()	It provides the char value present at the specified index.
        charCodeAt()	It provides the Unicode value of a character present at the specified index.
        concat()	It provides a combination of two or more strings.
        indexOf()	It provides the position of a char value present in the given string.
        lastIndexOf()	It provides the position of a char value present in the given string by searching a character from the last position.
        search()	It searches a specified regular expression in a given string and returns its position if a match occurs.
        match()	It searches a specified regular expression in a given string and returns that regular expression if a match occurs.
        replace()	It replaces a given string with the specified replacement.
        substr()	It is used to fetch the part of the given string on the basis of the specified starting position and length.
        substring()	It is used to fetch the part of the given string on the basis of the specified index.
        slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
        toLowerCase()	It converts the given string into lowercase letter.
        toLocaleLowerCase()	It converts the given string into lowercase letter on the basis of host?s current locale.
        toUpperCase()	It converts the given string into uppercase letter.
        toLocaleUpperCase()	It converts the given string into uppercase letter on the basis of host?s current locale.
        toString()	It provides a string representing the particular object.
        valueOf()	It provides the primitive value of string object.
        split()	It splits a string into substring array, then returns that newly created array.
        trim()	It trims the white space from the left and right side of the string.


JS Date
-------
Current Time: <span id="txt"></span>  
<script>  
window.onload=function(){getTime();}  
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
// add a zero in front of numbers<10  
m=checkTime(m);  
s=checkTime(s);  
document.getElementById('txt').innerHTML=h+":"+m+":"+s;  
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  
</script> 