let canvasSizeInputValue = 16;

/* function for seting user selected canvas size*/

let canvasSizeInput = document.querySelector('#canvasSizeInput');

    canvasSizeInput.addEventListener('change', (e) => {
        //returns user selected value//
        canvasSizeInputValue = e.target.value;

        //alert user to set the value in range if input is too low or too high//
        if (canvasSizeInputValue > 100 || canvasSizeInputValue < 2) {
            alert('Please insert a value between 2 - 100');
        }

        //remove previous canvas when canvas size is set manually//
        deleteChild();
        
        //update canvas size when user input changed//
        updateCanvasSize();

        //sets default background color when hover over any canvas element(squre box) after user input changed//
        const canvasElement = document.querySelectorAll('.canvasElement');

        canvasElement.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.classList.add('canvasElementHover');
            })
        })
        return;
    })


/* function for updateing canvas size*/

function updateCanvasSize() {
    const canvas = document.querySelector('.canvas');
    //sets ceel size//
    const cellSize = canvas.clientWidth / canvasSizeInputValue;

    //creates cells//
    if (canvasSizeInputValue <= 100 && canvasSizeInputValue >= 2) {
        for (let i = 0; i < canvasSizeInputValue; i++) {
            for (let j = 0; j < canvasSizeInputValue; j++) {
                const canvasElement = document.createElement('div');
                canvasElement.classList.add('canvasElement');
                canvasElement.style.cssText = `width: ${cellSize}px; height: ${cellSize}px; border: .1px solid #585863`;
                canvas.appendChild(canvasElement);
            }
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

/*function for remove previous canvas when canvas size is set manually*/

function deleteChild() { 
    const canvas = document.querySelector(".canvas"); 
    
    //canvas.firstElementChild can be used. 
    let child = canvas.lastElementChild;  
    while (child) { 
        canvas.removeChild(child); 
        child = canvas.lastElementChild; 
    } 
} 



