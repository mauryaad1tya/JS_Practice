// function add(...numbers) {
//     console.log(numbers);
// }
// add(10,20,30,40)


function addNumbers(...numbers){
    return numbers.reduce(function(sum, number){
        return sum+number
    })
}
console.log(addNumbers(10,50,80,90,60));

