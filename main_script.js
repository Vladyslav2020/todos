let input = document.querySelector('.todos .todos-input input');

input.addEventListener('keypress', function (e){
	if (e.keyCode == 13){
		add_block_item();
	}
});

function add_block_item(){
	let div = document.createElement('div'),
		inp = document.querySelector('.todos-input input');
	div.innerHTML = '<div class = "checker" onclick = "do_complete(this)"></div><div class = "remove" onclick = "remove(this)"><i class="fa fa-times" aria-hidden="true"></i></div>' + inp.value;
	div.classList.add('item');
	inp.value = '';
		
	document.querySelector(".todos .todos-items").appendChild(div);
	reCalc();
	let buttons = document.querySelectorAll('.todos-footer .button');
	if (buttons[1].classList.contains('active'))
		show_active();
	else
	if (buttons[2].classList.contains('active'))
		show_complete();
}

function reCalc(){
	let cnt = document.querySelector(".todos-footer .cnt-items span"),
		count = 0,
		elems = document.querySelectorAll('.todos .item .checker');
	for (let item of elems)
		if (!item.classList.contains('complete'))
			count++;
	cnt.innerHTML = count;
}

function do_complete(el){
	el.classList.toggle('complete');
	reCalc();
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
	if (!elem.parentElement.children[0].classList.contains('complete'))
		reCalc();
}

function completed_all(){
	let elem = document.querySelector('.todos .todos-input i');
	elem.classList.toggle('active');
	let elems = document.querySelectorAll('.todos .item');
	if (elem.classList.contains('active')){
		elems.forEach(item => item.children[0].classList.add('complete'));
	}
	else{
		elems.forEach(item => item.children[0].classList.remove('complete'));
	}
	reCalc();
	let buttons = document.querySelectorAll('.todos-footer .button');
	if (buttons[1].classList.contains('active'))
		show_active();
	else
	if (buttons[2].classList.contains('active'))
		show_complete();
}
	
