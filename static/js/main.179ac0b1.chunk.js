(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(3),o=n.n(i),u=n(4),l=n(5),c=n(7),p=n(6),s=["(",")","BS","-","7","8","9","+","4","5","6","*","1","2","3","/","0",".","C","="],y=function(t){var e=t.onClickHandle,n=t.onEqualBtnClickHandle,r=t.calcState;return a.a.createElement("div",{className:"keyboard"},s.map((function(t){return"="!==t?a.a.createElement("button",{type:"button",className:"button",key:t,value:t,onTouchStart:e,onMouseDown:e,onTouchEnd:function(t){return t.preventDefault()}},t):a.a.createElement("button",{type:"button",className:"button equalBtn",key:t,value:t,disabled:"result"===r,onTouchStart:n,onMouseDown:n,onTouchEnd:function(t){return t.preventDefault()}},t)})))},f=(n(13),{"+":{priority:13,operation:function(t,e){return Number((t+e).toFixed(15))},associativity:"left",type:"binary"},"-":{priority:13,operation:function(t,e){return Number((t-e).toFixed(15))},associativity:"left",type:"binary"},"*":{priority:14,operation:function(t,e){return Number((t*e).toFixed(15))},associativity:"left",type:"binary"},"/":{priority:14,operation:function(t,e){return Number((t/e).toFixed(15))},associativity:"left",type:"binary"},"(":{priority:0,operation:function(){return null},associativity:"not",type:"group"},")":{priority:0,operation:function(){return null},associativity:"not",type:"group"},"un-":{priority:16,operation:function(t,e){return 0-e},associativity:"right",type:"unary"}}),d={BS:{operation:function(t){return t.slice(0,-1)}},C:{operation:function(t){return""}}},v=function(t){return Object.prototype.hasOwnProperty.call(f,t)},h=function(t){return!Number.isNaN(+t)&&"number"===typeof+t},b=function(t){return"("===t},m=function(t){return")"===t},E=n(1),N=function(t){var e=[],n=t.reduce((function(t,n){if(h(n))return[].concat(Object(E.a)(t),[n]);if(v(n)){if(b(n))return e.push(n),t;if(m(n)){for(var r=e.length-1;r>=0;r-=1){if("("===e[r])return e.pop(),t;t.push(e.pop())}return t}var a=e[e.length-1];return a?(i=a,f[n].priority<f[i].priority||"left"===f[a].associativity&&function(t,e){return f[t].priority===f[e].priority}(n,a)?(e.pop(),e.push(n),[].concat(Object(E.a)(t),[a])):(e.push(n),t)):(e.push(n),t)}var i;return t}),[]);return[].concat(Object(E.a)(n),Object(E.a)(e.reverse()))},k=function(t){if(t.length<=1){if(h(t[0]))return t[0];throw new Error("Please, enter expression")}return t.reduce((function(t,e){if(v(e)){var n=t.pop(),r="binary"===f[e].type?t.pop():null,a=f[e].operation(r,n);if(Number.isNaN(a)||null===a)throw new Error("invalid expression");t.push(a)}else t.push(e);return t}),[])[0]},O=function(t){try{var e=function(t){for(var e="",n=[],r=0,a=0;a<=t.length;a+=1){var i=t[a];if(h(i)||"."===i)e+=i;else if(v(i))if(""!==e&&(n.push(Number(e)),e=""),"-"!==i)b(i)&&(r+=1),m(i)&&(r-=1),n.push(i);else if("-"===i){var o=t[a-1];!o||v(o)&&")"!==o?n.push("un-"):n.push(i)}a===t.length&&""!==e&&n.push(Number(e))}if(0!==r)throw new Error("invalid expression");return n}(t),n=N(e);return k(n)}catch(r){return r.message}},S=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).onClickHandle=function(t){t.preventDefault();var e,n=r.state,a=n.displayValue,i=n.calculatorState,o=t.target.value,u={displayValue:"".concat(a).concat(o)};"result"===i&&h(o)&&(u.displayValue=o),e=o,Object.prototype.hasOwnProperty.call(d,e)&&(u.displayValue=d[o].operation(a)),r.setState({displayValue:u.displayValue,calculatorState:"typing"})},r.onEqualBtnClickHandle=function(t){t.preventDefault();var e=r.state.displayValue,n=O(e);r.setState({displayValue:n,calculatorState:"result"})},r.state={displayValue:"0",calculatorState:"result"},r}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.displayValue,n=t.calculatorState;return a.a.createElement("div",{className:"board"},a.a.createElement("input",{type:"text",name:"display",id:"display",readOnly:!0,value:e}),a.a.createElement(y,{onClickHandle:this.onClickHandle,onEqualBtnClickHandle:this.onEqualBtnClickHandle,calcState:n}))}}]),n}(a.a.Component);o.a.render(a.a.createElement(S,null),document.getElementById("react-root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.179ac0b1.chunk.js.map