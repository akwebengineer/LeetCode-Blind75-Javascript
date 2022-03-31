/**
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.


Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.




----------------------------------------------------------------------------------------------------------------
Approach to solution:
As simple as it may be to look up the number that corresponds to the Roman symbol and adding the numbers up, the minor complexity arises with numbers
such as 4, 9, 40 etc. which need to be subtracted from the previous symbol. For example, 4 is written as IV. 9 is written as IX, 90 as XC. 
So, 94 would be XCIV. The best approach would be to go from right to left and start adding the number equivalents of the symbols. The eexception would be
that if any symbol is smaller than its previous one, subtract that.

So, for XCIV, going right to left -
 1. V = 5; Total = 5;
 2. I (smaller than V in value. So subtract it). Total = 5 - 1 = 4
 3. C (greater than I in value. So add it). Total = 4 + 100 = 104
 4. X (smaller than C in value. So subtract it). Total = 104 - 10 = 94

 * 
 * **/


var romanToInt = function(s) {
    let romanHash = {
        'I' : 1,
        'V' : 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let num = 0;
    let inputArr = s.split('');
    console.log('array len: ' + inputArr.length);
    for(let i = inputArr.length - 1 ; i >= 0; i--) {68
        if(i === inputArr.length - 1) {
            num += romanHash[inputArr[inputArr.length - 1]];            
        }
        else {
          let currElem = inputArr[i];
          let prevElem = inputArr[i+1];
            if(romanHash[currElem] < romanHash[prevElem]){
                num-= romanHash[currElem];
                
            }
            else {
                num+= romanHash[currElem];
                
            }
        }
    }

    return num;
}
console.log(romanToInt('LVIII')); //58
console.log(romanToInt('MCMXCIV')); //1994
console.log(romanToInt('III')); //3
console.log(romanToInt('XCIV')); //94
