let action_btn = document.getElementById("action-btn")
let X_input = document.getElementById("X-value")
let Y_input = document.getElementById("Y-value")

let shape = document.getElementsByClassName("shape")


//translate section
let X_position = 0
let Y_position = 0 
let action_list = document.getElementById("action-menu")

//shape centre
let x_center = 0
let y_center = 0

// scale section 
let X_scale = 1
let Y_scale = 1

//rotate section
let angle = 0

action_btn.addEventListener("click", action_method);
let shapes=  document.getElementById("theShape")
let shape_part=shape[0]
    
function action_method() {
    let action = action_list.value
    switch(action) {
          case "translate":
            Y_input.style.display="block";
            translate_shape()
            break;
          case "scale":
            Y_input.style.display="block";  
            scale_shape()
            break;
          case "rotate":
            Y_input.style.display="none";
            rotate_shape(shape_part)
            break;
          default:
        } 
    render_shape()
}

function translate_shape() {
    Y_position += Number(Y_input.value)
    X_position += Number(X_input.value)
    console.log(X_position)
}

function scale_shape() {
    if(Number(X_input.value)!= 0 && Number(Y_input.value)!= 0){
        X_scale = Number(X_input.value)
        Y_scale = Number(Y_input.value)
    }
    

}

function getCenter() {
    divElement = document.querySelector(".container");
    elemRect = divElement.getBoundingClientRect(); 
    elemHeight = elemRect.height;
    elemWidth = elemRect.width;
    x_center= X_position +elemWidth/2;
    y_center= Y_position +elemHeight/2;
    
}
function rotate_shape(shape_part) {
        getCenter()
        elemRect =shape_part.getBoundingClientRect();
        elemHeight = elemRect.height;
        elemWidth = elemRect.width;
        angle += Number(X_input.value)
        xi_center= X_position +elemWidth/2;
        yi_center= Y_position +elemHeight/2;
        temp = X_position
        x_position = (x_center + ((X_position-x_center) * Math.cos(-angle).toFixed(3))) + ((Y_position-y_center) * Math.sin(-angle).toFixed(3));
        y_position = (y_center - ((temp-x_center) * Math.sin(-angle).toFixed(3))) + ((Y_position-y_center) * Math.cos(-angle).toFixed(3));
}

function render_shape() {
    /*
    the equivalent of writing this css
    transform: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY()) rotate(-angle deg)
    */
    for (var i = 0; i < shape.length; i++) {
        shape[i].style.transform = `matrix(1, 0, 0, 1, ${X_position}, ${Y_position}) `;
    }
    shapes.style.transform = `matrix(${X_scale}, 0, 0, ${Y_scale}, 0,0) 
    rotate(${-angle}deg)`;
}
