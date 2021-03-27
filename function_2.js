function sayHello(name,age){
    console.log(`Hello ${name} you are ${age} years old`);
}
sayHello("Liyn",15)

function sayHello(name,age){
    return(`Hello ${name} you are ${age} years old`);
}

// gretting & sayHello함수의 리턴값이어서 console에 오류발생
// const gretting = sayHello("Liyn",17);

console.log(gretting )


const calculator ={
    plus:function(a, b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    multiple:function(a, b){
        return a*b;
    },
    devide:function(a,b){
        return a/b;
    },
    squareRoot:function(a,b){
        return a**b;
    }

}
console.log(calculator)

calculator.plus(5,5)
console.log(plus)

calculator.plus(5,5)
console.log(minus)

calculator.plus(5,5)
console.log(multiple)

calculator.plus(5,5)
console.log(devide)

calculator.plus(5,5)
console.log(squareRoot)
