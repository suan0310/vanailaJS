const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);
}
//resize :윈도우의 사이즈가 변경될때 옆의 function을 호출
//handleResize필요할때 함수를 호출 ,handleResize() 바로 함수 호출
window.addEventListener("resize", handleResize);

function handleClick(){
    title.style.color = "red";
}
title.addEventListener("click", handleClick;