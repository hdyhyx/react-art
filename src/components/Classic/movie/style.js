import styled from "styled-components"

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  .image{
     height: 280px;  
  }
  .tag{
      position: relative;
      bottom: 37px;
      left: 20px;
      width: 30px;
      height: 90px;
  }
  .text{
    padding: 0 35px;
    font-size: 16px;
    line-height: 25px;
    text-align: justify;
    text-justify: newspaper;
    word-break: break-all;
  }
`