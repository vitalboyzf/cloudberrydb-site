"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3909],{45656:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>r});var d=a(85893),t=a(11151);const l={title:"\u4f7f\u7528 gpload \u52a0\u8f7d\u6570\u636e"},o="\u4f7f\u7528 gpload \u5c06\u6570\u636e\u52a0\u8f7d\u5230 Cloudberry Database \u4e2d",s={id:"data-loading/load-data-using-gpload",title:"\u4f7f\u7528 gpload \u52a0\u8f7d\u6570\u636e",description:"Cloudberry Database \u7684 gpload \u5b9e\u7528\u7a0b\u5e8f\u4f7f\u7528 gpfdist \u548c\u53ef\u8bfb\u7684\u5916\u90e8\u8868\u52a0\u8f7d\u6570\u636e\u3002\u5b83\u5904\u7406\u57fa\u4e8e\u6587\u4ef6\u7684\u5916\u90e8\u8868\u5e76\u884c\u8bbe\u7f6e\uff0c\u5e76\u5141\u8bb8\u7528\u6237\u5728\u5355\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u6570\u636e\u683c\u5f0f\u3001\u5916\u90e8\u8868\u5b9a\u4e49\u548c gpfdist \u8bbe\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/data-loading/load-data-using-gpload.md",sourceDirName:"data-loading",slug:"/data-loading/load-data-using-gpload",permalink:"/zh/docs/data-loading/load-data-using-gpload",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/data-loading/load-data-using-gpload.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733903724,formattedLastUpdatedAt:"2024\u5e7412\u670811\u65e5",frontMatter:{title:"\u4f7f\u7528 gpload \u52a0\u8f7d\u6570\u636e"},sidebar:"docsbars",previous:{title:"\u4f7f\u7528 File \u534f\u8bae\u52a0\u8f7d\u6570\u636e",permalink:"/zh/docs/data-loading/load-data-using-file-protocol"},next:{title:"\u4ece Web \u670d\u52a1\u52a0\u8f7d\u6570\u636e",permalink:"/zh/docs/data-loading/load-data-from-web-services"}},i={},r=[{value:"\u4f7f\u7528 <code>gpload</code>",id:"\u4f7f\u7528-gpload",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"\u4f7f\u7528-gpload-\u5c06\u6570\u636e\u52a0\u8f7d\u5230-cloudberry-database-\u4e2d",children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"gpload"})," \u5c06\u6570\u636e\u52a0\u8f7d\u5230 Cloudberry Database \u4e2d"]}),"\n",(0,d.jsxs)(n.p,{children:["Cloudberry Database \u7684 ",(0,d.jsx)(n.code,{children:"gpload"})," \u5b9e\u7528\u7a0b\u5e8f\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"gpfdist"})," \u548c\u53ef\u8bfb\u7684\u5916\u90e8\u8868\u52a0\u8f7d\u6570\u636e\u3002\u5b83\u5904\u7406\u57fa\u4e8e\u6587\u4ef6\u7684\u5916\u90e8\u8868\u5e76\u884c\u8bbe\u7f6e\uff0c\u5e76\u5141\u8bb8\u7528\u6237\u5728\u5355\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u6570\u636e\u683c\u5f0f\u3001\u5916\u90e8\u8868\u5b9a\u4e49\u548c ",(0,d.jsx)(n.code,{children:"gpfdist"})," \u8bbe\u7f6e\u3002"]}),"\n",(0,d.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"gpload"})," \u4e2d\uff0c\u5982\u679c\u76ee\u6807\u8868\u5217\u540d\u662f\u4fdd\u7559\u5173\u952e\u5b57\u3001\u5305\u542b\u5927\u5199\u5b57\u6bcd\u6216\u9700\u8981\u5f15\u53f7 ",(0,d.jsx)(n.code,{children:'" "'})," \u6765\u6807\u8bc6\u5217\u7684\u4efb\u4f55\u5b57\u7b26\uff0c\u5219\u4e0d\u652f\u6301 ",(0,d.jsx)(n.code,{children:"MERGE"})," \u548c ",(0,d.jsx)(n.code,{children:"UPDATE"})," \u64cd\u4f5c\u3002"]})}),"\n",(0,d.jsxs)(n.h2,{id:"\u4f7f\u7528-gpload",children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"gpload"})]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u786e\u4fdd\u4f60\u5df2\u7ecf\u8bbe\u7f6e\u597d ",(0,d.jsx)(n.code,{children:"gpload"})," \u7684\u8fd0\u884c\u73af\u5883\uff0c\u5305\u62ec\u4e00\u4e9b\u6765\u81ea Cloudberry Database \u5b89\u88c5\u7684\u4f9d\u8d56\u6587\u4ef6\uff0c\u4f8b\u5982 gpfdist \u548c Python 3\uff0c\u4ee5\u53ca\u5bf9 Cloudberry Database Segment \u4e3b\u673a\u7684\u7f51\u7edc\u8bbf\u95ee\u3002",(0,d.jsx)(n.code,{children:"gpload"})," \u8fd8\u9700\u8981\u4f60\u5b89\u88c5\u4ee5\u4e0b\u4f9d\u8d56\u5305\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"pip install psycopg2 pyyaml\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u521b\u5efa\u4f60\u7684\u52a0\u8f7d\u63a7\u5236\u6587\u4ef6\u3002\u8fd9\u662f\u4e00\u4e2a YAML \u683c\u5f0f\u7684\u6587\u4ef6\uff0c\u5b83\u6307\u5b9a\u4e86 Cloudberry Database \u7684\u8fde\u63a5\u4fe1\u606f\u3001gpfdist \u914d\u7f6e\u4fe1\u606f\u3001\u5916\u90e8\u8868\u9009\u9879\u548c\u6570\u636e\u683c\u5f0f\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"---\nVERSION: 1.0.0.1\nDATABASE: ops\nUSER: gpadmin\nHOST: cdw-1\nPORT: 5432\nGPLOAD:\n   INPUT:\n    - SOURCE:\n         LOCAL_HOSTNAME:\n           - etl1-1\n           - etl1-2\n           - etl1-3\n           - etl1-4\n         PORT: 8081\n         FILE: \n           - /var/load/data/*\n    - COLUMNS:\n           - name: text\n           - amount: float4\n           - category: text\n           - descr: text\n           - date: date\n    - FORMAT: text\n    - DELIMITER: '|'\n    - ERROR_LIMIT: 25\n    - LOG_ERRORS: true\n   OUTPUT:\n    - TABLE: payables.expenses\n    - MODE: INSERT\n   PRELOAD:\n    - REUSE_TABLES: true \n# SQL:\n#   - BEFORE: \"INSERT INTO audit VALUES('start', current_timestamp)\"\n#   - AFTER: \"INSERT INTO audit VALUES('end', current_timestamp)\"\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,d.jsx)(n.code,{children:"gpload"}),"\uff0c\u4f20\u5165\u52a0\u8f7d\u63a7\u5236\u6587\u4ef6\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"gpload -f my_load.yml\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>o});var d=a(67294);const t={},l=d.createContext(t);function o(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);