(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports={buttonStyle:"ButtonElement_buttonStyle__kzh7H"}},15:function(e,t,a){e.exports={counterContainer:"CounterContainer_counterContainer__2B20k",red:"CounterContainer_red__3ugED"}},21:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(7),u=a.n(o),s=(a(21),a(22),a(13)),l=a(5),i=a.n(l);var j=function(e){return Object(n.jsxs)("div",{className:i.a.settingsContainer,children:[Object(n.jsxs)("div",{className:i.a.valueSettingsContainer,children:[Object(n.jsx)("span",{children:"Max value:"}),Object(n.jsx)("input",{type:"number",value:e.maxValue,onChange:e.maxValueOnChange,className:e.startValue>=e.maxValue||e.maxValue<0?i.a.error:""})]}),Object(n.jsxs)("div",{className:i.a.valueSettingsContainer,children:[Object(n.jsx)("span",{children:"Start value:"}),Object(n.jsx)("input",{type:"number",value:e.startValue,onChange:e.startValueOnChange,className:e.startValue>=e.maxValue||e.startValue<0?i.a.error:""})]})]})},b=a(10),O=a.n(b);function d(e){return Object(n.jsx)("div",{className:O.a.buttonContainer,children:Object(n.jsxs)("button",{className:O.a.buttonStyle,disabled:e.disabled,onClick:e.onClickCallBack,children:[" ",e.title," "]})})}var V=a(4),x=a.n(V),g=a(2),m=a(3),C={startValue:0,maxValue:5,counterValue:0,showHint:!1,error:!1},f=function(e,t){return{type:h,payload:{startValue:e,maxValue:t}}},p=function(e){return{type:S,payload:{counterValue:e}}},v=function(e){return{type:E,payload:{showHint:e}}},h="SET_VALUES",S="SET_COUNTER_VALUE",_="SET_ERROR",E="SHOW_HINT";var N=function(e){var t=Object(g.b)();Object(r.useEffect)((function(){u(e.startValue),O(e.maxValue)}),[e.startValue,e.maxValue]);var a=Object(r.useState)(e.startValue),c=Object(s.a)(a,2),o=c[0],u=c[1],l=Object(r.useState)(e.maxValue),i=Object(s.a)(l,2),b=i[0],O=i[1];return Object(n.jsxs)("div",{className:x.a.container,children:[Object(n.jsx)("div",{className:x.a.contentContainer,children:Object(n.jsx)(j,{startValue:o,maxValue:b,startValueOnChange:function(a){var n=Number(a.currentTarget.value);n<0&&e.toggleError(!0),n===b&&e.toggleError(!0),e.error&&0===n&&e.toggleError(!1),e.error&&b>n&&e.toggleError(!1),u(n),t(v(!0))},maxValueOnChange:function(a){var n=Number(a.currentTarget.value);n===o&&e.toggleError(!0),e.error&&n>o&&e.toggleError(!1),O(n),t(v(!0))}})}),Object(n.jsx)("div",{className:x.a.buttonsContainer,children:Object(n.jsx)(d,{title:"SET",disabled:e.error,onClickCallBack:function(){e.setValuesToLocalStorage(o,b),e.setValueSettings(o,b),t(v(!1))}})})]})},y=a(15),T=a.n(y);var k=function(e){var t=e.error?"Incorrect value!":e.showHint?"enter values and press 'set'":e.counterValue;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:Object(n.jsx)("span",{className:e.counterValue===e.maxValue||e.error?T.a.red:"",children:t})})})};var H=function(e){return Object(n.jsxs)("div",{className:x.a.container,children:[Object(n.jsx)("div",{className:x.a.contentContainer,children:Object(n.jsx)(k,{counterValue:e.counterValue,maxValue:e.maxValue,startValue:e.startValue,error:e.error,showHint:e.showHint})}),Object(n.jsxs)("div",{className:x.a.buttonsContainer,children:[Object(n.jsx)(d,{title:"inc",disabled:e.counterValue===e.maxValue||e.error,onClickCallBack:function(){e.inc()}}),Object(n.jsx)(d,{title:"reset",disabled:e.counterValue===e.startValue||e.error,onClickCallBack:function(){e.reset()}})]})]})};var w=function(){var e=Object(g.b)();Object(r.useEffect)((function(){var t=localStorage.getItem("startValue"),a=localStorage.getItem("maxValue");if(t&&a){var n=JSON.parse(t),r=JSON.parse(a);e(f(n,r)),e(p(n))}}),[]);var t=Object(g.c)((function(e){return e.app.counterValue})),a=Object(g.c)((function(e){return e.app.startValue})),c=Object(g.c)((function(e){return e.app.maxValue})),o=Object(g.c)((function(e){return e.app.error})),u=Object(g.c)((function(e){return e.app.showHint}));return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(N,{startValue:a,maxValue:c,setValueSettings:function(t,a){e(f(t,a)),e(p(t))},toggleError:function(t){e(function(e){return{type:_,payload:{error:e}}}(t))},error:o,setValuesToLocalStorage:function(e,t){localStorage.setItem("startValue",JSON.stringify(e)),localStorage.setItem("maxValue",JSON.stringify(t))}}),Object(n.jsx)(H,{counterValue:t,maxValue:c,startValue:a,reset:function(){e(p(a))},inc:function(){e(p(t+1))},error:o,showHint:u})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))},B=a(6),L=Object(B.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VALUES":case"SET_COUNTER_VALUE":case"SET_ERROR":case"SHOW_HINT":return Object(m.a)(Object(m.a)({},e),t.payload);default:return Object(m.a)({},e)}}}),R=Object(B.c)(L);u.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(g.a,{store:R,children:Object(n.jsx)(w,{})})}),document.getElementById("root")),I()},4:function(e,t,a){e.exports={container:"Container_container__2SuD_",contentContainer:"Container_contentContainer__3GEyW",buttonsContainer:"Container_buttonsContainer__2lfik"}},5:function(e,t,a){e.exports={settingsContainer:"SettingsContainer_settingsContainer__2tf1o",valueSettingsContainer:"SettingsContainer_valueSettingsContainer__ve_m2",error:"SettingsContainer_error__3mCeZ"}}},[[29,1,2]]]);
//# sourceMappingURL=main.34ca9d6b.chunk.js.map