function oblicz(){
	var metraz = document.getElementById("metraz").value;
	var pokoje = document.getElementById("pokoje").value;
	var kwota = 0;
	kwota += 4000 * metraz;
	kwota += 1000 * pokoje;
	document.getElementById("wynik").innerHTML = "Koszt mieszkania: " + kwota + " zł"
}