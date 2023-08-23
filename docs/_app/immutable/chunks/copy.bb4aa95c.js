import{s as U,f as b,e as j,_ as K,g as w,d as v,j as o,x as y,y as F,K as N,i as H,$ as q,a0 as I,a as T,h as P,c as A,L as C}from"./scheduler.499edff3.js";import{e as V}from"./move-left.0eb29354.js";import{S as W,i as J}from"./index.a6896509.js";import{a as E}from"./paths.b6d33d37.js";function $(s,e,t){const n=s.slice();return n[5]=e[t],n}function D(s){let e,t;return{c(){e=b("link"),this.h()},l(n){e=w(n,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){o(e,"rel","preload"),o(e,"href",t=s[5]),o(e,"as","font"),o(e,"type","font/woff2"),o(e,"crossorigin","")},m(n,a){H(n,e,a)},p(n,a){a&16&&t!==(t=n[5])&&o(e,"href",t)},d(n){n&&v(e)}}}function B(s){let e,t,n,a,i,f,c,d,p,m,M,l,x,k;document.title=e=s[0];let _=V(s[4]),h=[];for(let r=0;r<_.length;r+=1)h[r]=D($(s,_,r));return{c(){t=b("meta"),n=b("meta"),a=b("meta"),i=b("meta"),f=b("meta"),c=b("meta"),d=b("meta"),p=b("meta"),m=b("meta"),M=b("meta"),l=b("link");for(let r=0;r<h.length;r+=1)h[r].c();k=j(),this.h()},l(r){const u=K("svelte-1b7avhw",document.head);t=w(u,"META",{name:!0,content:!0}),n=w(u,"META",{name:!0,content:!0}),a=w(u,"META",{name:!0,content:!0}),i=w(u,"META",{property:!0,content:!0}),f=w(u,"META",{property:!0,content:!0}),c=w(u,"META",{property:!0,content:!0}),d=w(u,"META",{property:!0,content:!0}),p=w(u,"META",{property:!0,content:!0}),m=w(u,"META",{property:!0,content:!0}),M=w(u,"META",{name:!0,content:!0}),l=w(u,"LINK",{rel:!0,href:!0});for(let g=0;g<h.length;g+=1)h[g].l(u);k=j(),u.forEach(v),this.h()},h(){o(t,"name","description"),o(t,"content",s[1]),o(n,"name","author"),o(n,"content","Climate & Community"),o(a,"name","news_keywords"),o(a,"content",s[3]),o(i,"property","og:title"),o(i,"content",s[0]),o(f,"property","og:site_name"),o(f,"content","Climate & Community"),o(c,"property","og:url"),o(c,"content",s[2]),o(d,"property","og:description"),o(d,"content",s[1]),o(p,"property","og:type"),o(p,"content","article"),o(m,"property","og:locale"),o(m,"content","en_US"),o(M,"name","robots"),o(M,"content","max-image-preview:large"),o(l,"rel","canonical"),o(l,"href",x=s[2]+"/")},m(r,u){y(document.head,t),y(document.head,n),y(document.head,a),y(document.head,i),y(document.head,f),y(document.head,c),y(document.head,d),y(document.head,p),y(document.head,m),y(document.head,M),y(document.head,l);for(let g=0;g<h.length;g+=1)h[g]&&h[g].m(document.head,null);y(document.head,k)},p(r,[u]){if(u&1&&e!==(e=r[0])&&(document.title=e),u&2&&o(t,"content",r[1]),u&8&&o(a,"content",r[3]),u&1&&o(i,"content",r[0]),u&4&&o(c,"content",r[2]),u&2&&o(d,"content",r[1]),u&4&&x!==(x=r[2]+"/")&&o(l,"href",x),u&16){_=V(r[4]);let g;for(g=0;g<_.length;g+=1){const S=$(r,_,g);h[g]?h[g].p(S,u):(h[g]=D(S),h[g].c(),h[g].m(k.parentNode,k))}for(;g<h.length;g+=1)h[g].d(1);h.length=_.length}},i:F,o:F,d(r){v(t),v(n),v(a),v(i),v(f),v(c),v(d),v(p),v(m),v(M),v(l),N(h,r),v(k)}}}function G(s,e,t){let{title:n="Fairmount Stories"}=e,{description:a="Mobility, Advocacy, and Environmental Justice"}=e,{url:i="https://fairmountstories.airpartners.org"}=e,{keywords:f=""}=e,{preloadFont:c=[]}=e;return s.$$set=d=>{"title"in d&&t(0,n=d.title),"description"in d&&t(1,a=d.description),"url"in d&&t(2,i=d.url),"keywords"in d&&t(3,f=d.keywords),"preloadFont"in d&&t(4,c=d.preloadFont)},[n,a,i,f,c]}class ne extends W{constructor(e){super(),J(this,e,G,B,U,{title:0,description:1,url:2,keywords:3,preloadFont:4})}}function L(s){const e=s-1;return e*e*e+1}function oe(s,{delay:e=0,duration:t=400,easing:n=q}={}){const a=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:n,css:i=>`opacity: ${i*a}`}}function ae(s,{delay:e=0,duration:t=400,easing:n=L,x:a=0,y:i=0,opacity:f=0}={}){const c=getComputedStyle(s),d=+c.opacity,p=c.transform==="none"?"":c.transform,m=d*(1-f),[M,l]=I(a),[x,k]=I(i);return{delay:e,duration:t,easing:n,css:(_,h)=>`
			transform: ${p} translate(${(1-_)*M}${l}, ${(1-_)*x}${k});
			opacity: ${d-m*h}`}}function re(s,{delay:e=0,duration:t=400,easing:n=L,axis:a="y"}={}){const i=getComputedStyle(s),f=+i.opacity,c=a==="y"?"height":"width",d=parseFloat(i[c]),p=a==="y"?["top","bottom"]:["left","right"],m=p.map(r=>`${r[0].toUpperCase()}${r.slice(1)}`),M=parseFloat(i[`padding${m[0]}`]),l=parseFloat(i[`padding${m[1]}`]),x=parseFloat(i[`margin${m[0]}`]),k=parseFloat(i[`margin${m[1]}`]),_=parseFloat(i[`border${m[0]}Width`]),h=parseFloat(i[`border${m[1]}Width`]);return{delay:e,duration:t,easing:n,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*f};${c}: ${r*d}px;padding-${p[0]}: ${r*M}px;padding-${p[1]}: ${r*l}px;margin-${p[0]}: ${r*x}px;margin-${p[1]}: ${r*k}px;border-${p[0]}-width: ${r*_}px;border-${p[1]}-width: ${r*h}px;`}}function se(s,{delay:e=0,duration:t=400,easing:n=L,start:a=0,opacity:i=0}={}){const f=getComputedStyle(s),c=+f.opacity,d=f.transform==="none"?"":f.transform,p=1-a,m=c*(1-i);return{delay:e,duration:t,easing:n,css:(M,l)=>`
			transform: ${d} scale(${1-p*l});
			opacity: ${c-m*l}
		`}}function z(s){let e,t='<a class="border-0" href="#welcome"><div class="flex flex-col justify-center items-center gap-5"><div class="bg-slate-600 rounded-full drop-shadow-md transition hover:scale-110 hover:bg-slate-500"><p class="toolip text-center hover:text-white scroll-arrow svelte-36x6xw">ꜛ</p></div> <p class="tooltip text-center drop-shadow-md">back to top</p></div></a>';return{c(){e=b("div"),e.innerHTML=t,this.h()},l(n){e=w(n,"DIV",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-kvxg9c"&&(e.innerHTML=t),this.h()},h(){o(e,"class","flex justify-center items-center")},m(n,a){H(n,e,a)},d(n){n&&v(e)}}}function O(s){let e,t,n,a,i='<h1 class="tracking-wide text-center">Fairmount Stories:</h1> <h2 class="tracking-wide text-center">Mobility, Advocacy, and Environmental Justice</h2>',f,c,d='<div class="w-36 m-auto flex flex-col items-center gap-2"><p class="font-normal tooltip transition hover:text-white"><a href="mailto:kbeaver@dbedc.org">Contact us</a></p> <p class="font-normal tooltip transition hover:text-white"><a href="/about">About this site</a></p></div> <div class="w-36 m-auto flex flex-col items-center gap-2"><p class="font-normal tooltip">Got feedback?</p> <p class="font-normal tooltip"><a class="hover:text-white transition" href="https://docs.google.com/forms/d/1UP20gDuXhdjoRH0WL2iLQeVWBkLHguHPjCCA16npwnM/viewform" target="_blank">Please tell us!</a></p></div>',p,m,M=`<p class="font-normal text-center tooltip w-48 sm:w-full">Created in Boston in association with:</p> <div class="flex sm:gap-10 flex-wrap flex-col sm:flex-row justify-center bg-slate-200 p-4 rounded-[2em] sm:rounded-full divide-y divide-slate-300 sm:divide-none"><a href="https://community.massenergize.org/fairmount-boston/" class="border-0 pb-4 sm:p-0" target="_blank"><img src="${E}/assets/logos/ficc-logo.png" alt="FICC logo" class="h-[3em]"/></a> <a href="https://elab.emerson.edu" class="border-0 py-4 sm:p-0" target="_blank"><img src="${E}/assets/logos/elab-logo.png" alt="Engagement Lab logo" class="h-[3em]"/></a> <a href="https://airpartners.org" class="border-0 pt-4 sm:p-0" target="_blank"><img src="${E}/assets/logos/air-partners-logo.png" alt="Air Partners logo" class="h-[3em]"/></a></div>`,l=s[0]&&z();return{c(){e=b("div"),t=b("div"),l&&l.c(),n=T(),a=b("a"),a.innerHTML=i,f=T(),c=b("div"),c.innerHTML=d,p=T(),m=b("div"),m.innerHTML=M,this.h()},l(x){e=w(x,"DIV",{class:!0});var k=P(e);t=w(k,"DIV",{class:!0});var _=P(t);l&&l.l(_),n=A(_),a=w(_,"A",{href:!0,class:!0,"data-svelte-h":!0}),C(a)!=="svelte-dnh2ag"&&(a.innerHTML=i),f=A(_),c=w(_,"DIV",{class:!0,"data-svelte-h":!0}),C(c)!=="svelte-1vkgq8m"&&(c.innerHTML=d),p=A(_),m=w(_,"DIV",{class:!0,"data-svelte-h":!0}),C(m)!=="svelte-8lom5z"&&(m.innerHTML=M),_.forEach(v),k.forEach(v),this.h()},h(){o(a,"href","/"),o(a,"class","w-full hover:text-white transition border-0"),o(c,"class","w-86 flex flex-wrap justify-between gap-6"),o(m,"class","flex flex-col items-center gap-4"),o(t,"class","m-auto w-full max-w-screen-md flex flex-col justify-center items-center gap-10 z-50"),o(e,"class","flex bg-slate-800 w-full py-20 px-5 text-slate-300 min-h-[60vh] z-50")},m(x,k){H(x,e,k),y(e,t),l&&l.m(t,null),y(t,n),y(t,a),y(t,f),y(t,c),y(t,p),y(t,m)},p(x,[k]){x[0]?l||(l=z(),l.c(),l.m(t,n)):l&&(l.d(1),l=null)},i:F,o:F,d(x){x&&v(e),l&&l.d()}}}function Q(s,e,t){let{isHomePage:n=!1}=e;return s.$$set=a=>{"isHomePage"in a&&t(0,n=a.isHomePage)},[n]}class le extends W{constructor(e){super(),J(this,e,Q,O,U,{isHomePage:0})}}const R="Fairmount Stories",X="Mobility, Advocacy, and Environmental Justice",ie={title:R,description:X};export{le as F,ne as M,oe as a,se as b,ie as c,ae as f,re as s};
