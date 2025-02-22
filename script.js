function volume_sphere() {
	//Write your code here
	let r = document.getElementById("radius").value;
	let text;
	document.getElementById("volume").innerHTML ="";
	if (isNaN(r) || r < 0 ) {
	    text = "NaN";
	} 
	else {
      text = 4/3*(Math.PI)*(r**3);
	}
  document.getElementById("volume").value = text;
		
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
