var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " 
        + color1.value 
        + "," 
        + color2.value
        + ","
        + color3.value 
        + ")";

        css.textContent = body.style.background + ";";
}

function copyToClickboard(){
    var gradient = document.getElementById('gradient1').value
    var gradient1rgb = `rgb(${hexToRgb(gradient).r},${hexToRgb(gradient).g},${hexToRgb(gradient).b})`
    var gradient = document.getElementById('gradient2').value
    var gradient2rgb = `rgb(${hexToRgb(gradient).r},${hexToRgb(gradient).g},${hexToRgb(gradient).b})`
    var gradient = document.getElementById('gradient3').value
    var gradient3rgb = `rgb(${hexToRgb(gradient).r},${hexToRgb(gradient).g},${hexToRgb(gradient).b})`

    var copyText = `linear-gradient(to right, ${gradient1rgb}, ${gradient2rgb}, ${gradient3rgb});`
    var node = document.createElement('textarea');
    var selection = document.getSelection();

    node.textContent = copyText;
    document.body.appendChild(node);

    selection.removeAllRanges();
    node.select();
    document.execCommand('copy');

    selection.removeAllRanges();
    document.body.removeChild(node);

        alert('Copied to clickboard ' + copyText)
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);
