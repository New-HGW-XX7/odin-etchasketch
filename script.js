let gridSize;

const container = document.querySelector('.container');

const resetbtn = document.querySelector('.reset');
resetbtn.addEventListener('click', () => {
    const divGroup = document.querySelectorAll('.innerDiv');
   
    divGroup.forEach((divElement) => {
        divElement.style.backgroundColor = 'grey';
    });
})

const selectbtn = document.querySelector('.select-size');
selectbtn.addEventListener('click', () => {
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

});



// Default Grid
createGrid(16);

function createGrid(extent) {
    for(let x = 0; x < extent; x++) {
        const innerContainer = document.createElement('div');
        innerContainer.classList.add('innerContainer');
        container.appendChild(innerContainer);
            for(let y = 0; y < extent; y++) {
                const innerDiv = document.createElement('div');
                innerDiv.classList.add('innerDiv');
                innerContainer.appendChild(innerDiv);
    
                innerDiv.addEventListener('mouseenter', () => {
                    innerDiv.style.backgroundColor = 'red';
                })
            }
    }   
}