import"./p-9e4813c3.js";import"./p-1074393c.js";import{createGesture as t}from"./p-7795f517.js";const e=(e,o,r,n,i)=>{const a=e.ownerDocument.defaultView;return t({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&o(),onStart:r,onMove:t=>{n(t.deltaX/a.innerWidth)},onEnd:t=>{const e=a.innerWidth,o=t.deltaX/e,r=t.velocityX,n=r>=0&&(r>.2||t.deltaX>e/2),s=(n?1-o:o)*e;let c=0;if(s>5){const t=s/Math.abs(r);c=Math.min(t,300)}i(n,o,c)}})};export{e as createSwipeBackGesture};