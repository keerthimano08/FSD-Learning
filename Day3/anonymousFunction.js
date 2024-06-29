/**
 * odd numbers in an array
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	
let isOdd = function(num) {
	for(let x=0;x<=num.length;x++) {
	    if( num[x] % 2 !== 0){
	     console.log(num[x]);
        }
	}
}
isOdd(numbers);

/**
 * Convert all the strings to title caps in a string array
 */

let stringTitleCaps = [];

/**
 * Sum of all numbers in an array
 */

let numbers1 = [1,6,9,30,60];
let sum = function(num2){
   let ans =0;
   for(let x = 0;x<num2.length;x++){
    ans+=num2[x];
   }
   return ans;
}
sum(numbers1); 

/**
 * Prime numbers in an array
 */
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(array) {
    let primeNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            primeNumbers.push(array[i]);
        }
    }
    return primeNumbers;
}

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13,];
let primeNumbers = getPrimeNumbers(numbers2);
console.log(primeNumbers);

/**
 * Return all the palindromes in an array
 */
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function getPalindromes(array) {
    let palindromes = [];
    for (let i = 0; i < array.length; i++) {
        if (isPalindrome(array[i])) {
            palindromes.push(array[i]);
        }
    }
    return palindromes;
}

let strings = ["hello", "level", "world", "madam", "javascript", "civic","kirik"];
let palindromes = getPalindromes(strings);
console.log(palindromes);

/**
 * Return median of two sorted arrays of the same size
 */
// Function to find the median of two sorted arrays of the same size
const findMedian = function(arr1, arr2) {
    let n = arr1.length;
    let mergeArr = [];
    let i = 0, j = 0, k = 0;

    // Merging the two arrays
    while (i < n && j < n) {
        if (arr1[i] < arr2[j]) {
            mergeArr[k++] = arr1[i++];
        } else {
            mergeArr[k++] = arr2[j++];
        }
    }

    // Copy remaining elements of arr1[], if any
    while (i < n) {
        mergeArr[k++] = arr1[i++];
    }

    // Copy remaining elements of arr2[], if any
    while (j < n) {
        mergeArr[k++] = arr2[j++];
    }

    // Return the median
    return (mergeArr[n - 1] + mergeArr[n]) / 2;
};

// Example usage:
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = findMedian(arr1, arr2);
console.log("Median of the two sorted arrays is: " + median);

/**
 * Remove dupliactes from an array
 */

// Function to remove duplicates from an array
const removeDuplicates = function(arr) {
    let uniqueArr = [];
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            uniqueArr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }

    return uniqueArr;
};

// Example usage:
let array = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];
let uniqueArray = removeDuplicates(array);
console.log("Array with duplicates removed:", uniqueArray);