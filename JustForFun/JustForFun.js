// let arr = ['hello', 'hallo', 'holla', 'Namaste'];
// let arr2 = [1, 3, 4, 2, 4, 3, 54, 3, 2, 3, 3];

                        // //  map
// console.log(arr.map(names => `<p>${names}</p>`))

                        // // reduce
// console.log(arr2.reduce((total, num) => total + num))

                        // //  filter
// console.log(arr2.filter(num => num < 5))

                        // //  set
// console.log(Array.from(new Set(arr2))) 

                        // // Fetch --> try/catch --> async request
// const url = 'https://jsonplaceholder.typicode.com/users';

// const btn = document.querySelector('#btn')
// btn.addEventListener('click',  async () => {
//     try {
//         const response = await fetch(url)
//         const result = await response.json()
//         console.log(result)
//     } catch (error) {
//         console.error(error)
//     }
// })


                        // Pallindrom function --> will 1st part of word == second pard of word;
// let strTrue = 'ababababa'
// let strFalse = 'sodihgs' 
// const poll = (str) => str.split('').reverse().join('') == str ? true : false;
// console.log(poll(strTrue))


                        // callBack Functions training  --> 



// function eight(myCallback) {
//     return myCallback ? myCallback(8) : 8;
// }
// function nine(myCallback) { 
//     return myCallback ? myCallback(9) : 9;
// }
// function plus(a) {
//     return  (b) =>  a + b;
// }
// console.log(nine(plus(eight())))

// let num = [1, 2, 3, 4, 5]

// const isOdd = (num) => {
//     return num % 2 === 1;
//   };

//   const atLeastTwo = (arr, callback) => {
//     arr.filter(callback).length >= 2;
//   }

//   console.log(atLeastTwo(num, isOdd))

//   console.log(atLeastTwo([2, 4, 6], isOdd))
  
//   console.log(atLeastTwo([1, 2, 3, 4, 5], (t) => t > 3))

        //     CONCAT ARRAYS , STRINGS
// let num0 = [1, 2, 3, 4, 5]
// let num1 = [1, 2, 3, 4, 5]
// let num2 = num0.concat(num1)
// let num3 = [ ...num0, ...num1]
// will be same, for strings we can use push also
// let str1 = 'aaa';
// let str2 = 'bbb';
// let str3 = str1.concat(str2)
// console.log(str3)