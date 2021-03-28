// if(condition){
//     block
// }else{
//     block
// }

if(10 === 5){   //조건식에서 String도 가능(String과 int비교 가능)
    console.log("Hi!")
}else if("10" ==="10"){
    console.log("lalala")
}else{
    console.log("Ho!")
}

if(20 > 5 && "nico" === "nicoco"){
    console.log("yes");
}else{
    console.log("no");
}
// true && true = true;
// false && ture = false;
// true && false =false;
// false && false =false;

// true  ||true = true;
// false  ||ture = true;
// true || false = true;
// false  ||false =false;

const age = prompt("How old are you?")

if(age >= 18 && age <= 21){
    console.log("you can drink but you should not")
}else if(age > 21){
    console.log("go ahed")
}else{
    console.log("too young")
}