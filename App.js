var input = document.getElementById("input");

let input0 = () => {
  input.value += 0;
};
let input1 = () => {
  input.value += 1;
};
let input2 = () => {
  input.value += 2;
};
let input3 = () => {
  input.value += 3;
};
let input4 = () => {
  input.value += 4;
};
let input5 = () => {
  input.value += 5;
};
let input6 = () => {
  input.value += 6;
};
let input7 = () => {
  input.value += 7;
};
let input8 = () => {
  input.value += 8;
};
let input9 = () => {
  input.value += 9;
};
let inputMinus = () => {
  input.value += "-";
};
let inputPlus = () => {
  input.value += "+";
};
let inputMultiply = () => {
  input.value += "*";
};
let inputDivide = () => {
  input.value += "/";
};
let inputDot = () => {
  input.value += `.`;
};
let result = () => {
  input.value = eval(input.value);
};
let clearInput = () => {
  //   input.value = eval(input.value);
  //   alert("Working");
  input.value = "";
};
