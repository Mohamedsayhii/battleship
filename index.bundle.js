(()=>{"use strict";var e={610:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(354),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,'*{margin:0;padding:0;box-sizing:border-box}:root{font-size:62.5%}html{min-height:100%;position:relative}body{font-family:Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1.6rem;background-color:#fff;display:flex;flex-direction:column}body .pass-screen{display:flex;justify-content:center;align-items:center;color:#fff;text-transform:capitalize;position:absolute;background-color:#000;height:100%;width:100%;z-index:2}header{padding:1rem;display:flex;flex-direction:column;justify-content:center;align-items:center}header h1{font-size:5rem}header .instructions{margin-top:1rem;text-transform:capitalize}main .content{display:flex;justify-content:space-evenly;position:relative}main .content .gameboard{text-align:center}main .content .gameboard .board{border:2px solid #000;margin:2rem 0 1rem 0}main .content .gameboard .board .row{display:flex;flex-direction:row}main .content .gameboard .board .row .cell{padding:18px;border:2px solid #000;display:flex;justify-content:center;align-items:center}main .content .gameboard .board .row .cell span{position:absolute;height:.5rem;width:.5rem;background:#000;border-radius:50%;margin-top:-2px;margin-left:-2px}main .content .opponentButtons{position:absolute;top:33.5%;left:60%}main .content .opponentButtons button{background-color:#222;border-radius:4px;border-style:none;box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-family:"Farfetch Basis","Helvetica Neue",Arial,sans-serif;font-size:16px;font-weight:700;line-height:1.5;margin:0;margin-bottom:1rem;max-width:none;min-height:44px;min-width:10px;outline:none;overflow:hidden;padding:1rem;position:relative;text-align:center;text-transform:none;user-select:none;-webkit-user-select:none;touch-action:manipulation;width:75%}main .content .opponentButtons button:hover,main .content .opponentButtons button:focus{opacity:.9}main .buttons{display:flex;justify-content:center;margin-top:4rem}main .buttons button{background-color:#fff;border:3px solid #222;border-radius:8px;box-sizing:border-box;color:#222;cursor:pointer;display:inline-block;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-size:16px;font-weight:600;line-height:20px;margin:2rem;outline:none;padding:13px 23px;position:relative;text-align:center;text-decoration:none;touch-action:manipulation;transition:box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;user-select:none;-webkit-user-select:none;width:auto}main .buttons button button:focus-visible{box-shadow:#222 0 0 0 2px,rgba(255,255,255,.8) 0 0 0 4px;transition:box-shadow .2s}main .buttons button button:active{background-color:#f7f7f7;border-color:#000;transform:scale(0.96)}main .buttons button button:disabled{border-color:#ddd;color:#ddd;cursor:not-allowed;opacity:1}main .buttons #passDeviceButton{visibility:collapse}footer{position:absolute;left:0;bottom:0;width:100%;display:flex;justify-content:center;align-items:center;gap:.7rem;background-color:#000;color:#fff;text-align:center;padding:1.5rem}footer img{height:1.8rem}',"",{version:3,sources:["webpack://./src/sass/style.scss"],names:[],mappings:"AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,MACI,eAAA,CAGJ,KACI,eAAA,CACA,iBAAA,CA4FJ,KACI,gJACI,CAUJ,gBAAA,CACA,qBAAA,CACA,YAAA,CACA,qBAAA,CAEA,kBACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,yBAAA,CACA,iBAAA,CACA,qBAAA,CACA,WAAA,CACA,UAAA,CACA,SAAA,CAIR,OACI,YAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,UACI,cAAA,CAGJ,qBACI,eAAA,CACA,yBAAA,CAKJ,cACI,YAAA,CACA,4BAAA,CACA,iBAAA,CAEA,yBACI,iBAAA,CAEA,gCACI,qBAAA,CACA,oBAAA,CAEA,qCACI,YAAA,CACA,kBAAA,CAEA,2CACI,YAAA,CACA,qBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,gDACI,iBAAA,CACA,YAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CAOpB,+BACI,iBAAA,CACA,SAAA,CACA,QAAA,CACA,sCA3HR,qBAAA,CACA,iBAAA,CACA,iBAAA,CACA,qBAAA,CACA,UAAA,CACA,cAAA,CACA,oBAAA,CACA,8DAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CACA,QAAA,CACA,kBAAA,CACA,cAAA,CACA,eAAA,CACA,cAAA,CACA,YAAA,CACA,eAAA,CACA,YAAA,CACA,iBAAA,CACA,iBAAA,CACA,mBAAA,CACA,gBAAA,CACA,wBAAA,CACA,yBAAA,CACA,SAAA,CAEA,wFAEI,UAAA,CAoGJ,cACI,YAAA,CACA,sBAAA,CACA,eAAA,CAEA,qBA7LJ,qBAAA,CACA,qBAAA,CACA,iBAAA,CACA,qBAAA,CACA,UAAA,CACA,cAAA,CACA,oBAAA,CACA,wFACI,CAMJ,cAAA,CACA,eAAA,CACA,gBAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,oBAAA,CACA,yBAAA,CACA,+EACI,CAIJ,gBAAA,CACA,wBAAA,CACA,UAAA,CAEA,0CACI,wDACI,CAEJ,yBAAA,CAGJ,mCACI,wBAAA,CACA,iBAAA,CACA,qBAAA,CAGJ,qCACI,iBAAA,CACA,UAAA,CACA,kBAAA,CACA,SAAA,CA+IA,gCACI,mBAAA,CAKZ,OACI,iBAAA,CACA,MAAA,CACA,QAAA,CACA,UAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,SAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CAEA,WACI,aAAA",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 62.5%;\n}\n\nhtml {\n    min-height: 100%;\n    position: relative;\n}\n\n@mixin button-style1 {\n    background-color: #ffffff;\n    border: 3px solid #222222;\n    border-radius: 8px;\n    box-sizing: border-box;\n    color: #222222;\n    cursor: pointer;\n    display: inline-block;\n    font-family:\n        Circular,\n        -apple-system,\n        BlinkMacSystemFont,\n        Roboto,\n        'Helvetica Neue',\n        sans-serif;\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 20px;\n    margin: 2rem;\n    outline: none;\n    padding: 13px 23px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    touch-action: manipulation;\n    transition:\n        box-shadow 0.2s,\n        -ms-transform 0.1s,\n        -webkit-transform 0.1s,\n        transform 0.1s;\n    user-select: none;\n    -webkit-user-select: none;\n    width: auto;\n\n    button:focus-visible {\n        box-shadow:\n            #222222 0 0 0 2px,\n            rgba(255, 255, 255, 0.8) 0 0 0 4px;\n        transition: box-shadow 0.2s;\n    }\n\n    button:active {\n        background-color: #f7f7f7;\n        border-color: #000000;\n        transform: scale(0.96);\n    }\n\n    button:disabled {\n        border-color: #dddddd;\n        color: #dddddd;\n        cursor: not-allowed;\n        opacity: 1;\n    }\n}\n\n@mixin button-style2 {\n    background-color: #222;\n    border-radius: 4px;\n    border-style: none;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: 'Farfetch Basis', 'Helvetica Neue', Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 1.5;\n    margin: 0;\n    margin-bottom: 1rem;\n    max-width: none;\n    min-height: 44px;\n    min-width: 10px;\n    outline: none;\n    overflow: hidden;\n    padding: 1rem;\n    position: relative;\n    text-align: center;\n    text-transform: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    width: 75%;\n\n    &:hover,\n    &:focus {\n        opacity: 0.9;\n    }\n}\n\nbody {\n    font-family:\n        Roboto,\n        -apple-system,\n        BlinkMacSystemFont,\n        'Segoe UI',\n        Helvetica,\n        Arial,\n        sans-serif,\n        'Apple Color Emoji',\n        'Segoe UI Emoji',\n        'Segoe UI Symbol';\n    font-size: 1.6rem;\n    background-color: lighten($color: white, $amount: 0);\n    display: flex;\n    flex-direction: column;\n\n    .pass-screen {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: white;\n        text-transform: capitalize;\n        position: absolute;\n        background-color: black;\n        height: 100%;\n        width: 100%;\n        z-index: 2;\n    }\n}\n\nheader {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    h1 {\n        font-size: 5rem;\n    }\n\n    .instructions {\n        margin-top: 1rem;\n        text-transform: capitalize;\n    }\n}\n\nmain {\n    .content {\n        display: flex;\n        justify-content: space-evenly;\n        position: relative;\n\n        .gameboard {\n            text-align: center;\n\n            .board {\n                border: 2px solid black;\n                margin: 2rem 0 1rem 0;\n\n                .row {\n                    display: flex;\n                    flex-direction: row;\n\n                    .cell {\n                        padding: 18px;\n                        border: 2px solid black;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n\n                        span {\n                            position: absolute;\n                            height: 0.5rem;\n                            width: 0.5rem;\n                            background: black;\n                            border-radius: 50%;\n                            margin-top: -2px;\n                            margin-left: -2px;\n                        }\n                    }\n                }\n            }\n        }\n\n        .opponentButtons {\n            position: absolute;\n            top: 33.5%;\n            left: 60%;\n            button {\n                @include button-style2();\n            }\n        }\n    }\n\n    .buttons {\n        display: flex;\n        justify-content: center;\n        margin-top: 4rem;\n\n        button {\n            @include button-style1();\n        }\n\n        #passDeviceButton {\n            visibility: collapse;\n        }\n    }\n}\n\nfooter {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.7rem;\n    background-color: black;\n    color: white;\n    text-align: center;\n    padding: 1.5rem;\n\n    img {\n        height: 1.8rem;\n    }\n}\n"],sourceRoot:""}]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var A=[].concat(e[c]);o&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),n&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=n):A[2]=n),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),t.push(A))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],A=a[c]||0,d="".concat(c," ").concat(A);a[c]=A+1;var p=n(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var m=r(u,o);o.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=o(e,r),c=0;c<a.length;c++){var A=n(a[c]);0===t[A].references&&(t[A].updater(),t.splice(A,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;const o=(e,t)=>{let n=0;return{name:e,length:t,getHits:()=>n,hit:()=>n++,isSunk:()=>t===n}};function r(e,t){return e.some((e=>e.length===t.length&&e.every(((e,n)=>e===t[n]))))}function a(e,t,n,o){let a=!1;if(o)for(let o=0;o<n;o++)r(e,[t[0]+o,t[1]])&&(a=!0);else for(let o=0;o<n;o++)r(e,[t[0],t[1]+o])&&(a=!0);return a}const i=e=>({coordinates:e,isAttacked:!1,isPartOfShip:!1,ship:""}),s=()=>{let e=[];const t=o("carrier",5),n=o("battleship",4),r=o("destroyer",3),s=o("submarine",3),l=o("patrol",2);for(let t=0;t<10;t++){const n=[];for(let e=0;e<10;e++)n.push(i([t,e]));e.push(n)}const c=(t,n,o)=>{const[r,a]=n,i=[];if(o){if(!(r+t.length<=10))return"Incorrect placement of ship";for(let n=0;n<t.length;n++){if(e[r+n][a].isPartOfShip)return"Incorrect placement of ship";e[r+n][a].isPartOfShip=!0,e[r+n][a].ship=t.name,i.push([r+n,a])}}else{if(o)return"Incorrect placement of ship";if(!(a+t.length<=10))return"Incorrect placement of ship";for(let n=0;n<t.length;n++){if(e[r][a+n].isPartOfShip)return"Incorrect placement of ship";e[r][a+n].isPartOfShip=!0,e[r][a+n].ship=t.name,i.push([r,a+n])}}return i};return{getBoard:()=>e,placeShip:c,removeShip:t=>{for(let n=0;n<10;n++)for(let o=0;o<10;o++)e[n][o].ship===t&&(e[n][o]=i([n,o]))},randomPlacement:()=>{(()=>{e=[];for(let t=0;t<10;t++){const n=[];for(let e=0;e<10;e++)n.push(i([t,e]));e.push(n)}})();const o=[t,n,r,s,l],A=[];let d=0;for(;d<o.length;){const e=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],t=1==Math.floor(2*Math.random());let n=[];if(t){if(e[0]+o[d].length-1<10&&!a(A,e,o[d].length,!0)){n=c(o[d],e,t);for(let e=0;e<n.length;e++)A.push(n[e]);d++}}else if(e[1]+o[d].length-1<10&&!a(A,e,o[d].length,!1)){n=c(o[d],e,t);for(let e=0;e<n.length;e++)A.push(n[e]);d++}}},receiveAttack:o=>{const[a,i]=o;if(!1!==e[a][i].isAttacked)return"cell already attacked";switch(e[a][i].isAttacked=!0,e[a][i].ship){case"carrier":t.hit();break;case"battleship":n.hit();break;case"destroyer":r.hit();break;case"submarine":s.hit();break;case"patrol":l.hit()}},allSunk:()=>!!(t.isSunk()&&n.isSunk()&&r.isSunk()&&s.isSunk()&&l.isSunk())}},l=e=>({type:e,playerGameboard:s()});let c="player1";function A(e,t){return e.some((e=>e.length===t.length&&e.every(((e,n)=>e===t[n]))))}function d(e){e.playerGameboard.getBoard().forEach((t=>{t.forEach((t=>{const n=`#${"player1"===e.type?"firstBoard":"secondBoard"}${t.coordinates.join("")}`,o=document.querySelector(n);if(o.hasAttribute("name")&&(o.removeAttribute("name"),o.removeAttribute("draggable"),o.removeAttribute("style")),t.isPartOfShip&&(o.style.backgroundColor="rgba(0,0,255,0.1)",o.style.border="2px solid #00f",o.draggable=!0,o.setAttribute("name",t.ship)),t.isAttacked)if(t.isPartOfShip)o.style.backgroundColor="rgba(255,0,0,.2)",o.style.border="2px solid red";else{const e=document.createElement("span");o.appendChild(e)}}))}))}function p(e){e.playerGameboard.getBoard().forEach((t=>{t.forEach((t=>{const n=`#${"player1"===e.type?"firstBoard":"secondBoard"}${t.coordinates.join("")}`,o=document.querySelector(n);if(t.isAttacked)if(t.isPartOfShip)o.style.backgroundColor="rgba(255,0,0,.2)",o.style.border="2px solid red";else{const e=document.createElement("span");o.appendChild(e)}}))}))}function u(){const e=document.createElement("div");return e.className="pass-screen",e.textContent="click to pass screen",e}function m(e,t){const n=document.querySelector("#firstBoard"),o=document.querySelector("#secondBoard"),r=document.querySelector(".instructions"),a=document.querySelector("body");document.querySelector(".pass-screen").addEventListener("click",(()=>{a.removeChild(a.lastChild)})),document.querySelectorAll(".cell").forEach((e=>{e.firstChild&&e.removeChild(e.firstChild),e.style.backgroundColor="",e.style.border=""})),"player1"===c?(d(e),p(t),n.style.pointerEvents="none",o.style.pointerEvents="auto",r.textContent="Your turn"):(d(t),p(e),n.style.pointerEvents="auto",o.style.pointerEvents="none",r.textContent="Opponent's turn")}function C(){const e=document.querySelector("#firstBoard"),t=document.querySelector("#secondBoard"),n=document.querySelector(".instructions");"player1"===c?(e.style.pointerEvents="none",t.style.pointerEvents="auto",n.textContent="Your turn"):(e.style.pointerEvents="auto",t.style.pointerEvents="none",n.textContent="Opponent's turn")}const f=()=>{const e=l("player1");let t,n;function r(e){const t="player1"===c?"#firstBoard":"#secondBoard",[n,o]="player1"===c?[10,11]:[11,12],r=e.target.getAttribute("name"),a=document.querySelectorAll(`${t} [name="${r}"]`),i=a.length>1&&a[0].id[n]!==a[1].id[n],s={cells:Array.from(a).map((e=>e.id)),isVertical:i};e.dataTransfer.setData("application/ship-cells",JSON.stringify(s))}function a(n){n.preventDefault();const r="player1"===c?"firstBoard":"secondBoard",a="player1"===c?e:t,[i,s]="player1"===c?[10,11]:[11,12],l=JSON.parse(n.dataTransfer.getData("application/ship-cells")),A=document.getElementById(l.cells[0]).getAttribute("name");a.playerGameboard.removeShip(A);const d=[parseInt(n.target.id[i],10),parseInt(n.target.id[s],10)];"Incorrect placement of ship"!==a.playerGameboard.placeShip(o(A,l.cells.length),d,l.isVertical)&&(l.cells.forEach((e=>{const t=document.getElementById(e);t&&(t.removeAttribute("name"),t.removeAttribute("draggable"),t.removeAttribute("style"))})),l.cells.forEach(((e,t)=>{let n;n=l.isVertical?[d[0]+t,d[1]]:[d[0],d[1]+t];const o=`${r}${n.join("")}`,a=document.getElementById(o);a&&(a.style.backgroundColor="rgba(0,0,255,0.1)",a.style.border="2px solid #00f",a.setAttribute("name",A),a.draggable=!0)})))}function i(n){const r="player1"===c?e:t,a="player1"===c?"firstBoard":"secondBoard",[i,s]="player1"===c?[10,11]:[11,12];if(0===n.target.style.length)return;const l=n.target.getAttribute("name"),A=document.querySelectorAll(`#${a} [name="${l}"]`),d=A.length>1&&A[0].id[i]!==A[1].id[i],p={cells:Array.from(A).map((e=>e.id)),isVertical:d},u=[parseInt(p.cells[0][i],10),parseInt(p.cells[0][s],10)];r.playerGameboard.removeShip(l),"Incorrect placement of ship"!==r.playerGameboard.placeShip(o(l,p.cells.length),u,!p.isVertical)&&(p.cells.forEach((e=>{const t=document.getElementById(e);t&&(t.style.backgroundColor="",t.style.border="",t.removeAttribute("name"))})),p.cells.forEach(((e,t)=>{let n;n=p.isVertical?[u[0],u[1]+t]:[u[0]+t,u[1]];const o=`${a}${n.join("")}`,r=document.getElementById(o);r&&(r.style.backgroundColor="rgba(0,0,255,0.1)",r.style.border="2px solid #00f",r.setAttribute("name",l),r.draggable=!0)})))}e.playerGameboard.placeShip(o("carrier",5),[0,0],!1),e.playerGameboard.placeShip(o("battleship",4),[3,0],!1),e.playerGameboard.placeShip(o("destroyer",3),[5,7],!1),e.playerGameboard.placeShip(o("submarine",3),[7,0],!0),e.playerGameboard.placeShip(o("patrol",2),[8,9],!0),d(e),humanButton.addEventListener("click",(()=>{document.querySelector(".opponentButtons").style.visibility="hidden",n="human",t=l("opponent"),t.playerGameboard.placeShip(o("carrier",5),[0,0],!0),t.playerGameboard.placeShip(o("battleship",4),[1,9],!0),t.playerGameboard.placeShip(o("destroyer",3),[2,2],!1),t.playerGameboard.placeShip(o("submarine",3),[7,5],!1),t.playerGameboard.placeShip(o("patrol",2),[9,8],!1),d(t),document.querySelector("body").appendChild(u()),c="player1"===c?"opponent":"player1",function(e,t){const n=document.querySelector("#firstBoard"),o=document.querySelector("#secondBoard"),r=document.querySelector(".instructions"),a=document.querySelector("body");document.querySelector(".pass-screen").addEventListener("click",(()=>{a.removeChild(a.lastChild)})),document.querySelectorAll(".cell").forEach((e=>{e.firstChild&&e.removeChild(e.firstChild),e.style.backgroundColor="",e.style.border=""})),"player1"===c?(d(e),p(t),n.style.pointerEvents="auto",o.style.pointerEvents="none",r.textContent="Your turn"):(d(t),p(e),n.style.pointerEvents="none",o.style.pointerEvents="auto",r.textContent="Opponent's turn")}(e,t),document.querySelector(".pass-screen").textContent="Click to let Player2 place his ships",startButton.style.visibility="visible",randomButton.style.visibility="visible"})),computerButton.addEventListener("click",(()=>{document.querySelector(".opponentButtons").style.visibility="hidden",n="computer",t=l("opponent"),t.playerGameboard.randomPlacement()})),randomButton.addEventListener("click",(()=>{"player1"===c?(document.querySelectorAll("#firstBoard .cell").forEach((e=>{e.style.removeProperty("background-color"),e.style.removeProperty("border")})),e.playerGameboard.randomPlacement(),d(e)):(document.querySelectorAll("#secondBoard .cell").forEach((e=>{e.style.removeProperty("background-color"),e.style.removeProperty("border")})),t.playerGameboard.randomPlacement(),d(t))})),window.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".cell").forEach((e=>{e.addEventListener("dragstart",r),e.addEventListener("click",i)})),document.querySelectorAll(".board").forEach((e=>{e.addEventListener("dragover",(e=>e.preventDefault())),e.addEventListener("drop",a)}))})),startButton.addEventListener("click",(()=>{const o=document.querySelector(".instructions");document.querySelectorAll(".cell").forEach((e=>{e.draggable=!1,e.removeEventListener("click",i)})),void 0===t?o.textContent="opponent not ready":"computer"===n?function(e,t){startButton.style.pointerEvents="none",randomButton.style.pointerEvents="none",document.querySelector(".instructions").textContent="your turn",function(e,t,n){const o=document.querySelector("#secondBoard"),r=e.playerGameboard.getBoard();o.addEventListener("click",(t=>{const o=[parseInt(t.target.id[n[0]],10),parseInt(t.target.id[n[1]],10)],[a,i]=o;if(!r[a][i].isAttacked){if(e.type===c)return;if(r[a][i].isPartOfShip)t.target.style.backgroundColor="rgba(255,0,0,.2)",t.target.style.border="2px solid red";else{const e=document.createElement("span");t.target.appendChild(e)}e.playerGameboard.receiveAttack(o),e.playerGameboard.allSunk()?(document.querySelectorAll(".board").forEach((e=>{e.style.pointerEvents="none"})),document.querySelector(".instructions").textContent=`${c} won!`):(c="player1"===c?"opponent":"player1",C())}}))}(t,0,[11,12]),function(e){const t=document.querySelector("#secondBoard"),n=e.playerGameboard.getBoard(),o=[];t.addEventListener("click",(()=>{const t=document.querySelector(".instructions");"opponent"===c&&(t.textContent="Computer is thinking",setTimeout((()=>{let r=[];do{r=[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}while(A(o,r));const[a,i]=r;if(!n[a][i].isAttacked){const s=document.querySelector(`#firstBoard${a}${i}`);if(e.type===c)return;if(n[a][i].isPartOfShip)s.style.backgroundColor="rgba(255,0,0,.2)",s.style.border="2px solid red";else{const e=document.createElement("span");s.appendChild(e)}o.push(r),e.playerGameboard.receiveAttack(r),e.playerGameboard.allSunk()?(document.querySelectorAll(".board").forEach((e=>{e.style.pointerEvents="none"})),t.textContent=`${c} won!`):(c="player1"===c?"opponent":"player1",C())}}),0))}))}(e)}(e,t):(document.querySelector("body").appendChild(u()),c="player1"===c?"opponent":"player1",m(e,t),document.querySelector(".pass-screen").textContent="Click to start the game",function(e,t){startButton.style.visibility="collapse",randomButton.style.visibility="collapse",passDeviceButton.style.visibility="visible",document.querySelector(".instructions").textContent="your turn",function(e,t,n){const o=document.querySelector("body");e.forEach(((r,a)=>{const i=document.querySelector(t[a]),s=r.playerGameboard.getBoard(),l=n[a];let A=!1;i.addEventListener("click",(t=>{if(!A){A=!0;const n=[parseInt(t.target.id[l[0]],10),parseInt(t.target.id[l[1]],10)],[a,i]=n;if(!s[a][i].isAttacked){if(r.type===c)return;if(s[a][i].isPartOfShip)t.target.style.backgroundColor="rgba(255,0,0,.2)",t.target.style.border="2px solid red";else{const e=document.createElement("span");t.target.appendChild(e)}r.playerGameboard.receiveAttack(n),r.playerGameboard.allSunk()?(document.querySelectorAll(".board").forEach((e=>{e.style.pointerEvents="none"})),document.querySelector(".instructions").textContent=`${c} won!`):passDeviceButton.onclick=()=>{A&&(A=!1,o.appendChild(u()),c="player1"===c?"opponent":"player1",m(e[0],e[1]))}}}}))}))}([e,t],["#firstBoard","#secondBoard"],[[10,11],[11,12]])}(e,t))}))},y=n.p+"c9e84273c7a6877f70be.svg",h=e=>{const t=document.createElement("div");t.className="gameboard";const n=document.createElement("div");n.className="board",n.id=e;const o=document.createElement("div");o.className="board-label",o.textContent="firstBoard"===e?"Your grid":"Opponent's grid";for(let t=0;t<10;t++){const o=document.createElement("div");o.className="row";for(let n=0;n<10;n++){const r=document.createElement("div");r.className="cell",r.id=`${e}${t}${n}`,o.appendChild(r)}n.appendChild(o)}return t.appendChild(n),t.appendChild(o),t},b=(e,t)=>{const n=document.createElement("button");return n.textContent=e,n.id=t,n.classList.add("button"),n};var g=n(72),v=n.n(g),B=n(825),x=n.n(B),S=n(659),E=n.n(S),k=n(56),w=n.n(k),I=n(540),q=n.n(I),G=n(113),M=n.n(G),j=n(610),O={};O.styleTagTransform=M(),O.setAttributes=w(),O.insert=E().bind(null,"head"),O.domAPI=x(),O.insertStyleElement=q(),v()(j.A,O),j.A&&j.A.locals&&j.A.locals;console.log("Looks like we are in development mode!"),(()=>{const e=document.querySelector("body");e.appendChild((()=>{const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Battleship";const n=document.createElement("div");return n.className="instructions",n.textContent="Place your ships!",e.appendChild(t),e.appendChild(n),e})()),e.appendChild((()=>{const e=document.createElement("main"),t=document.createElement("div");t.className="content",t.appendChild(h("firstBoard")),t.appendChild(h("secondBoard"));const n=document.createElement("div");n.className="opponentButtons",n.appendChild(b("HUMAN","humanButton")),n.appendChild(b("COMPUTER","computerButton"));const o=document.createElement("div");return o.className="buttons",o.appendChild(b("START","startButton")),o.appendChild(b("RANDOMIZE","randomButton")),o.appendChild(b("PASS DEVICE","passDeviceButton")),t.appendChild(n),e.appendChild(t),e.appendChild(o),e})()),e.appendChild((()=>{const e=document.createElement("footer");e.textContent="Realized by MohamedSayhii";const t=document.createElement("a"),n=document.createElement("img");return t.href="https://github.com/mohamedsayhii",n.src=y,t.appendChild(n),e.appendChild(t),e})()),f()})()})();
//# sourceMappingURL=index.bundle.js.map