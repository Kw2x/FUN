//creates the the box1 div element
const box1 = document.createElement("box1");
// add test to the box1 element
box1.textContent = "i am box 1";
// adds styling to the box1 element
box1.style = "color: red; font-size: 25px; font-weight: bold"
// creates a clcik event for the box1 element
box1.addEventListener("click",b1)
// function that alerts the user that the box1 element has been clicked
function b1() {
    alert("box1 has been clicked");
} 
document.body.append(box1);

/* This is an empty div element that will be used to display the box3 
element under the box1 element*/
const wrapper = document.createElement("wrapper");
document.body.append(container);

const box2 = document.getElementsByTagName("box2");
const b2 = document.addEventListener("click", bx2)
function bx2() {
    alert("box2 has been clicked");
}

const box3 = document.createElement("box3");
box3.textContent = "i am box 3";
box3.style = "color: yellow; font-size: 35px; font-weight: bold"
box3.addEventListener("click", b3)
function b3() {
    alert("box3  has been clicked");
}
document.body.append(box3);

