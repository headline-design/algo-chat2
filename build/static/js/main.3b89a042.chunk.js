(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{181:function(e,t,a){"use strict";(function(e){var n=a(55),s=a(9),c=a(10),r=a(30),i=a(29),o=a(2),l=a(0),d=a.n(l),p=a(44),u=a(12),m=a(8),h=a.n(m),b=a(191),j=(a(355),a(99),a(1)),x=u.a.init();u.a.main=!1;var g=!0,f=u.a.main?"MainNet":"TestNet",v=["chat"],O={chat:{}},N={},y=[],k=!1;function w(){return(w=Object(o.a)(d.a.mark((function e(){var t,a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<v.length)){e.next=18;break}return a=v[t],e.next=5,fetch("teal/"+a+".txt");case 5:return n=e.sent,e.next=8,n.text();case 8:return O[a].program=e.sent,e.next=11,fetch("teal/"+a+" clear.txt");case 11:return s=e.sent,e.next=14,s.text();case 14:O[a].clearProgram=e.sent;case 15:t++,e.next=1;break;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return new Promise((function(t){return setTimeout(t,e)}))}function A(t){var a=e.from(t,"base64");return console.log(a),a}function C(e,t){var a=document.getElementById("chatLog").insertRow(0).insertCell(0);a.innerHTML=e,a.className=t}function B(e){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(d.a.mark((function e(t){var a,n,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://algoindexer.algoexplorerapi.io/v2/transactions/",a="https://algoindexer.algoexplorerapi.io/v2/transactions/"+t,e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:return s=e.sent,c=s.transaction.note,e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}var S=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var c;return Object(s.a)(this,a),(c=t.call(this,e)).fetchBalance=function(e){u.a.balance(e).then((function(e){c.setState({balance:e})}))},c.setNet=function(e){"TestNet"===e.target.value?(u.a.main=!1,c.setState({net:"TestNet"})):(u.a.main=!0,c.setState({net:"MainNet"}))},c.handleConnect=function(){u.a.connect(x).then((function(e){c.setState({myAddress:e}),setInterval((function(){return c.fetchBalance(c.state.myAddress)}),5e3)}))},c.switchConnector=function(e){u.a.pipeConnector=e.target.value,console.log(u.a.pipeConnector)},c.deploy=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"chat",u.a.deployTeal(O.chat.program,O.chat.clearProgram,[0,5,0,0],["create"]).then((function(e){document.getElementById("appid").value=e,c.setState({appAddress:h.a.getApplicationAddress(e)})}));case 2:case"end":return e.stop()}}),e)}))),c.delete=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.a.deleteApp(document.getElementById("appid").value).then((function(e){c.setState({txID:e})}));case 1:case"end":return e.stop()}}),e)}))),c.optIn=Object(o.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,c.state.appAddress=h.a.getApplicationAddress(parseInt(t)),(a=[]).push("register"),u.a.optIn(t,a).then((function(e){c.setState({txID:e})}));case 5:case"end":return e.stop()}}),e)}))),c.changePic=Object(o.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,h.a.getApplicationAddress(parseInt(t)),a=document.getElementById("picAddress").value,alert(a),console.log(a),u.a.appCall(t,["pic",a]).then((function(e){c.setState({txID:e})}));case 6:case"end":return e.stop()}}),e)}))),c.changeName=Object(o.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,h.a.getApplicationAddress(parseInt(t)),a=document.getElementById("userName").value,console.log(a),u.a.appCall(t,["name",a]).then((function(e){c.setState({txID:e})}));case 5:case"end":return e.stop()}}),e)}))),c.fund=Object(o.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,a=h.a.getApplicationAddress(parseInt(t)),n=parseInt(document.getElementById("fundAmt").value),u.a.appCallWithTxn(t,["fund"],a,n,"funding",0,[a]).then((function(e){c.setState({txID:e})}));case 4:case"end":return e.stop()}}),e)}))),c.deposit=Object(o.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,a=h.a.getApplicationAddress(parseInt(t)),n=parseInt(document.getElementById("depAmt").value),u.a.appCallWithTxn(t,["deposit"],a,n,"depositing",0,[a]).then((function(e){c.setState({txID:e})}));case 4:case"end":return e.stop()}}),e)}))),c.modifyTeal=function(){for(var e=document.getElementById("newGoal").value,t=["BKGZZRBHXOBCD5HMITYZ5CI3V3LS6OMLUT2I7C7QIRU6VA3B2BXUFRN2BE","3000000"],a=[document.getElementById("recipient").value,e],n=0;n<a.length;n++)O.daoDeposit.program=O.daoDeposit.program.replaceAll(t[n],a[n]),console.log(O.daoDeposit.program);c.setState({goal:e}),alert("Contract modified! Check console log to preview")},c.check=function(){for(var e=document.getElementById("appid").value,t=[].concat(y,[e]),a=0;a<t.length;a++)c.readGlobal(t[a]),I(1e3)},c.post=Object(o.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===(t=document.getElementById("appid").value)?alert("you forgot to tell us what your app Id is!"):(h.a.getApplicationAddress(parseInt(t)),a=document.getElementById("postMessage").value,u.a.appCall(t,["chat",a]).then((function(e){c.setState({txID:e}),c.startRefresh()})));case 2:case"end":return e.stop()}}),e)}))),c.readGlobal=function(){var e=Object(o.a)(d.a.mark((function e(t){var a,n,s,r,i,o,l,p,m,h,b,j,x;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.readGlobalState(t);case 3:a=e.sent,n={creator:"",name:"",message:"",picData:""},console.log("App Data"),console.log(a),s="",r=0;case 9:if(!(r<a.length)){e.next=37;break}i=window.atob(a[r].key),console.log(i),e.t0=i,e.next="pic"===e.t0?15:"chat"===e.t0?19:"name"===e.t0?24:"Creator"===e.t0?29:33;break;case 15:return o=a[s=r].value.bytes,n.picData=window.atob(o),e.abrupt("break",34);case 19:return s=r,l=window.atob(a[s].value.bytes),n.message=l,console.log(l),e.abrupt("break",34);case 24:return s=r,p=window.atob(a[s].value.bytes),n.name=p,console.log(p),e.abrupt("break",34);case 29:return m=a[s=r].value.bytes,n.creator=m,e.abrupt("break",34);case 33:return e.abrupt("break",34);case 34:r++,e.next=9;break;case 37:if(N[t]===n.message){e.next=49;break}if(""===n.picData){e.next=41;break}return e.next=41,c.handleFetch(n.picData);case 41:h=document.getElementById("canvas2"),b=h.toDataURL("image/png"),""===n.picData&&(b="anon.png"),j=document.getElementById("appid").value,x="others",j===t&&(x="me"),C('<div id="upperMessage" class="upperMessage-'+x+'"><img width="30px" class="avatar-'+x+'" src="'+b+'"></img><span class="messageName">'+n.name+"_"+t+'</span></div><div class="messageText"> '+n.message+"</div>",x);case 49:return N[t]=n.message,console.log(n),e.abrupt("return",n);case 54:e.prev=54,e.t1=e.catch(0),console.log(e.t1);case 57:case"end":return e.stop()}}),e,null,[[0,54]])})));return function(t){return e.apply(this,arguments)}}(),c.readLocalState=function(){var e=Object(o.a)(d.a.mark((function e(t,a,n){var s,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="",s=t?"https://algoindexer.algoexplorerapi.io":"https://algoindexer.testnet.algoexplorerapi.io",e.next=5,fetch(s+"/v2/accounts/"+a);case 5:return r=e.sent,e.next=8,r.json();case 8:return i=e.sent,e.next=11,i.account["apps-local-state"];case 11:e.sent.forEach((function(e){e.id===parseInt(n)&&e["key-value"].forEach((function(e){if("YW10"===e.key){var t=e.value.uint;c.setState({share:parseInt(t/c.state.goal*100)||0})}if("d2l0aGRyYXdu"===e.key){var a=e.value.uint;c.setState({withdrawn:a||0})}}))})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,a,n){return e.apply(this,arguments)}}(),c.startRefresh=function(){c.check(),k||setInterval((function(){return c.check()}),5e3),k=!0},c.handleFetch=function(){var e=Object(o.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:a=e.sent,c.setState({data:A(a)},(function(){return c.drawData()}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.drawData=function(){var e=document.getElementById("canvas2"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height);var a=function(e){for(var t=[],a=-1,n=0;n<e.length;n++)a<2?(t.push(e[n]),a++):(t.push(255),t.push(e[n]),a=0);return t.push(255),t}(function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a],s=32*(n>>5),c=32*((28&n)>>2),r=64*(3&n);t.push(s),t.push(c),t.push(r)}return t}(c.state.data)),n=new Uint8ClampedArray(a),s=new ImageData(n,30,30),r=document.createElement("canvas");r.getContext("2d").putImageData(s,0,0),t.drawImage(r,0,0,300,150)},c.addFriend=Object(o.a)(d.a.mark((function e(){var t,a,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("addFriend").value,a=document.getElementById("appid").value,y.includes(t)||a===t){e.next=12;break}return e.next=5,c.readGlobal(t);case 5:s=e.sent,console.log(s),y.push(t),r=s.name+"_"+t,c.setState({list:[].concat(Object(n.a)(c.state.list),[r])}),e.next=13;break;case 12:alert("you are attempting to add yourself or add a friend more than once!");case 13:case"end":return e.stop()}}),e)}))),c.options=function(){(g=!g)?(c.setState({toggled:"block"}),document.getElementById("toggler").innerText="Hide"):(c.setState({toggled:"none"}),document.getElementById("toggler").innerText="Show")},c.state={net:f,txID:"",myAddress:"",balance:0,appAddress:"",goal:0,level:0,fundAmount:"Not fetched yet...",share:0,depositAmount:0,myProfits:0,withdrawn:0,contribution:0,data:"",messages:[],list:[],toggled:"block"},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){!function(){w.apply(this,arguments)}()}},{key:"render",value:function(){var e=this.state.loading?"App-logo Spin":"App-logo";return Object(j.jsxs)("div",{align:"center",children:[Object(j.jsx)("nav",{className:"py-2 bg-light border-bottom",children:Object(j.jsxs)("div",{className:"container d-flex flex-wrap",children:[Object(j.jsxs)("ul",{className:"nav me-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#",className:"nav-link link-dark px-2 active","aria-current":"page",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#",className:"nav-link link-dark px-2",children:"Features"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#",className:"nav-link link-dark px-2",children:"Pricing"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#",className:"nav-link link-dark px-2",children:"FAQs"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#",className:"nav-link link-dark px-2",children:"About"})})]}),Object(j.jsxs)("ul",{className:"nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#",className:"nav-link link-dark px-2",children:"Login"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"#",className:"nav-link link-dark px-2",children:"Sign up"})})]})]})}),Object(j.jsxs)("header",{className:"py-3 mb-4 border-bottom",children:[Object(j.jsxs)("div",{className:"container d-flex flex-wrap justify-content-center",children:[Object(j.jsx)("a",{href:"/",className:"d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none",children:Object(j.jsx)("p",{children:"Connected Address: "+this.state.myAddress})}),Object(j.jsx)("form",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:Object(j.jsx)("p",{children:"Balance: "+this.state.balance})})]}),Object(j.jsxs)("select",{className:"form-select",onClick:this.setNet,children:[Object(j.jsx)("option",{children:"TestNet"}),Object(j.jsx)("option",{children:"MainNet"})]}),Object(j.jsxs)("select",{className:"form-select",onChange:this.switchConnector,children:[Object(j.jsx)("option",{children:"myAlgoWallet"}),Object(j.jsx)("option",{children:"WalletConnect"}),Object(j.jsx)("option",{children:"AlgoSigner"})]}),Object(j.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.handleConnect,children:"Click to Connect"})]}),Object(j.jsx)("h2",{className:"px-2 badge bg-warning",children:this.state.net}),Object(j.jsxs)("div",{className:"App container bg-light shadow",children:[Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:b.a,className:e,alt:"logo"}),Object(j.jsxs)("h1",{className:"App-title",children:["Algo Chat",Object(j.jsx)("span",{className:"px-2",role:"img","aria-label":"Chat",children:"\ud83d\udcac"})]}),Object(j.jsxs)("p",{children:["Brought to you by"," ",Object(j.jsx)("a",{className:"text-light",href:"https://headline-inc.com",children:"HEADLINE"})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-4  pt-3 border-right",children:[Object(j.jsx)("h6",{children:"Say something about Algorand"}),Object(j.jsx)("div",{className:"comment-form"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"form-group"}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{className:"form-control",placeholder:"\ud83e\udd2c Your Comment",name:"message",rows:"5",spellCheck:"false",type:"text",id:"postMessage"})}),Object(j.jsx)("div",{className:"alert alert-danger",style:{display:"none"},children:"Something went wrong while submitting form."}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("button",{className:"btn btn-primary form-group",onClick:this.post,children:"Comment \u27a4"})})]})]}),Object(j.jsxs)("div",{className:"col-8  pt-3 bg-white",children:[Object(j.jsx)("div",{className:"comment-list",loading:this.state.loading,comments:this.state.comments}),Object(j.jsxs)("div",{className:"comment-list",children:[Object(j.jsxs)("h5",{className:"text-muted mb-4",children:[Object(j.jsx)("span",{className:"badge badge-success",children:"0"})," Comment"]}),Object(j.jsx)("div",{className:"alert text-center alert-info",children:"Be the first to comment"})," ",Object(j.jsx)("div",{children:Object(j.jsx)("table",{width:"100%",className:"media-body p-2 shadow-sm rounded bg-light border rounded",id:"chatLog"})})]})]}),Object(j.jsxs)("footer",{className:"App-footer",children:[Object(j.jsx)("button",{className:"btn btn-bd-light",onClick:this.startRefresh,children:"Refresh"}),Object(j.jsx)("canvas",{id:"canvas2",height:"30px",width:"30px",style:{display:"none"}}),Object(j.jsx)("div",{children:"Transaction ID: "+this.state.txID})]})]})]}),Object(j.jsx)("div",{className:"App container ",children:Object(j.jsx)("div",{className:"bd-example",children:Object(j.jsxs)("table",{className:"table",width:"100%",children:[Object(j.jsx)("td",{}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{width:"50%",children:[Object(j.jsx)("h1",{children:"ACTIONS"}),Object(j.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.deploy,children:"Deploy Contract"}),Object(j.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.optIn,children:"Opt In"}),Object(j.jsx)("input",{className:"form-control ds-input",placeholder:"App Id",id:"appid",type:"number"}),Object(j.jsx)("input",{id:"userName",className:"form-control",placeholder:"\ud83d\ude0e Your Name",name:"name",type:"text"}),Object(j.jsx)("button",{onClick:this.changeName,children:"Change Name"})]}),Object(j.jsxs)("td",{width:"50%",children:[Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Application Address: "+this.state.appAddress}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:this.delete,children:"Delete App"}),Object(j.jsx)("h3",{children:"Change Profile Pic"}),Object(j.jsx)("input",{className:"form-control ds-input",type:"text",id:"picAddress",placeholder:"txid of pic"}),Object(j.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.changePic,children:"Fuse"}),Object(j.jsx)("input",{className:"form-control ds-input",type:"text",id:"addFriend",placeholder:"friend's app id"}),Object(j.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.addFriend,children:"Add Friend"}),Object(j.jsx)("h3",{children:"My Friends:"}),Object(j.jsx)("p",{children:this.state.list})]})]})})]})})})]})}}]),a}(p.Component);t.a=S}).call(this,a(37).Buffer)},191:function(e,t,a){"use strict";t.a=a.p+"static/media/logo.34786464.svg"},208:function(e,t){},270:function(e,t){},272:function(e,t){},283:function(e,t){},285:function(e,t){},312:function(e,t){},313:function(e,t){},319:function(e,t){},321:function(e,t){},339:function(e,t){},355:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(44),s=a.n(n),c=a(180),r=a.n(c),i=(a(99),a(181)),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,361)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))},l=a(1);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(i.a,{})}),document.getElementById("root")),o()},99:function(e,t,a){}},[[358,1,2]]]);
//# sourceMappingURL=main.3b89a042.chunk.js.map