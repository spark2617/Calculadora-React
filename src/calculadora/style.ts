import styled from "styled-components";


export const Button = styled.button`

    background-color: #252626;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    width: 70px;

    border-radius: 20%;

    color: ${props => props.color=="white"?"white": props.color=="red"? "red": "green"};
    font-size: 1.8rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    border: transparent;

    &:hover{
        background-color: #3c3d3c;
    }

`

export const ContainerGrid = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 5px;

`

export const Visor = styled.div`

    width: 295px;
    height: 100px;

    background-color: #121212;

    margin-bottom: 5px;

    border-radius: 6px;

    color: #bfbfbf;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.25rem;

    display: flex;
    justify-content: end;
    align-items: end;

    padding: 10px 15px 10px;

    box-sizing: border-box;

`

export const ContainerCalc = styled.div`

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 340px;
    height: 520px;

    background-color: #363636;

    border-radius: 12px;

`