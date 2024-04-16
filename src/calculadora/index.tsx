import { useState } from "react"
import { Button, ContainerGrid, Visor, ContainerCalc } from "./style"


let countOpenParent: number = 0

export default function Calculadora() {

    const lastCharIsOperatorRegex: RegExp = /[+\-\/x]$/;
    const numberRegex: RegExp = /[0-9]$/
    const pointRgex: RegExp = /[.]$/
    const parentRegex: RegExp = /[()]$/
    const openParentRegex: RegExp = /[(]$/
    const closeParentRegex: RegExp = /[)]$/

    let [visor, updateVisor] = useState<string>("0")


    function validationOperador(n: string) {
        if (numberRegex.test(visor) || /[%]/.test(visor)) {
            updateVisor((prev: string) => prev + n)
        }

        else if (lastCharIsOperatorRegex.test(visor)) {
            updateVisor(visor.replace(lastCharIsOperatorRegex, n))
        }
        else if (pointRgex.test(visor)) {
            updateVisor((prev: string) => prev + "0" + n)
        }
        else if(closeParentRegex.test(visor)){
            updateVisor((prev: string) => prev + n)
        }
    }


    function validationParent(n: string) {
        console.log(countOpenParent)
        if (lastCharIsOperatorRegex.test(visor)) {
            visor == "0" ? updateVisor("(") : updateVisor((prev: string) => prev + "(")
            countOpenParent += 1
        }
        else if (openParentRegex.test(visor)) {
            updateVisor((prev: string) => prev + "(")
            countOpenParent += 1
        }
        else if (numberRegex.test(visor) && countOpenParent > 0 ||
            closeParentRegex.test(visor) && countOpenParent > 0
        ) {

            updateVisor((prev: string) => prev + ")")
            countOpenParent -= 1
        }
        else if (numberRegex.test(visor) || closeParentRegex.test(visor) && countOpenParent < 1) {
            updateVisor((prev: string) => prev + "x(")
            countOpenParent += 1
        }
    }


    function handleClick(n: string): void {

        if (visor === "Invalid!") {
            updateVisor("")
            countOpenParent = 0
        }

        if (n === "+/-") {
            const lastNumber: string | null = visor.match(numberRegex)?.[0] || null;
            updateVisor((prev: string) => prev.replace(numberRegex, "( - " + lastNumber))
        }

        else if (parentRegex.test(n)) validationParent(n)

        else if (numberRegex.test(n) || pointRgex.test(n)) {

            visor == "0" ? updateVisor(n) : /[%]$/.test(visor) ? updateVisor((prev: string) => prev + "x" + n) : updateVisor((prev: string) => prev + n)

        }

        else if (lastCharIsOperatorRegex.test(n)) validationOperador(n)

        else if ("%" === n){
            if(lastCharIsOperatorRegex.test(visor)){
                updateVisor(visor.replace(lastCharIsOperatorRegex,"%"))
            }
            else{
                updateVisor((prev) => prev + n)
            }

        } 




    }

    function handleResult() {
        
        let processedExpression = visor.replace(/x/g, "*").replace(/%/g, "/100");
    
        try {
            let result = eval(processedExpression);
            updateVisor(result.toString());

        } catch (error) {
            updateVisor("Invalid!")
        }
    }
    function clean(): void {
        updateVisor("0")
        countOpenParent = 0
    }

    return (
        <ContainerCalc>
            <Visor>{visor}</Visor>
            <ContainerGrid>

                <Button color="red" onClick={() => clean()}>C</Button>
                <Button onClick={() => handleClick("()")}>( )</Button>
                <Button onClick={() => handleClick("%")}>%</Button>
                <Button onClick={() => handleClick("/")}>/</Button>


                <Button color="white" onClick={() => handleClick("7")}>7</Button>
                <Button color="white" onClick={() => handleClick("8")}>8</Button>
                <Button color="white" onClick={() => handleClick("9")}>9</Button>
                <Button onClick={() => handleClick("x")}>X</Button>

                <Button color="white" onClick={() => handleClick("4")}>4</Button>
                <Button color="white" onClick={() => handleClick("5")}>5</Button>
                <Button color="white" onClick={() => handleClick("6")}>6</Button>
                <Button onClick={() => handleClick("-")}>-</Button>

                <Button color="white" onClick={() => handleClick("1")}>1</Button>
                <Button color="white" onClick={() => handleClick("2")}>2</Button>
                <Button color="white" onClick={() => handleClick("3")}>3</Button>
                <Button onClick={() => handleClick("+")}>+</Button>

                <Button color="white" onClick={() => handleClick("+/-")}>+/-</Button>
                <Button color="white" onClick={() => handleClick("0")}>0</Button>
                <Button color="white" onClick={() => handleClick(".")}>.</Button>
                <Button color="white" onClick={() => { handleResult() }}>=</Button>

            </ContainerGrid>

        </ContainerCalc>
    )
}