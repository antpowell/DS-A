export const checkOccurrence = (l:string, s:string) => {
    let letterIndexCollection:Array<number>=[];
    let letterRanges:Array<Array<number>>=[];
    s.split("").map((letter, index) => {
        if(letter === l){
            letterIndexCollection.push(index);
            console.log(letterIndexCollection);
            if(letterIndexCollection.length > 1){
                letterRanges.push([...letterIndexCollection]);
                console.log(letterRanges);
            };
        }
    })
    return letterRanges;
}

console.log(checkOccurrence('a', 'babadabab'));``