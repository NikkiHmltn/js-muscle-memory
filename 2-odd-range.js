/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    const result = [];
    
    // return an array
    // edge cases; if given a negative #, i do nothing with that # 
    if(end < 0) {
        return result; // [ ]
    } else {
        // for (let i=1; i <= end; i++) {
        //     if (i % 2 !=== 0) {
        //         result.push(i);
        //     }
        // }
        for(let i=1; 1 <= end; i += 2) {// i = i + 2
            result.push(i); 
        } 

    } 

    // set up a for loop & start loop at 1 
    // iterate to check if each # has a remainder of 0
        // ** or iterate by 2

    return result;
}
oddRange(13);
oddRange(6);
