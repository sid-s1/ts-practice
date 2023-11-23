var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var container = document.querySelector('div');
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener('click', function () {
    var result = document.createElement('h3');
    result.textContent = "The sum is -> " + add(+input1.value, +input2.value);
    container.appendChild(result);
});
