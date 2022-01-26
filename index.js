let header = document.querySelector('#page-header')
let column = document.querySelectorAll('.column')
header.style.backgroundColor = 'Blue'
header.style.textAlign = 'right'
for(let i = 0; i < column.length; i++){
    column.style.backgroundColor = 'orange'
    column.style.textAlign = 'left'
}

