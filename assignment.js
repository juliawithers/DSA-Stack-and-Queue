const Stack = require('./stack')
const Queue = require('./queue')
const DoublyLinkedQueue = require('./doubleList')

// 1) Create a stack class
function mainStack() {
    let starTrek = new Stack();

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')
    
    // check useful functions
    let top = peek(starTrek)
    console.log(top)
    let checkEmpty = isEmpty(starTrek)
    console.log(checkEmpty)
    let displayArrayOfStack = display(starTrek)
    console.log(displayArrayOfStack)

    // remove McCoy:
    starTrek.pop()
    starTrek.pop()
    starTrek.push('Scotty')
    // removed successfully, shown by:
    let displayArrayOfStackMcCoy = display(starTrek)
    console.log(displayArrayOfStackMcCoy)

    // palindrome check:
    // True, true, true, false
    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"));
}
mainStack()
// 2) Useful methods for a stack
// peek() - look at the top of the stack
function peek(stack) {
    // to return just the value:
    let topNode = stack.top.data;
    return topNode;

    // to return the whole node: 
    // let topNode = stack.top;
    // return topNode;
}
// isEmpty() - check if the stack is empty
function isEmpty(stack) {
    if (stack.top === null ) {
        // return 'Stack is empty'
        return true
    }
    // return 'Stack is not empty'
    return false
}
// display() - to display the stack
function display(stack){
    // set the first node equal to top node
    let topNode = stack.top;

    let outArr = [];
    let ind = 1;
    while(topNode !== null){
        if (ind === 1) {
          outArr.push(`top node: ${topNode.data}`)  
        } else{
          outArr.push(`node ${ind}: ${topNode.data}`)  
        }
        
        topNode = topNode.next;
        ind++
    }
    return outArr;
}

// 3) Check for palindromes using a stack
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here

    // create a stack using input s
    let stackPalin = new Stack();
    // create an array and check the stack to the array.
    let arrStack = [];
    for (let i=0; i<s.length; i++) {
        stackPalin.push(s[i])
        arrStack.push(s[i])
    }
    let top = stackPalin.top
    let i=0;

    while (top !== null) {
        if (top.data != arrStack[i]) {
            return 'Not a palindrome'
        }
        top = top.next;
        i++;
    }
  
    return 'This string is a palindrome!'
}

// 4) Matching parentheses in an expression

function stackParen(expr) {
    // push all the open parens onto a stack and when you get to a closed paren, then check the top of the stack, keep poping the top of the stack until you get down. 
    // record the indeces of the wrong open/close statements
    // let expr = expression.replace(/[a-zA-Z0-9 ]/g,"")

    console.log(expr)
    const s = new Stack();
    let top;
    for (let i=0; i<expr.length; i++) {
        if (expr[i]=='(') {
            s.push([expr[i],i])
        }
        else {
          // console.log(s.top.data[0])
            if (isEmpty(s)) {
                return `contains invalid close parentheses ${expr[i]} at index ${i}`
            }
            else {
                top = s.top.data[0];
                // console.log(s.top.data[0])
                // console.log(expr[i])
                if (expr[i] == ')' && top == '(') {
                    s.pop();
                }
                else if (expr[i] !== ')') {
                  console.log('another char')
                }
                else {
                    return `contains invalid parentheses combination`
                }
            }
        }
    }

    console.log(s)
    if (isEmpty(s)) {
        return `you have a balanced equation`
    } else {
        return `invalid openening paretheses ${top.data[0]} at index ${s.top.data[1]}`
    }

}

console.log(stackParen('(h+a))'))

// function stackParen(expr) {
//     // push all the open parens onto a stack and when you get to a closed paren, then check the top of the stack, keep poping the top of the stack until you get down. 
//     // record the indeces of the wrong open/close statements
//     // let expr = expression.replace(/[a-zA-Z0-9 ]/g,"")
//     let errorArr = [];
//     console.log(expr)
//     const s = new Stack();
//     let top;
//     for (let i=0; i<expr.length; i++) {
//         if (
//           expr[i] == '(' || 
//           expr[i] == '[' || 
//           expr[i] == '{') {
//             s.push([expr[i],i])
//         }
//         else {
//           // console.log(s.top.data[0])
//             if (isEmpty(s)) {
//                 errorArr.push(`contains invalid close parentheses ${expr[i]} at index ${i}`)
//             }
//             else {
//                 top = s.top.data[0];
//                 // console.log(s.top.data[0])
//                 // console.log(expr[i])
//                 if (
//                   expr[i] == ')' && top == '(' || 
//                   expr[i] == ']' && top == '[' || 
//                   expr[i] == '}' && top == '{'){
//                     s.pop();
//                 }
//                 else if (
//                   expr[i] == ')' && top != '(' || 
//                   expr[i] == ']' && top != '[' || 
//                   expr[i] == '}' && top != '{') {
                  
//                   if(top == '(') {
//                     errorArr.push(`expected ')', but got ${expr[i]} at index ${i}`)  
//                   }
//                   if(top == '[') {
//                     errorArr.push(`expected ']', but got ${expr[i]} at index ${i}`)  
//                   }
//                   if(top == '{') {
//                     errorArr.push(`expected '}', but got ${expr[i]} at index ${i}`)  
//                   }
//                 }
//                 else if ()
//                 else {
//                     errorArr.push(`contains invalid parentheses combination`)
//                 }
//             }
//         }
//     }

//     console.log(s)
//     if (!isEmpty(s)) {
//       errorArr.push(`invalid openening paretheses ${s.top.data[0]} at index ${s.top.data[1]}`)
//     } else if (isEmpty(s) && errorArr.length == 0){ 
//         return `you have a balanced equation`
//     }

//     return errorArr

// }

// console.log(stackParen('({he+l+o]'))

// 5) Sort Stack



function mainQueue() {
    let starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')
    console.log(starTrekQ)

    // peek
    let first = peek(starTrekQ);
    console.log(first)

    // isEmpty
    let checkEmpty = isEmpty(starTrekQ);
    console.log(checkEmpty)
  
    // display
    let qDisplay = display(starTrekQ);
    console.log(qDisplay)

    starTrekQ.dequeue()
    starTrekQ.dequeue()
    starTrekQ.dequeue()
    starTrekQ.dequeue()
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    let qDisplayNoSpock = display(starTrekQ);
    console.log(qDisplayNoSpock)

    let doubleTrek = new DoublyLinkedQueue();
    doubleTrek.enqueue('Kirk')
    doubleTrek.enqueue('Spock')
    doubleTrek.enqueue('Uhura')
    doubleTrek.enqueue('Sulu')
    doubleTrek.enqueue('Checkov')

    let firstDouble = peek(doubleTrek);
    console.log(firstDouble)

}

mainQueue()

function peek(q){
  // return q.first
  return q.first.value
}

function isEmpty(q) {
  if (q.first == null) {
    return true
  }
  return false
}

function display(q){
    // set the first node equal to top node
    let curNode = q.first;

    let outArr = [];
    let ind = 1;
    while(curNode !== null){
        if (ind === 1) {
          outArr.push(`first= ${curNode.value}`)  
        } else{
          outArr.push(`${ind}= ${curNode.value}`)  
        }
        
        curNode = curNode.next;
        ind++
    }
    return outArr;
}

