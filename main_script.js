let input = document.querySelector('.todos .todos-input input');

input.addEventListener('keypress', function (e){
	if (e.keyCode == 13){
		add_block_item();
	}
});

function add_block_item(){
	let div = document.createElement('div'),
		inp = document.querySelector('.todos-input input');
	div.innerHTML = '<div class = "checker" onclick = "do_complete(this)"></div><div class = "remove" onclick = "remove(this)">X</div>' + inp.value;
	div.classList.add('item');
	inp.value = '';
		
	document.querySelector(".todos .todos-items").appendChild(div);
	cntIncrement();
}

function cntIncrement(){
	let cnt = document.querySelector(".todos-footer .cnt-items span");
	cnt.innerHTML = +cnt.innerText + 1;
}

function cntDecrement(){
	let cnt = document.querySelector(".todos-footer .cnt-items span");
	cnt.innerHTML = +cnt.innerText - 1;
}

function do_complete(el){
	el.classList.toggle('complete');
	if (el.classList.contains('complete'))
		cntDecrement();
	else
		cntIncrement();
	let buttons = document.querySelectorAll('.todos-footer .button');
	if (buttons[1].classList.contains('active'))
		show_active();
	else
	if (buttons[2].classList.contains('active'))
		show_complete();
}

function activate(numb){
	let arr = document.querySelectorAll('.todos-footer .button');
	arr.forEach(item => item.classList.remove('active'));
	arr[numb].classList.add('active');
}

function show_all(){
	let elems = document.querySelectorAll('.todos .item');
	elems.forEach(elem => elem.style.display = 'block');
	
	activate(0);
}

function show_active(){
	let elems = document.querySelectorAll('.todos .item');
	elems.forEach(item => {
		if (item.children[0].classList.contains('complete'))
			item.style.display = 'none';
		else
			item.style.display = 'block';
	});
	activate(1);
}

function show_complete(){
	let elems = document.querySelectorAll('.todos .item');
	elems.forEach(item => {
		if (item.children[0].classList.contains('complete'))
			item.style.display = 'block';
		else
			item.style.display = 'none';
	});
	activate(2);
}

function clear_complete(){
	let elems = document.querySelectorAll('.todos .item');
	elems.forEach(item => {
		if (item.children[0].classList.contains('complete'))
			item.remove();
	});
}

function remove(elem){
	elem.parentElement.remove();
	cntDecrement();
}
