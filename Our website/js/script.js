let list = document.querySelectorAll('.list');
let lastActive = 0;

for (let i=0; i<list.length; i++){
	list[i].onclick =  function(event){
		event.preventDefault();
	
		if(i !== lastActive) {
			list[i].classList.add('active');
			list[lastActive].classList.remove('active');
			lastActive = i;
		}
		
	}
}



// toggle bars ( close, open ) start
let nav = document.querySelector('.navigation');
let close = document.querySelector('.close');
let bars = document.querySelector('.bars');
let toggleMenu = document.querySelector('.toggle-menu');
let isClose = true;

toggleMenu.onclick = () => {
	if(isClose) {
		close.classList.add('none')
		bars.classList.remove('none')
		nav.classList.add('nav-60')
		nav.classList.remove('nav-300')
	} else {
		close.classList.remove('none')
		bars.classList.add('none')
		nav.classList.remove('nav-60')
		nav.classList.add('nav-300')
	}
	isClose = !isClose;
}
// toggle bars ( close, open ) end