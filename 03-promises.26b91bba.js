function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u=document.querySelector(".form");function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function s({position:t,delay:n}){e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}function a({position:t,delay:n}){e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}!function(){u.insertAdjacentHTML("afterend",'<button type="button">Reset</button>');document.querySelector("button[type='button']").addEventListener("click",(()=>u.reset()))}(),u.reset(),u.addEventListener("input",(function(t){const{delay:n,step:o,amount:r}=t.currentTarget.elements;Number(n.value)<0||Number(o.value)<0||Number(r.value)<0?(e(i).Notify.failure("❌ Values must be positive"),u.lastElementChild.setAttribute("disabled","")):u.lastElementChild.removeAttribute("disabled")})),u.addEventListener("submit",(function(e){e.preventDefault();let t=Number(e.target.elements.delay.value);const n=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value);for(let e=1;e<=o;e+=1)console.log(e,t),l(e,t).then(s).catch(a),t+=n}));
//# sourceMappingURL=03-promises.26b91bba.js.map
