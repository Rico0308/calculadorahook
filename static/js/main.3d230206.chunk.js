(this.webpackJsonpcalculadorahook=this.webpackJsonpcalculadorahook||[]).push([[0],{14:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_User_Desktop_Archivos_Academia_Geek_Curso_Sprint3_calculadorahook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),useCalc=function useCalc(){var numbers=[7,8,9,4,5,6,1,2,3,0],operators=["/","*","-","+"],ids={7:"seven",8:"eight",9:"nine",4:"four",5:"five",6:"six",1:"one",2:"two",3:"three",0:"zero","/":"divide","*":"multiply","-":"subtract","+":"add"},_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)({lastPressed:void 0,prevOpe:"0",calc:"0",operation:void 0}),_useState2=Object(C_Users_User_Desktop_Archivos_Academia_Geek_Curso_Sprint3_calculadorahook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),state=_useState2[0],setState=_useState2[1],lastPressed=state.lastPressed,calc=state.calc,prevOpe=state.prevOpe,handleClick=function handleClick(e){var innerText=e.target.innerText;switch(innerText){case"AC":setState({calc:"0",prevOpe:"0"});break;case"=":var evaluated=eval(calc);setState({calc:evaluated,prevOpe:prevOpe+innerText+evaluated});break;case".":var splitted=calc.split(/[\+\-\*\/]/),last=splitted.slice(-1)[0];last.includes(".")||setState({calc:calc+"."});break;default:var _e=void 0;if(operators.includes(innerText))if(operators.includes(lastPressed)&&"-"!==innerText){var lastNumberId=calc.split("").reverse().findIndex((function(e){return" "!==e&&numbers.includes(+e)}));_e=calc.slice(0,calc.length-lastNumberId)+"".concat(innerText)}else _e="".concat(calc," ").concat(innerText);else _e="0"===calc?innerText:calc+innerText;setState({calc:_e,prevOpe:_e,lastPressed:innerText})}};return[state,numbers,operators,ids,handleClick]};__webpack_exports__.a=useCalc},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n,c,r,s,i,_,l=a(0),o=a.n(l),d=a(12),p=a.n(d),u=a(8),b=a(2),x=a(3),h=x.a.div(n||(n=Object(b.a)(["\n    background-color: #caf7e3;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n    height: 380px;\n    width: 250px;\n"]))),O=x.a.div(c||(c=Object(b.a)(["\n    background-color: #f8eded;\n    font-size: 30px;\n    position: relative;\n    padding: 20px 10px;\n    text-align: right;\n    height: 70px;\n    width: 100%;\n"]))),j=x.a.small(r||(r=Object(b.a)(["\n    color: red;\n    position: absolute;\n    top: 2px;\n    right: 5px;\n    font-size: 20px;\n"]))),v=x.a.button(s||(s=Object(b.a)(["\n    border: none;\n    font-size: 25px;\n    margin: 5px;\n    cursor: pointer;\n"]))),m=x.a.div(i||(i=Object(b.a)(["\n    width: 75%;\n    height: 81%;\n"]))),k=x.a.div(_||(_=Object(b.a)(["\n    width: 25%;\n"]))),f=a(14),C=a(1);function E(e){var t=Object(f.a)(),a=Object(u.a)(t,5),n=a[0],c=a[1],r=a[2],s=a[3],i=a[4],_=n.calc,l=n.prevOpe;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(h,{children:[Object(C.jsxs)(O,{id:"display",children:[Object(C.jsx)(j,{children:l}),_]}),Object(C.jsxs)(m,{children:[Object(C.jsx)(v,{className:"button-ac button-horizontal",id:"clear",onClick:i,children:"AC"}),c.map((function(e){return Object(C.jsx)(v,{className:"button-number ".concat(0===e&&"button-horizontal"),onClick:i,id:s[e],children:e},e)})),Object(C.jsx)(v,{className:"button-number",onClick:i,id:"decimal",children:"."})]}),Object(C.jsxs)(k,{children:[r.map((function(e){return Object(C.jsx)(v,{className:"button-operator",onClick:i,id:s[e],children:e},e)})),Object(C.jsx)(v,{className:"button-operator",onClick:i,id:"equals",children:"="})]})]})})}var T=a(15);a(23);var g=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(T.a,{}),Object(C.jsx)(E,{})]})};p.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(g,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3d230206.chunk.js.map