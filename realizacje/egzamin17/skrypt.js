function zamowienie() {
	var kawa = document.getElementById("kawa").value;
	var waga = document.getElementById("waga").value;
	var koszt;
	if(kawa == 1){
		koszt = waga * 5;
	}
	else if(kawa == 2){
		koszt = waga * 7;
	}
	else if(kawa == 3){
		koszt = waga * 6;
	}
	else {
		koszt = 0;
	}
	document.getElementById("wynik").innerHTML = "Koszt zamówienia wynosi "+koszt+" zł"
}