function division(a, b) {
    let div = a / b;
    console.log(`результат деления числа ${a} на ${b} раняется ${div}`);
}

function multiplication(a, b) {
    let mul = a * b;
    console.log(`результат умножения числа ${a} на ${b} раняется ${mul}`);
    division(a, b);
}

function subtraction(a, b) {
    let sub = a - b;
    console.log(`результат вычитания числа ${b} из ${a} раняется ${sub}`);
    multiplication(a, b);
}

function sum(a, b) {
    let sum = a + b;
    console.log(`результат сложения чисел ${b} и ${a} раняется ${sum}`);
    subtraction(a, b);
}

sum(484988464846, 68484654894649);