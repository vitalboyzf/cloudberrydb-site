"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2323],{21228:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>h,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=t(85893),n=t(11151);const i={title:"1.5.3"},h="Cloudberry Database v1.5.3 Release Notes",o={id:"releases/release-1.5.3",title:"1.5.3",description:"This is not an Apache release!",source:"@site/docs/releases/release-1.5.3.md",sourceDirName:"releases",slug:"/releases/release-1.5.3",permalink:"/docs/releases/release-1.5.3",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/releases/release-1.5.3.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"Nov 29, 2024",frontMatter:{title:"1.5.3"},sidebar:"docsbars",previous:{title:"1.5.4",permalink:"/docs/releases/release-1.5.4"},next:{title:"1.5.2",permalink:"/docs/releases/release-1.5.2"}},l={},a=[{value:"New feature",id:"new-feature",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Doc updates",id:"doc-updates",level:2},{value:"\ud83d\ude4c\ud83c\udffb\ufe0f New contributors",id:"\ufe0f-new-contributors",level:2},{value:"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb Contributors",id:"-contributors",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsx)(r.p,{children:"This is not an Apache release!"})}),"\n",(0,s.jsx)(r.h1,{id:"cloudberry-database-v153-release-notes",children:"Cloudberry Database v1.5.3 Release Notes"}),"\n",(0,s.jsx)(r.p,{children:"Version number: v1.5.3"}),"\n",(0,s.jsx)(r.p,{children:"Cloudberry Database v1.5.3 is a minor release that includes some improvements, bug fixes and doc updates."}),"\n",(0,s.jsxs)(r.p,{children:["Quick try: ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/releases/tag/1.5.3",children:"v1.5.3"})]}),"\n",(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsxs)(r.p,{children:["Before running the ",(0,s.jsx)(r.code,{children:"./configure"})," command to ",(0,s.jsx)(r.a,{href:"/docs/cbdb-linux-compile#step-4-build-cloudberry-database",children:"build the Cloudberry Database"})," from the v1.5.3 source code files, make sure to execute the following commands to install the dependencies."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"yum install -y go\nexport GOPROXY=https://goproxy.io,direct\n"})}),(0,s.jsxs)(r.p,{children:["In later versions, we have refactored the relative module using Python (See PR ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/435",children:"#435"}),"). If you are building the database from the source code of a later version, you can skip the above commands."]})]}),"\n",(0,s.jsxs)(r.p,{children:["Full changelog: ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/compare/1.5.2...1.5.3",children:"https://github.com/cloudberrydb/cloudberrydb/compare/1.5.2...1.5.3"})]}),"\n",(0,s.jsx)(r.h2,{id:"new-feature",children:"New feature"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Directory table"}),"\n",(0,s.jsx)(r.p,{children:"Starting from v1.5.3, Cloudberry Database supports directory tables for managing multiple types of unstructured data. Developer users can use simple SQL statements to invoke the capabilities of multiple computing engines to achieve one-stop data processing and application development."}),"\n",(0,s.jsx)(r.p,{children:"Directory tables store, manage, and analyze unstructured data objects. They reside within tablespaces. When unstructured data files are imported, a directory table record (file metadata) is created, and the file itself is loaded into object storage. The table metadata remains associated with the corresponding object storage file."}),"\n",(0,s.jsxs)(r.p,{children:["For details, see the ",(0,s.jsx)(r.a,{href:"/docs/advanced-analytics/directory-tables",children:"user document"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"improvements",children:"Improvements"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Support ",(0,s.jsx)(r.code,{children:"postgres_fdw"})," in the default build by @",(0,s.jsx)(r.a,{href:"https://github.com/smartyhero",children:"smartyhero"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/400",children:"#400"})]}),"\n",(0,s.jsxs)(r.li,{children:["Support using access method flags to specify the column-oriented scanning on custom tables by @",(0,s.jsx)(r.a,{href:"https://github.com/gongxun0928",children:"gongxun0928"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/407",children:"407#"})]}),"\n",(0,s.jsxs)(r.li,{children:["Add a configuration parameter ",(0,s.jsx)(r.code,{children:"gp_random_insert_segments"})," to control the number of segments used for inserting data into randomly distributed tables by @",(0,s.jsx)(r.a,{href:"https://github.com/foreyes",children:"foreyes"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/406",children:"#406"})]}),"\n",(0,s.jsxs)(r.li,{children:["Implement Directory Table by @",(0,s.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/390",children:"#390"})]}),"\n",(0,s.jsxs)(r.li,{children:["Disable dumping pax tables in ",(0,s.jsx)(r.code,{children:"pg_dump"})," by @",(0,s.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/412",children:"#412"})]}),"\n",(0,s.jsxs)(r.li,{children:["Update the ",(0,s.jsx)(r.code,{children:"googletest"})," module URL by @",(0,s.jsx)(r.a,{href:"https://github.com/tuhaihe",children:"tuhaihe"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/429",children:"#429"})]}),"\n",(0,s.jsxs)(r.li,{children:["Enable privilege check when dropping directory table by @",(0,s.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/425",children:"#425"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Fix the issue that the outbound data buffer is not enough when calling ",(0,s.jsx)(r.code,{children:"EVP_DecryptUpdate"})," (#479) by @",(0,s.jsx)(r.a,{href:"https://github.com/kongfanshen-0801",children:"kongfanshen-0801"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/408",children:"#408"})]}),"\n",(0,s.jsxs)(r.li,{children:["Fix the issue that ",(0,s.jsx)(r.code,{children:"pgrx"})," cannot find the function ",(0,s.jsx)(r.code,{children:"numeric_is_nan"})," or ",(0,s.jsx)(r.code,{children:"numeric_is_inf"})," after numeric change interface by @",(0,s.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/410",children:"#410"})]}),"\n",(0,s.jsxs)(r.li,{children:["Fix a copy issue for Directory Table by @",(0,s.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/416",children:"#416"})]}),"\n",(0,s.jsxs)(r.li,{children:["Fix visimap consults for unique checks during UPDATEs by @",(0,s.jsx)(r.a,{href:"https://github.com/lss602726449",children:"lss602726449"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/423",children:"#423"})]}),"\n",(0,s.jsxs)(r.li,{children:["Fix some CI pipeline issues for Directory Table by @",(0,s.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/414",children:"#414"})]}),"\n",(0,s.jsxs)(r.li,{children:["Fix the issue that ",(0,s.jsx)(r.code,{children:"gpconfig"})," does not escape the ",(0,s.jsx)(r.code,{children:"$"})," character by @",(0,s.jsx)(r.a,{href:"https://github.com/Ray-Eldath",children:"Ray-Eldath"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/403",children:"403#"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"doc-updates",children:"Doc updates"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Update the ",(0,s.jsx)(r.code,{children:"README.md"})," file by @",(0,s.jsx)(r.a,{href:"https://github.com/tuhaihe",children:"tuhaihe"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/411",children:"#411"})]}),"\n",(0,s.jsxs)(r.li,{children:["Update the deployment ",(0,s.jsx)(r.code,{children:"README.md"})," by @",(0,s.jsx)(r.a,{href:"https://github.com/Zhangbaowen-Hashdata",children:"Zhangbaowen-Hashdata"})," in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/409",children:"#409"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\ufe0f-new-contributors",children:"\ud83d\ude4c\ud83c\udffb\ufe0f New contributors"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["@",(0,s.jsx)(r.a,{href:"https://github.com/kongfanshen-0801",children:"kongfanshen-0801"})," made his (or her) first contribution in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/408",children:"#408"})]}),"\n",(0,s.jsxs)(r.li,{children:["@",(0,s.jsx)(r.a,{href:"https://github.com/foreyes",children:"foreyes"})," made his (or her) first contribution in ",(0,s.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/406",children:"#406"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-contributors",children:"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb Contributors"}),"\n",(0,s.jsxs)(r.p,{children:["Thanks to all the contributors to make this release happen: @",(0,s.jsx)(r.a,{href:"https://github.com/smartyhero",children:"smartyhero"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/Ray-Eldath",children:"Ray-Eldath"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/gongxun0928",children:"gongxun0928"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/kongfanshen-0801",children:"kongfanshen-0801"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/foreyes",children:"foreyes"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/tuhaihe",children:"tuhaihe"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/Zhangbaowen-Hashdata",children:"Zhangbaowen-Hashdata"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/lss602726449",children:"lss602726449"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/soumyadeep2007",children:"soumyadeep2007"}),", @",(0,s.jsx)(r.a,{href:"https://github.com/ashwinstar",children:"ashwinstar"})," \ud83d\udc4d"]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>h});var s=t(67294);const n={},i=s.createContext(n);function h(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);