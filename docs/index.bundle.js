"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[826],{917:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),i=r.n(t),a=r(645),o=r.n(a)()(i());o.push([n.id,"html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}",""]);const s=o},426:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(81),i=r.n(t),a=r(645),o=r.n(a),s=r(667),d=r.n(s),c=new URL(r(16),r.b),l=o()(i()),p=d()(c);l.push([n.id,'body {\r\n  font-family: "Open Sans", "Lucida Grande", tahoma, verdana, arial, sans-serif;\r\n  background-color: #f6f6f6;\r\n  color: #545862;\r\n}\r\n\r\n#todo-list-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 480px;\r\n  margin: 52px auto;\r\n  background-color: white;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\nh1 {\r\n  color: #545862;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  padding: 1rem;\r\n  line-height: 20px;\r\n  margin: 0;\r\n  width: 100%;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n#list-header-container {\r\n  display: flex;\r\n  height: 50px;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n#add-item-container > img {\r\n  width: 15px;\r\n  padding: 16px;\r\n  cursor: pointer;\r\n  opacity: 0.6;\r\n}\r\n\r\n#list-header-container > div > img {\r\n  width: 15px;\r\n  padding: 16px;\r\n  cursor: pointer;\r\n  opacity: 0.6;\r\n}\r\n\r\n#add-item-container > img:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#list-header-container > div > img:hover {\r\n  width: 15px;\r\n  padding: 16px;\r\n  cursor: pointer;\r\n  opacity: 1;\r\n}\r\n\r\n#add-item-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n#add-item {\r\n  outline: none;\r\n  border: none;\r\n  padding-left: 16px;\r\n  font-style: italic;\r\n  font-size: 16px;\r\n  width: 100%;\r\n}\r\n\r\n#add-item::placeholder {\r\n  line-height: 20px;\r\n  word-wrap: break-word;\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  font-family: "Open Sans", "Lucida Grande", tahoma, verdana, arial, sans-serif;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.delete-icon {\r\n  height: 25px;\r\n  padding-right: 16px;\r\n  cursor: pointer;\r\n  opacity: 0.6;\r\n  margin-left: auto;\r\n}\r\n\r\n.task-drag-icon {\r\n  height: 15px;\r\n  padding-right: 16px;\r\n  cursor: move;\r\n  opacity: 0.6;\r\n  margin-left: auto;\r\n}\r\n\r\n.delete-icon:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.task-drag-icon:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.todo-list-item {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  height: 50px;\r\n  padding-left: 16px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.todo-list-item > p {\r\n  padding-left: 16px;\r\n  margin: 0;\r\n}\r\n\r\ninput[type="checkbox" i] {\r\n  cursor: pointer;\r\n  appearance: none;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: initial;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: 2px solid #c1c1c3;\r\n}\r\n\r\ninput:checked {\r\n  background-image: url('+p+');\r\n  background-size: 100% 100%;\r\n  width: 15px;\r\n  height: 15px;\r\n  border: none;\r\n}\r\n\r\n#button-container {\r\n  align-self: center;\r\n  display: flex;\r\n  height: 54px;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.task-description {\r\n  line-height: 20px;\r\n  word-wrap: break-word;\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  border: 0;\r\n  outline: 0;\r\n  width: 400px;\r\n  padding-left: 16px;\r\n  font-family: "Open Sans", "Lucida Grande", tahoma, verdana, arial, sans-serif;\r\n}\r\n\r\n#clear-completed {\r\n  font-size: 16px;\r\n  border: none;\r\n  opacity: 0.5;\r\n  width: fit-content;\r\n  height: min-content;\r\n  color: #545862;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n#clear-completed:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  opacity: 1;\r\n}\r\n',""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},o=[],s=0;s<n.length;s++){var d=n[s],c=t.base?d[0]+t.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=r(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=i(h,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var a=t(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=r(a[o]);e[s].references--}for(var d=t(n,i),c=0;c<a.length;c++){var l=r(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},511:(n,e,r)=>{var t=r(379),i=r.n(t),a=r(795),o=r.n(a),s=r(569),d=r.n(s),c=r(565),l=r.n(c),p=r(216),u=r.n(p),h=r(589),f=r.n(h),g=r(917),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=d().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),i()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;var b=r(426),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),i()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const y=r.p+"7a3d379183063bebe2f7.svg",x=r.p+"462d0b81733b3aaa9eb5.svg";class k{constructor(n,e){this.description=n,this.completed=!1,this.index=e}}let w=new class{constructor(n){this.key=n,this.taskList=JSON.parse(localStorage.getItem(n))||[]}add=n=>{let e=new k(n,this.taskList.length+1);return this.taskList.push(e),localStorage.setItem(this.key,JSON.stringify(this.taskList)),e};updateDescription=(n,e)=>{this.taskList[e-1].description=n,localStorage.setItem(this.key,JSON.stringify(this.taskList))};updateIndex=()=>{this.taskList.forEach(((n,e)=>{n.index=e+1}))};remove=n=>{this.taskList.splice(n-1,1),this.updateIndex(),localStorage.setItem(this.key,JSON.stringify(this.taskList))};swap=(n,e)=>{this.taskList[n-1].index=e,this.taskList[e-1].index=n;let r=this.taskList[n-1];this.taskList[n-1]=this.taskList[e-1],this.taskList[e-1]=r,localStorage.setItem(this.key,JSON.stringify(this.taskList))}}("todoList");function L(n){const e=document.createElement("li");let r=!1;e.classList.add("todo-list-item");{const r=document.createElement("input");r.type="checkbox",r.checked=n.completed,r.classList.add("task-status"),e.appendChild(r)}{const t=document.createElement("input");t.value=n.description,t.classList.add("task-description"),t.addEventListener("keyup",(e=>{w.updateDescription(e.target.value,n.index)})),t.addEventListener("focus",(n=>{r=!0,n.target.nextSibling.src=x,n.target.nextSibling.alt="delete",n.target.nextSibling.className="delete-icon",n.target.style.backgroundColor="#fffeca",n.target.parentElement.style.backgroundColor="#fffeca"})),t.addEventListener("blur",(n=>{r=!1,n.target.nextSibling.src=y,n.target.nextSibling.alt="drag drop",n.target.nextSibling.className="task-drag-icon",n.target.style.backgroundColor="",n.target.parentElement.style.backgroundColor=""})),e.appendChild(t)}{const t=document.createElement("img");t.src=y,t.alt="drag drop",t.className="task-drag-icon",t.addEventListener("mousedown",(()=>{r&&(e.remove(),w.remove(n.index))})),e.appendChild(t)}return e}function S(n){n&&document.getElementById("todo-list").appendChild(L(w.add(n)))}const E=document.getElementById("add-item");E.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),S(n.target.value),n.target.value="")})),document.querySelector("#add-item-container > img").addEventListener("click",(n=>{n.preventDefault(),S(E.value),E.value=""})),w.taskList.forEach((n=>document.getElementById("todo-list").appendChild(L(n))))},16:(n,e,r)=>{n.exports=r.p+"3fc5602f7444259b4c69.svg"}},n=>{n(n.s=511)}]);