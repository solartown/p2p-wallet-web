(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{411:function(e,a,t){"use strict";t.r(a)},414:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return $}));var n=t(0),l=t.n(n),c=t(9),r=t(404),s=t(23),o=t(88),m=t.n(o),u=t(87),i=t(63),d=t(36),b=t(61),E=t(13),p=t(89);const v=Object(r.a)("div")({name:"Wrapper",class:"w1tifgs8"}),j=Object(r.a)("div")({name:"Header",class:"hyjm7t0"}),O=Object(r.a)("div")({name:"Title",class:"t1ge91kj"}),h=Object(r.a)("div")({name:"Date",class:"d19v5yq5"}),k=Object(r.a)("div")({name:"CloseWrapper",class:"c4q92ii"}),y=Object(r.a)(E.c)({name:"CloseIcon",class:"cn2thh8"}),f=Object(r.a)("div")({name:"BlockWrapper",class:"b1d2ax1y"}),T=Object(r.a)(E.c)({name:"BlockIcon",class:"b14kd5e9"}),w=Object(r.a)("div")({name:"Content",class:"c1qeiy73"}),A=Object(r.a)("div")({name:"StatusWrapper",class:"swa4296"}),C=Object(r.a)("div")({name:"ValueCurrency",class:"v11bohjs"}),x=Object(r.a)("div")({name:"ValueOriginal",class:"viwc0bt"}),g=Object(r.a)("div")({name:"Status",class:"s1n4mogn"}),B=Object(r.a)("div")({name:"FieldsWrapper",class:"f9aqzce"}),W=Object(r.a)("div")({name:"FieldWrapper",class:"fuy8m85"}),q=Object(r.a)("div")({name:"FieldTitle",class:"fnug4ak"}),F=Object(r.a)("div")({name:"FieldValue",class:"fz23y8"}),V=Object(r.a)("div")({name:"AddressWrapper",class:"a1qhcojt"}),z=Object(r.a)("div")({name:"AddressTitle",class:"aehvxtz"}),L=Object(r.a)("div")({name:"AddressValue",class:"a1ylh4b7"}),I=Object(r.a)("div")({name:"CopyWrapper",class:"c1m0q1fj"}),N=Object(r.a)(E.c)({name:"CopyIcon",class:"c12n6awn"}),S=Object(r.a)("div")({name:"Footer",class:"f1qbnu0a"}),D=Object(r.a)(E.b)({name:"ButtonExplorer",class:"b1a00mox"}),J=e=>()=>{try{navigator.clipboard.writeText(e),d.b.info("Copied to buffer!")}catch(e){console.error(e)}},$=({signature:e,close:a})=>{var t,r;const o=Object(c.c)(),d=Object(c.d)(a=>a.transaction.items[e]&&u.a.from(a.transaction.items[e])),E=Object(c.d)(e=>e.wallet.cluster);if(Object(n.useEffect)(()=>{const a=async()=>{Object(s.d)(await o(Object(p.b)(e)))||setTimeout(a,3e3)};d||a()},[e]),!d)return null;const $=d.timestamp?m.a.unix(d.timestamp).format("LLL"):d.slot+" SLOT";return l.a.createElement(v,null,l.a.createElement(j,null,l.a.createElement(O,null,d.short.type),l.a.createElement(h,{title:d.slot+" SLOT"},$),l.a.createElement(k,{onClick:a},l.a.createElement(y,{name:"close"})),l.a.createElement(f,null,l.a.createElement(T,{name:"bottom"}))),l.a.createElement(w,null,l.a.createElement(A,null,l.a.createElement(C,null,l.a.createElement(i.a,{symbol:null===(t=d.short.sourceTokenAccount)||void 0===t?void 0:t.mint.symbol,value:d.short.amount})),l.a.createElement(x,null,d.short.amount.toNumber()," ",null===(r=d.short.sourceTokenAccount)||void 0===r?void 0:r.mint.symbol),l.a.createElement(g,null,"Completed")),l.a.createElement(B,null,d.short.sourceTokenAccount?l.a.createElement(W,null,l.a.createElement(q,null,"From"),l.a.createElement(F,null,l.a.createElement(b.a,{symbol:void 0,size:48}),l.a.createElement(V,null,l.a.createElement(z,null,d.short.sourceTokenAccount.mint.symbol),l.a.createElement(L,null,d.short.sourceTokenAccount.address.toBase58())),l.a.createElement(I,{onClick:J(d.short.sourceTokenAccount.address.toBase58())},l.a.createElement(N,{name:"copy"})))):void 0,d.short.destinationTokenAccount?l.a.createElement(W,null,l.a.createElement(q,null,"To"),l.a.createElement(F,null,l.a.createElement(b.a,{symbol:void 0,size:48}),l.a.createElement(V,null,l.a.createElement(z,null,d.short.destinationTokenAccount.mint.symbol),l.a.createElement(L,null,d.short.destinationTokenAccount.address.toBase58())),l.a.createElement(I,{onClick:J(d.short.destinationTokenAccount.address.toBase58())},l.a.createElement(N,{name:"copy"})))):void 0,l.a.createElement(W,null,l.a.createElement(q,null,"Date"),l.a.createElement(F,null,$)),l.a.createElement(W,null,l.a.createElement(q,null,"Amount"),l.a.createElement(F,null,d.short.amount.toNumber())),l.a.createElement(W,null,l.a.createElement(q,null,"Value"),l.a.createElement(F,null,d.short.amount.toNumber())),d.meta?l.a.createElement(W,null,l.a.createElement(q,null,"Fee"),l.a.createElement(F,null,d.meta.fee," lamports")):null,l.a.createElement(W,null,l.a.createElement(q,null,"Block number"),l.a.createElement(F,null,"#",d.slot)),l.a.createElement(W,null,l.a.createElement(q,null,"Transaction ID"),l.a.createElement(F,null,e)))),l.a.createElement(S,null,l.a.createElement("a",{href:`https://explorer.solana.com/tx/${e}?cluster=${E}`,target:"_blank",rel:"noopener noreferrer noindex",className:"button"},l.a.createElement(D,{secondary:!0},"View in blockchain explorer"))))};t(411)}}]);
//# sourceMappingURL=3.bundle.js.map