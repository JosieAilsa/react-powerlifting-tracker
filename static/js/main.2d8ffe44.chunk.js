(this["webpackJsonp5x5-powerlifting-tracker"]=this["webpackJsonp5x5-powerlifting-tracker"]||[]).push([[0],Array(20).concat([function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var s=i(1),c=i.n(s),n=i(11),a=i.n(n),r=(i(20),i(21),i(9)),l=i(3),o=(i(22),i.p+"static/media/logo-06.a2a337b9.svg"),d=i(6),f=i(0),u=function(){return Object(f.jsxs)("nav",{className:"nav",children:[Object(f.jsx)("img",{className:"nav__logo",src:o,alt:"logo"}),Object(f.jsx)("svg",{className:"nav__hamburger",xmlns:"http://www.w3.org/2000/svg",width:"40.141",height:"28.317",viewBox:"0 0 40.141 28.317",children:Object(f.jsx)("g",{id:"Group_24","data-name":"Group 24",transform:"translate(-680.526 -46.699)",children:Object(f.jsxs)("g",{id:"Group_19","data-name":"Group 19",transform:"translate(681.526 47.699)",children:[Object(f.jsx)("line",{id:"Line_1","data-name":"Line 1",x2:"38.141",transform:"translate(0)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"2"}),Object(f.jsx)("line",{id:"Line_2","data-name":"Line 2",x2:"38.141",transform:"translate(0 13.385)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"2"}),Object(f.jsx)("line",{id:"Line_3","data-name":"Line 3",x2:"38.141",transform:"translate(0 26.317)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"2"})]})})}),Object(f.jsxs)("ul",{className:"nav__container",children:[Object(f.jsx)("li",{className:"nav__link",children:Object(f.jsx)(d.b,{to:"/",children:"Home"})}),Object(f.jsx)("li",{className:"nav__link",children:Object(f.jsx)(d.b,{to:"/create",children:"Add Lift"})}),Object(f.jsx)("li",{className:"nav__link",children:Object(f.jsx)(d.b,{to:"/lifts",children:"Logged lifts"})})]})]})},j=(i(24),function(e){var t=e.liftsArr,i=e.handleLiftSelect,s=t.map((function(e,t){return Object(f.jsxs)("div",{className:"radio",children:[Object(f.jsx)("input",{type:"radio",id:e+t,className:"radio__input",name:"lift",value:e,onClick:i}),Object(f.jsx)("label",{className:"radio__label",for:e,children:e})]})}));return Object(f.jsxs)("div",{className:"lift",children:[Object(f.jsx)("h4",{className:"lift__title",children:"Lift Type"}),Object(f.jsx)("div",{className:"lift__list",children:s})]})}),h=(i(25),function(e){var t=e.handleWeightInput;return Object(f.jsxs)("div",{className:"weightcontainer",children:[Object(f.jsx)("h4",{className:"weight__title",children:"How much did you lift?"}),Object(f.jsxs)("div",{className:"weight__input",children:[Object(f.jsx)("input",{type:"text",className:"input",placeholder:"Enter the weight you lifted here",value:null,onChange:t}),Object(f.jsx)("h5",{className:"input__kgs",children:"KGs"})]})]})}),b=(i(26),i.p+"static/media/lifticon-03.278b0d0a.svg"),m=i.p+"static/media/lifticon-01.ec0dab58.svg",v=i.p+"static/media/lifticon-02.5b630054.svg",O=i.p+"static/media/lifticon-05.da25b0c7.svg",p=i.p+"static/media/lifticon-04.310f2c3b.svg",x=function(e){var t=parseInt(e);if(!isNaN(t))return t>=90?"very hard":t<90&&t>=60?"hard":t<60&&t>=30?"moderate":t<30&&t>10?"easy":"very easy"},g=(i(27),function(e){var t=e.eventHandle,i=e.className,c=e.bottomTitle,n=e.topTitle,a=e.diffculty,r=Object(s.useState)("moderate"),o=Object(l.a)(r,2),d=o[0],u=o[1];return Object(s.useEffect)((function(){console.log(d);var e=document.querySelector(".slider");"very easy"===d?(e.classList.add("slider--very-easy"),e.classList.remove("slider--moderate"),e.classList.remove("slider--easy"),e.classList.remove("slider--hard"),e.classList.remove("slider--very-hard")):"easy"===d?(e.classList.add("slider--easy"),e.classList.remove("slider--moderate"),e.classList.remove("slider--very-easy"),e.classList.remove("slider--hard"),e.classList.remove("slider--very-hard")):"moderate"===d?(e.classList.add("slider--moderate"),e.classList.remove("slider--easy"),e.classList.remove("slider--very-easy"),e.classList.remove("slider--hard"),e.classList.remove("slider--very-hard")):"hard"===d?(e.classList.add("slider--hard"),e.classList.remove("slider--moderate"),e.classList.remove("slider--very-easy"),e.classList.remove("slider--easy"),e.classList.remove("slider--very-hard")):"very hard"===d&&(e.classList.add("slider--very-hard"),e.classList.remove("slider--moderate"),e.classList.remove("slider--very-easy"),e.classList.remove("slider--hard"),e.classList.remove("slider--easy"))}),[d]),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{class:"slider__labels",children:[Object(f.jsx)("p",{children:c}),Object(f.jsx)("p",{children:n})]}),Object(f.jsx)("input",{className:"slider ".concat(i),value:a,type:"range",min:"1",max:"100",onChange:function(e){var i=e.target.value;t(i);var s=x(i);u(s)}})]})}),y=function(e){var t=e.handleDifficultyInput,i=Object(s.useState)(""),c=Object(l.a)(i,2),n=c[0],a=c[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{className:"input slider__input",bottomTitle:"Very easy",topTitle:"Very hard",difficulty:n,eventHandle:function(e){a(e),t(e)}}),Object(f.jsxs)("p",{className:"slider__description",children:["It felt: ",x(n),"!"]})]})},_=(i(28),function(e){var t=e.buttonText,i=e.handleSubmit,s=e.className;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("button",{className:"btn ".concat(s),type:"reset",onClick:i,children:t})})}),N=(i(29),function(e){var t=e.handleLiftSelect,i=e.handleWeightInput,c=e.handleDifficultyInput,n=e.handleSubmit,a="Add Lift",r=Object(s.useState)(a),o=Object(l.a)(r,2),d=o[0],u=o[1];Object(s.useEffect)((function(){d!==a&&setTimeout((function(){return u(a)}),[1e3])}),[d]);var b=function(e){return u(e)};return Object(f.jsxs)("form",{className:"form",children:[Object(f.jsx)("h3",{className:"title",children:"Record Lift"}),Object(f.jsx)(j,{liftsArr:["Deadlift","Squat","Overhead press","Bent-over row","Bench press"],handleLiftSelect:t}),Object(f.jsx)(h,{handleWeightInput:i}),Object(f.jsxs)("div",{class:"difficulty",children:[Object(f.jsx)("h4",{className:"difficulty__title",children:"How did it feel?"}),Object(f.jsx)("span",{children:"Move the level slider to set the difficulty"}),Object(f.jsx)(y,{handleDifficultyInput:c})]}),Object(f.jsx)(_,{buttonClass:"submit",type:"submit",buttonText:d,handleSubmit:function(){n(),b("Added!")}})]})}),w=i(5),L=(i(30),i(31),i.p+"static/media/lifticon-08.73212f89.svg"),S=function(e){var t=e.id,i=e.liftType,s=e.weight,c=e.difficulty,n=e.level,a=e.date,r=e.img,l=e.setDeleteId;return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("button",{className:"delete-button",onClick:function(){l(t)},children:Object(f.jsx)("img",{src:L,className:"delete-button__icon",alt:"delete lift"})}),Object(f.jsx)("h4",{className:"card__title",children:i}),Object(f.jsx)("img",{src:r,className:"card__icon",alt:i}),Object(f.jsxs)("div",{className:"card__text",children:[Object(f.jsx)("p",{className:"card__info",children:"Weight:"}),Object(f.jsxs)("p",{className:"card__info",children:[s,"kgs"]}),Object(f.jsx)("p",{className:"card__info",children:"Exertion:"}),Object(f.jsxs)("p",{className:"card__info",children:[n.charAt(0).toUpperCase()+n.slice(1)," (",c,")%"]}),Object(f.jsx)("p",{className:"card__info",children:"Completed:"}),Object(f.jsx)("p",{className:"card__info",children:a})]})]})},k=(i(32),function(e){var t=e.selectItems,i=e.labelCopy,s=e.className,c=e.eventHandler;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"".concat({className:s}," filter"),children:[Object(f.jsxs)("label",{htmlFor:"".concat(s,"__label filter__select"),children:[i,":"]}),Object(f.jsxs)("select",{name:s,className:"".concat(s,"__select"),id:"lift",onChange:c,children:[Object(f.jsx)("option",{selected:!0,value:"Reset",children:"Select"}),t]})]})})}),T=(i(33),function(e,t){var i=e.find((function(e){return e.item}));return e.indexOf(i)>-1}),C=function(e,t,i){return e.map((function(e){return e[t]=i,e}))},I=[{liftType:"Deadlift",isChecked:!1,weight:"",difficulty:"",level:""},{liftType:"Squat",isChecked:!1,weight:"",difficulty:"",level:""},{liftType:"Overhead press",isChecked:!1,weight:"",difficulty:"",level:""},{liftType:"Bent-over row",isChecked:!1,weight:"",difficulty:"",level:""},{liftType:"Bench press",isChecked:!1,weight:"",difficulty:"",level:""}],E=I.map((function(e,t){return Object(f.jsx)("option",{id:t,className:"lift-filter__option",value:"".concat(e.liftType),children:e.liftType})})),D=["0-20","21-40","41-60","61-80","81-100","101-120","121-140","161-180",">180"].map((function(e,t){return Object(f.jsxs)("option",{id:t,className:"weight-filter__option",value:"".concat(e),children:[e," KGs"]})})),A=function(e){var t=e.handleDifficultySelect,i=e.handleSelectLift,s=e.handleWeightSelect;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"filters",selectOptions:E,children:[Object(f.jsx)(k,{className:"lift-filter",selectItems:E,eventHandler:i,labelCopy:"Select lift type"}),Object(f.jsx)(k,{className:"weight-filter",selectItems:D,eventHandler:s,labelCopy:"Select weight range"}),Object(f.jsx)("div",{className:"difficulty-container",children:Object(f.jsx)(g,{className:"difficulty-filter",bottomTitle:"Very easy",topTitle:"Very hard",eventHandle:t})})]})})},F=[{id:"1",date:"20/05/2022",difficulty:30,level:"moderate",liftType:"Deadlift",weight:76},{id:"2",date:"20/05/2022",difficulty:26,level:"easy",liftType:"Overhead press",weight:32}],W=function(e){var t=Object(s.useState)([]),i=Object(l.a)(t,2),c=i[0],n=i[1],a=Object(s.useState)(!0),r=Object(l.a)(a,2),o=r[0],d=r[1],f=Object(s.useState)(null),u=Object(l.a)(f,2),j=u[0],h=u[1];return Object(s.useEffect)((function(){fetch(e).then((function(e){return e.ok||Promise.reject("problem!"),console.log(e),e.json()})).then((function(e){n(e),h(null),d(!1)})).catch((function(e){console.log(e.message),n(F),d(!1)}))}),[e]),{allLifts:c,isPending:o,isError:j,setAllLifts:n}},H=i(12),B=i(13),P=i(15),G=i(14),M=function(e){Object(P.a)(i,e);var t=Object(G.a)(i);function i(e){var s;return Object(H.a)(this,i),(s=t.call(this,e)).state={error:null},s}return Object(B.a)(i,[{key:"render",value:function(){var e=this.state.error;return e?Object(f.jsxs)("div",{role:"alert",children:["There was an error:"," ",Object(f.jsx)("pre",{style:{whiteSpace:"normal"},children:e.message})]}):(console.log("ErrorBoundary",this.state.error),this.props.children)}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),i}(c.a.Component),q=(i(34),function(e){var t=e.handleModalClick;return Object(f.jsx)("section",{className:"error-message",children:Object(f.jsxs)("div",{className:"error-message__text",children:[Object(f.jsxs)("div",{className:"error-message__header",onClick:t,children:[Object(f.jsx)("h3",{className:"error-message__title",children:" \ud83d\ude2c Whoops this is embarrassing \ud83d\ude2c "}),Object(f.jsx)("img",{className:"error-message__exit",src:L,alt:"exit"})]}),Object(f.jsx)("p",{className:"error-message__text",children:"My google cloud subscription for my API and database hosting has expired so you can longer see these lifts."})]})})}),R=function(){var e=Object(s.useState)(Object(w.a)(I)),t=Object(l.a)(e,2),i=t[0],c=t[1],n=Object(s.useState)(null),a=Object(l.a)(n,2),r=a[0],o=a[1],d=W("https://instant-run-338811.nw.r.appspot.com/lifts/all"),u=d.allLifts,j=d.isPending,h=Object(s.useState)(u),g=Object(l.a)(h,2),y=g[0],_=g[1],N=Object(s.useState)(!0),L=Object(l.a)(N,2),k=L[0],E=L[1];Object(s.useEffect)((function(){!u||u.length>0||_(Object(w.a)(u))}),[u]),Object(s.useEffect)((function(){r&&fetch("https://instant-run-338811.nw.r.appspot.com/lifts/".concat(r),{method:"DELETE"}).then((function(e){if(!e.ok)throw Error("Could not fetch");return e.json()})).catch((function(e){return console.log(e)}))}),[r]),Object(s.useEffect)((function(){if(!j){if(function(e,t){if(!Array.isArray(e)||!Array.isArray(t))throw new Error("No valid array provided");return e.every((function(e,i){return!!Object.keys(e).every((function(s){return e[s]===t[i][s]}))}))}(i,I))return _(Object(w.a)(u));var e=Object(w.a)(u),t=i.find((function(e){return e.isChecked}));t&&(e=u.filter((function(e){return e.liftType===t.liftType})));var s=i.find((function(e){return e.weight}));s&&(e=e.filter((function(e){return function(e){var t=parseInt(e);return t>180?">180":t>161&&t<=180?"161-180":t>121&&t<=140||t>101&&t<=120?"121-140":t>81&&t<=100?"81-100":t>61&&t<=80?"61-80":t>41&&t<=60?"41-60":t>21&&t<=40?"21-40":t<21&&t<=40?"0-20":void 0}(e.weight)===s.weight})),console.log(e));var c=i.find((function(e){return e.level}));c&&(e=e.filter((function(e){return e.level===c.level}))),_(e)}}),[i]);var D=y.map((function(e){var t=function(e){var t=e.toLowerCase();return"squat"===t?b:"overhead press"===t?m:"bench press"===t?p:"bent-over row"===t?v:O}(e.liftType);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(S,{id:e.id,liftType:e.liftType,weight:e.weight,difficulty:e.difficulty,date:e.date,level:e.level,img:t,setDeleteId:o},e.id.toString)})}));return Object(f.jsx)(M,{children:!j&&Object(f.jsxs)(f.Fragment,{children:[k&&Object(f.jsx)(q,{handleModalClick:function(){return E(!k)}}),Object(f.jsx)(A,{handleDifficultySelect:function(e){var t=e,s=T(i);if(s){var n=Object(w.a)(i);n[s].difficulty=t,n[s].level=x(e),c(n),console.log(i)}else{var a=i.map((function(e){return e.difficulty=t,e.level=x(t),e}));c(a),console.log(i)}},handleSelectLift:function(e){var t=e.target.value,s=C(i,"isChecked",!1);if(c(s),"Reset"!==t)return c(Object(w.a)(i))},handleWeightSelect:function(e){var t=e.target.value;if("Reset"!==t){var s=T(i);if(s){var n=Object(w.a)(i);n[s].weight=t,c(n)}else{var a=C(i,"weight",t);c(a)}}else{var r=C(i,"weight","");c(r)}}}),Object(f.jsx)("div",{className:"card-container",children:D})]})})},V=i(2),J=(i(35),function(){return Object(f.jsx)("section",{className:"welcome",children:Object(f.jsxs)("div",{className:"welcome__wrapper",children:[Object(f.jsx)("h3",{className:"welcome__text",children:"Welcome!"}),Object(f.jsx)("p",{className:"welcome__copy",children:"Placeholder text"}),Object(f.jsx)("img",{className:"welcome__img",src:b,alt:"lift"})]})})}),K=function(){return Object(f.jsx)(J,{})},U=function(e){var t=e.handleLiftSelect,i=e.handleWeightInput,s=e.handleDifficultyInput,c=e.handleSubmit;return Object(f.jsxs)(V.c,{children:[Object(f.jsx)(V.a,{exact:!0,path:"/",element:Object(f.jsx)(K,{})}),Object(f.jsx)(V.a,{path:"/create",element:Object(f.jsx)(N,{handleLiftSelect:t,handleWeightInput:i,handleDifficultyInput:s,handleSubmit:c})}),Object(f.jsx)(V.a,{path:"/lifts",element:Object(f.jsx)(R,{})})]})},z=function(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),i=t[0],c=t[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(u,{}),Object(f.jsx)(U,{handleLiftSelect:function(e){var t=e.target.value,i=(new Date).toLocaleString().split(",")[0];c({liftType:t,weight:0,difficulty:0,date:i})},handleWeightInput:function(e){var t=e.target.value,s=Object(r.a)({},i);parseFloat(s),s.weight=t,c(s)},handleDifficultyInput:function(e){var t=e,s=Object(r.a)({},i);s.difficulty=t,s.level=x(t),c(s)},handleSubmit:function(){var e=Object(r.a)({},i);c(e),console.log(i),fetch("https://instant-run-338811.nw.r.appspot.com/lifts/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){if(!e.ok)throw Error("Could not fetch");return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}})]})},Q=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("main",{children:Object(f.jsx)(z,{className:"Home"})})})},X=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),s(e),c(e),n(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(d.a,{children:Object(f.jsx)(Q,{})})}),document.getElementById("root")),X()}]),[[36,1,2]]]);
//# sourceMappingURL=main.2d8ffe44.chunk.js.map