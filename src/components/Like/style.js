import styled from 'styled-components'

export const LikeContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 10px;
  .iconfont{
    font-size: 24px;
  }
  .icon-likefill{
    color: rgb(255, 157, 172);
  }
`

export const Count=styled.span`
  padding: 0 5px;
  font-size: 14px;
  color: #bbb;
`