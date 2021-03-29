const title = document.querySelector("#title");

const BASE_COLOR ="#34495e";
const OTHER_COLOR = "#7f8c8d";
function handleClick(){
    // title.style.color = "red";
    const currentColor = title.style.color;
   if(currentColor === BASE_COLOR){
       title.style.color = OTHER_COLOR;
   }else{
       title.style.color=BASE_COLOR;
   }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter",handleClick);
}
init();

// event 참고 사이트 HTML JavaScript DOM event MDN
// https://developer.mozilla.org/ko/docs/Web/Events
