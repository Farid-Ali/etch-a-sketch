
/* function for seting user selected canvas size*/

function canvasSize() {
    //returns user selected value//
    let canvasSizeInputValue = 16;
    let canvasSizeInput = document.querySelector('#canvasSizeInput');

    canvasSizeInput.addEventListener('change', (e) => {
        canvasSizeInputValue = e.target.value;
        //update canvas size when user input changed//
        updateCanvasSize();

        //sets default background color when hover over any canvas element(squre box) after user input changed//

        const canvasElement = document.querySelectorAll('.canvasElement');

        canvasElement.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.classList.add('canvasElementHover');
    })
});
    })
    return  canvasSizeInputValue;   
}

/* function for updateing canvas size*/

function updateCanvasSize() {

    let canvasSizeValue = canvasSize();
    console.log(canvasSizeValue);
    const canvas = document.querySelector('.canvas');

    for (let i = 0; i < canvasSizeValue; i++) {
        for (let j = 0; j < canvasSizeValue; j++) {
            const canvasElement = document.createElement('div');
            canvasElement.classList.add('canvasElement');
            canvasElement.style.cssText = 'width: 30px; height: 30px; border: 1px solid black';
            canvas.appendChild(canvasElement);
        }
    }
}

/*creat 16*16 canvas element(inital state)*/

updateCanvasSize();

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




