import react, { useState } from 'react'
import { Calculator, Container } from './calc-buttons.style'

export const CalcButtons = () => {

  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  const handleNum = (e) => {
    if(num === 0){
      setNum(e.target.textContent)
    } else {
      setNum(num + e.target.textContent)
    }
  }
  const clear = (e) => {
    setNum(0)
  }
  const percentage = () => {
    setNum(num / 100)
  }
  const changeSign = () => {
    if(num > 0){
      setNum(-num)
    } else{
      setNum(Math.abs(num))
    }
  }
  const operatorHandler = (e) => {
    setOperator(e.target.textContent)
    setOldNum(num)
    setNum(0)
  }
  const calculate = (e) => {
    if(operator === "/"){
      setNum(parseFloat(oldNum) / parseFloat(num)) 
    } else if (operator === "*"){
      setNum(parseFloat(oldNum) * parseFloat(num))
    } else if (operator === "-"){
      setNum(parseFloat(oldNum) - parseFloat(num))
    } else if (operator === "+"){
      setNum(parseFloat(oldNum) + parseFloat(num))
    }
  }

  return (
    <Container>
      <Calculator>
        <div className='screen'>
          <p>{num}</p>
        </div>
        <div className='buttons-container'>
          <div class="group">          
            <div class="calc-button other clear" onClick={clear}>AC</div>
            <div class="calc-button other" onClick={changeSign}>+/-</div>
            <div class="calc-button other" onClick={percentage}>%</div>
            <div class="calc-button operation" onClick={operatorHandler}>/</div>
          </div>
          <div class="group">          
            <div class="calc-button number" onClick={handleNum}>7</div>
            <div class="calc-button number" onClick={handleNum}>8</div>
            <div class="calc-button number" onClick={handleNum}>9</div>
            <div class="calc-button operation" onClick={operatorHandler}>*</div>
          </div>
          <div class="group">          
            <div class="calc-button number" onClick={handleNum}>4</div>
            <div class="calc-button number" onClick={handleNum}>5</div>
            <div class="calc-button number" onClick={handleNum}>6</div>
            <div class="calc-button operation" onClick={operatorHandler}>-</div>
          </div>
          <div class="group">          
            <div class="calc-button number" onClick={handleNum}>1</div>
            <div class="calc-button number" onClick={handleNum}>2</div>
            <div class="calc-button number" onClick={handleNum}>3</div>
            <div class="calc-button operation" onClick={operatorHandler}>+</div>
          </div>
          <div class="group">          
            <div class="calc-button number" onClick={handleNum}>.</div>
            <div class="calc-button number" onClick={handleNum}>0</div>
            <div class="calc-button operation" style={{visibility: "hidden"}}></div>
            <div class="calc-button operation" onClick={calculate}>=</div>
          </div>
        </div>
      </Calculator>
    </Container>
  )
}