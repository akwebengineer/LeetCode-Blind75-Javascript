/*** Asked in Facebook Interview ***

Problem: 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    
Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
        
Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]

Leetcode problem: https://leetcode.com/problems/two-sum/

Python Solution - https://www.youtube.com/watch?v=KLlXCFG5TnA&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=1

*/ 

/** Brute Force Approach
 * Loop through the array and for each element, loop again to find the number that could add up to the total.
 * Since we're looping through the same array inside a parent loop, the time complexity is O(n^2) for an array of length n
 ***/
function twoSumBrute(arr, sum) {
    for(let i = 0; i < arr.length; i++) {
        let currElem = arr[i];
        for(let j = i + 1; i < arr.length; j++) {
            if(arr[j] + currElem === sum){
                console.log('twoSumBrute Answer:');
                console.log(i + ',' + j);
                return [i, j];
            }
        } 
    }
    console.log('not found');
    return -1;
}

/**
 * Performant approach by using hashmap
 * Create a hashmap of each element in the array and its corresponding index. Then loop through the array and check if the number that is needed 
 * to add up to the sum exists in the array by looking up the hashmap. If it does, return the index of the current element in the loop and the
 * index corresponding to the element found in the hashmap
 * Since this only loops through the array one time and the lookup in the hashmap is constant time, the time complexity is O(N)
 */

function twoSumHashMap(arr, sum) {
    let _hash = {};
    for(let i = 0; i < arr.length; i++) {
        let currElem = arr[i];
        let diffElem = sum - currElem;
        if(_hash[diffElem] >= 0) { // Just checking if(_hash[diffElem]) would fail if the index is 0 since 0 is false in JS
            console.log('twoSumHashMap Answer:');
            console.log(i +',' + _hash[diffElem]);
            return [i, _hash[diffElem]];
        }
        _hash[currElem] = i;
    }

    console.log('not found');
    return -1;
}

(function(){
    let arr = [2,7,11,5];
    let sum = 9;
    twoSumBrute(arr,sum);
    twoSumHashMap(arr, sum)

})();