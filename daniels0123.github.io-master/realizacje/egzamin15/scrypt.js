function zamow(){
	var ksztalt = +document.getElementById("ksztalt").value;
	var r = +document.getElementById("r").value;
	var g = +document.getElementById("g").value;
	var b = +document.getElementById("b").value;
	
	if (ksztalt == 1){
	document.getElementById("wynik").innerHTML = "Zamówiłeś żelka: miś";
	} else if (ksztalt == 2){
	document.getElementById("wynik").innerHTML = "Zamówiłeś żelka: żabka";
	} else if (ksztalt == 3) {
	document.getElementById("wynik").innerHTML = "Zamówiłeś żelka: serce";
	} else {
	document.getElementById("wynik").innerHTML = "Zamówiłeś inny kształt";
	}
	
	document.getElementById("kolor").style.backgroundColor="rgb("+r+", "+g+", "+b+")";
}