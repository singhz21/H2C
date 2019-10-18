/*
Declare a variable called postalCode so that it is at first has a value of '65100', but can be changed afterwards.

Make the comparision statement so that: 
if the value of postalCode is equal and same data type as '65100' (not a number like 65100) 
the code will write into the browser console ' The postal code is equal to 65100 and it is a string '
otherwise the code will write into the browser console 'The postal code is NOT equal to 65100 or it is not a string'

Now assign 65100 (without '  ') to postalCode variable. And copy the if statement after the assignment statement. 

*/

// Init variable
postalCode = '65100';

// Comparison statement
if (postalCode === '65100'){
  console.log('The postal code is equal to 65100 and it is a string');
} else {
  console.log('The postal code is NOT equal to 65100 or it is not a string');
}

// Reassignment
postalCode = 65100;

// Second comparison
if (postalCode === '65100'){
  console.log('The postal code is equal to 65100 and it is a string');
} else {
  console.log('The postal code is NOT equal to 65100 or it is not a string');
}
