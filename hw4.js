// 1.  Ви прийшли в Макдональдз з трьома друзями.
// Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
// Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
// то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
// то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburger = 4;
let fries = 1;

if(hamburger >= 4 && fries > 0){
    console.log("Ми поїли")
}else{
    console.log("Ми йдемо в інше кафе")
}

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let priseOfGood = 1000;

if(priseOfGood >= 1000 && priseOfGood <= 1900){
    console.log("Prise of good is between 1000 and 1900")
}else{
    console.log("Prise of good is NOT between 1000 and 1900")
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let priseOfWare1 = 500;

if(!(priseOfWare1 >= 1000 && priseOfWare1 <= 1900)){
    console.log("Prise of good is NOT between 1000 and 1900")
}else{
    console.log("Prise of good is between 1000 and 1900")
}

let priseOfWare2 = 1500;

if(priseOfWare2 <= 1000 || priseOfWare2 >= 1900){
    console.log("Prise of good is NOT between 1000 and 1900")
}else{
    console.log("Prise of good is between 1000 and 1900")
}

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let season = 1;

if(season == 1){
    console.log("winter")
} else if(season == 2){
    console.log("spring")
} else if(season == 3){
    console.log("summer")
} else if(season == 4){
    console.log("autumn")
} else{
    console.log("there are only 4 seasons")
}

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє між цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 2;
let b = 1;
let c = 3;

if(a>b){
    if(a>c && c>b){
        console.log(c)
    }else if(a>c && b>c){
        console.log(b)
    }else{
        console.log(a)
    }   
}else if(a<b){
    if(a<c && b<c){
        console.log(b)
    }else if(a<c && b>c){
        console.log(c)
    }else{
        console.log(a)
    } 
}

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let numberOfDay = 7;

switch(numberOfDay){
    case 1:
        console.log("Monday")
        break;
    case 2: 
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default: 
        console.log('There are only 7 days of the week')
        break; 
}

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let d = 6;
let f = 3;
let symbol = "/";

switch(symbol){
    case "+":
        console.log(d + f)
        break;
    case "-": 
        console.log(d - f)
        break;
    case "*":
        console.log(d * f)
        break;
     case "/":
        console.log(d / f)
        break; 
}

//8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word = "Ababagalamaga"
let wordNew = word.replace(/[aeiouy]/gi, '');
console.log(wordNew);

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

//     Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

let numberOfMeters = 27000;
let numberOfKilometers = String(numberOfMeters/1000);

if(numberOfKilometers.endsWith("1")){
    console.log(`${numberOfKilometers} кілометр`) 
}else if(numberOfKilometers.endsWith("2") || numberOfKilometers.endsWith("3") || numberOfKilometers.endsWith("4")){
    console.log(`${numberOfKilometers} кілометра`) 
}else{
    console.log(`${numberOfKilometers} кілометрів`) 
}
