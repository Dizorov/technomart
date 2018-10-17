var writeUs = document.querySelector('.modal-write-us'),
    writeUsOpen = document.querySelector('.modal-write-us-open'),
    writeUsClose = document.querySelector('.modal-write-us-close');

writeUsOpen.addEventListener('click', function(evt) {
	evt.preventDefault();
	writeUs.classList.add('modal-show');
})

writeUsClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	writeUs.classList.remove('modal-show');
})