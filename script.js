const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const modal = document.getElementById('modal');
console.log(btnOpen,btnClose,modal);

btnOpen.addEventListener('click',function(){
    modal.classList.remove('modal-hidden');
})
btnClose.addEventListener('click',function(){
    modal.classList.add('modal-hidden');
})