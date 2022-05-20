const obj = {
    name: 'test',
    width: 1024,
    height:1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(obj.name);

// delete obj.name;
// console.log(obj);

// Перебор всех свойст объекта
// for (let key in obj) {
//     if (typeof(obj[key]) === 'object') {
//         for (let i in obj[key])
//         console.log(`Свойство ${i}, имеет значение ${obj[key][i]}`);
//     } else {
//         console.log(`Свойство ${key}, имеет значение ${obj[key]}`);
//     }
// }

// // for of не работает для объекта

// Счетчик
let counter = 0;
for (let key in obj) {
    if (typeof(obj[key]) === 'object') {
        for (let i in obj[key]) {
            console.log(`Свойство ${i}, имеет значение ${obj[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${obj[key]}`);
        counter++;
    }
}
console.log(counter);

console.log(Object.keys(obj).length);