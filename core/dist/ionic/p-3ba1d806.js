import{w as a}from"./p-9e4813c3.js";import{b as e,L as i,a as n,c as t}from"./p-94c4865f.js";const s=e=>new Promise((i,n)=>{a(()=>{o(e),r(e).then(a=>{a.animation&&a.animation.destroy(),l(e),i(a)},a=>{l(e),n(a)})})}),o=a=>{const e=a.enteringEl,i=a.leavingEl;_(e,i,a.direction),a.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),h(e,!1),i&&h(i,!1)},r=async a=>{const e=await c(a);return e?d(e,a):m(a)},l=a=>{const e=a.leavingEl;a.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},c=async a=>{if(a.leavingEl&&a.animated&&0!==a.duration)return a.animationBuilder?a.animationBuilder:"ios"===a.mode?(await(()=>__sc_import_ionic("./p-3939fd76.js"))()).iosTransitionAnimation:(await(()=>__sc_import_ionic("./p-9dfa7bb7.js"))()).mdTransitionAnimation},d=async(a,e)=>{await p(e,!0);const i=await __sc_import_ionic("./p-d9adb105.js").then(i=>i.create(a,e.baseEl,e));return b(e.enteringEl,e.leavingEl),await v(i,e),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&E(e.enteringEl,e.leavingEl),{hasCompleted:i.hasCompleted,animation:i}},m=async a=>{const e=a.enteringEl,i=a.leavingEl;return await p(a,!1),b(e,i),E(e,i),{hasCompleted:!0}},p=async(a,e)=>{const i=(void 0!==a.deepWait?a.deepWait:e)?[u(a.enteringEl),u(a.leavingEl)]:[y(a.enteringEl),y(a.leavingEl)];await Promise.all(i),await g(a.viewIsReady,a.enteringEl)},g=async(a,e)=>{a&&await a(e)},v=(a,e)=>{const i=e.progressCallback,n=new Promise(e=>a.onFinish(e));return i?(a.progressStart(),i(a)):a.play(),n},b=(a,n)=>{w(n,e),w(a,i)},E=(a,e)=>{w(a,n),w(e,t)},w=(a,e)=>{if(a){const i=new CustomEvent(e,{bubbles:!1,cancelable:!1});a.dispatchEvent(i)}},y=a=>a&&a.componentOnReady?a.componentOnReady():Promise.resolve(),u=async a=>{const e=a;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(u))}},h=(a,e)=>{e?(a.setAttribute("aria-hidden","true"),a.classList.add("ion-page-hidden")):(a.hidden=!1,a.removeAttribute("aria-hidden"),a.classList.remove("ion-page-hidden"))},_=(a,e,i)=>{void 0!==a&&(a.style.zIndex="back"===i?"99":"101"),void 0!==e&&(e.style.zIndex="100")};export{u as d,w as l,h as s,s as t};