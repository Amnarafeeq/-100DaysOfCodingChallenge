// Block Scope with let and const: Demonstrate block scope by creating a code block with {}
// that uses both let and const. Show how variables declared inside the block are not accessible outside of it

{
    let blockScopeWithLet = "Is it visible outside the block scope?"
    const blockScopeWithConst = "Is it visible outside the block scope?"
   // Only access them inside the block scope.
    console.log(blockScopeWithLet);                       
    console.log(blockScopeWithConst);         
}
// try to access let and const variable outside the block scope but it is not possible and will give error. 
console.log(blockScopeWithLet);
console.log(blockScopeWithConst);

