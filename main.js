
const age = 30;
const name = 'Jędrzej';
const diary = document.querySelector('.diary__header--js');
diary.innerHTML = `Nazywam się ${name} i mam ${age} lat`;

if (age >= 35) {
    console.log("trzydzieści pięć lub mniej")
}
else if (age <= 35 && age >= 30) {
    console.log('Między 30 a 35')
}
else {
    console.log('nie trzydzieści pięć')
};

switch (age) {
    case 30:
        console.log('Masz 30 lat');

        break;
    case 20:
        console.log('Masz 20 lat');
        break;
    default:
        console.log(`Masz ${age} lat`)
};

let oldIndicator;
if (age > 70) {
    oldIndicator = 'yes';
} else {
    oldIndicator = 'no';
}

// the same as above can be written below
const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);


// alert('Elo zią!');
// console.log('Gierary hirr');



// console.log(name)
// console.log(age);

// console.log(`Nazywam się ${name} i mam ${age} lat`);


// FUNCTIONS - REPETITON

function calculate(x) {
    x = x + 3;
    console.log(x);
    return x * 7;
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation)


// Fat Arrow function

const calculateFat = x => (x + 3) * 7;

console.log("parametr to 2 a wynik to " + calculateFat(2));