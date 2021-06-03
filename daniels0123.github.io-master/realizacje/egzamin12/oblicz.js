function oblicz(){
	var a = document.getElementById("a").value;
	let b = a % 4;
	b > 0 ? b = (a - b) / 4 + 1: b = a / 4;
	document.getElementById("wynik").innerHTML = "Liczba jednolitrowych puszek potrzebnych do pomalowania wynosi " + b ;
}