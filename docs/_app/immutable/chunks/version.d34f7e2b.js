import{s as z,f as h,e as j,$ as N,g as p,d as f,j as t,x as d,y as A,J as q,i as L,a as E,h as I,c as C,K as T}from"./scheduler.3b5a6479.js";import{e as P}from"./move-left.03d5ad2c.js";import{S as J,i as K}from"./index.4e4671be.js";import{a as H}from"./paths.4fa71909.js";function D(s,e,n){const o=s.slice();return o[5]=e[n],o}function S(s){let e,n;return{c(){e=h("link"),this.h()},l(o){e=p(o,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){t(e,"rel","preload"),t(e,"href",n=s[5]),t(e,"as","font"),t(e,"type","font/woff2"),t(e,"crossorigin","")},m(o,a){L(o,e,a)},p(o,a){a&16&&n!==(n=o[5])&&t(e,"href",n)},d(o){o&&f(e)}}}function B(s){let e,n,o,a,y,w,u,c,k,_,M,r,b,x;document.title=e=s[0];let v=P(s[4]),g=[];for(let i=0;i<v.length;i+=1)g[i]=S(D(s,v,i));return{c(){n=h("meta"),o=h("meta"),a=h("meta"),y=h("meta"),w=h("meta"),u=h("meta"),c=h("meta"),k=h("meta"),_=h("meta"),M=h("meta"),r=h("link");for(let i=0;i<g.length;i+=1)g[i].c();x=j(),this.h()},l(i){const l=N("svelte-1b7avhw",document.head);n=p(l,"META",{name:!0,content:!0}),o=p(l,"META",{name:!0,content:!0}),a=p(l,"META",{name:!0,content:!0}),y=p(l,"META",{property:!0,content:!0}),w=p(l,"META",{property:!0,content:!0}),u=p(l,"META",{property:!0,content:!0}),c=p(l,"META",{property:!0,content:!0}),k=p(l,"META",{property:!0,content:!0}),_=p(l,"META",{property:!0,content:!0}),M=p(l,"META",{name:!0,content:!0}),r=p(l,"LINK",{rel:!0,href:!0});for(let m=0;m<g.length;m+=1)g[m].l(l);x=j(),l.forEach(f),this.h()},h(){t(n,"name","description"),t(n,"content",s[1]),t(o,"name","author"),t(o,"content","Climate & Community"),t(a,"name","news_keywords"),t(a,"content",s[3]),t(y,"property","og:title"),t(y,"content",s[0]),t(w,"property","og:site_name"),t(w,"content","Climate & Community"),t(u,"property","og:url"),t(u,"content",s[2]),t(c,"property","og:description"),t(c,"content",s[1]),t(k,"property","og:type"),t(k,"content","article"),t(_,"property","og:locale"),t(_,"content","en_US"),t(M,"name","robots"),t(M,"content","max-image-preview:large"),t(r,"rel","canonical"),t(r,"href",b=s[2]+"/")},m(i,l){d(document.head,n),d(document.head,o),d(document.head,a),d(document.head,y),d(document.head,w),d(document.head,u),d(document.head,c),d(document.head,k),d(document.head,_),d(document.head,M),d(document.head,r);for(let m=0;m<g.length;m+=1)g[m]&&g[m].m(document.head,null);d(document.head,x)},p(i,[l]){if(l&1&&e!==(e=i[0])&&(document.title=e),l&2&&t(n,"content",i[1]),l&8&&t(a,"content",i[3]),l&1&&t(y,"content",i[0]),l&4&&t(u,"content",i[2]),l&2&&t(c,"content",i[1]),l&4&&b!==(b=i[2]+"/")&&t(r,"href",b),l&16){v=P(i[4]);let m;for(m=0;m<v.length;m+=1){const F=D(i,v,m);g[m]?g[m].p(F,l):(g[m]=S(F),g[m].c(),g[m].m(x.parentNode,x))}for(;m<g.length;m+=1)g[m].d(1);g.length=v.length}},i:A,o:A,d(i){f(n),f(o),f(a),f(y),f(w),f(u),f(c),f(k),f(_),f(M),f(r),q(g,i),f(x)}}}function U(s,e,n){let{title:o="Fairmount Stories"}=e,{description:a="Mobility, Advocacy, and Environmental Justice"}=e,{url:y="https://fairmountstories.airpartners.org"}=e,{keywords:w=""}=e,{preloadFont:u=[]}=e;return s.$$set=c=>{"title"in c&&n(0,o=c.title),"description"in c&&n(1,a=c.description),"url"in c&&n(2,y=c.url),"keywords"in c&&n(3,w=c.keywords),"preloadFont"in c&&n(4,u=c.preloadFont)},[o,a,y,w,u]}class $ extends J{constructor(e){super(),K(this,e,U,B,z,{title:0,description:1,url:2,keywords:3,preloadFont:4})}}function V(s){let e,n='<a class="border-0" href="#welcome"><div class="flex flex-col justify-center items-center gap-5"><div class="bg-slate-600 rounded-full drop-shadow-md transition hover:scale-110 hover:bg-slate-500"><p class="toolip text-center hover:text-white scroll-arrow svelte-36x6xw">ꜛ</p></div> <p class="tooltip text-center drop-shadow-md">back to top</p></div></a>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(o){e=p(o,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-kvxg9c"&&(e.innerHTML=n),this.h()},h(){t(e,"class","flex justify-center items-center")},m(o,a){L(o,e,a)},d(o){o&&f(e)}}}function W(s){let e,n,o,a,y='<h1 class="tracking-wide text-center">Fairmount Stories:</h1> <h2 class="tracking-wide text-center">Mobility, Advocacy, and Environmental Justice</h2>',w,u,c='<div class="w-36 m-auto flex flex-col items-center gap-2"><p class="font-normal tooltip transition hover:text-white"><a href="mailto:kbeaver@dbedc.org">Contact us</a></p> <p class="font-normal tooltip transition hover:text-white"><a href="/about">About this site</a></p></div> <div class="w-36 m-auto flex flex-col items-center gap-2"><p class="font-normal tooltip">Got feedback?</p> <p class="font-normal tooltip"><a class="hover:text-white transition" href="https://docs.google.com/forms/d/1UP20gDuXhdjoRH0WL2iLQeVWBkLHguHPjCCA16npwnM/viewform" target="_blank">Please tell us!</a></p></div>',k,_,M=`<p class="font-normal text-center tooltip w-48 sm:w-full">Created in Boston in association with:</p> <div class="flex sm:gap-10 flex-wrap flex-col sm:flex-row justify-center bg-slate-200 p-4 rounded-[2em] sm:rounded-full divide-y divide-slate-300 sm:divide-none"><a href="https://community.massenergize.org/fairmount-boston/" class="border-0 pb-4 sm:p-0" target="_blank"><img src="${H}/assets/logos/ficc-logo.png" alt="FICC logo" class="h-[3em]"/></a> <a href="https://elab.emerson.edu" class="border-0 py-4 sm:p-0" target="_blank"><img src="${H}/assets/logos/elab-logo.png" alt="Engagement Lab logo" class="h-[3em]"/></a> <a href="https://airpartners.org" class="border-0 pt-4 sm:p-0" target="_blank"><img src="${H}/assets/logos/air-partners-logo.png" alt="Air Partners logo" class="h-[3em]"/></a></div>`,r=s[0]&&V();return{c(){e=h("div"),n=h("div"),r&&r.c(),o=E(),a=h("a"),a.innerHTML=y,w=E(),u=h("div"),u.innerHTML=c,k=E(),_=h("div"),_.innerHTML=M,this.h()},l(b){e=p(b,"DIV",{class:!0});var x=I(e);n=p(x,"DIV",{class:!0});var v=I(n);r&&r.l(v),o=C(v),a=p(v,"A",{href:!0,class:!0,"data-svelte-h":!0}),T(a)!=="svelte-dnh2ag"&&(a.innerHTML=y),w=C(v),u=p(v,"DIV",{class:!0,"data-svelte-h":!0}),T(u)!=="svelte-1vkgq8m"&&(u.innerHTML=c),k=C(v),_=p(v,"DIV",{class:!0,"data-svelte-h":!0}),T(_)!=="svelte-8lom5z"&&(_.innerHTML=M),v.forEach(f),x.forEach(f),this.h()},h(){t(a,"href","/"),t(a,"class","w-full hover:text-white transition border-0"),t(u,"class","w-86 flex flex-wrap justify-between gap-6"),t(_,"class","flex flex-col items-center gap-4"),t(n,"class","m-auto w-full max-w-screen-md flex flex-col justify-center items-center gap-10 z-50"),t(e,"class","flex bg-slate-800 w-full py-20 px-5 text-slate-300 min-h-[80vh] z-50")},m(b,x){L(b,e,x),d(e,n),r&&r.m(n,null),d(n,o),d(n,a),d(n,w),d(n,u),d(n,k),d(n,_)},p(b,[x]){b[0]?r||(r=V(),r.c(),r.m(n,o)):r&&(r.d(1),r=null)},i:A,o:A,d(b){b&&f(e),r&&r.d()}}}function G(s,e,n){let{isHomePage:o=!1}=e;return s.$$set=a=>{"isHomePage"in a&&n(0,o=a.isHomePage)},[o]}class ee extends J{constructor(e){super(),K(this,e,G,W,z,{isHomePage:0})}}const Q="Fairmount Stories",R="Mobility, Advocacy, and Environmental Justice",te={title:Q,description:R};function ne(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 5.11.2"),console.log("--- --- --- --- --- ---")}export{ee as F,$ as M,te as c,ne as v};
