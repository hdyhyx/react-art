import {createGlobalStyle}  from 'styled-components'

export const IconFont =createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1577421804847'); /* IE9 */
  src: url('./iconfont.eot?t=1577421804847#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1577421804847') format('woff'),
  url('./iconfont.ttf?t=1577421804847') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1577421804847#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-pause:before {
  content: "\\e639";
}

.icon-play:before {
  content: "\\e63c";
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