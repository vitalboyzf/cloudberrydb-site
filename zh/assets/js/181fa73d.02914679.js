"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9753],{6585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var a=t(85893),s=t(11151);const r={title:"\u4ece Web \u670d\u52a1\u52a0\u8f7d\u6570\u636e"},d="\u4ece Web \u670d\u52a1\u52a0\u8f7d\u6570\u636e",o={id:"data-loading/load-data-from-web-services",title:"\u4ece Web \u670d\u52a1\u52a0\u8f7d\u6570\u636e",description:"\u5728 Cloudberry Database \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u5916\u90e8 Web \u8868\u7684\u65b9\u5f0f\uff0c\u4ece Web \u670d\u52a1\u6216\u4efb\u4f55\u652f\u6301\u547d\u4ee4\u884c\u8bbf\u95ee\u7684\u6570\u636e\u6e90\u52a0\u8f7d\u6570\u636e\u3002\u8fd9\u91cc\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u6709\u6587\u672c\uff08TEXT\uff09\u548c CSV \u683c\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/data-loading/load-data-from-web-services.md",sourceDirName:"data-loading",slug:"/data-loading/load-data-from-web-services",permalink:"/zh/docs/data-loading/load-data-from-web-services",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/data-loading/load-data-from-web-services.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732177246,formattedLastUpdatedAt:"2024\u5e7411\u670821\u65e5",frontMatter:{title:"\u4ece Web \u670d\u52a1\u52a0\u8f7d\u6570\u636e"},sidebar:"docsbars",previous:{title:"\u4f7f\u7528 gpload \u52a0\u8f7d\u6570\u636e",permalink:"/zh/docs/data-loading/load-data-using-gpload"},next:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u6570\u636e\u5e93",permalink:"/zh/docs/create-and-manage-database"}},c={},i=[{value:"\u4f7f\u7528\u547d\u4ee4\u6765\u5b9a\u4e49\u5916\u90e8 Web \u8868",id:"\u4f7f\u7528\u547d\u4ee4\u6765\u5b9a\u4e49\u5916\u90e8-web-\u8868",level:2},{value:"\u57fa\u4e8e URL \u7684\u5916\u90e8 Web \u8868",id:"\u57fa\u4e8e-url-\u7684\u5916\u90e8-web-\u8868",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u4ece-web-\u670d\u52a1\u52a0\u8f7d\u6570\u636e",children:"\u4ece Web \u670d\u52a1\u52a0\u8f7d\u6570\u636e"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 Cloudberry Database \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u5916\u90e8 Web \u8868\u7684\u65b9\u5f0f\uff0c\u4ece Web \u670d\u52a1\u6216\u4efb\u4f55\u652f\u6301\u547d\u4ee4\u884c\u8bbf\u95ee\u7684\u6570\u636e\u6e90\u52a0\u8f7d\u6570\u636e\u3002\u8fd9\u91cc\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u6709\u6587\u672c\uff08TEXT\uff09\u548c CSV \u683c\u5f0f\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u5916\u90e8 Web \u8868\uff0cCloudberry Database \u80fd\u591f\u50cf\u5904\u7406\u5e38\u89c4\u6570\u636e\u5e93\u8868\u4e00\u6837\u64cd\u4f5c\u52a8\u6001\u6570\u636e\u6e90\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e Web \u8868\u4e2d\u7684\u6570\u636e\u53ef\u80fd\u4f1a\u5728\u67e5\u8be2\u6267\u884c\u8fc7\u7a0b\u4e2d\u53d1\u751f\u53d8\u5316\uff0c\u8fd9\u4e9b\u6570\u636e\u4e0d\u652f\u6301\u91cd\u65b0\u626b\u63cf\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"CREATE EXTERNAL WEB TABLE"})," \u547d\u4ee4\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a Web \u8868\u7684\u5b9a\u4e49\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u521b\u5efa\u57fa\u4e8e\u547d\u4ee4\u884c\u7684\u6216\u662f\u57fa\u4e8e URL \u7684\u5916\u90e8 Web \u8868\uff0c\u4f46\u9700\u8981\u6ce8\u610f\uff0c\u8fd9\u4e24\u79cd\u5b9a\u4e49\u7684\u683c\u5f0f\u662f\u4e0d\u540c\u7684\uff0c\u8bf7\u52ff\u5c06\u5b83\u4eec\u6df7\u5408\u4f7f\u7528\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u547d\u4ee4\u6765\u5b9a\u4e49\u5916\u90e8-web-\u8868",children:"\u4f7f\u7528\u547d\u4ee4\u6765\u5b9a\u4e49\u5916\u90e8 Web \u8868"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 Cloudberry Database \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Shell \u547d\u4ee4\u6216\u811a\u672c\u7684\u8f93\u51fa\u6765\u5b9a\u4e49\u57fa\u4e8e\u547d\u4ee4\u7684\u5916\u90e8 Web \u8868\u6570\u636e\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u4f60\u9700\u8981\u6267\u884c ",(0,a.jsx)(n.code,{children:"CREATE EXTERNAL WEB TABLE"})," \u547d\u4ee4\u6765\u521b\u5efa\u5916\u90e8 Web \u8868\uff0c\u5e76\u5728 ",(0,a.jsx)(n.code,{children:"EXECUTE"})," \u5b50\u53e5\u4e2d\u6307\u660e\u8fd9\u4e2a Shell \u547d\u4ee4\u6216\u811a\u672c\u3002\u8fd9\u6837\uff0c\u5f53\u547d\u4ee4\u6267\u884c\u65f6\uff0c\u5b83\u4f1a\u6355\u83b7\u90a3\u4e00\u523b\u7684\u6570\u636e\u4f5c\u4e3a\u8868\u6570\u636e\u3002",(0,a.jsx)(n.code,{children:"EXECUTE"})," \u5b50\u53e5\u8d1f\u8d23\u5728\u6570\u636e\u5e93\u7cfb\u7edf\u7684\u6307\u5b9a\u8282\u70b9\u4e0a\u6267\u884c\u8fd9\u4e9b\u547d\u4ee4\u6216\u811a\u672c\uff0c\u8fd9\u4e9b\u8282\u70b9\u53ef\u80fd\u662f Coordinator\u3001\u67d0\u4e2a\u7279\u5b9a\u7684 Segment \u4e3b\u673a\uff0c\u6216\u662f\u591a\u4e2a Segment \u4e3b\u673a\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u547d\u4ee4\u4f1a\u5728\u6709\u6570\u636e\u8f93\u51fa\u9700\u5904\u7406\u7684 Segment \u4e3b\u673a\u4e0a\u6267\u884c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6bcf\u4e2a Segment \u4e3b\u673a\u90fd\u8fd0\u884c\u4e86 4 \u4e2a\u5904\u7406\u8f93\u51fa\u6570\u636e\u7684\u4e3b Segment \u5b9e\u4f8b\uff0c\u90a3\u4e48\u8be5\u547d\u4ee4\u5c06\u5728\u6bcf\u4e2a Segment \u4e3b\u673a\u4e0a\u6267\u884c 4 \u6b21\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u5b9a\u9650\u5236\u6765\u51cf\u5c11\u6267\u884c\u8be5 Web \u8868\u547d\u4ee4\u6240\u9700\u7684 Segment \u5b9e\u4f8b\u6570\u91cf\u3002\u5728 SQL \u547d\u4ee4\u7684 ",(0,a.jsx)(n.code,{children:"ON"})," \u5b50\u53e5\u4e2d\u6307\u5b9a\u7684\u6240\u6709 Segment \u5c06\u4f1a\u5e76\u53d1\u6267\u884c\u6b64\u547d\u4ee4\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f60\u5b9a\u4e49\u7684\u8fd9\u4e2a\u5916\u90e8\u547d\u4ee4\u662f\u5728\u6570\u636e\u5e93\u73af\u5883\u4e2d\u6267\u884c\u7684\uff0c\u5b83\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u64cd\u4f5c\u7cfb\u7edf\u5c42\u9762\u7684\u73af\u5883\u53d8\u91cf\uff08\u4f8b\u5982 ",(0,a.jsx)(n.code,{children:".bashrc"})," \u6216 ",(0,a.jsx)(n.code,{children:".profile"})," \u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\uff09\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u5728 ",(0,a.jsx)(n.code,{children:"EXECUTE"})," \u5b50\u53e5\u4e2d\u660e\u786e\u8bbe\u7f6e\u6240\u9700\u7684\u73af\u5883\u53d8\u91cf\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"=# CREATE EXTERNAL WEB TABLE output (output **text**)\n    EXECUTE 'PATH=/home/gpadmin/programs; export PATH; myprogram.sh' \n    FORMAT 'TEXT';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u4e3a\u4e86\u786e\u4fdd\u5b89\u5168\u548c\u4e00\u81f4\u6027\uff0c\u8fd9\u4e9b Shell \u811a\u672c\u5fc5\u987b\u80fd\u88ab\u6570\u636e\u5e93\u7684\u7ba1\u7406\u7528\u6237 ",(0,a.jsx)(n.code,{children:"gpadmin"})," \u6267\u884c\uff0c\u5e76\u4e14\u5728 Coordinator \u548c\u6240\u6709 Segment \u4e3b\u673a\u4e0a\u90fd\u4f4d\u4e8e\u76f8\u540c\u7684\u8def\u5f84\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u4e0b\u9762\u7684\u547d\u4ee4\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5b9a\u4e49\u4e00\u4e2a\u6267\u884c\u7279\u5b9a\u811a\u672c\u7684\u5916\u90e8 Web \u8868\u3002\u8fd9\u4e2a\u811a\u672c\u5c06\u5728\u6bcf\u4e2a\u6709\u6570\u636e\u8f93\u51fa\u9700\u8981\u5904\u7406\u7684 Segment \u4e3b\u673a\u4e0a\u6267\u884c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"=# CREATE EXTERNAL WEB TABLE log_output \n    (linenum **int**, message **text**) \n    EXECUTE '/var/load_scripts/get_log_data.sh' ON HOST \n    FORMAT 'TEXT' (DELIMITER '|');\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u57fa\u4e8e-url-\u7684\u5916\u90e8-web-\u8868",children:"\u57fa\u4e8e URL \u7684\u5916\u90e8 Web \u8868"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 Cloudberry Database \u4e2d\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u57fa\u4e8e URL \u7684\u5916\u90e8 Web \u8868\u4f7f\u7528 HTTP \u534f\u8bae\uff0c\u4ee5\u6b64\u4ece Web \u670d\u52a1\u5668\u83b7\u53d6\u6570\u636e\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u6570\u636e\u5e93\u80fd\u591f\u52a8\u6001\u5730\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u3002\u4f46\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u4e00\u65e6\u83b7\u53d6\uff0c\u8fd9\u4e9b\u6570\u636e\u5c06\u65e0\u6cd5\u88ab\u91cd\u65b0\u626b\u63cf\u6216\u67e5\u8be2\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f60\u9700\u8981\u5728\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"http://"})," \u534f\u8bae\u7684 URL \u4e2d\u660e\u786e\u6307\u5b9a Web \u670d\u52a1\u5668\u4e0a\u6570\u636e\u6587\u4ef6\u7684\u4f4d\u7f6e\uff0c\u7531\u6b64\u5b9a\u4e49\u5916\u90e8 Web \u8868\u3002\u8fd9\u4e9b Web \u6570\u636e\u6587\u4ef6\u5e94\u5b58\u653e\u5728 Cloudberry Database \u7684 Segment \u4e3b\u673a\u53ef\u4ee5\u8bbf\u95ee\u7684 Web \u670d\u52a1\u5668\u4e0a\u3002\u4f60\u6307\u5b9a\u7684 URL \u6570\u91cf\u76f4\u63a5\u5f71\u54cd\u6570\u636e\u5e93\u7cfb\u7edf\u5e76\u884c\u5904\u7406\u8fd9\u4e9b\u5916\u90e8\u6570\u636e\u7684\u80fd\u529b\u3002\u4f8b\u5982\uff0c\u5728\u62e5\u6709 8 \u4e2a Segment \u7684 Cloudberry Database \u7cfb\u7edf\u4e2d\uff0c\u5982\u679c\u4f60\u6307\u5b9a\u4e86 2 \u4e2a\u5916\u90e8\u6570\u636e\u6587\u4ef6\uff0c\u90a3\u4e48\u5728\u6267\u884c\u67e5\u8be2\u65f6\uff0c\u5c06\u4f1a\u6709 2 \u4e2a Segment \u540c\u65f6\u5e76\u884c\u8bbf\u95ee\u8fd9\u4e9b\u5916\u90e8 Web \u8868\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u547d\u4ee4\u5b9a\u4e49\u4e86\u4e00\u5f20\u80fd\u591f\u4ece\u591a\u4e2a URL \u4e2d\u83b7\u53d6\u6570\u636e\u7684\u5916\u90e8 Web \u8868\u3002\u8fd9\u79cd\u914d\u7f6e\u65b9\u5f0f\u6781\u5927\u5730\u589e\u5f3a\u4e86\u6570\u636e\u5e93\u5904\u7406\u52a8\u6001\u5916\u90e8\u6570\u636e\u7684\u7075\u6d3b\u6027\u548c\u6548\u7387\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"=# CREATE EXTERNAL WEB TABLE ext_expenses (name **text**, \n  **date** **date**, amount float4, category **text**, description **text**) \n  LOCATION ( \n\n  'http://intranet.company.com/expenses/sales/file.csv',\n  'http://intranet.company.com/expenses/exec/file.csv',\n  'http://intranet.company.com/expenses/finance/file.csv',\n  'http://intranet.company.com/expenses/ops/file.csv',\n  'http://intranet.company.com/expenses/marketing/file.csv',\n  'http://intranet.company.com/expenses/eng/file.csv' \n\n   )\n  FORMAT 'CSV' ( HEADER );\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>d});var a=t(67294);const s={},r=a.createContext(s);function d(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);