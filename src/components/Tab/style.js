import styled from "styled-components";

export const TabWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  background: #fff;
  font-size: 12px;
  a{
    flex: 1;
    height: 100%;
    color:#333;
    .iconfont{
      padding-bottom: 3px;
      font-size: 24px;
    }
    span{
     color: #999;
    }
    &.selected{
      span{
        color: #333;
      }
    }
  }
`
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`