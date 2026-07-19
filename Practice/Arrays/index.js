// console.log("herllo");

// let fruits = ["banana","mango","Apple"];
// console.log(fruits);


// fruits[0] = "lichie"

let num = [1,2,3,4,6,5]

// console.log(num.toString); 

// num.push(7)

// console.log(num);

// console.log(fruits.concat(num)); 

// console.log(num.sort());
 
let obj = {
    a :1,
    b :2,
    c :3
}


for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(key, element);
}

for (const element of num) {
    console.log(element);
}




for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}



