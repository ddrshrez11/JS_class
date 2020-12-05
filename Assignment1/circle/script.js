function calcCircumference(){
    var r = document.getElementById('rad').value;
    var circ = 2* 3.14 * r;
    circ = circ.toFixed(2);
    document.getElementById('Circumference').innerHTML= "The circumference is "+ circ; 
}