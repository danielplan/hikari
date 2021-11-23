var qn=Object.defineProperty;var mn=Object.getOwnPropertySymbols;var Vn=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable;var dn=(i,n,o)=>n in i?qn(i,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[n]=o,K=(i,n)=>{for(var o in n||(n={}))Vn.call(n,o)&&dn(i,o,n[o]);if(mn)for(var o of mn(n))Gn.call(n,o)&&dn(i,o,n[o]);return i};const Zn={},zn=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};zn();function yn(i,n,o){const u=document.createElement("label");u.innerText=i,u.htmlFor=i;const a=document.createElement("input");a.value=n,a.name=i;const s=document.createElement("div");return s.classList.add("control-item"),s.appendChild(u),s.appendChild(a),o.appendChild(s),{controlParent:s,controlElement:a}}function w(i,n,o,u,a){const{controlElement:s,controlParent:d}=yn(o,u.toString(),a);return s.type="range",s.min=i.toString(),s.max=n.toString(),s.classList.add("range-element"),d.appendChild(Xn(s)),s}function vn(i,n){const{controlElement:o}=yn(i,"1",n);return o.type="checkbox",o.classList.add("checkbox-element"),o}function Xn(i){const n=document.createElement("input");return n.classList.add("number-element"),n.min=i.min,n.max=i.max,n.type="number",n.value=i.value,i.addEventListener("input",()=>{n.value=i.value}),n.addEventListener("change",()=>{i.value=n.value,i.dispatchEvent(new InputEvent("change"))}),n}function xn(i,n,o,u,a,s,d){const A=Object.values(u).map(T=>T.checked?1:0),I=Object.values(a).map(T=>Number.parseInt(T.value));o.drawImage(i,0,0,n.width,n.height);const R=o.getImageData(0,0,n.width,n.height),p=new Uint8Array(d.HEAP8.buffer,0,R.data.length);p.set(R.data),s(0,A,I,R.data.length),R.data.set(p),o.putImageData(R,0,0)}var Kn=function(){var i=Zn.url;return function(n){n=n||{};var n=typeof n!="undefined"?n:{},o,u;n.ready=new Promise(function(e,t){o=e,u=t});var a={},s;for(s in n)n.hasOwnProperty(s)&&(a[s]=n[s]);var d=!1,A=!1,I=!1,R=!1;d=typeof window=="object",A=typeof importScripts=="function",I=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",R=!d&&!I&&!A;var p="";function T(e){return n.locateFile?n.locateFile(e,p):p+e}var F,H,C,W,j;I?(A?p=require("path").dirname(p)+"/":p=__dirname+"/",F=function(t,r){return W||(W=require("fs")),j||(j=require("path")),t=j.normalize(t),W.readFileSync(t,r?null:"utf8")},C=function(t){var r=F(t,!0);return r.buffer||(r=new Uint8Array(r)),q(r.buffer),r},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof jn))throw e}),process.on("unhandledRejection",L),n.inspect=function(){return"[Emscripten Module object]"}):R?(typeof read!="undefined"&&(F=function(t){return read(t)}),C=function(t){var r;return typeof readbuffer=="function"?new Uint8Array(readbuffer(t)):(r=read(t,"binary"),q(typeof r=="object"),r)},typeof scriptArgs!="undefined"&&scriptArgs,typeof print!="undefined"&&(typeof console=="undefined"&&(console={}),console.log=print,console.warn=console.error=typeof printErr!="undefined"?printErr:print)):(d||A)&&(A?p=self.location.href:typeof document!="undefined"&&document.currentScript&&(p=document.currentScript.src),i&&(p=i),p.indexOf("blob:")!==0?p=p.substr(0,p.lastIndexOf("/")+1):p="",F=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},A&&(C=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),H=function(e,t,r){var l=new XMLHttpRequest;l.open("GET",e,!0),l.responseType="arraybuffer",l.onload=function(){if(l.status==200||l.status==0&&l.response){t(l.response);return}r()},l.onerror=r,l.send(null)}),n.print||console.log.bind(console);var O=n.printErr||console.warn.bind(console);for(s in a)a.hasOwnProperty(s)&&(n[s]=a[s]);a=null,n.arguments,n.thisProgram,n.quit;var U;n.wasmBinary&&(U=n.wasmBinary),n.noExitRuntime,typeof WebAssembly!="object"&&L("no native wasm support detected");var Y,$=!1;function q(e,t){e||L("Assertion failed: "+t)}function J(e){var t=n["_"+e];return q(t,"Cannot call unknown function "+e+", make sure it is exported"),t}function Q(e,t,r,l,v){var m={string:function(g){var P=0;if(g!=null&&g!==0){var pn=(g.length<<2)+1;P=z(pn),Sn(g,P,pn)}return P},array:function(g){var P=z(g.length);return En(g,P),P}};function c(g){return t==="string"?Rn(g):t==="boolean"?Boolean(g):g}var f=J(e),h=[],S=0;if(l)for(var E=0;E<l.length;E++){var ln=m[r[E]];ln?(S===0&&(S=fn()),h[E]=ln(l[E])):h[E]=l[E]}var x=f.apply(null,h);return x=c(x),S!==0&&un(S),x}function wn(e,t,r,l){r=r||[];var v=r.every(function(c){return c==="number"}),m=t!=="string";return m&&v&&!l?J(e):function(){return Q(e,t,r,arguments)}}var Z=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function An(e,t,r){for(var l=t+r,v=t;e[v]&&!(v>=l);)++v;if(v-t>16&&e.subarray&&Z)return Z.decode(e.subarray(t,v));for(var m="";t<v;){var c=e[t++];if(!(c&128)){m+=String.fromCharCode(c);continue}var f=e[t++]&63;if((c&224)==192){m+=String.fromCharCode((c&31)<<6|f);continue}var h=e[t++]&63;if((c&240)==224?c=(c&15)<<12|f<<6|h:c=(c&7)<<18|f<<12|h<<6|e[t++]&63,c<65536)m+=String.fromCharCode(c);else{var S=c-65536;m+=String.fromCharCode(55296|S>>10,56320|S&1023)}}return m}function Rn(e,t){return e?An(V,e,t):""}function bn(e,t,r,l){if(!(l>0))return 0;for(var v=r,m=r+l-1,c=0;c<e.length;++c){var f=e.charCodeAt(c);if(f>=55296&&f<=57343){var h=e.charCodeAt(++c);f=65536+((f&1023)<<10)|h&1023}if(f<=127){if(r>=m)break;t[r++]=f}else if(f<=2047){if(r+1>=m)break;t[r++]=192|f>>6,t[r++]=128|f&63}else if(f<=65535){if(r+2>=m)break;t[r++]=224|f>>12,t[r++]=128|f>>6&63,t[r++]=128|f&63}else{if(r+3>=m)break;t[r++]=240|f>>18,t[r++]=128|f>>12&63,t[r++]=128|f>>6&63,t[r++]=128|f&63}}return t[r]=0,r-v}function Sn(e,t,r){return bn(e,V,t,r)}function En(e,t){M.set(e,t)}var M,V;function _n(e){n.HEAP8=M=new Int8Array(e),n.HEAP16=new Int16Array(e),n.HEAP32=new Int32Array(e),n.HEAPU8=V=new Uint8Array(e),n.HEAPU16=new Uint16Array(e),n.HEAPU32=new Uint32Array(e),n.HEAPF32=new Float32Array(e),n.HEAPF64=new Float64Array(e)}n.INITIAL_MEMORY;var G,nn=[],en=[],Pn=[],tn=[];en.push({func:function(){cn()}});function In(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Un(n.preRun.shift());B(nn)}function Tn(){B(en)}function Cn(){B(Pn)}function On(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)Nn(n.postRun.shift());B(tn)}function Un(e){nn.unshift(e)}function Nn(e){tn.unshift(e)}var b=0,N=null;function Ln(e){b++,n.monitorRunDependencies&&n.monitorRunDependencies(b)}function Fn(e){if(b--,n.monitorRunDependencies&&n.monitorRunDependencies(b),b==0&&N){var t=N;N=null,t()}}n.preloadedImages={},n.preloadedAudios={};function L(e){n.onAbort&&n.onAbort(e),e+="",O(e),$=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var t=new WebAssembly.RuntimeError(e);throw u(t),t}function rn(e,t){return String.prototype.startsWith?e.startsWith(t):e.indexOf(t)===0}var Bn="data:application/octet-stream;base64,";function an(e){return rn(e,Bn)}var kn="file://";function sn(e){return rn(e,kn)}var y="renderEngine.wasm";an(y)||(y=T(y));function on(e){try{if(e==y&&U)return new Uint8Array(U);if(C)return C(e);throw"both async and sync fetching of the wasm failed"}catch(t){L(t)}}function Dn(){if(!U&&(d||A)){if(typeof fetch=="function"&&!sn(y))return fetch(y,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+y+"'";return e.arrayBuffer()}).catch(function(){return on(y)});if(H)return new Promise(function(e,t){H(y,function(r){e(new Uint8Array(r))},t)})}return Promise.resolve().then(function(){return on(y)})}function Hn(){var e={a:Wn};function t(c,f){var h=c.exports;n.asm=h,Y=n.asm.a,_n(Y.buffer),G=n.asm.g,Fn()}Ln();function r(c){t(c.instance)}function l(c){return Dn().then(function(f){return WebAssembly.instantiate(f,e)}).then(c,function(f){O("failed to asynchronously prepare wasm: "+f),L(f)})}function v(){return!U&&typeof WebAssembly.instantiateStreaming=="function"&&!an(y)&&!sn(y)&&typeof fetch=="function"?fetch(y,{credentials:"same-origin"}).then(function(c){var f=WebAssembly.instantiateStreaming(c,e);return f.then(r,function(h){return O("wasm streaming compile failed: "+h),O("falling back to ArrayBuffer instantiation"),l(r)})}):l(r)}if(n.instantiateWasm)try{var m=n.instantiateWasm(e,t);return m}catch(c){return O("Module.instantiateWasm callback failed with error: "+c),!1}return v().catch(u),{}}function B(e){for(;e.length>0;){var t=e.shift();if(typeof t=="function"){t(n);continue}var r=t.func;typeof r=="number"?t.arg===void 0?G.get(r)():G.get(r)(t.arg):r(t.arg===void 0?null:t.arg)}}var Wn={};Hn();var cn=n.___wasm_call_ctors=function(){return(cn=n.___wasm_call_ctors=n.asm.b).apply(null,arguments)};n._render=function(){return(n._render=n.asm.c).apply(null,arguments)};var fn=n.stackSave=function(){return(fn=n.stackSave=n.asm.d).apply(null,arguments)},un=n.stackRestore=function(){return(un=n.stackRestore=n.asm.e).apply(null,arguments)},z=n.stackAlloc=function(){return(z=n.stackAlloc=n.asm.f).apply(null,arguments)};n.ccall=Q,n.cwrap=wn;var k;function jn(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}N=function e(){k||X(),k||(N=e)};function X(e){if(b>0||(In(),b>0))return;function t(){k||(k=!0,n.calledRun=!0,!$&&(Tn(),Cn(),o(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),On()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),t()},1)):t()}if(n.run=X,n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return X(),n.ready}}();const _=document.createElement("canvas"),hn=_.getContext("2d");async function Yn(i,n){if(n&&n[0]){i.innerHTML="";const o=n[0],u=await Jn(o);i.appendChild(_);const a=new Image;a.src=u.toString(),a.onload=()=>{const s=Qn(a.width,a.height);_.setAttribute("width",s.width.toString()),_.setAttribute("height",s.height.toString()),hn.drawImage(a,0,0,_.width,_.height),$n(i,a)}}}function $n(i,n){const o={invert:vn("Invert",i),bw:vn("Black & White",i)},u={brightness:w(-100,100,"Brightness",0,i),contrast:w(-100,100,"Contrast",0,i),saturation:w(-100,100,"Saturation",0,i),redSaturation:w(-100,100,"Red Saturation",0,i),orangeSaturation:w(-100,100,"Orange Saturation",0,i),yellowSaturation:w(-100,100,"Yellow Saturation",0,i),greenSaturation:w(-100,100,"Green Saturation",0,i),tealSaturation:w(-100,100,"Teal Saturation",0,i),cyanSaturation:w(-100,100,"Cyan Saturation",0,i),blueSaturation:w(-100,100,"Blue Saturation",0,i),purpleSaturation:w(-100,100,"Purple Saturation",0,i),magentaSaturation:w(-100,100,"Magenta Saturation",0,i)};Kn().then(a=>{const s=a.cwrap("render","number",["number","array","array","number"]),d=K(K({},o),u);Object.values(d).forEach(A=>A.addEventListener("change",()=>xn(n,_,hn,o,u,s,a)))})}function Jn(i){return new Promise((n,o)=>{const u=new FileReader;u.readAsDataURL(i),u.onload=()=>n(u.result?u.result.toString():""),u.onerror=a=>o(a)})}function Qn(i,n){const o=window.innerHeight*.5,u=window.innerWidth*.5;let a;return i>n?a={width:u,height:u*n/i}:a={width:o*i/n,height:o},a}const gn=document.querySelector("#app"),D=document.createElement("input");D.setAttribute("type","file");gn.appendChild(D);D.addEventListener("change",()=>{Yn(gn,D.files)});