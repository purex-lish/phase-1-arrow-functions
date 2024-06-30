//Fuction declaration
function foo() {
    return 'bar';
}


//Difference
const diff =(parameter3, parameter4) => parameter3 - parameter4;
diff (10, 1);
//Arrow function declaration
const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2,3);

//Divide
const divide = (parameter5, parameter6) => parameter5 / parameter6;
divide (2000, 100);
    
  

//Arrow function with multiple expressions
const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }
  sum(1,2);

  //Square
/*const squares = (number) => number * number;
const number = [3];
const square = number.map(x => x ** 2); 
square(3);*/
  

const square = (number) => {
    return number * number;
  };
  
  // Calling square function with numbers 1 and 2
  const squared1 = square(1);
  const squared2 = square(2);
console.log(squared1);
console.log(squared2);


finishedItems = overdueTodoItems.map( item => item.className = "complete" );
header.innerText = `You finished ${finishedItems.length} items!`;


lapsedUserAccounts.map( u => sendBillTo(u.address) );