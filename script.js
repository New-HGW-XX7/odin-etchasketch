// console.log('Test');

const container = document.querySelector('.container');

for(let i = 0; i < 8 * 8; i++) {
    const div = document.createElement('div');


    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'red';
    })

    container.appendChild(div);
}

const resetbtn = document.querySelector('.reset');
resetbtn.addEventListener('click', () => {
    const divGroup = document.querySelector('.container').childNodes;
    for(divElement of divGroup) {
        divElement.style.backgroundColor = 'grey';
    }
})
