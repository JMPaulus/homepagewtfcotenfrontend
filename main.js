
const age = 34;
const name = 'Jędrzej';
const diary = document.querySelector('.diary__header--js');
diary.innerHTML = `Nazywam się ${name} i mam ${age} lata`;

const button = document.querySelector('.header__button--js');
console.log(button)

button.addEventListener('click', (e) => {
    const mainHeader = document.querySelector('.mainHeader__title--js');
    mainHeader.innerHTML = 'JS is cool, cause you click, click';
    mainHeader.classList.toggle('mainHeader--red');
    alert('Hello, check the header! I used JS here');
});

const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
}
// function handleClick(){
//     console.log('działa')
// }

// button.addEventListener('click', (e) =>{
//     console.log(e);
// console.log('that is an arrow function')
// });

//////////////////////////////Changing the header when click
// button.addEventListener('click', (e) => {
//     const mainHeader = document.querySelector('.mainHeader__title--js');
//     mainHeader.innerHTML = 'JS is cool, cause you click, click';
//     alert('Hello, check the header! I used JS here');
// });

// if (age >= 35) {
//     console.log("trzydzieści pięć lub mniej")
// }
// else if (age <= 35 && age >= 30) {
//     console.log('Między 30 a 35')
// }
// else {
//     console.log('nie trzydzieści pięć')
// };

// switch (age) {
//     case 30:
//         console.log('Masz 30 lat');

//         break;
//     case 20:
//         console.log('Masz 20 lat');
//         break;
//     default:
//         console.log(`Masz ${age} lat`)
// };

// let oldIndicator;
// if (age > 70) {
//     oldIndicator = 'yes';
// } else {
//     oldIndicator = 'no';
// }

// // the same as above can be written below
// const amIOld = (age > 70) ? 'yes' : 'no';
// console.log(amIOld);


// alert('Elo zią!');
// console.log('Gierary hirr');



// console.log(name)
// console.log(age);

// console.log(`Nazywam się ${name} i mam ${age} lata`);


// FUNCTIONS - REPETITON

// function calculate(x) {
//     x = x + 3;
//     console.log(x);
//     return x * 7;
// }

// console.log(calculate(2));
// const myCalculation = calculate(4);
// console.log(myCalculation)


// // Fat Arrow function

// const calculateFat = x => (x + 3) * 7;

// console.log("parametr to 2 a wynik to " + calculateFat(2));

// const welcome = (name, age) => {
//     console.log(`Hej! Mam na imię ${name} i mam ${age} lat`);
// }

// welcome('Jędrzej', 34);