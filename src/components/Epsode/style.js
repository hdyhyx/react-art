import styled from "styled-components"

export const EpsodeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-left: 10px;
`

export const IndexWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  .desc{
    font-size: 14px;
  }
  .index{
    padding: 0 5px;
    font-size: 30px;
    font-weight: 500;
  }
  &::after {
    content: " ";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #333333;
    transform-origin: 0 0;
    transform: scaleX(.5);
   }
`

export const DeteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  .month{
    font-size: 14px;
    padding-bottom: 2px;
  }
  .year{
    font-size: 14px;
  }
`