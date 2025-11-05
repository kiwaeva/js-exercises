const palindromes = function (string) {
// create a variable containing all valid characters
    const alphanumerical = 'abcdefghigklmnopqrstuvwxyz0123456789';
// Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = string 
    .toLowerCase()
    .split('')
    .filter((character)=>alphanumerical.includes(character))
    .join('');

//create reversed string to compare if they read same both ways
    const reversedString = cleanedString.split('').reverse().join('');

//return the outcome of comparison which will be true of false
    return cleanedString === reversedString;
}




// Do not edit below this line
module.exports = palindromes;