import styled, {keyframes} from "styled-components"

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`

export const MusicWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
   .tag{
     position: absolute;
     bottom: 0;
     left: 20px;
     width: 25px;
     height: 80px;
  }
  .text{
    position: absolute;
    bottom: -80px;
    max-width: 80%;
    line-height: 25px;
    font-size: 15px; 
  }
`
export const CdWrapper = styled.div`
  display: flex;
  justify-content: center;
  ox-sizing: border-box;
  margin: auto;
  .needle{
    position: absolute;
    top: -20px;
    left: 53vw;
    width: 25vw;
    height: 40vw;
    z-index: 100;
    background-image: url(${props => props.needleImage});
    background-size: contain;
    transform-origin: 4.5vw 4.5vw;
    transform: rotate(0deg);
    background-position: 50% center;
    background-repeat: no-repeat;
    transition: all 0.3s ease 0s;
    &.pause{
      transform: rotate(-30deg);
    }
  }
  .cd{
    margin-top: 50px;
    width: 70%;
    height: 70vw;
    background-image: url(${props => props.cdImage});
    background-size: contain;
    border-width: 4px;
    border-style: solid;
    border-color: rgba(228, 228, 228, 0.1);
    border-image: initial;
    border-radius: 50%;
    background-position: 50% center;
    background-repeat: no-repeat;
    text-align: center;
    .image{
      display: inline-block;
      padding: 10vw 0;
      width: 70%;
      height: 70%;
      border-radius: 50%;
    }
    .play {
      animation: ${rotate} 20s linear infinite;
      &.pause{
        animation-play-state: paused;
      }
    }
    .playing-img{
      position: absolute;
      top:50%;
      left:50%;
      width: 55px;
      height: 55px;
      transform: translate(-50%,-10%);
    }
  }
`