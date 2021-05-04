(this["webpackJsonpcredit-card-checker"]=this["webpackJsonpcredit-card-checker"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(10),s=a.n(c),i=(a(16),a(4)),l=a(5),o=a(7),d=a(6),u=(a(17),a(3)),h=a(11),m=(a(24),a(0)),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={cvc:"",expiry:"",focus:"",name:"",number:""},r}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{id:"PaymentForm",children:Object(m.jsx)(h.a,{cvc:this.props.cvc,expiry:this.props.expiry,focused:this.props.focus,name:this.props.name,number:this.props.cardNumber})})}}]),a}(n.a.Component),v=(a(26),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleInputFocus=function(e){r.setState({focus:e.target.name})},r.handleRetry=function(){r.setState({cardNumber:"",name:"",cvc:"",expiry:"",results:"",numberError:"",nameError:"",cvcError:"",expiryError:"",focus:""})},r.validateNumber=function(){var e=r.state.cardNumber;e.match(/^[0-9]+$/)?r.setState({numberError:e.length<12?"*Card Number should be between 12-19 digits":null}):r.setState({numberError:"*Only numeric values allowed"})},r.validateName=function(){var e=r.state.name;e.match(/^[a-zA-Z\s]+$/)?r.setState({nameError:e.length<1?"*Name field can't be empty":null}):r.setState({nameError:"*Not a valid name"})},r.validateCVC=function(){var e=r.state.cvc;e.match(/^[0-9]+$/)?r.setState({cvcError:e.length<3||e.length>4?"*CVC should be of 3-4 digits":null}):r.setState({cvcError:"*Only numeric values are allowed"})},r.validateExpiry=function(){var e=r.state.expiry,t=(new Date).getFullYear();e.match(/^[0-9]+$/)?r.setState({expiryError:4!==e.length?'*Specified format "MMYY" is not satisfied':Number(e.slice(0,2))>12||Number("20"+e.slice(2,4))<t?"Invalid Date":null}):r.setState({expiryError:"*Only numeric values allowed"})},r.state={cardNumber:"",name:"",cvc:"",expiry:"",results:"",numberError:"",nameError:"",cvcError:"",expiryError:"",focus:""},r.handleNumberChange=r.handleNumberChange.bind(Object(u.a)(r)),r.checkCardNumber=r.checkCardNumber.bind(Object(u.a)(r)),r.handleNameChange=r.handleNameChange.bind(Object(u.a)(r)),r.handleCvcChange=r.handleCvcChange.bind(Object(u.a)(r)),r.handleExpiryChange=r.handleExpiryChange.bind(Object(u.a)(r)),r.handleInputFocus=r.handleInputFocus.bind(Object(u.a)(r)),r.handleRetry=r.handleRetry.bind(Object(u.a)(r)),r}return Object(l.a)(a,[{key:"handleNumberChange",value:function(e){this.setState({cardNumber:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleCvcChange",value:function(e){this.setState({cvc:e.target.value})}},{key:"handleExpiryChange",value:function(e){this.setState({expiry:e.target.value})}},{key:"checkCardNumber",value:function(){var e=this.state.cardNumber,t=(e=e.split("").join(", ")).split(",").map((function(e){return parseInt(e,10)}));t.slice();for(var a=t.length-2;a>=0;a-=2)t[a]=2*t[a],t[a]>9&&(t[a]=t[a]-9);t.reduce((function(e,t){return e+t}))%10===0?this.setState({results:"This card is valid"}):this.setState({results:"This card is not valid"})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"validator-container",children:[Object(m.jsx)("p",{className:"result-info",children:this.state.results}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"tel",name:"expiry",className:"form-control ".concat(this.state.expiryError?"is-invalid":""),required:!0,value:this.state.expiry,onChange:this.handleExpiryChange,onFocus:this.handleInputFocus,onBlur:this.validateExpiry,placeholder:"Expiration mmyy"}),Object(m.jsx)("div",{className:"invalid-feedback error-msg",children:this.state.expiryError})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"tel",name:"cvc",className:"form-control ".concat(this.state.cvcError?"is-invalid":""),required:!0,value:this.state.cvc,onChange:this.handleCvcChange,onFocus:this.handleInputFocus,onBlur:this.validateCVC,placeholder:"cvc Code"}),Object(m.jsx)("div",{className:"invalid-feedback error-msg",children:this.state.cvcError})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{name:"Number",type:"tel",className:"form-control ".concat(this.state.numberError?"is-invalid":""),required:!0,value:this.state.cardNumber,onChange:this.handleNumberChange,onFocus:this.handleInputFocus,onBlur:this.validateNumber,placeholder:"Please enter card number"}),Object(m.jsx)("div",{className:"invalid-feedback error-msg",children:this.state.numberError})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{name:"Name",type:"text",className:"form-control ".concat(this.state.nameError?"is-invalid":""),required:!0,value:this.state.name,onChange:this.handleNameChange,onFocus:this.handleInputFocus,onBlur:this.validateName,placeholder:"Full Name"}),Object(m.jsx)("div",{className:"invalid-feedback error-msg",children:this.state.nameError})]}),Object(m.jsxs)("div",{className:"button-container",children:[Object(m.jsx)("button",{type:"submit",className:"button",disabled:!this.state.cardNumber||!this.state.name||!this.state.cvc||!this.state.expiry,onClick:this.checkCardNumber,children:"Validate"}),Object(m.jsx)("button",{type:"submit",className:"button",onClick:this.handleRetry,children:"Reset"})]}),Object(m.jsx)("div",{children:Object(m.jsx)(b,{cardNumber:this.state.cardNumber,name:this.state.name,cvc:this.state.cvc,expiry:this.state.expiry,focus:this.state.focus})})]})}}]),a}(n.a.Component)),j=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"app-container",children:[Object(m.jsx)("div",{className:"title-container",children:Object(m.jsx)("h1",{children:"Credit Card Validator"})}),Object(m.jsx)("div",{className:"card-info-container",children:Object(m.jsx)(v,{})}),Object(m.jsx)("div",{className:"footer-container",children:Object(m.jsx)("p",{children:"*Please note this site does not store any credit card information*"})})]})}}]),a}(n.a.Component);s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.522085ba.chunk.js.map