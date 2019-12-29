import styled from "styled-components"

export const NaviWrapper=styled.div`
  position: fixed;
  bottom: 70px;
  left: 0;
  right: 0;
  text-align: center;
  .container{
    width: 80%;
    height: 40px;
    background-color: rgba(255,255,255,0.8);
    border-radius: 2px;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .iconfont{
      padding: 0 10px;
      font-size: 30px;
    }
    .text{
      flex: 1;
      font-size: 14px;
    }
    .active{
      color: #999999;
    }
  }
`