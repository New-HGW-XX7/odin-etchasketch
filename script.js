// console.log('Test');

const container = document.querySelector('.container');

for(let i = 0; i < 8 * 8; i++) {
    const div = document.createElement('div');
   // div.textContent = i;
    container.appendChild(div);
}