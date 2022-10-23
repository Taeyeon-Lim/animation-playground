"use strict";(self.webpackChunkanimation_playground=self.webpackChunkanimation_playground||[]).push([[258],{376:function(t,n,e){e(791);var r=e(0),a=e(448),i=e.n(a),u=e(184),o=i().bind(r.Z);n.Z=function(t){var n=t.name,e=t.onClickButton,r=t.size,a=t.color,i=t.outline,c=t.fullWidth;return(0,u.jsx)("button",{onClick:e,className:o(r,a,{outline:i,fullWidth:c}),children:n})}},258:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(152),a=e(791),i=e(448),u=e.n(i),o=function(t){var n=t.canvasRef,e=t.isPaused,i=t.speed,u=t.radius,o=(0,a.useState)(0),c=(0,r.Z)(o,2),l=c[0],s=c[1],f=(0,a.useState)(100),d=(0,r.Z)(f,2),h=d[0],m=d[1],v=(0,a.useState)(100),_=(0,r.Z)(v,2),x=_[0],g=_[1],b=(0,a.useState)(i),p=(0,r.Z)(b,2),M=p[0],y=p[1],j=(0,a.useState)(i),B=(0,r.Z)(j,2),C=B[0],S=B[1];(0,a.useEffect)((function(){y(M<0?-i:i),S(C<0?-i:i)}),[i]);(0,a.useEffect)((function(){if(n.current){var t=n.current,e=t.getContext("2d");if(e){var r=t.width,a=t.height;e.clearRect(0,0,r,a);var i=Math.round(r/4),o=Math.round(a/24),c=Math.round(50+r/4),l=Math.round(50+a/2),s=c+i,f=l+o;m((function(t){return t+M})),g((function(t){return t+C})),function(t){var n=t.rectWidth,e=t.rectHeight,r=t.rectX,a=t.rectY,i=t.rectMaxX,u=t.rectMaxY,o=t.ctx;o&&(o.fillStyle="#ff384e",o.beginPath(),o.rect(r,a,n,e),o.fill(),o.fillStyle="#190f3a",o.beginPath(),o.moveTo(i,u),o.lineTo(i-40,u+25),o.lineTo(r-40,u+25),o.lineTo(r,u),o.fill(),o.fillStyle="#9d0919",o.beginPath(),o.moveTo(r,a),o.lineTo(r-40,a+25),o.lineTo(r-40,u+25),o.lineTo(r,u),o.fill())}({rectWidth:i,rectHeight:o,rectX:c,rectY:l,rectMaxX:s,rectMaxY:f,ctx:e}),function(t){var n=t.rectX,e=t.rectY,r=t.rectMaxX,a=t.rectMaxY,i=n-u,o=r+u,c=e-u,l=a+u;if(i<h&&h<o&&c<x&&x<l){var s=Math.abs(i-h),f=Math.abs(h-o),d=Math.abs(c-x),v=Math.abs(x-l),_=Math.min(s,f),b=Math.min(d,v),p=Math.min(_,b);p===_?(y(-1*M),m(h+-1*M)):p===b&&(S(-1*C),g(x+-1*C))}}({rectX:c,rectY:l,rectMaxX:s,rectMaxY:f}),function(t,n){var e=t-u,r=u,a=n-u,i=u/2;h<=u&&(y((function(t){return-1*t})),m((function(t){return t+i}))),h>=e&&(y((function(t){return-1*t})),m((function(t){return t-i}))),x<=r&&(S((function(t){return-1*t})),g((function(t){return t+i}))),x>=a&&(S((function(t){return-1*t})),g((function(t){return t-i})))}(r,a),e.fillStyle="#123456",e.beginPath(),e.arc(h,x,u,0,2*Math.PI),e.fill()}}}),[l]),(0,a.useLayoutEffect)((function(){if(!e){var t;return t=requestAnimationFrame((function n(){s((function(t){return t+1})),t=requestAnimationFrame(n)})),function(){return cancelAnimationFrame(t)}}}),[e])},c=e(376),l=e(126),s=e(184),f=u().bind({"color-blue":"#228be6","color-pink":"#f06595","color-gray":"#ccc","color-froly":"#f26d6d","color-concrete":"#f2f2f2",wave_section:"BounceBall_wave_section__aND9y",button_group:"BounceBall_button_group__ZIUq4",close:"BounceBall_close__OHgLN",play_button:"BounceBall_play_button__NmoKF",animation_option:"BounceBall_animation_option__-5CAn"});var d=function(){var t=(0,a.useRef)(null),n=(0,a.useState)(4),e=(0,r.Z)(n,2),i=e[0],u=e[1],d=(0,a.useState)(35),h=(0,r.Z)(d,2),m=h[0],v=h[1],_=(0,a.useState)(!1),x=(0,r.Z)(_,2),g=x[0],b=x[1],p=(0,a.useState)(!0),M=(0,r.Z)(p,2),y=M[0],j=M[1];return function(t){var n=(0,a.useCallback)((function(){if(t.current){var n=t.current,e=n.getContext("2d");e&&(n.width=1*n.clientWidth,n.height=1*n.clientHeight,e.scale(1,1))}}),[t]);(0,a.useEffect)((function(){n()}),[n])}(t),o({canvasRef:t,isPaused:g,speed:i,radius:m}),(0,s.jsxs)("div",{className:f("wave_section"),children:[(0,s.jsx)("canvas",{ref:t,children:"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\uc785\ub2c8\ub2e4"}),y?(0,s.jsxs)("div",{className:f("button_group"),children:[(0,s.jsx)("div",{className:f("play_button"),onClick:function(){return b(!g)},children:g?(0,s.jsx)(l.mz0,{}):(0,s.jsx)(l.obJ,{})}),(0,s.jsxs)("div",{className:f("animation_option"),children:[(0,s.jsx)(l.qwN,{}),"\xa0","\uc18d\ub3c4(speed)"]}),(0,s.jsx)("input",{type:"range",min:"2",max:"6",value:i,onChange:function(t){return u(Number(t.target.value))}}),(0,s.jsxs)("div",{className:f("animation_option"),children:[(0,s.jsx)(l.qKB,{}),"\xa0","\ud06c\uae30(radius)"]}),(0,s.jsx)("input",{type:"range",min:"20",max:"50",value:m,onChange:function(t){return v(Number(t.target.value))}}),(0,s.jsx)(c.Z,{name:"CLOSE",onClickButton:function(){return j((function(t){return!t}))},size:"large",color:"gray",fullWidth:!0})]}):(0,s.jsx)("div",{className:f("button_group","close"),children:(0,s.jsx)(c.Z,{name:"+",onClickButton:function(){return j((function(t){return!t}))},size:"large",color:"gray"})})]})}}}]);
//# sourceMappingURL=258.ca12c467.chunk.js.map