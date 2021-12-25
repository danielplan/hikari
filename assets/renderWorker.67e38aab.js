(()=>{(function(){"use strict";var oA=function(){var l=document.currentScript&&document.currentScript.src||new URL("renderWorker.js",document.baseURI).href;return function(r){r=r||{};var r=typeof r!="undefined"?r:{},b,p;r.ready=new Promise(function(A,n){b=A,p=n});var u={},o;for(o in r)r.hasOwnProperty(o)&&(u[o]=r[o]);var R=!1,Q=!1,v=!1,K=!1;R=typeof window=="object",Q=typeof importScripts=="function",v=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",K=!R&&!v&&!Q;var I="";function IA(A){return r.locateFile?r.locateFile(A,I):I+A}var H,T,h,d,N;v?(Q?I=require("path").dirname(I)+"/":I=__dirname+"/",H=function(n,t){var e=w(n);return e?t?e:e.toString():(d||(d=require("fs")),N||(N=require("path")),n=N.normalize(n),d.readFileSync(n,t?null:"utf8"))},h=function(n){var t=H(n,!0);return t.buffer||(t=new Uint8Array(t)),_(t.buffer),t},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(A){if(!(A instanceof TA))throw A}),process.on("unhandledRejection",S),r.inspect=function(){return"[Emscripten Module object]"}):K?(typeof read!="undefined"&&(H=function(n){var t=w(n);return t?eA(t):read(n)}),h=function(n){var t;return t=w(n),t||(typeof readbuffer=="function"?new Uint8Array(readbuffer(n)):(t=read(n,"binary"),_(typeof t=="object"),t))},typeof scriptArgs!="undefined"&&scriptArgs,typeof print!="undefined"&&(typeof console=="undefined"&&(console={}),console.log=print,console.warn=console.error=typeof printErr!="undefined"?printErr:print)):(R||Q)&&(Q?I=self.location.href:typeof document!="undefined"&&document.currentScript&&(I=document.currentScript.src),l&&(I=l),I.indexOf("blob:")!==0?I=I.substr(0,I.lastIndexOf("/")+1):I="",H=function(A){try{var n=new XMLHttpRequest;return n.open("GET",A,!1),n.send(null),n.responseText}catch(e){var t=w(A);if(t)return eA(t);throw e}},Q&&(h=function(A){try{var n=new XMLHttpRequest;return n.open("GET",A,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}catch(e){var t=w(A);if(t)return t;throw e}}),T=function(A,n,t){var e=new XMLHttpRequest;e.open("GET",A,!0),e.responseType="arraybuffer",e.onload=function(){if(e.status==200||e.status==0&&e.response){n(e.response);return}var f=w(A);if(f){n(f.buffer);return}t()},e.onerror=t,e.send(null)}),r.print||console.log.bind(console);var F=r.printErr||console.warn.bind(console);for(o in u)u.hasOwnProperty(o)&&(r[o]=u[o]);u=null,r.arguments,r.thisProgram,r.quit;var D;r.wasmBinary&&(D=r.wasmBinary),r.noExitRuntime,typeof WebAssembly!="object"&&S("no native wasm support detected");var X,z=!1;function _(A,n){A||S("Assertion failed: "+n)}function Y(A){var n=r["_"+A];return _(n,"Cannot call unknown function "+A+", make sure it is exported"),n}function j(A,n,t,e,f){var g={string:function(C){var m=0;if(C!=null&&C!==0){var sA=(C.length<<2)+1;m=O(sA),QA(C,m,sA)}return m},array:function(C){var m=O(C.length);return uA(C,m),m}};function a(C){return n==="string"?CA(C):n==="boolean"?Boolean(C):C}var i=Y(A),s=[],E=0;if(e)for(var c=0;c<e.length;c++){var gA=g[t[c]];gA?(E===0&&(E=aA()),s[c]=gA(e[c])):s[c]=e[c]}var q=i.apply(null,s);return q=a(q),E!==0&&fA(E),q}function BA(A,n,t,e){t=t||[];var f=t.every(function(a){return a==="number"}),g=n!=="string";return g&&f&&!e?Y(A):function(){return j(A,n,t,arguments)}}var V=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):void 0;function cA(A,n,t){for(var e=n+t,f=n;A[f]&&!(f>=e);)++f;if(f-n>16&&A.subarray&&V)return V.decode(A.subarray(n,f));for(var g="";n<f;){var a=A[n++];if(!(a&128)){g+=String.fromCharCode(a);continue}var i=A[n++]&63;if((a&224)==192){g+=String.fromCharCode((a&31)<<6|i);continue}var s=A[n++]&63;if((a&240)==224?a=(a&15)<<12|i<<6|s:a=(a&7)<<18|i<<12|s<<6|A[n++]&63,a<65536)g+=String.fromCharCode(a);else{var E=a-65536;g+=String.fromCharCode(55296|E>>10,56320|E&1023)}}return g}function CA(A,n){return A?cA(k,A,n):""}function EA(A,n,t,e){if(!(e>0))return 0;for(var f=t,g=t+e-1,a=0;a<A.length;++a){var i=A.charCodeAt(a);if(i>=55296&&i<=57343){var s=A.charCodeAt(++a);i=65536+((i&1023)<<10)|s&1023}if(i<=127){if(t>=g)break;n[t++]=i}else if(i<=2047){if(t+1>=g)break;n[t++]=192|i>>6,n[t++]=128|i&63}else if(i<=65535){if(t+2>=g)break;n[t++]=224|i>>12,n[t++]=128|i>>6&63,n[t++]=128|i&63}else{if(t+3>=g)break;n[t++]=240|i>>18,n[t++]=128|i>>12&63,n[t++]=128|i>>6&63,n[t++]=128|i&63}}return n[t]=0,t-f}function QA(A,n,t){return EA(A,k,n,t)}function uA(A,n){Z.set(A,n)}var Z,k;function yA(A){r.HEAP8=Z=new Int8Array(A),r.HEAP16=new Int16Array(A),r.HEAP32=new Int32Array(A),r.HEAPU8=k=new Uint8Array(A),r.HEAPU16=new Uint16Array(A),r.HEAPU32=new Uint32Array(A),r.HEAPF32=new Float32Array(A),r.HEAPF64=new Float64Array(A)}r.INITIAL_MEMORY;var J,x=[],$=[],wA=[],M=[];$.push({func:function(){iA()}});function RA(){if(r.preRun)for(typeof r.preRun=="function"&&(r.preRun=[r.preRun]);r.preRun.length;)vA(r.preRun.shift());G(x)}function mA(){G($)}function lA(){G(wA)}function pA(){if(r.postRun)for(typeof r.postRun=="function"&&(r.postRun=[r.postRun]);r.postRun.length;)hA(r.postRun.shift());G(M)}function vA(A){x.unshift(A)}function hA(A){M.unshift(A)}var y=0,U=null;function FA(A){y++,r.monitorRunDependencies&&r.monitorRunDependencies(y)}function DA(A){if(y--,r.monitorRunDependencies&&r.monitorRunDependencies(y),y==0&&U){var n=U;U=null,n()}}r.preloadedImages={},r.preloadedAudios={};function S(A){r.onAbort&&r.onAbort(A),A+="",F(A),z=!0,A="abort("+A+"). Build with -s ASSERTIONS=1 for more info.";var n=new WebAssembly.RuntimeError(A);throw p(n),n}function AA(A,n){return String.prototype.startsWith?A.startsWith(n):A.indexOf(n)===0}var nA="data:application/octet-stream;base64,";function P(A){return AA(A,nA)}var UA="file://";function rA(A){return AA(A,UA)}var B="data:application/octet-stream;base64,AGFzbQEAAAABTA5gAnx8AXxgAABgAX8AYAJ/fwBgBH9/f38AYAN/f3wAYAJ/fABgA398fQBgA398fABgBX98fHx/AGAAAX9gAX8Bf2ABfwF9YAF8AXwDEA8JAQAACAUHBgMMCwIKDQQEBQFwAQEBBQYBAYACgAIGCQF/AUGQiMACCwcdBwFhAgABYgABAWMADgFkAAwBZQALAWYACgFnAQAK+xgP0QYBAX0CQAJAAkACQAJAAkACQAJAAkACQAJAIARB4gBrDhgGBQkJCQMJCQkJCQgJAQcJAAkECQkJCQIJCyADRAAAAAAAACRAZSADRAAAAAAAQHVAZHJFDQgMCQsgA0QAAAAAAABEQGUgA0QAAAAAAAAkQGRxRQ0HDAgLIANEAAAAAAAATkBlIANEAAAAAAAAREBkcUUNBgwHCyADRAAAAAAAQGBAZSADRAAAAAAAAE5AZHFFDQUMBgsgA0QAAAAAAABkQGUgA0QAAAAAAEBgQGRxRQ0EDAULIANEAAAAAACAa0BlIANEAAAAAAAAZEBkcUUNAwwECyADRAAAAAAAQHBAZSADRAAAAAAAgGtAZHFFDQIMAwsgA0QAAAAAAMByQGUgA0QAAAAAAEBwQGRxRQ0BDAILIANEAAAAAABAdUBlIANEAAAAAADAckBkcUUNACAAAn8CfyAALQAAIgSzIAK2IgWTuyABoiICmUQAAAAAAADgQWMEQCACqgwBC0GAgICAeAsgBGoiBEEATgRAIARB/wEgBEH/AUgbQf8BcQwBC0EACzoAACAAAn8CfyAALQABIgSzIAWTuyABoiICmUQAAAAAAADgQWMEQCACqgwBC0GAgICAeAsgBGoiBEEATgRAIARB/wEgBEH/AUgbQf8BcQwBC0EACzoAASAAAn8CfyAALQACIgCzIAWTuyABoiIBmUQAAAAAAADgQWMEQCABqgwBC0GAgICAeAsgAGoiAEEATgRAIABB/wEgAEH/AUgbQf8BcQwBC0EACzoAAgsPCyAAAn8CfyAALQAAIgSzIAK2IgWTuyABoiICmUQAAAAAAADgQWMEQCACqgwBC0GAgICAeAsgBGoiBEEATgRAIARB/wEgBEH/AUgbQf8BcQwBC0EACzoAACAAAn8CfyAALQABIgSzIAWTuyABoiICmUQAAAAAAADgQWMEQCACqgwBC0GAgICAeAsgBGoiBEEATgRAIARB/wEgBEH/AUgbQf8BcQwBC0EACzoAASAAAn8CfyAALQACIgCzIAWTuyABoiIBmUQAAAAAAADgQWMEQCABqgwBC0GAgICAeAsgAGoiAEEATgRAIABB/wEgAEH/AUgbQf8BcQwBC0EACzoAAgsDAAELRgAgAL1C////////////AINCgICAgICAgPj/AFgEQCAAIAAgAaQgAb1C////////////AINCgICAgICAgPj/AFYbDwsgAQtGACAAvUL///////////8Ag0KAgICAgICA+P8AWARAIAAgACABpSABvUL///////////8Ag0KAgICAgICA+P8AVhsPCyABC7kBAQJ/IAACfyAALQAAIQMgAwJ/RAAAAAAAwF9AIAKhIAGiIgGZRAAAAAAAAOBBYwRAIAGqDAELQYCAgIB4CyIEaiIDQQBOBEAgA0H/ASADQf8BSBtB/wFxDAELQQALOgAAIAACfyAALQABIARqIgNBAE4EQCADQf8BIANB/wFIG0H/AXEMAQtBAAs6AAEgAAJ/IAAtAAIgBGoiAEEATgRAIABB/wEgAEH/AUgbQf8BcQwBC0EACzoAAguFAgEBfSABQQFGBEAgAAJ/An8gAC0AACIBsyACtiIDk7uaIgKZRAAAAAAAAOBBYwRAIAKqDAELQYCAgIB4CyABaiIBQQBOBEAgAUH/ASABQf8BSBtB/wFxDAELQQALOgAAIAACfwJ/IAAtAAEiAbMgA5O7miICmUQAAAAAAADgQWMEQCACqgwBC0GAgICAeAsgAWoiAUEATgRAIAFB/wEgAUH/AUgbQf8BcQwBC0EACzoAASAAAn8CfyAALQACIgCzIAOTu5oiAplEAAAAAAAA4EFjBEAgAqoMAQtBgICAgHgLIABqIgBBAE4EQCAAQf8BIABB/wFIG0H/AXEMAQtBAAs6AAILC4ICAgF/AXwgAAJ/An8gAC0AACIDsyACk7sgAaIiBJlEAAAAAAAA4EFjBEAgBKoMAQtBgICAgHgLIANqIgNBAE4EQCADQf8BIANB/wFIG0H/AXEMAQtBAAs6AAAgAAJ/An8gAC0AASIDsyACk7sgAaIiBJlEAAAAAAAA4EFjBEAgBKoMAQtBgICAgHgLIANqIgNBAE4EQCADQf8BIANB/wFIG0H/AXEMAQtBAAs6AAEgAAJ/An8gAC0AAiIA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";P(B)||(B=IA(B));function tA(A){try{if(A==B&&D)return new Uint8Array(D);var n=w(A);if(n)return n;if(h)return h(A);throw"both async and sync fetching of the wasm failed"}catch(t){S(t)}}function SA(){if(!D&&(R||Q)){if(typeof fetch=="function"&&!rA(B))return fetch(B,{credentials:"same-origin"}).then(function(A){if(!A.ok)throw"failed to load wasm binary file at '"+B+"'";return A.arrayBuffer()}).catch(function(){return tA(B)});if(T)return new Promise(function(A,n){T(B,function(t){A(new Uint8Array(t))},n)})}return Promise.resolve().then(function(){return tA(B)})}function bA(){var A={a:LA};function n(a,i){var s=a.exports;r.asm=s,X=r.asm.a,yA(X.buffer),J=r.asm.g,DA()}FA();function t(a){n(a.instance)}function e(a){return SA().then(function(i){return WebAssembly.instantiate(i,A)}).then(a,function(i){F("failed to asynchronously prepare wasm: "+i),S(i)})}function f(){return!D&&typeof WebAssembly.instantiateStreaming=="function"&&!P(B)&&!rA(B)&&typeof fetch=="function"?fetch(B,{credentials:"same-origin"}).then(function(a){var i=WebAssembly.instantiateStreaming(a,A);return i.then(t,function(s){return F("wasm streaming compile failed: "+s),F("falling back to ArrayBuffer instantiation"),e(t)})}):e(t)}if(r.instantiateWasm)try{var g=r.instantiateWasm(A,n);return g}catch(a){return F("Module.instantiateWasm callback failed with error: "+a),!1}return f().catch(p),{}}function G(A){for(;A.length>0;){var n=A.shift();if(typeof n=="function"){n(r);continue}var t=n.func;typeof t=="number"?n.arg===void 0?J.get(t)():J.get(t)(n.arg):t(n.arg===void 0?null:n.arg)}}function eA(A){for(var n=[],t=0;t<A.length;t++){var e=A[t];e>255&&(e&=255),n.push(String.fromCharCode(e))}return n.join("")}var HA=typeof atob=="function"?atob:function(A){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="",e,f,g,a,i,s,E,c=0;A=A.replace(/[^A-Za-z0-9\+\/\=]/g,"");do a=n.indexOf(A.charAt(c++)),i=n.indexOf(A.charAt(c++)),s=n.indexOf(A.charAt(c++)),E=n.indexOf(A.charAt(c++)),e=a<<2|i>>4,f=(i&15)<<4|s>>2,g=(s&3)<<6|E,t=t+String.fromCharCode(e),s!==64&&(t=t+String.fromCharCode(f)),E!==64&&(t=t+String.fromCharCode(g));while(c<A.length);return t};function GA(A){if(typeof v=="boolean"&&v){var n;try{n=Buffer.from(A,"base64")}catch{n=new Buffer(A,"base64")}return new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}try{for(var t=HA(A),e=new Uint8Array(t.length),f=0;f<t.length;++f)e[f]=t.charCodeAt(f);return e}catch{throw new Error("Converting base64 string to bytes failed.")}}function w(A){if(!!P(A))return GA(A.slice(nA.length))}var LA={};bA();var iA=r.___wasm_call_ctors=function(){return(iA=r.___wasm_call_ctors=r.asm.b).apply(null,arguments)};r._render=function(){return(r._render=r.asm.c).apply(null,arguments)};var aA=r.stackSave=function(){return(aA=r.stackSave=r.asm.d).apply(null,arguments)},fA=r.stackRestore=function(){return(fA=r.stackRestore=r.asm.e).apply(null,arguments)},O=r.stackAlloc=function(){return(O=r.stackAlloc=r.asm.f).apply(null,arguments)};r.ccall=j,r.cwrap=BA;var L;function TA(A){this.name="ExitStatus",this.message="Program terminated with exit("+A+")",this.status=A}U=function A(){L||W(),L||(U=A)};function W(A){if(y>0||(RA(),y>0))return;function n(){L||(L=!0,r.calledRun=!0,!z&&(mA(),lA(),b(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),pA()))}r.setStatus?(r.setStatus("Running..."),setTimeout(function(){setTimeout(function(){r.setStatus("")},1),n()},1)):n()}if(r.run=W,r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return W(),r.ready}}();(async function(){const l=await oA(),r=l.cwrap("render","number",["number","array","array","number"]);onmessage=b=>{const{settingsValues:p,controlValues:u,imageData:o,load:R}=b.data;if(!R){const Q=new Uint8Array(l.HEAP8.buffer,0,o.data.length);Q.set(o.data),r(0,p,u,o.data.length),o.data.set(Q),postMessage(o)}}})()})();})();
