localStorage.setItem('correct', 10)
localStorage.setItem('wrong', 3)
let a = localStorage.getItem('correct')
let b = localStorage.getItem('wrong')

function CorrectAsnw() {
    let CorrectAsnw = document.querySelector('.CorrectAsnwrers')
    CorrectAsnw.innerHTML = 'Количество правильных ответов : '+ a;
}
CorrectAsnw();

function WrongAsnw() {
    let WrongAsnw = document.querySelector('.WrongAsnwers')
    WrongAsnw.innerHTML = 'Количество неправильных ответов : '+ b;
}
WrongAsnw();