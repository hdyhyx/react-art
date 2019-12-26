import {createGlobalStyle}  from 'styled-components'

export const IconFont =createGlobalStyle`
    @font-face {font-family: "iconfont";
      src: url('./iconfont.eot?t=1577351636229'); /* IE9 */
      src: url('./iconfont.eot?t=1577351636229#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
      url('./iconfont.woff?t=1577351636229') format('woff'),
      url('./iconfont.ttf?t=1577351636229') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./iconfont.svg?t=1577351636229#iconfont') format('svg'); /* iOS 4.1- */
    }
    
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .icon-share:before {
      content: "\\e60f";
    }
    
    .icon-info:before {
      content: "\\e615";
    }
    
    .icon-likefill:before {
      content: "\\e616";
    }
    
    .icon-like:before {
      content: "\\e618";
    }
    
    .icon-playfill:before {
      content: "\\e622";
    }
    
    .icon-round:before {
      content: "\\e62a";
    }
    
    .icon-search:before {
      content: "\\e62b";
    }
    
    .icon-roundclose:before {
      content: "\\e62c";
    }
    
    .icon-square:before {
      content: "\\e62f";
    }
    
    .icon-usefull:before {
      content: "\\e634";
    }
    
    .icon-write:before {
      content: "\\e637";
    }
    
    .icon-back:before {
      content: "\\e63a";
    }
    
    .icon-left:before {
      content: "\\e63b";
}
`