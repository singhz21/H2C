/*/ DO THE SAME NAMED FUNCTION AS BELOW squareE BUT WITH FUNCTION DECLARATIONS
   function named squareD

   FUNCTION EXPRESIONS
const squareE = function(x = 3){  
  return x*x;
};
console.log("squareE - Function EXPRESIONS no parameter so this uses default 3 ",squareE());
console.log("squareE - Function EXPRESIONS with parameter ",squareE(4));*/

function squareD(x = 3){
  return x*x;
}
console.log("squareD - Function DECLARATIONS no parameter so this uses default 3 ",squareD());
console.log("squareD - Function DECLARATIONS with parameter ",squareD(4));