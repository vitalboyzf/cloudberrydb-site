"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3089],{61311:(e,t,s)=>{s.d(t,{Z:()=>j});var a,n=s(16550),i=s(67294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},l.apply(this,arguments)}const r=e=>{let{title:t,titleId:s,...n}=e;return i.createElement("svg",l({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":s},n),t?i.createElement("title",{id:s},t):null,a||(a=i.createElement("path",{d:"M15 15a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 15V8.25H.75L8.495 1.21a.75.75 0 0 1 1.01 0L17.25 8.25H15V15ZM5.625 9.75a3.375 3.375 0 0 0 6.75 0h-1.5a1.875 1.875 0 0 1-3.75 0h-1.5Z",fill:"#212121"})))};var c;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},o.apply(this,arguments)}const d=e=>{let{title:t,titleId:s,...a}=e;return i.createElement("svg",o({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":s},a),t?i.createElement("title",{id:s},t):null,c||(c=i.createElement("path",{d:"M15 15a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 15V8.25H.75L8.495 1.21a.75.75 0 0 1 1.01 0L17.25 8.25H15V15ZM5.625 9.75a3.375 3.375 0 0 0 6.75 0h-1.5a1.875 1.875 0 0 1-3.75 0h-1.5Z",fill:"#fff",opacity:.3})))};var m;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},h.apply(this,arguments)}const g=e=>{let{title:t,titleId:s,...a}=e;return i.createElement("svg",h({className:"icon",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:16,height:16,"aria-labelledby":s},a),t?i.createElement("title",{id:s},t):null,m||(m=i.createElement("path",{d:"m403.5 870.1 135.1-741.3h81.9L485.4 870.1z",fill:"#606060"})))};var p=s(90512),u=s(12714);const x={breadcrumbs:"breadcrumbs_JXRB",mdxPage:"mdxPage_GpzV",backPath:"backPath_eKch",backLogoA:"backLogoA_iDmL",backLogoSvg:"backLogoSvg_u_DG",backLogoLightSvg:"backLogoLightSvg_VeXY",line:"line_H094",path:"path_MxGL",leafPath:"leafPath_R5jn"};var b=s(85893);function j(e){let t=function(){let e=(0,n.TH)().pathname.slice(1);e.endsWith("/")&&(e=e.slice(0,-1)),e=e.replace("zh/",""),e=e[0].toUpperCase()+e.slice(1);const t=e.split("/").map((e=>({name:e})));for(let s=0;s<t.length-1;s++)t[s].href=`/${t[s].name.toLocaleLowerCase()}`;return t}();const s=(0,n.TH)();e.path?.length&&(t=e.path);const a=s.pathname.split("/").filter((e=>""!=e&&"zh"!=e&&"blog"!=e)).length;return(0,b.jsxs)("div",{className:(0,p.Z)(x.breadcrumbs,e.className,{[x.mdxPage]:2===a}),style:e.style,children:[(0,b.jsxs)(u.Z,{to:"/",className:x.backLogoA,children:[(0,b.jsx)(d,{className:x.backLogoSvg}),(0,b.jsx)(r,{className:x.backLogoLightSvg})]}),(0,b.jsx)("div",{className:x.path,children:t.map((e=>{const t=e.href?(0,b.jsx)(u.Z,{className:x.backPath,to:e.href,children:e.name}):(0,b.jsx)("span",{className:x.leafPath,children:e.name});return(0,b.jsxs)(i.Fragment,{children:[(0,b.jsx)(g,{className:x.line}),t]},e.name)}))})]})}},31560:(e,t,s)=>{s.d(t,{Z:()=>f});var a=s(16550),n=s(61311),i=s(8591),l=s(90512),r=s(67294),c=s(87524);const o={aside:"aside_uZWJ",sidebar:"sidebar_me8e",sidebarItemTitle:"sidebarItemTitle_MDMA",sidebarItem:"sidebarItem_PSMt",active:"active_GuJd"};var d=s(85893);function m(e){const t=(0,a.TH)(),s=new URLSearchParams(t.search).get("tag"),n=(e.items||[]).map((e=>e.content.metadata.tags.map((e=>e.label)))).flat(1),i=n.filter(((e,t)=>n.indexOf(e)===t));i.unshift("All");const[c,m]=(0,r.useState)(s||i[0]),h=(0,a.k6)();return(0,d.jsx)("aside",{className:o.aside,children:(0,d.jsxs)("nav",{className:(0,l.Z)(o.sidebar,"thin-scrollbar"),children:[(0,d.jsx)("div",{className:(0,l.Z)(o.sidebarItemTitle),children:"Blog categories"}),(0,d.jsx)("ul",{className:(0,l.Z)(o.sidebarItemList,"clean-list"),children:i.map((e=>(0,d.jsx)("li",{className:(0,l.Z)(o.sidebarItem,{[o.active]:c===e}),onClick:()=>(e=>{m(e),h.push({search:`?tag=${e}`})})(e),children:e},e)))})]})})}var h=s(13961),g=s(13102),p=s(12714);function u(e){let{sidebar:t}=e;const s=(0,h.c)(t.items);return(0,d.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,d.jsx)("li",{className:"menu__list-item",children:(0,d.jsx)(p.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,d.jsx)(g.Zo,{component:u,props:e})}function b(e){let{sidebar:t,items:s}=e;const a=(0,c.i)();return t?.items.length?"mobile"===a?(0,d.jsx)(x,{sidebar:t}):(0,d.jsx)(m,{items:s}):null}const j={main:"main_RZsv",blogList:"blogList_hWaw",breadcrumbs:"breadcrumbs_SbBL",listWrap:"listWrap_wBG_",blogDetail:"blogDetail_l7Ou"};function f(e){const[t,s]=(0,r.useState)(),{sidebar:c,toc:o,children:m,...h}=e,g=(0,a.TH)();return(0,r.useEffect)((()=>{let e=g.pathname.replace("/zh","").match(/^\/(blog)\/(.+)$/);s(e?[{name:e[1][0].toUpperCase()+e[1].slice(1),href:"/blog"},{name:e[2][0].toUpperCase()+e[2].slice(1)}]:[])}),[g]),(0,d.jsx)(i.Z,{...h,children:(0,d.jsx)("div",{className:"blog-container",style:{marginBottom:62},children:(0,d.jsxs)("div",{className:"flex",style:{padding:"0 var(--mobile-padding-width)"},children:[e.items&&(0,d.jsx)(b,{sidebar:c,items:e.items}),(0,d.jsxs)("main",{className:(0,l.Z)(j.main,{[j.blogList]:!!e.items,[j.blogDetail]:!e.items}),itemScope:!0,itemType:"https://schema.org/Blog",children:[(0,d.jsx)(n.Z,{className:j.breadcrumbs,path:t}),(0,d.jsx)("div",{className:j.listWrap,children:m})]})]})})})}},36200:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(16550),n=s(1944),i=s(35281),l=s(52263),r=s(23798),c=s(90197),o=s(90512),d=s(67294),m=s(31560),h=s(85893);function g(e){const{metadata:t}=e,{siteConfig:{title:s}}=(0,l.Z)(),{blogDescription:a,blogTitle:i,permalink:r}=t,o="/"===r?s:i;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.d,{title:o,description:a}),(0,h.jsx)(c.Z,{tag:"blog_posts_list"})]})}function p(e){const{items:t,sidebar:s}=e,[n,i]=(0,d.useState)(t),l=(0,a.TH)();return(0,d.useEffect)((()=>{const e=new URLSearchParams(l.search).get("tag");if("All"===e)i(t);else if(e){const s=t.filter((t=>t.content.metadata.tags.find((t=>t.label===e))));i(s)}}),[l]),(0,h.jsx)(m.Z,{sidebar:s,items:e.items,children:(0,h.jsx)(r.Z,{items:n})})}function u(e){return(0,h.jsxs)(n.FG,{className:(0,o.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage),children:[(0,h.jsx)(g,{...e}),(0,h.jsx)(p,{...e})]})}},59534:(e,t,s)=>{s.d(t,{Z:()=>S});var a=s(9460),n=s(85893);function i(e){let{children:t,className:s}=e;const{isBlogPostPage:i}=(0,a.C)();return(0,n.jsx)("article",{style:{width:i?"auto":440,height:"auto"},className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:t})}var l=s(67294),r=s(90512),c=s(18780),o=s(44332);function d(e){let{children:t,className:s}=e;const{isBlogPostPage:i}=(0,a.C)();return(0,n.jsx)("div",{id:i?c.blogPostContainerID:void 0,className:(0,r.Z)("markdown",s),itemProp:"articleBody",children:i&&(0,n.jsx)(o.Z,{children:t})})}var m=s(44996),h=s(95551);const g={popperContent:"popperContent_KhBW",isOpen:"isOpen_Y9Y2",arrow:"arrow_rqaT"};function p(e){const t=(0,l.useRef)(),s=(0,l.useRef)(),[a,i]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{(0,h.fi)(t.current,s.current,{placement:"bottom",modifiers:[]})}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"popper-target",ref:t,onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},children:e.children}),(0,n.jsx)("div",{ref:s,className:g.contentRef,children:(0,n.jsxs)("div",{className:(0,r.Z)(g.popperContent,{[g.isOpen]:a}),children:[(0,n.jsx)("span",{children:e.content}),(0,n.jsx)("div",{className:g.arrow})]})})]})}function u(e){let{styles:t}=e;const{metadata:{authors:s,formattedDate:i},assets:l}=(0,a.C)();if(0===s.length)return null;const r=s.map((e=>(0,n.jsx)("span",{style:{width:20,height:20,borderRadius:"50%",display:"inline-block",overflow:"hidden",boxSizing:"border-box",border:"1px solid var(--portrait-border-color)"},children:(0,n.jsx)(p,{content:e.name,children:(0,n.jsx)("img",{style:{width:18,height:18},src:(0,m.Z)(e.imageURL),srcSet:e.imageURL,alt:""})})},e.name)));return(0,n.jsxs)("div",{style:{color:"var(--sub-text-color-2)",fontSize:12,display:"flex",alignItems:"center",marginTop:17,...t},children:[(0,n.jsx)("span",{children:"By "}),(0,n.jsx)("span",{style:{marginRight:23,marginLeft:10,height:22},children:r}),(0,n.jsx)("span",{children:i})]})}function x(e){const{metadata:t}=(0,a.C)();return(0,n.jsx)("img",{style:{width:"100%",cursor:"pointer",...e.style},onClick:e.onClick,src:(0,m.Z)(t.frontMatter.image),alt:""})}function b(e){let{style:t}=e;const{metadata:s}=(0,a.C)();return(0,n.jsx)("div",{className:"two-lines-ellipsis",style:{color:"var(--sub-text-color-2)",lineHeight:"26px",...t},children:s.description})}function j(e){let{style:t}=e;const{frontMatter:{tags:s}}=(0,a.C)(),i=s.map((e=>(0,n.jsx)("span",{style:{marginRight:14,borderRadius:24,fontSize:12,background:"var(--tags-bg-color)",color:"var(--active-color)",padding:"5px 9px"},children:e.toString()},e.toString())));return(0,n.jsx)("div",{style:t,children:i})}const f="title_Ktoa",v="detailTitle_mU9U";function _(e){let{className:t}=e;const{metadata:s,isBlogPostPage:i}=(0,a.C)(),{title:l}=s;return(0,n.jsx)("div",{className:(0,r.Z)(f,t),itemProp:"headline",children:i?(0,n.jsx)("span",{className:(0,r.Z)(v),children:l}):(0,n.jsx)("div",{className:"two-lines-ellipsis",children:l})})}var w=s(12714),y=s(79910);const N="blogList_FFmj",Z="blogDetail_lT_X",L="tags_c74R",k="text_ny23",P=()=>{const{metadata:{permalink:e}}=(0,a.C)();return(0,a.C)().metadata.frontMatter.zh_hidden&&(0,y.cD)()?null:(0,n.jsx)(i,{className:N,children:(0,n.jsx)("header",{style:{padding:"7px 6px"},className:"link-wrap",children:(0,n.jsxs)(w.Z,{to:e,children:[(0,n.jsx)(x,{}),(0,n.jsxs)("div",{style:{padding:"0 11px 10px"},children:[(0,n.jsxs)("div",{style:{cursor:"pointer"},children:[(0,n.jsx)(j,{style:{marginTop:6,marginBottom:17}}),(0,n.jsx)(_,{}),(0,n.jsx)(b,{style:{marginTop:17}})]}),(0,n.jsx)(u,{})]})]})})})},C=e=>{let{children:t}=e;return(0,n.jsxs)(i,{className:Z,children:[(0,n.jsxs)("header",{children:[(0,n.jsx)(_,{}),(0,n.jsx)(u,{})]}),(0,n.jsx)(d,{children:t}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsx)("span",{className:k,children:"Tags:"}),(0,n.jsx)(j,{})]})]})};function S(e){let{children:t}=e;const{isBlogPostPage:s}=(0,a.C)(),i=s?C:P;return(0,n.jsx)(i,{children:t})}},23798:(e,t,s)=>{s.d(t,{Z:()=>l});s(67294);var a=s(9460),n=s(59534),i=s(85893);function l(e){let{items:t,component:s=n.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.n,{content:t,children:(0,i.jsx)(s,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}}}]);