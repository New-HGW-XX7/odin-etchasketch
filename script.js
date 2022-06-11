// console.log('Test');

const container = document.querySelector('.container');

for(let i = 0; i < 8 * 8; i++) {
    const div = document.createElement('div');

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'red';
    })

    container.appendChild(div);
}
