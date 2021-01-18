function cena() {
	var a = document.getElementById("piling");
	var b = document.getElementById("maska");
	var c = document.getElementById("masaz");
	var d = document.getElementById("brwi");
	var suma = 0;
	if(a.checked == true){
		suma += 45;
	}
	if(b.checked == true){
		suma += 30;
	}
	if(c.checked == true){
		suma += 20;
	}
	if(d.checked == true){
		suma += 5;
	}
	document.getElementById("cena").innerHTML = "Cena zabiegów:" + suma;
}
