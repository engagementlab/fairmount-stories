import{s as $,f as v,m as f}from"../chunks/scheduler.7922fa12.js";import{S as b,i as w,r as l,s as k,u as g,c as I,v as d,a as S,d as u,t as _,f as B,w as y}from"../chunks/index.67927c44.js";import{M as A,g as C,a as P,v as T,c as h}from"../chunks/version.278ef8ea.js";import{C as j}from"../chunks/CategoryPage.3b61b5fa.js";function U(s){let o,i,e,n;o=new A({props:{title:s[1],description:s[2],url:s[3],preloadFont:s[0],keywords:s[4]}});const r=[s[5]];let c={};for(let t=0;t<r.length;t+=1)c=v(c,r[t]);return e=new j({props:c}),{c(){l(o.$$.fragment),i=k(),l(e.$$.fragment)},l(t){g(o.$$.fragment,t),i=I(t),g(e.$$.fragment,t)},m(t,a){d(o,t,a),S(t,i,a),d(e,t,a),n=!0},p(t,[a]){const p=a&32?C(r,[P(t[5])]):{};e.$set(p)},i(t){n||(u(o.$$.fragment,t),u(e.$$.fragment,t),n=!0)},o(t){_(o.$$.fragment,t),_(e.$$.fragment,t),n=!1},d(t){t&&B(i),y(o,t),y(e,t)}}}function Y(s,o,i){let{data:e}=o;T();const n=["https://fonts.gstatic.com/s/vollkorn/v22/0yb9GDoxxrvAnPhYGxkpaE0Urhg0.woff2","https://fonts.gstatic.com/s/staatliches/v11/HI_OiY8KO6hCsQSoAPmtMYebvpCfOMPT.woff2","https://fonts.gstatic.com/s/robotoslab/v25/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRjV9Su1caiTVo.woff2"],{title:r,description:c,url:t,keywords:a}=h;f("copy",h),f("data",e.data);let p={imgSrc:"../../assets/take-action/advocacy-icon.png",title:"Self Advocacy",description:"By speaking up about issues that matter to you, you can contribute to the positive changes you wish to see – just like the residents who shared their stories on this website!",actionItems:[{title:"Action Item Title",description:"Brief Description of action item",linkUrl:"#"},{title:"Action Item Title",description:"Brief Description of action item",linkUrl:"#"},{title:"Action Item Title",description:"Brief Description of action item",linkUrl:"#"}]};return s.$$set=m=>{"data"in m&&i(6,e=m.data)},[n,r,c,t,a,p,e]}class R extends b{constructor(o){super(),w(this,o,Y,U,$,{data:6})}}export{R as component};