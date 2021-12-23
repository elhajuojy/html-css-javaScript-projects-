const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.addEvenetListener('click',()=>container.classList.add('show_nav'))


close.addEvenetListener('click',()=>container.classList.remove('show_nav'))
