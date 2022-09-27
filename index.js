//Get all buttons
const buttons = Array.from(document.getElementsByTagName('button'));

const equal = document.getElementById('equal');

const decimal = document.getElementById('decimal');

const display = document.getElementById('display')



buttons.map(button =>
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            
            case 'AC':
                display.innerText = '';
                break
            case 'del':
                if(display.innerText) {
                    display.innerText = display.innerText.split(0, -1); }
                break;
            case '=':
                // Call a function to compute the values
                let Display = display.innerText;
                let li = Display.replace('x', '*')
                let final = li.replace('^', '**')
                display.innerText =''
                
                try {
                    function calculation(str) {
                        return new Function('return ' + str)();
                    }
                    
                    let value = calculation(final);

                    display.innerText = value;
            }
                catch {
                    display.innerText = 'Error'
                }


            default:
                if(e.target.classList == 'normal_size') {
                    display.innerText += e.target.innerText
                }

                else if(e.target.classList == 'smaller_size') {
                    if(display.innerText.slice(-1) == '+' || display.innerText.slice(-1) == '-' || display.innerText.slice(-1) == 'x' || display.innerText.slice(-1) == '/') {
                    }
                    
                    else if(display.innerText != '') { 
                        display.innerText += e.target.innerText;
                    }
        
                }
            }
        }
    )
)