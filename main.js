(()=>{"use strict";var e={661:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(272),r=n(434);const a="ee8c332cbd72a23de5f8e2a32d0e2337",c=(e="Berlin",t="",n="")=>{(async(e,t,n,o="5")=>(await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e},${t},${n}&limit=${o}&appid=${a}`)).json())(e,t,n).then((e=>{const t=e[0].lat,n=e[0].lon,c=(async(e,t,n="imperial",o="en")=>(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&units=${n}&lang=${o}&lon=${t}&appid=${a}`)).json())(t,n),i=(async(e,t)=>(await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=${a}`)).json())(t,n);Promise.all([c,i]).then((e=>{(0,o.Z)(e[0]),(0,r.Z)(e[0],t,n),function(e){const t=document.querySelector("div.cities"),n=document.createElement("p");n.textContent=e.name,t.childElementCount>=3?(t.appendChild(n),t.removeChild(t.firstChild)):t.appendChild(n),n.addEventListener("click",(()=>{(0,r.Z)(e),(0,o.Z)(e)}))}(e[0])})).catch((e=>console.log(e)))}))}},233:(e,t,n)=>{var o=n(661);const r=document.querySelector("button"),a=document.querySelector("form");a.addEventListener("submit",(e=>{e.preventDefault()})),r.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("input"),[n,r,c]=t.value.split(",");(0,o.Z)(n,r,c),a.reset()})),(0,o.Z)()},272:(e,t,n)=>{function o(e){const t=document.querySelector("p.degrees"),n=document.querySelector("p.city"),o=document.querySelector("p.time"),r=document.querySelector(".weather-type > p");t.textContent=`${Math.round(e.main.temp)}°`,n.textContent=`${e.name}, ${e.sys.country}`,o.textContent=e.dt,r.textContent=e.weather[0].main}n.d(t,{Z:()=>o})},434:(e,t,n)=>{function o(e){const t=document.querySelector(".weather-detail.description > p:nth-child(1)"),n=document.querySelector(".weather-detail.cloudy > p:nth-child(2)"),o=document.querySelector(".weather-detail.humidity > p:nth-child(2)"),r=document.querySelector(".weather-detail.wind> p:nth-child(2)");t.textContent=`Description: ${e.weather[0].description}`,n.textContent=`${e.clouds.all}%`,o.textContent=`${e.main.humidity}%`,r.textContent=`${e.wind.speed}mi/hr`}n.d(t,{Z:()=>o})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(661),n(233),n(434),n(272)})();