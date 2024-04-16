import styled from "styled-components";


export const Button = styled.button`

background: rgba( 22, 22, 22, 0.65 );
/* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    width: 70px;

   

    color: ${props => props.color=="white"?"white": props.color=="red"? "red": "green"};
    font-size: 1.8rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    border: transparent;
    transition: 0.4s;

    &:hover{
        transition: 0.4s;
        background: rgba( 101, 101, 101, 0.35 );
        box-shadow: 0 8px 32px 0 rgba( 7, 131, 4, 0.35 );;
        backdrop-filter: blur( 2px );
        -webkit-backdrop-filter: blur( 2px );
        border-radius: 10px;
       
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

    background: rgba( 0, 0, 0, 0.6 );
    backdrop-filter: blur( 0px );
    -webkit-backdrop-filter: blur( 0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    margin-bottom: 5px;


    color: rgba( 4, 118, 0, 0.6 );
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

    background: rgba( 63, 63, 63, 0.5 );
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    backdrop-filter: blur( 10.5px );
    -webkit-backdrop-filter: blur( 10.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`