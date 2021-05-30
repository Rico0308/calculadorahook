import styled from 'styled-components'

const Container = styled.div`
    background-color: #caf7e3;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 5px;
    height: 380px;
    width: 250px;
`;

const Display = styled.div`
    background-color: #f8eded;
    font-size: 30px;
    position: relative;
    padding: 20px 10px;
    text-align: right;
    height: 70px;
    width: 100%;
`;

const DisplayResult = styled.small`
    color: red;
    position: absolute;
    top: 2px;
    right: 5px;
    font-size: 20px;
`;

const Button = styled.button`
    border: none;
    font-size: 25px;
    margin: 5px;
    cursor: pointer;
`;

const NumberContainer = styled.div`
    width: 75%;
    height: 81%;
`;

const OperatorContainer = styled.div`
    width: 25%;
`;

export { Container, Display, DisplayResult, NumberContainer, OperatorContainer,  Button};