let contactCall = document.querySelector('.contact_call');
let modalClose = document.querySelector('.close_modal');
let modal = document.querySelector('.modal');

contactCall.addEventListener('click', () => {
    modal.classList.remove('modal_hidden')
})

modalClose.addEventListener('click', () => {
    modal.classList.add('modal_hidden')
})