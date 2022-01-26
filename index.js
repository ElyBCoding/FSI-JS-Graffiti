let header = document.querySelector('#page-header')
let column = document.querySelectorAll('.column')
header.style.backgroundColor = 'Blue'
header.style.textAlign = 'right'
header.style.fontSize = '100'
for(let i = 0; i < column.length; i++){
    column[i].style.backgroundColor = 'orange'
    column[i].style.textAlign = 'left'
}

