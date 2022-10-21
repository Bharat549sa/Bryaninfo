function convert(degree){
	var input;
	if (degree == "C"){
		input = document.getElementById("c").value * 9 / 5 +32;
		document.getElementById("f").value = Math.round(input);
        if(Math.round(input) > 70)
        changeColor(this);

	} else {
		input = document.getElementById("f").value -32 * 5 / 9;
		document.getElementById("c").value = Math.round(input);
	}
}
function changeColor(input) {
    input.style.backgroundColor = "green";
  }
