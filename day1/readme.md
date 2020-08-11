JS Comment
----------
There are two types of comments in JavaScript.

1. Single-line Comment (//)
    <script>  
    var a=10;  
    var b=20;  
    var c=a+b;//It adds values of a and b variable  
    document.write(c);//prints sum of 10 and 20  
    </script>  
2. Multi-line Comment (/**/)
    <script>  
    /* It is multi line comment.  
    It will not be displayed */  
    document.write("example of javascript multiline comment");  
    </script>  


JS Variable
-----------

There are some rules while declaring a JavaScript variable.

Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
After first letter we can use digits (0 to 9), for example value1.
JavaScript variables are case sensitive, for example x and X are different variables.


ES2015 introduced two important new JavaScript keywords: let and const.
----------------------------------------------------------------------
These two keywords provide Block Scope variables (and constants) in JavaScript.

Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope. 

let:
Variables declared with the let keyword can have Block Scope.
Variables declared inside a block {} cannot be accessed from outside the block:

const:
Variables defined with const behave like let variables, except they cannot be reassigned:
const myvalue = 3.141592653589793;
myvalue = 3.14;  // gives error
myvalue = myvalue + 10; // gives error



JavaScript Global Variable
--------------------------
A JavaScript global variable is declared outside the function or declared with window object. It can be accessed from any function.

Let’s see the simple example of global variable in JavaScript.

<script>  
var value=50000;//global variable  
function a(){  
alert(value);  
}  
function b(){  
alert(value);  
}  
</script>  


window object
--------------
window.fieldName = "Jrocks"

alert(fieldName);


JavaScript primitive data types
------------------------------

There are five types of primitive data types in JavaScript. They are as follows:

Data Type	Description
String	represents sequence of characters e.g. "hello"
Number	represents numeric values e.g. 100
Boolean	represents boolean value either false or true
Undefined	represents undefined value
Null	represents null i.e. no value at all


JavaScript non-primitive data types
------------------------------------
Data Type	Description
Object	represents instance through which we can access members
Array	represents group of similar values
RegExp	represents regular expression

Example:
<script>  
emp={id:102,name:"Shyam Kumar",salary:40000}  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
</script>  

<script>  
var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
</script>  



JavaScript Operators
--------------------
There are following types of operators in JavaScript

Arithmetic Operators 
-------------------
+	Addition	
-	Subtraction
*	Multiplication
/	Division
%	Modulus (Remainder)	
++	Increment
-- Decrement

Comparison (Relational) Operators
---------------------------------
==	Is equal to	
===	Identical (equal and of same type)
!=	Not equal to	
!==	Not Identical	
>	Greater than	
>=	Greater than or equal to	
<	Less than	
<=	Less than or equal to

Bitwise Operator
----------------
&	Bitwise AND	
|	Bitwise OR	
^	Bitwise XOR	
~	Bitwise NOT
<<	Bitwise Left Shift	
>>	Bitwise Right Shift	
>>>	Bitwise Right Shift with Zero	


Logical Operators
-----------------
&&	Logical AND	
||	Logical OR	
!	Logical Not	!true = false


Assignment Operator
-------------------
=	Assign	
+=	Add and assign
-=	Subtract and assign	
*=	Multiply and assign	
/=	Divide and assign	
%=	Modulus and assign	

Special Operator
----------------
(?:)	Conditional Operator returns value based on the condition. It is like if-else.
,	Comma Operator allows multiple expressions to be evaluated as single statement.
delete	Delete Operator deletes a property from the object.
in	In Operator checks if object has the given property
instanceof	checks if the object is an instance of given type
new	creates an instance (object)
typeof	checks the type of object.
void	it discards the expression's return value.
yield	checks what is returned in a generator by the generator's iterator.




JS If Statement
---------------
The JavaScript if-else statement is used to execute the code whether condition is true or false. There are three forms of if statement in JavaScript.

If Statement
If else statement
if else if statement

Syntax:

if(expression){  
//content to be evaluated  
}  

Example:

<script>  
var a=20;  
if(a>10){  
document.write("value of a is greater than 10");  
}  
</script>  

JS Switch
---------
The JavaScript switch statement is used to execute one code from multiple expressions. 
It is just like else if statement that we have learned in previous page. 
But it is convenient than if..else..if because it can be used with numbers, characters etc.

Syntax:

switch(expression){  
case value1:  
 code to be executed;  
 break;  
case value2:  
 code to be executed;  
 break;  
......  
  
default:   
 code to be executed if above values are not matched;  
}


Eg:
<script>  
var grade='1';  
var result;  
switch(grade){  
case '1':  
result="First Rank";  
break;  
case '2':  
result="Second Rank";  
break;  
case '3':  
result="Third Rank";  
break;  
default:  
result="Failed";  
}  
document.write(result);  
</script>  


JS Loop
-------
JavaScript Loops
The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in loops. 
It makes the code compact. It is mostly used in array.

There are four types of loops in JavaScript.

for loop
Syntax:
for (initialization; condition; increment)  
{  
    code to be executed  
}  

Ex:
for(var x=0; x< 10; x++>){
    console.log(x);
}

while loop
Syntax:
while (condition)  
{  
    code to be executed  
}  

do-while loop
Syntax:
do{  
    code to be executed  
}while (condition);  


for-in loop
Syntax:
for (item in array) {
  code to be executed  
}

Example :
var ar=[1,2,3,4];

for(a in ar){
    console.log(a);
}



JS Function
-----------
Syntax:
function functionName([arg1, arg2, ...argN]){  
 //code to be executed  
}  