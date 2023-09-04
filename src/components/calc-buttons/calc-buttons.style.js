import styled from 'styled-components'
export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Calculator = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: black;
  border: silver 4px solid;
  width: 380px;
  height: 700px;
  border-radius: 50px;  

  .buttons-container{
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  .group{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .footer{
    width: 50%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  .top{
    width: 50%;
    height: 2%;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  .top .speaker{
    height: 3px;
    background: grey;
    width: 15%;
  }
  .footer .bottom-line{
    height: 6px;
    background-color: white;
    width: 100%;
  }
  .calc-button{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    padding: 1rem;
    margin: 0.2rem;
    width: 30px;
    height: 30px;
    background-color: rgb(63, 63, 63);
    border: none;
    color: white;
    font-weight: bold;
  }
  .operation{
    background-color: rgb(238, 135, 0);
  }
  .other{
    background-color: rgb(193, 193, 193);
    color: black;
  }
  .calc-button:hover{
    background-color: rgb(218, 218, 218);
    transition: ease-in 0.2s;
    cursor: pointer;
  }
.screen{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  height: 20%;
  color: white;
}
p{
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 5rem;
  height: 100%;
  width: 80%;
}
  @media (min-width: 800px){
  width: 800px;
  
  .grey-icon{
    display: none;
  }
  .calc-button{
    border-radius: 100px;
    margin: 0.4rem;
    width: 40px;
    height: 40px;
    font-weight: bold;
  }
}

`