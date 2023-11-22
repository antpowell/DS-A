/**
 * This seems to be 3 problems in one
 * 1. Is a string a palindrome? In this case it would a substring of the string.
 * 2. Identify possible palindromes in a string.
 * 3. check each permutation of the possible palindromes and return the longest one.
 * 3. If more than one palindrome is found, return the longest one.
 * 
 */


function longestPalindrome(s: string): string {
    const palindromes = new Set();
    let longestPalindromeSize = 0;
    let longestPalindrome = '';
    const uniquePalindromePositions = {};

    console.log(checkPalindrome(s));
    // console.log(countOccurrences(s,s[0]));
    // s.split('').forEach((letter, index) => {
    //     const positionsOfMultipleOccurrences = checkOccurrence(letter, s);
    //     console.log(positionsOfMultipleOccurrences);
    //     positionsOfMultipleOccurrences.forEach((positions, index) => {
    //         const {palindrome, isPalindrome, palindromeSize} = checkPalindrome(s.slice(positions[0], positions[positions.length-1]+1));
    //         console.log(palindrome, isPalindrome);
    //         console.log(positions);
    //         console.log(s.slice(positions[0], positions[positions.length-1]+1));
    //         if (isPalindrome && palindromeSize > longestPalindromeSize) {
    //             longestPalindromeSize = palindromeSize;
    //             longestPalindrome = palindrome;
    //         } 
    //     })

    // //     if(positionsOfMultipleOccurrences !== null){
    // //         console.log(positionsOfMultipleOccurrences.slice(0, positionsOfMultipleOccurrences.length-1));
    // //         const keyOfMultipleOccurrences = positionsOfMultipleOccurrences.join('');
    // //         if(!uniquePalindromePositions[keyOfMultipleOccurrences]){
    // //             uniquePalindromePositions[keyOfMultipleOccurrences] = positionsOfMultipleOccurrences;
    // //     }

    // //     // console.log(countOccurrences(s, letter));
    // //     // if(positionsOfMultipleOccurrences !== null){
    // //     //     const {palindrome, isPalindrome, palindromeSize} = checkPalindrome(s.slice(positionsOfMultipleOccurrences[0], positionsOfMultipleOccurrences[1]+1));
    // //     //     console.log(palindrome, isPalindrome);
    // //     //     if(isPalindrome){
    // //     //         if(palindromeSize > longestPalindromeSize){
    // //     //             longestPalindrome= palindrome;
    // //     //             longestPalindromeSize = palindromeSize;
    // //     //         }
    // //     //         palindrome.length > longestPalindromeSize && (longestPalindromeSize = palindrome.length); 
    // //     //         palindromes.add(palindrome);
    // //     //     }
    // //     // }
    // // }

    // });
    // console.log(uniquePalindromePositions);

    return longestPalindrome;
};

/*
    * 1. Is a string a palindrome? In this case it would a substring of the string.
*/
const checkPalindrome = (s: string): { palindrome: string, isPalindrome: boolean, palindromeSize: number } => {
    const palindromeCheck = s.split('').reverse().join('');
    let isPalindrome = false;
    if (s === palindromeCheck) {
        isPalindrome = true;
    }

    return { palindrome: palindromeCheck, isPalindrome, palindromeSize: s.length };
};

// const countOccurrences= (s: string, l:string): {occurrence:number, positionsOfMultipleOccurrences:Array<number>|null, isEven: boolean} => {
//     let occurrence = 0;
//     let positions:Array<number> = [];
//     let positionsSets = new Set<Array<number>>([]);
//     let isEven = false;
//     s.split('').map((letter, index) => {
//         if(letter === l ){
//             occurrence++;
//             if(positions.length < 1 && !positionsSets.has(positions)){
//                 positionsSets.add(positions)
//             }
//             positions.push(index);
//         }
//     });
//     isEven = occurrence % 2 === 0;
//     // console.log(positionsSets);

//     const positionsOfMultipleOccurrences = positions.length > 1 ? positions: null; 
//     return {occurrence, positionsOfMultipleOccurrences, isEven};
// };

// const subArray =(arr: Array<number>) => {
//     if(arr.length < 2){
//         return;
//     }
//     // console.log(arr);

//     return arr.concat(subArray(arr.slice(0, arr.length-1)));
// }

// // console.log(subArray([1,2,3,4,5]));


// console.log(longestPalindrome('lokokl'));

// function checkOccurrence(l:string, s:string)  {
//     let letterIndexCollection:Array<number>=[];
//     let letterRanges:Array<Array<number>>=[];
//     s.split("").map((letter, index) => {
//         if(letter === l){
//             letterIndexCollection.push(index);
//             if(letterIndexCollection.length > 1){
//                 letterRanges.push([...letterIndexCollection]);
//             };
//         }
//     })
//     return letterRanges;
// }

/*
* 2. Identify possible palindromes in a string.
*/
function possiblePalindromes(s: string) {
    console.log(s);
    const sightings: { char: string, location: Array<number> } | {} = {};
    s.split('').forEach((letter, index) => {
        // console.log(sightings.set(letter, [index]));
        console.log(sightings[letter]);
        if (!sightings[letter]) {
            sightings[letter] = [index];
        } else {
            sightings[letter].push(index);
        }
    })
    console.log(sightings);
    return sightings;
}

/*
* 3. check each permutation of the possible palindromes and return the longest one.
*/
function checkPossiblePalindromes(s: string, arr: Array<number>) {
    let longestSubstring = 0;
    let start = 0;
    let end = arr.length - 1;
    let longestPossibleSubstring = (arr[end] - arr[0]) + 1;
    
    for (end; end >= 0; end--) {
        // I need to alternate between decrementing start and end

        const mid = Math.floor((start + end) / 2);
        console.log(longestPossibleSubstring);
        console.log(longestSubstring);
        console.log(longestPossibleSubstring < longestSubstring);
        if (longestPossibleSubstring < longestSubstring) {
            console.log(longestPossibleSubstring);
            return longestSubstring;
        }
        if(start === end || start > end){
            return 0;
        }
        console.log(mid);
        const { isPalindrome, palindromeSize } = checkPalindrome(s.slice(arr[start], arr[end] + 1));
        console.log(isPalindrome, palindromeSize)
        console.log(longestSubstring)
        if (isPalindrome) {
            longestPossibleSubstring = (arr[end] - arr[0]) + 1;
            if(longestSubstring < palindromeSize){
                longestSubstring = palindromeSize;
            }
        }
    }
    return longestSubstring;
}


const c = [[0, 2], [0, 2, 4], [1, 3]]
const d = 'dadad';
const indx = 2;
console.log(c[indx][c[indx].length - 1]);
console.log(d.slice(c[indx][0], c[indx][c[indx].length - 1] + 1))
console.log(possiblePalindromes('dadad'));
console.log(checkPossiblePalindromes(d, possiblePalindromes(d)['d']));