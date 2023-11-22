function isPalindromeOption1(x: number): boolean {
    return (x.toString() === x.toString().split('').reverse().join('')) ? true: false;
}

function isPalindromeOption2(x: number): boolean {
    let front = 0;
    let back = x.toString().length-1;

    while(x.toString()[front] === x.toString()[back] && front != back && front < back){
        front ++;
        back --;
    }
    if(x.toString()[front] !== x.toString()[back]){
        return false;
    }
    if(x.toString()[front] === x.toString()[back] && front == back){
        return true;
    }
    if(front > back){
        return true;
    }
}

console.log(isPalindromeOption1(11));
console.log(isPalindromeOption2(11));

// 1221
// 12
// 21 -> 12
// 12 === 12: true

// 121
// 12
// 21 -> 12
// 12 === 12: true ? false