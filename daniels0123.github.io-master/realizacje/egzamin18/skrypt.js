function oblicz(){
	let waga = document.getElementById("waga").value;
	let wzrost = document.getElementById("wzrost").value;
	let bmi = waga / (wzrost*wzrost) * 10000;
	document.getElementById("dane").innerHTML = "Twoja waga: "+waga+"; Twój wzrost: "+wzrost;
	document.getElementById("wynik").innerHTML = "Twoje bmi: " + bmi;
}