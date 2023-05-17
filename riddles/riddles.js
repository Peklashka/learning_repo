function game() {
	let counter = 0;
	
	if(document.getElementById('money').value.toLowerCase() == "зарплата") {
		counter++;
	}
	if (document.getElementById('breakfast').value.toLowerCase() == "обед" || document.getElementById('breakfast').value.toLowerCase() == "ужин") {
		counter++;
	}
	if (document.getElementById('window').value.toLowerCase() == "окно"){
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
        alert(`Ты пытался!`);
    }
    else {
        alert(`Штош.. не умом, так красотой!`);
    }

    alert('Правильные ответы: зарплата, обед/ужин, окно');
}