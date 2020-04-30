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
    })
});

/* reset canvas background color to white when reset button clicked*/

function resetCanvas() {
    const canvasElement = document.querySelectorAll('.canvasElement');

    canvasElement.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'white';
        })
    });
}

const reset = document.querySelector('.reset');

reset.addEventListener('click', resetCanvas);

/*set random background color when hover over any canvas element(squre box)*/

//generate random color//

function randomColor() {
    const canvasElement = document.querySelectorAll('.canvasElement');

    canvasElement.forEach(element => {
        element.addEventListener('mouseover', () => {
            const color = Math.floor(Math.random() * 16777215).toString(16);
            element.style.backgroundColor = "#" + color;
        })
    });
   
}

//set random color when random color button clicked//

const SetRandomColor = document.querySelector('.randomColor');

SetRandomColor.addEventListener('click', randomColor); 

