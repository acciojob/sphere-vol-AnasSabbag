function volume_sphere() {
    let r = document.getElementById("radius").value;
    let text;
    
    if (isNaN(r) || r < 0) {
        text = "NaN";
    } else {
        text = (4/3) * Math.PI * Math.pow(r, 3);
		text= text.toFixed(4);
    }
    document.getElementById("volume").value = text;
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission
        volume_sphere();
    };
};