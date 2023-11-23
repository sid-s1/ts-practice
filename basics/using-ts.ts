const button = document.querySelector('button')! as HTMLButtonElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;
const container = document.querySelector('div')! as HTMLDivElement;

const add = (num1: number, num2: number) => {
    return num1 + num2;
};

button.addEventListener('click', function () {
    const result = document.createElement('h3');
    result.textContent = "The sum is -> " + add(+input1.value, +input2.value);
    container.appendChild(result);
});