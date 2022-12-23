//translate section
let translate_btn = document.getElementById("translate-btn")
let transX_input = document.getElementById("transX-value")
let transY_input = document.getElementById("transY-value")
let shape = document.getElementById("shape")
let transX_value = 0
let transY_value = 0


let angle = 0
translate_btn.addEventListener("click", translate_shape);

function translate_shape() {
    transY_value += Number(transY_input.value)
    transX_value += Number(transX_input.value)
    console.log(transY_value)
    shape.style.transform = "translate(" + (transX_value) + "px," + (transY_value) + "px)";
}