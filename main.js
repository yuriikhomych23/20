// let regExp = new RegExp();
// let regExp = //;





//TASK
// '23.03.2020 16:06'
// let regExp = /^\d{2}\.\d{2}\.\d{4}\s\d{2}:\d{2}$/;
// console.log(regExp.test('23.03.2020 16:06')); // true



//TASK
// '+38(093)-333-33-33'
// let regExp = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/
// console.log(regExp.test('+38(093)-333-33-33')); // TRUE


//task 
//'+38(093)-333-33-33'

// let regExp = /^\+38\(0[769]3\)|0[769]3-\d{3}-\d{2}-\d{2}$/;
// console.log(regExp.test('093-333-33-33')); // true
// console.log(regExp.test('+38(093)-333-33-33')); // true
// console.log(regExp.test('023-333-33-33')); // false




//методи стрічок 

// const regExp = /Java/giu;

// let str = 'Java language of frontend, java and Java its not a same';

// console.log(str.replace(regExp, 'JavaScript'));

// flags
//g - global виконує пошук по всій стрічці, 
//i - intesitive чутливий до регістру 
//m - multiline  коли є багато тексту воно спрацьовує, використується рідко 
//u - unicode підставляється коли 
//s - singleline , використовується рідко






//Групи співпадінь 
// String.match()
// RegExp.exec()

// 23.03.2020

// let regExp = /^(?<date>\d{2})\.(?<month>\d{2})\.(?<year>\d{4})$/;

// // console.log('23.03.2020'.match(regExp));
// // console.log(regExp.exec('23.03.2020'));


// let result = '23.03.2020'.match(regExp);
// let date = result.groups.date;
// let month = result.groups.month;
// let year = result.groups.year;
// let {date, month, year} = result.groups;
// // console.log(date);
// // console.log(month);
// // console.log(year);
// console.log(result.groups);



// let arr = ['Ivan', 'Ivanov'];
// let firstName = arr[0];
// let lastName = arr[1];


//ДЕСТРУКТУРИЗАЦІЯ

// let arr = ['Ivan', 'Ivanov'];
// let [firstName, lastName] = arr;
// console.log(firstName);
// console.log(lastName);



// let arr = ['Ivan', 'Ivanov', 25];
// let [firstName,,age = 18] = arr;
// console.log(firstName); //Ivan
// console.log(age); //25






// let name = 'Oleg'; 

// let person = {
//     name: 'Ivan',
//     sname: 'Ivanov',
//     age: 33
// };

// let {name: firstName, age} = person; // name: firstName - переприсвоюємо змінну
// console.log(name); //Oleg
// console.log(firstName); // Ivan
// // console.log(sname); // Ivanov
// console.log(age); // 33



// let person = {
//     name: 'Ivan',
//     sname: 'Ivanov',
//     age: 25,
//     dateOfBirth: {
//         date: '01',
//         month: '03',
//         year: '1994'
//     }
// };

// let {name, sname, age, dateOfBirth, dateOfBirth: {date, month, year}} = person;

// console.log(date); // 01
// console.log(age); // 25
// console.log(dateOfBirth); // виведе обєкт dateOfBirth




// let arr = ['Ivan', 33, 'Lviv'];

// let [name, ...arg] = arr;
// console.log(name); //Ivan
// console.log(arg) // виведе масив з 33 і Lviv






//TASK 
const car = {
    mark: 'Mercedes',
    model: 'CLA',
    year: 2018,
    color: 'Black',
    option: {
        amgPack: true,
        leatherSalon: true
    },
    stage: ['stage1', 'stage2', 'stage3']
}

let {mark, model, year, color, options, options: amgPack, leatherSalon,stage, stage: [gg, dd, ss]} = car;
console.log(options)
console.log(stage)

