import { useState } from 'react'

const useCalc = () => {

    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const operators = ['/', '*', '-', '+'];
    const ids = {
        7: 'seven',
        8: 'eight',
        9: 'nine',
        4: 'four',
        5: 'five',
        6: 'six',
        1: 'one',
        2: 'two',
        3: 'three',
        0: 'zero',
        '/': 'divide',
        '*': 'multiply',
        '-': 'subtract',
        '+': 'add'
    }

    const [state, setState] = useState({
        lastPressed: undefined,
        prevOpe: '0',
        calc: '0',
        operation: undefined
    });

    const { lastPressed, calc, prevOpe } = state;

    const handleClick = (e) => {
        const { innerText } = e.target;

        switch (innerText) {
            case 'AC': {
                setState({
                    calc: '0',
                    prevOpe: '0'
                });
                break;
            }

            case '=': {
                const evaluated = eval(calc);
                setState({
                    calc: evaluated,
                    prevOpe: prevOpe + innerText + evaluated
                });
                break;
            }

            case '.': {
                const splitted = calc.split(/[\+\-\*\/]/);
                const last = splitted.slice(-1)[0];

                if(!last.includes('.')){
                    setState({
                        calc: calc + '.'
                    })
                }
                break;
            }

            default: {
                let e = undefined;
                //Validar cuando se introducen varios operadores
                if (operators.includes(innerText)) {
                    if (operators.includes(lastPressed) && innerText !== '-') {
                        const lastNumberId = calc.split('').reverse().findIndex(char => char !== ' ' && numbers.includes(+char));
                        e = calc.slice(0, calc.length - lastNumberId) + `${innerText}`;
                    } else {
                        e = `${calc} ${innerText}`;
                    }
                } else {
                    e = (calc === '0') ? innerText : (calc + innerText);
                }
                setState({
                    calc: e,
                    prevOpe: e,
                    lastPressed: innerText
                });
            }
        }

    }

    return [
        state,
        numbers,
        operators,
        ids,
        handleClick
    ]
}

export default useCalc
