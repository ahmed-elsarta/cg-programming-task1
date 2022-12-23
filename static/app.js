//translate section
let action_btn = document.getElementById("action-btn")
let X_input = document.getElementById("X-value")
let Y_input = document.getElementById("Y-value")
let shape = document.getElementById("shape")
let X_value = 0
let Y_value = 0


let angle = 0
action_btn.addEventListener("click", translate_shape);

function translate_shape() {
    Y_value += Number(Y_input.value)
    X_value += Number(X_input.value)
    // console.log(transY_value)
    shape.style.transform = "translate(" + (X_value) + "px," + (Y_value) + "px)";
}