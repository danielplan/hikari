var x=Object.defineProperty;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var v=(t,e,o)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,p=(t,e)=>{for(var o in e||(e={}))L.call(e,o)&&v(t,o,e[o]);if(f)for(var o of f(e))I.call(e,o)&&v(t,o,e[o]);return t};const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}};k();function w(t,e,o){const r=document.createElement("label");r.innerText=t,r.htmlFor=t;const n=document.createElement("input");n.value=e,n.name=t;const a=document.createElement("div");return a.classList.add("control-item"),a.appendChild(r),a.appendChild(n),o.appendChild(a),{controlParent:a,controlElement:n}}function s(t,e,o,r,n){const{controlElement:a,controlParent:i}=w(o,r.toString(),n);return a.type="range",a.min=t.toString(),a.max=e.toString(),a.classList.add("range-element"),i.appendChild(A(a)),a}function S(t,e){const{controlElement:o}=w(t,"1",e);return o.type="checkbox",o.classList.add("checkbox-element"),o}function A(t){const e=document.createElement("input");return e.classList.add("number-element"),e.min=t.min,e.max=t.max,e.type="number",e.value=t.value,t.addEventListener("input",()=>{e.value=t.value}),e.addEventListener("change",()=>{t.value=e.value,t.dispatchEvent(new InputEvent("change"))}),e}function b(t,e,o,r,n,a){const i=new Uint8Array(Object.values(r).map(c=>c.checked?1:0)),u=new Uint8Array(Object.values(n).map(c=>Number.parseInt(c.value)+100)),l=e.getImageData(0,0,t.width,t.height);a.postMessage({settingsValues:i,controlValues:u,imageData:l}),a.onmessage=c=>{const m=c.data;o.putImageData(m,0,0),console.log("data put")}}function O(t,e,o,r){const n=document.createElement("canvas"),a=t.width,i=t.height;let u=0,l=0,c=1920;a>i?(c=Math.min(c,a),u=c,l=i*c/a):(c=Math.min(c,i),l=c,u=a*c/i),n.width=u,n.height=l;const m=n.getContext("2d");m.drawImage(t,0,0,u,l),b(n,m,m,e,o,r),r.onmessage=()=>R(n,r)}function R(t,e){const o=t.toDataURL("image/jpg"),r=document.createElement("a");r.download="hikari-export.jpg",r.href=o,r.click(),r.remove(),e.onmessage=null}function j(){return new Worker("/hikari/assets/renderWorker.bc2beee3.js",{type:"module"})}const d=document.createElement("canvas"),h=document.createElement("canvas"),C=d.getContext("2d"),y=h.getContext("2d");async function D(t,e){if(e&&e[0]){t.innerHTML="";const o=e[0],r=await W(o);t.appendChild(d);const n=new Image;n.src=r.toString(),n.onload=()=>{const a=B(n.width,n.height);d.setAttribute("width",a.width.toString()),d.setAttribute("height",a.height.toString()),C.drawImage(n,0,0,d.width,d.height),h.setAttribute("width",a.width.toString()),h.setAttribute("height",a.height.toString()),y.drawImage(n,0,0,h.width,h.height),P(t,n)}}}function M(t,e,o,r,n){const a=document.createElement("button");a.textContent="Export",a.onclick=()=>O(e,o,r,n),t.appendChild(a)}function P(t,e){const o={invert:S("Invert",t),bw:S("Black & White",t)},r={brightness:s(-100,100,"Brightness",0,t),contrast:s(-100,100,"Contrast",0,t),saturation:s(-100,100,"Saturation",0,t),redSaturation:s(-100,100,"Red Saturation",0,t),orangeSaturation:s(-100,100,"Orange Saturation",0,t),yellowSaturation:s(-100,100,"Yellow Saturation",0,t),greenSaturation:s(-100,100,"Green Saturation",0,t),tealSaturation:s(-100,100,"Teal Saturation",0,t),cyanSaturation:s(-100,100,"Cyan Saturation",0,t),blueSaturation:s(-100,100,"Blue Saturation",0,t),purpleSaturation:s(-100,100,"Purple Saturation",0,t),magentaSaturation:s(-100,100,"Magenta Saturation",0,t)},n=new j,a=p(p({},o),r);M(t,e,o,r,n),Object.values(a).forEach(i=>i.addEventListener("change",()=>b(h,y,C,o,r,n)))}function W(t){return new Promise((e,o)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(r.result?r.result.toString():""),r.onerror=n=>o(n)})}function B(t,e){const o=window.innerHeight*.5,r=window.innerWidth*.5;let n;return t>e?n={width:r,height:r*e/t}:n={width:o*t/e,height:o},n}const E=document.querySelector("#app"),g=document.createElement("input");g.setAttribute("type","file");E.appendChild(g);g.addEventListener("change",()=>{D(E,g.files)});
