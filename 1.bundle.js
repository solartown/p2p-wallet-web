(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{406:function(e,a,t){"use strict";t.r(a)},407:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var n=t(0),l=t.n(n),c=t(404),s=t(13);const r=Object(c.a)("div")({name:"Wrapper",class:"wrdya2m"}),o=Object(c.a)("div")({name:"Header",class:"h1vh307k"}),m=Object(c.a)("div")({name:"Title",class:"t1qfjroh"}),i=Object(c.a)("div")({name:"Description",class:"d8b2mdb"}),d=Object(c.a)("div")({name:"CloseWrapper",class:"c135gzia"}),u=Object(c.a)(s.c)({name:"CloseIcon",class:"c1whuod3"}),b=Object(c.a)("div")({name:"Content",class:"c12kmdhp"}),v=({title:e,description:a,close:t,children:n,className:c})=>l.a.createElement(r,{className:c},l.a.createElement(o,null,e?l.a.createElement(m,null,e):void 0,a?l.a.createElement(i,null,a):void 0,t?l.a.createElement(d,{onClick:t},l.a.createElement(u,{name:"close"})):void 0),n?l.a.createElement(b,null,n):void 0);t(406)},408:function(e,a,t){"use strict";t.r(a)},409:function(e,a,t){"use strict";t.r(a)},410:function(e,a,t){"use strict";t.r(a)},413:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return q}));var n=t(0),l=t.n(n),c=t(9),s=t(404),r=t(46),o=t(16),m=t(407),i=t(13),d=t(205),u=t(37),b=t.n(u),v=t(61),p=t(41);const j=Object(s.a)("div")({name:"Wrapper",class:"w2hsup5"}),E=Object(s.a)("div")({name:"ChevronWrapper",class:"cjk37vx"}),O=Object(s.a)(i.c)({name:"ChevronIcon",class:"c1aewuyh"}),f=Object(s.a)("div")({name:"Main",class:"m1x0i73s"}),h=Object(s.a)("div")({name:"Content",class:"c1lrr91s"}),w=Object(s.a)("div")({name:"InfoWrapper",class:"ifuaxgh"}),k=Object(s.a)("div")({name:"Info",class:"isx2g64"}),C=Object(s.a)("div")({name:"Top",class:"t10180ct"}),y=Object(s.a)("div")({name:"Bottom",class:"b1idmxl7"}),g=Object(s.a)("div")({name:"Additional",class:"a5vkidx"}),I=Object(s.a)("div")({name:"PlusIconWrapper",class:"pjtzobz"}),S=Object(s.a)(i.c)({name:"PlusIcon",class:"pr7kpio"}),M=Object(s.a)("div")({name:"BottomInfo",class:"b1n4pegg"}),W=Object(s.a)("div")({name:"LeftInfo",class:"l1p1n0ee"}),x=Object(s.a)("div")({name:"RightInfo",class:"r1sgvivf"}),N=({token:e,closeModal:a})=>{const t=Object(c.c)(),s=Object(n.useRef)(null),[r,o]=Object(n.useState)(!1),m=()=>{o(!r)};return l.a.createElement(j,null,l.a.createElement(f,{className:b()({opened:r})},l.a.createElement(h,{className:b()({opened:r})},l.a.createElement(w,{onClick:m},l.a.createElement(v.a,{symbol:e.symbol,size:45}),l.a.createElement(k,null,l.a.createElement(C,null,l.a.createElement("div",null,e.symbol)," ",l.a.createElement("div",null)),l.a.createElement(y,null,l.a.createElement("div",null,e.name)," ",l.a.createElement("div",null)))),l.a.createElement(E,{onClick:m,className:b()({opened:r})},l.a.createElement(O,{name:"chevron"}))),l.a.createElement(g,{className:b()({opened:r})},l.a.createElement(i.d,{ref:s,title:e.symbol+" Mint Address",value:e.address.toBase58(),readOnly:!0}),l.a.createElement(i.b,{primary:!0,onClick:async()=>{await t(Object(p.c)({token:e})),a()}},l.a.createElement(I,null,l.a.createElement(S,{name:"plus"})),"Add token")),l.a.createElement(M,{className:b()({opened:r,error:!1})},l.a.createElement(l.a.Fragment,null,l.a.createElement(W,null,"View in Solana explorer"),l.a.createElement(x,null,"will cost 0.002039 SOL")))))};t(408);const B=Object(s.a)("div")({name:"Wrapper",class:"w1wf7dhi"}),z=Object(s.a)(d.a)({name:"SearchInputStyled",class:"szvbwf7"}),A=({items:e,closeModal:a})=>{if(!e)return null;const[t,c]=Object(n.useState)(""),s=t.length>0?e.filter(e=>{var a,n;return(null===(a=e.symbol)||void 0===a?void 0:a.toLowerCase().includes(t))||(null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(t))}):e;return l.a.createElement(B,null,l.a.createElement(z,{placeholder:"Search token",value:t,onChange:e=>{const a=e.trim().toLowerCase();c(a)}}),s.map(e=>l.a.createElement(N,{key:e.address.toBase58(),token:e,closeModal:a})))};t(409);const L=Object(s.a)(m.a)({name:"WrapperModal",class:"wiqml5"}),T=Object(s.a)("div")({name:"ScrollableContainer",class:"s17ynaak"}),q=({close:e})=>{const a=Object(c.d)(e=>e.wallet.tokenAccounts.map(e=>o.a.from(e))),t=Object(c.d)(e=>e.global.availableTokens.map(e=>r.a.from(e))),s=Object(n.useMemo)(()=>{if(!t)return;const e=new Set(a.map(e=>e.mint.address.toBase58()));return t.filter(a=>!e.has(a.address.toBase58()))},[t]);return l.a.createElement(L,{title:"Add coins",close:e},(null==s?void 0:s.length)?l.a.createElement(T,null,l.a.createElement(A,{items:s,closeModal:()=>{e()}})):void 0)};t(410)}}]);
//# sourceMappingURL=1.bundle.js.map