function game() {
	let counter = 0;
	
	if(document.getElementById('hlopushka').value.toLowerCase() == "хлопушка") {
		counter++;
	}
	if (document.getElementById('rainbow').value.toLowerCase() == "радуга") {
		counter++;
	}
	if (document.getElementById('carrot').value.toLowerCase() == "морковка" || document.getElementById('carrot').value.toLowerCase() == "морковь"){
		counter++;
	}
	
	alert(`Верных ответов: ${counter}`);

    if (counter == 3) {
        alert(`Отличная работа, знаток!`);
    }
    else if (counter == 2) {
        alert(`Хорошо справился!`);
    }
    else if (counter == 1) {
        alert(`Кому-то стоить поразвиваться!`);
    }
    else {
        alert(`Я просто промолчу :)`);
    }
}