const openModal = document.getElementById('openModal');
const modalWindow = document.getElementById('modalWindow');
const closeModal = document.getElementById('closeModal');

openModal .addEventListener('click', () => {
    modalWindow.style.display = 'flex';
})

closeModal .addEventListener('click', ()  => {
    modalWindow.style.display = 'none' ;
})