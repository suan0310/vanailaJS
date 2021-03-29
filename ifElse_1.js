const title = document.querySelector("#title");

const CLICKED_CLASS="clicked";

// function handleClick{
//     const hasClass = title.classList.constains(CLICKED_CLASS);
    
//     if(!hasClass){
//         title.className = CLICKED_CLASS;
//     }else{
//         title.className.remove(CLICKED_CLASS);
//     }
// }

//위의 코드를 간단히 하면
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click",handleClick);
}
init();