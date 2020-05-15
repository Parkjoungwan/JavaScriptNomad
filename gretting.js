const form = document.querySelector(".js-form")
const input = document.querySelector("input")
const greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",SHOWING_CN = "showing";
//이벤드 핸들러 - 입력받아서 currentValue에 넣어줌(이름)
function handleSubmit(event){
    event.preventDefault();
    const currentValue =  input.value
    paintGreeting(currentValue)
    saveName(currentValue)

}
//이름을 물어보자.
function askForName(){
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSubmit)
}
//이름을 저장
function saveName(text){
    localStorage.setItem(USER_LS, text)
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser===null){
        askForName()
    }else{
        paintGreeting(currentUser)
    }
}
function init(){
    loadName()
}

init()