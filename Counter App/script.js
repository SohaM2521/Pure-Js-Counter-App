let counter = 999999;

const DISPLAY = document.getElementById('display');   
const ALERT_EL = document.getElementById('alert'); 
const ERROR_MSG_OUT_OF_MEMORY = 'Out of memory'; //this message will be shown if its cross the limit 999999
const ERROR_MSG_INVALID_RANGE = 'Zero is the low limit'; //this message will be shown if it crosses the limit 0000
//updateing the Display
function updateDisplay() {
    const numberToString = addPaddingAtStart(counter.toString(), 4, '0'); // Convert counter to string and pad with zeros if necessary
    const boxCount = numberToString.length;
    const spanElements = DISPLAY.children;

    // Removeing the extra box after a decrement
    for (let i = spanElements.length - 1; i >= boxCount; i--) {
        DISPLAY.removeChild(spanElements[i]);
    }

    // Adding a Box after a increment 
    for (let i = 0; i < boxCount; i++) {
        if (i < spanElements.length) {
            spanElements[i].innerText = numberToString[i];
        } else {
            addBox(); // Add a new box if necessary
        }
    }
}


// increment button Function
function increment(){
    const boxCount = DISPLAY.children.length;
    counter++;
    if(counter.toString().length === 5 && boxCount === 4) {     //Showing the length of the box and the boxcount
        addBox();
        
    } else if(counter.toString().length === 6 && boxCount === 5) {  //Showing the length of the box and the boxcount
        addBox();
    }
    else if(counter.toString().length > 6) {        // If the number reached 6 digit then show alert message 
        ALERT_EL.innerText = ERROR_MSG_OUT_OF_MEMORY;
        return;
    }
    ALERT_EL.innerText = '';
    
    updateDisplay();
}

//Add Box Function is used in increment function
function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.append(SPAN);
}
//Decrement button Function
function decrement(){
    if(counter === 0) { //error Message if the number reach 0000
        ALERT_EL.innerText = ERROR_MSG_INVALID_RANGE;
        return
    };
    counter--;
    updateDisplay();
}

//reset button Function
function reset(){
    counter =0;
    updateDisplay();
}

//addPadding function is used to add a value in a box after increment
function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if(remainingSpace > 0) {
        let newString = originalString;
        for(let i=0; i < remainingSpace; i++) {
            newString = paddingCharacter + newString;
        }
        return newString
    }
    return originalString;
}

updateDisplay();   