// 불규칙적인 답이 나옴 
const personInfo = ["Nicolas","55","man","Seoul", true];
console.log(personInfo);

// Object선언
// Object안에 Array선언 가능
const personInfo ={
    name :"Nico",
    age: 33,
    gender:"Male",
    ishandsome:true,
    favmovies:["Along the gods","LOTR","Oldboy"],
    favFood: [
        {
        name:"Kimchi", fatty:false},
        {
        name:"Cheese burger", fatty:true}
    ]
}
console.log(personInfo);

console.log(personInfo.gender);

//gender의 속성 변경가능함
personInfo.gender="Female"
console.log(personInfo.gender);

// DB에서 가져온 리스트 데이터라면 Array 사용
// DB를 합쳐서 만들어야한다면 Object 사용