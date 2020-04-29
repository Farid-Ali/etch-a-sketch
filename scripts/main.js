/*creat 16*16 canvas element(inital state)*/

const canvas = document.querySelector('.canvas');
for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
        const canvasElement = document.createElement('div');
        canvasElement.classList.add('canvasElement');
        canvas.appendChild(canvasElement);
    }
}

/*set default background color when hover over any canvas element(squre box)*/

const canvasElement = document.querySelectorAll('.canvasElement');

canvasElement.forEach(element => {
    element.addEventListener('mouseover', () => {
       element.classList.add('canvasElementHover');
       element.classList.remove('canvasElementReset');//for removing background color reset on hover//
    })
});

/* reset canvas background color when reset button clicked*/

function resetCanvas() {
    const canvasElement = document.querySelectorAll('.canvas > div');
    
    canvasElement.forEach(element => {
        element.classList.add('canvasElementReset');
    })
}

const reset = document.querySelector('.reset');

reset.addEventListener('click', resetCanvas);
