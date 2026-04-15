let a = 1;
let b = 2; 

function suma(a, b) {
const resultado = a + b; 
alert(resultado);
}

function resta(a, b) {
const resultado = a - b;
alert(resultado);

}

document.addEventListener("click", function() {
    const random1 = Math.floor(Math.random() * 255);
    const random2 = Math.floor(Math.random() * 255);
    const random3 = Math.floor(Math.random() * 255);

    const rgb = "rgb("+random1+","+random2+","+random3+")";
    document.body.style.backgroundColor = rgb;
});
