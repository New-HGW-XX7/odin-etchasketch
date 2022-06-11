const container = document.querySelector('.container');

/* for(let i = 0; i < 8 * 8; i++) {
    const div = document.createElement('div');


    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'red';
    })

    container.appendChild(div);
} */

const resetbtn = document.querySelector('.reset');
resetbtn.addEventListener('click', () => {
    const divGroup = document.querySelectorAll('.innerDiv');
    // for(divElement of divGroup) {
    //     divElement.style.backgroundColor = 'grey';
    // } Phased out in favour of forEach() + external function
    divGroup.forEach(resetDivs);
})

function resetDivs(divElement) {
    divElement.style.backgroundColor = 'grey';
}

for(let x = 0; x < 8; x++) {
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('innerContainer');
    container.appendChild(innerContainer);
        for(let y = 0; y < 8; y++) {
            const innerDiv = document.createElement('div');
            innerDiv.classList.add('innerDiv');
            innerContainer.appendChild(innerDiv);

            innerDiv.addEventListener('mouseenter', () => {
                innerDiv.style.backgroundColor = 'red';
            })
        }
}

