(this["webpackJsonp-y"]=this["webpackJsonp-y"]||[]).push([[0],{34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},41:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),c=(a(39),a(40),a(41),a(31)),m=a(11),i=a(12),s=a(14),u=a(13),d=a(15),E=a(9),h=(a(42),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).loginHandler=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.loginForm=function(e){e.preventDefault(),console.log(a.state);var t=a.state,n=t.name,l=t.password;fetch("http://localhost/banking/server/login.php",{method:"post",header:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userName:n,userPassword:l})}).then((function(e){return e.json()})).then((function(e){JSON.stringify(e);console.log(e),localStorage.setItem("token",e),window.location.reload(!1)})).catch((function(e){console.error(e)}))},a.state={name:"",password:"",redirect:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("token");if(console.log("token volue is in login="+e),null!=e)return l.a.createElement(E.a,{to:"/dashboard"});var t=this.state,a=t.name,n=t.password;return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"login-wrap"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:""}),l.a.createElement("form",{onSubmit:this.loginForm,className:"formCtrl"},l.a.createElement("div",{className:"form-group divInputCtr"},l.a.createElement("input",{type:"text",placeholder:"Name",className:"form-control",onChange:this.loginHandler,value:a,name:"name"})),l.a.createElement("div",{className:"form-group divInputCtr"},l.a.createElement("input",{type:"password",placeholder:"Password",className:"form-control",onChange:this.loginHandler,value:n,name:"password"})),l.a.createElement("hr",null),l.a.createElement("input",{type:"submit",className:"btn logBtn",value:"Login"}))))))}}]),t}(n.Component)),p=a(1),f=(a(66),function(e){function t(e){return Object(m.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("token");return console.log("the token value is="+JSON.stringify(e)),null==e?l.a.createElement(E.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement("nav",{className:""},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"fltLeft"},l.a.createElement("a",{href:"#contact",className:"fltStyle"},"Welcome in Banking portal")),l.a.createElement("li",{className:"fltRight"},l.a.createElement("a",{href:"/logout",className:"fltStyle"},"Logout"))))))),l.a.createElement(p.d,null,l.a.createElement(p.b,null,l.a.createElement(p.a,null,"Dashboard"),l.a.createElement(p.a,null,"Customer"),l.a.createElement(p.a,null,"Deposit"),l.a.createElement(p.a,null,"Withdrawal"),l.a.createElement(p.a,null,"Search"),l.a.createElement(p.a,null,"Calculator"),l.a.createElement(p.a,null,"Modify"),l.a.createElement(p.a,null,"Transaction"),l.a.createElement(p.a,null,"Record")),l.a.createElement(p.c,null,"Dashboard"),l.a.createElement(p.c,null,"Customer"),l.a.createElement(p.c,null,"Deposit"),l.a.createElement(p.c,null,"Withdrawal"),l.a.createElement(p.c,null,"Search"),l.a.createElement(p.c,null,"Calculator"),l.a.createElement(p.c,null,"Modify"),l.a.createElement(p.c,null,"Transaction"),l.a.createElement(p.c,null,"Record")))}}]),t}(n.Component)),g=function(e){function t(e){var a;return Object(m.a)(this,t),a=Object(s.a)(this,Object(u.a)(t).call(this,e)),localStorage.removeItem("token"),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=localStorage.getItem("token");return console.log("now token is="+e),null==e?l.a.createElement(E.a,{to:"/"}):l.a.createElement("div",null)}}]),t}(n.Component),v=a(16);function b(){return l.a.createElement("div",null,l.a.createElement("h1",null,"400 error "),l.a.createElement("h4",null,"Page not found"))}var N=function(){return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement(E.d,null,l.a.createElement(E.b,{exact:!0,path:"/",component:h}),l.a.createElement(E.b,{path:"/dashboard",component:f}),l.a.createElement(E.b,{path:"/logout",component:g}),l.a.createElement(E.b,{component:b}))))};var w=function(){return l.a.createElement("div",null,l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67),a(68);o.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9861e4ce.chunk.js.map