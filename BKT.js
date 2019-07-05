// display initial values
updateI(document.getElementById("init").value);
updateT(document.getElementById("trans").value);
updateS(document.getElementById("slip").value);
updateG(document.getElementById("guess").value);

// update slider values
function updateI(val) {
   document.getElementById("demoI").innerHTML = val;
   updateProbs();
}
function updateT(val) {
   document.getElementById("demoT").innerHTML = val;
   updateProbs();
}
function updateS(val) {
   document.getElementById("demoS").innerHTML = val;
   updateProbs();
}
function updateG(val) {
   document.getElementById("demoG").innerHTML = val;
   updateProbs();
}

function updateProbs() {
   var i = document.getElementById("init").value,
       i_c = 1.0 - i,
       t = document.getElementById("trans").value,
       t_c = 1.0 - t,
       s = document.getElementById("slip").value,
       s_c = 1.0 - s,
       g = document.getElementById("guess").value,
       g_c = 1.0 - g;

    // conditional probabilities
    var r = (i * s_c) / (i * s_c + i_c * g),
        w = (i * s) / (i * s + i_c * g_c);

    document.getElementById("correct").innerHTML = r + (1.0 - r) * t;
    document.getElementById("wrong").innerHTML = w + (1.0 - w) * t;

    // likelihood correct
    document.getElementById("likelihood").innerHTML = i * s_c + i_c * g;

}
