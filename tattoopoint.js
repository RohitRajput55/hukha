const navbarbar = document.querySelector('.headers .navbar .navbar-list .navbarbar');
const mobile_menu = document.querySelector('.headers .navbar .navbar-list ul');
const menu_item = document.querySelectorAll('.headers .navbar .navbar-list ul li a');
const header = document.querySelector('.headers.container');

navbarbar.addEventListener('click', () => {
	navbarbar.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		navbarbar.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});