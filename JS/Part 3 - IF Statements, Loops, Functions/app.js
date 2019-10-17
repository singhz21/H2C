/* Declare variables salary  and specialTax:
   -the type of variables has to be Number
   -assign value 3300 (type Number)  to the salary variable
   -do the if statements and calculation: 
   --- if salary is a negative number then write to console window with this code:
        console.log(`Wrong salary information.`); 
   --- if salary is more than 0 but less than 200 then  write to console window with this code:
        console.log(`No tax at all`);
   --- if salary is 200 or more but less than 3000, then count the specialTax so 
        that it is 10 % of the salary and  write to console window with this code:
        console.log(`The special tax is ${specialTax}`);   
   --- if salary is 3000 or more, then count the specialTax so 
        that it is 20 % of the salary and  write to console window with this code:
        console.log(`The special tax is ${specialTax}`);
*/

// Declare variables
var salary, specialTax;

// Assign value
salary = 3300;

// IF statement
if(salary < 0){   //false
    console.log(`Wrong salary information.`);
} else if (salary > 0 && salary < 200){   //false
    console.log(`No tax at all`);
} else if (salary >= 200 && salary < 3000){    //false
    specialTax = ((10/100) * salary);
    console.log(`The special tax is ${specialTax}`);
} else {    //true
    specialTax = ((20/100) * salary);
    console.log(`The special tax is ${specialTax}`);    //Expected 660
}