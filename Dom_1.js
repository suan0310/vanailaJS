// html과 css연결해서 사용하는 방법
const title = document.getElementById("title");
//querySelector은 노드의 첫번째 자식을 반환
//querySelector가 document로가서 모든 자식들 확인
const title = document.querySelector("#title");

//모든 html이 객체로 됨 ex)title
console.log(title)
//Html을 객체로만들어 JS로 HTML설정 변경가능
title.innerHTML = "Hi! from JS!"
title.style.color = "red";
console.log(document); //homepage에서 console확인
document.title = "I own you now";

// 모든 객체들의 함수들은 DOMError(Document Object Model)형태로 변경가능
// HTML을 DOM객체로 변경가능 
<h1 id="title">Hi! From JS<h1>

