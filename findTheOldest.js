// const getAge = function (birth, death){
//     if(!death) {
//         death = new Date().getFullYear();
//     }
//     return death - birth;
// }

// const findTheOldest = function(people) {
//      return people.reduce((oldest, currentPerson) =>{
//         const oldestAge = getAge (oldest.yearOfBirth, oldest.yearOfDeath);
//         const currentAge = getAge(
//             currentPerson.yearOfBirth,
//             currentPerson.yearOfDeath
//         );
//         return oldestAge < currentAge ? currentPerson : oldest
//      })
// };

const getAge = ({ yearOfBirth, yearOfDeath }) =>
  (yearOfDeath ?? new Date().getFullYear()) - yearOfBirth;

const findTheOldest = (people) =>
  people.toSorted((a, b) => getAge(b) - getAge(a))[0];

// Do not edit below this line
module.exports = findTheOldest;