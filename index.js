const title = document.querySelector("#title")

function handleClick(){
    title.style.color = "blue";

}

title.addEventListener("click", handleClick)
//함수의 형태로 적으면 바로 실행한다는 뜻이다.
//jasvascript 는 event에 반응하기 위해 만들어졌다.
