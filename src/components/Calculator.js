import React from 'react'
import { Container, Display, DisplayResult, NumberContainer, OperatorContainer, Button } from '../styles/styles'
import useCalc from '../hooks/useCalc.js'

export function Calculator(props) {

    const [state, numbers, operators, ids, handleClick] = useCalc();

    const { calc, prevOpe } = state;

    return (
        <>
            <Container>
                <Display id="display">
                    <DisplayResult>{prevOpe}</DisplayResult>
                    {calc}
                </Display>
                <NumberContainer>
                    <Button className="button-ac button-horizontal" id="clear" onClick={handleClick}>AC</Button>
                    {
                        numbers.map(number => (
                            <Button
                                className={`button-number ${number === 0 && 'button-horizontal'}`}
                                key={number}
                                onClick={handleClick}
                                id={ids[number]}
                            >
                                { number}
                            </Button>
                        ))
                    }
                    <Button className="button-number" onClick={handleClick} id="decimal">.</Button>
                </NumberContainer>
                <OperatorContainer>
                    {
                        operators.map(operator => (
                            <Button
                                className="button-operator"
                                key={operator}
                                onClick={handleClick}
                                id={ids[operator]}
                            >
                                {operator}
                            </Button>
                        ))
                    }
                    <Button
                        className="button-operator"
                        onClick={handleClick}
                        id="equals"
                    >
                        =
                    </Button>
                </OperatorContainer>
            </Container>

        </>
    )
}
