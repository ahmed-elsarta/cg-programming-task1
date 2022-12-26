let action_btn = document.getElementById("action-btn")
let X_input = document.getElementById("X-value")
let Y_input = document.getElementById("Y-value")

let shape = document.getElementsByClassName("shape")
console.log(shape)

//translate section
let X_position = 0
let Y_position = 0 
let action_list = document.getElementById("action-menu")


// scale section 
let X_scale = 1
let Y_scale = 1

//rotate section
let angle = 0
action_btn.addEventListener("click", action_method);
// action_list.addEventListener("change", function() {
//     let action = action_list.value
//     if(action == "rotate"){
//         Y_input.disabled=true;
//     }
//   });

function action_method() {
    let action = action_list.value
    switch(action) {
          case "translate":
            translate_shape()
            break;
          case "scale":
            scale_shape()
            break;
          case "rotate":
            rotate_shape()
            break;
          default:
        } 
    render_shape()
}

function translate_shape() {
    Y_position += Number(Y_input.value)
    X_position += Number(X_input.value)
    console.log(Y_position)
    // shape.style.transform = "translate(" + (X_position) + "px," + (Y_position) + "px)";
}

function scale_shape() {
    if(Number(X_input.value)!= 0 && Number(Y_input.value)!= 0){
        X_scale = Number(X_input.value)
        Y_scale = Number(Y_input.value)
    }
    
    // shape.style.transform = "scale(" + (X_scale) + "," + (Y_scale) + ")";

}

function rotate_shape() {
    angle += Number(X_input.value)
    // shape.style.transform = "rotate(" + (-angle) + "deg)";
}

function render_shape() {
    /*
    the equivalent of writing this css
    transform: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY()) rotate(-angle deg)
    */
    for (var i = 0; i < shape.length; i++) {
        shape[i].style.transform = `matrix(${X_scale}, 0, 0, ${Y_scale}, ${X_position}, ${Y_position}) 
        rotate(${-angle}deg)`;
        console.log(shape[i])
    }
}