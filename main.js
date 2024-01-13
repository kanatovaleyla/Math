localStorage.themes = JSON.stringify([
    ['01', 'addition', false],
    ['02', 'subtraction', true],
    ['03', 'multiplication', false],
])

let bar = document.querySelector('.progress-indicator__inner');
let themes = JSON.parse(localStorage.themes)
let correct = themes.filter(theme => theme[2] == true).length
console.log (correct/themes*100 + '%')

bar.style.width = correct/themes.length*100 + '%';


document.querySelector('.percent').innerHTML = Math.round(correct/themes.length*100)+'%'
