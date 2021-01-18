function strzyzenie(){
	var a = document.getElementById("krotkie");
	var b = document.getElementById("srednie");
	var c = document.getElementById("poldlugie");
	var d = document.getElementById("dlugie");
	var e = 0;
	if(a.checked == true){
		e = 25;
	}
	if(b.checked == true){
		e = 30;
	}
	if(c.checked == true){
		e = 40;
	}
	if(d.checked == true){
		e = 50;
	}
	document.getElementById("cena").innerHTML = "Cena strzyżenia:" + e;

}