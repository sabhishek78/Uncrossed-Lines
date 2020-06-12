// Uncrossed Lines
// Allowed Time: 1 hour

// We write the integers of A and B (in the order they are given) on two separate horizontal lines.

// Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:

// A[i] == B[j];
// The line we draw does not intersect any other connecting (non-horizontal) line.
// Note that a connecting line cannot intersect even at the endpoints: each number can only belong to one connecting line.

// Return the maximum number of connecting lines we can draw in this way.





// Examples
// Input: A = [1,4,2], B = [1,2,4]
// Output: 2
// Explanation: We can draw 2 uncrossed lines as in the diagram.
// We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.

// Example 2:
// Input: A = [2,5,1,2,5], B = [10,5,2,1,5,2]
// Output: 3


// Example 3:
// Input: A = [1,3,7,1,7,5], B = [1,9,2,5,1]
// Output: 2

function uncrossedLines(A, B) {
    let topPointer=0;
    let bottomPointer=0;
    return iterate(A,B,topPointer,bottomPointer);
}
function iterate(A,B,topPointer,bottomPointer){
    let result=[];
    for(let i=topPointer;i<A.length;i++){
        for(let j=bottomPointer;j<B.length;j++){
            if(A[i]===B[j]){
                let x=1+iterate(A,B,i+1,j+1);
                let y=iterate(A,B,i,j+1);
                result.push(Math.max(x,y));
                }
        }
    }
return result.length===0?0:result.reduce((a,b)=>Math.max(a,b));
}
console.log(uncrossedLines([1,4,2],[1,2,4]));
console.log(uncrossedLines([2,5,1,2,5],[10,5,2,1,5,2]));
console.log(uncrossedLines([1,3,7,1,7,5],[1,9,2,5,1]));