import{s as $,A as b,a as v,c as w,i as k,d as I,Y as m}from"../chunks/scheduler.9ec8345f.js";import{S as B,i as C,b as f,d as g,m as d,a as u,t as y,e as _}from"../chunks/index.e8bab12c.js";import{b as P,g as A,a as S,v as T,c as h}from"../chunks/version.e550b0d7.js";import{C as Y}from"../chunks/CategoryPage.1dcb77e0.js";import{L as D}from"../chunks/landmark.df4465bf.js";function U(a){let o,n,e,s;o=new P({props:{title:a[1],description:a[2],url:a[3],preloadFont:a[0],keywords:a[4]}});const r=[a[5]];let c={};for(let t=0;t<r.length;t+=1)c=b(c,r[t]);return e=new Y({props:c}),{c(){f(o.$$.fragment),n=v(),f(e.$$.fragment)},l(t){g(o.$$.fragment,t),n=w(t),g(e.$$.fragment,t)},m(t,i){d(o,t,i),k(t,n,i),d(e,t,i),s=!0},p(t,[i]){const p=i&32?A(r,[S(t[5])]):{};e.$set(p)},i(t){s||(u(o.$$.fragment,t),u(e.$$.fragment,t),s=!0)},o(t){y(o.$$.fragment,t),y(e.$$.fragment,t),s=!1},d(t){t&&I(n),_(o,t),_(e,t)}}}function j(a,o,n){let{data:e}=o;T();const s=["https://fonts.gstatic.com/s/vollkorn/v22/0yb9GDoxxrvAnPhYGxkpaE0Urhg0.woff2","https://fonts.gstatic.com/s/staatliches/v11/HI_OiY8KO6hCsQSoAPmtMYebvpCfOMPT.woff2","https://fonts.gstatic.com/s/robotoslab/v25/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRjV9Su1caiTVo.woff2"],{title:r,description:c,url:t,keywords:i}=h;m("copy",h),m("data",e.data);let p={icon:D,title:"Policy Change",description:"Did you know that there’s a Bill that would support electrifying  the Fairmount Line? Learn how you can contribute to the passing of this policy by attending public bill hearings and supporting policy advocacy work.",actionItems:[{title:"Action Item Title",description:"Brief Description of action item",linkUrl:"#"},{title:"Action Item Title",description:"Brief Description of action item",linkUrl:"#"},{title:"Action Item Title",description:"Brief Description of action item",linkUrl:"#"}]};return a.$$set=l=>{"data"in l&&n(6,e=l.data)},[s,r,c,t,i,p,e]}class G extends B{constructor(o){super(),C(this,o,j,U,$,{data:6})}}export{G as component};
