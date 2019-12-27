import styled from "styled-components"

export const SentenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .image{
     height: 280px;  
  }
  .tag{
     position: relative;
     bottom: 37px;
     right: 175px;
     width: 30px;
     height: 90px;
  }
  .text{
    max-width: 80%;
    line-height: 25px; 
  }
`