"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4640],{86354:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=t(85893),s=t(11151);const o={title:"Load Data from Web Services"},r="Load Data from Web Services",d={id:"data-loading/load-data-from-web-services",title:"Load Data from Web Services",description:"In Cloudberry Database, to load data from web services or from any source accessible by command lines, you can create external web tables. The supported data formats are TEXT and CSV.",source:"@site/docs/data-loading/load-data-from-web-services.md",sourceDirName:"data-loading",slug:"/data-loading/load-data-from-web-services",permalink:"/docs/data-loading/load-data-from-web-services",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/data-loading/load-data-from-web-services.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"Load Data from Web Services"},sidebar:"docsbars",previous:{title:"Load Data Using gpload",permalink:"/docs/data-loading/load-data-using-gpload"},next:{title:"Create and Manage Database",permalink:"/docs/create-and-manage-database"}},c={},i=[{value:"Command-based external web tables",id:"command-based-external-web-tables",level:2},{value:"URL-based external web tables",id:"url-based-external-web-tables",level:2}];function l(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"load-data-from-web-services",children:"Load Data from Web Services"}),"\n",(0,n.jsxs)(a.p,{children:["In Cloudberry Database, to load data from web services or from any source accessible by command lines, you can create external web tables. The supported data formats are ",(0,n.jsx)(a.code,{children:"TEXT"})," and ",(0,n.jsx)(a.code,{children:"CSV"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"External web tables allow Cloudberry Database to treat dynamic data sources like regular database tables. Because web table data can change as a query runs, the data is not rescannable."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"CREATE EXTERNAL WEB TABLE"})," creates a web table definition. You can define command-based or URL-based external web tables. The definition forms are different. Do not mix command-based and URL-based definitions."]}),"\n",(0,n.jsx)(a.h2,{id:"command-based-external-web-tables",children:"Command-based external web tables"}),"\n",(0,n.jsxs)(a.p,{children:["The output of a shell command or script defines command-based web table data. Specify the command in the ",(0,n.jsx)(a.code,{children:"EXECUTE"})," clause of ",(0,n.jsx)(a.code,{children:"CREATE EXTERNAL WEB TABLE"}),". The data is current as of the time the command runs. The ",(0,n.jsx)(a.code,{children:"EXECUTE"})," clause runs the shell command or script on the specified coordinator, and/or segment host or hosts. The command or script must reside on the hosts corresponding to the host(s) defined in the ",(0,n.jsx)(a.code,{children:"EXECUTE"})," clause."]}),"\n",(0,n.jsxs)(a.p,{children:["By default, the command is run on segment hosts when active segments have output rows to process. For example, if each segment host runs 4 primary segment instances that have output rows to process, the command runs 4 times per segment host. You can optionally limit the number of segment instances that run the web table command. All segments included in the web table definition in the ",(0,n.jsx)(a.code,{children:"ON"})," clause run the command in parallel."]}),"\n",(0,n.jsxs)(a.p,{children:["The command that you specify in the external table definition is run from the database and cannot access environment variables from ",(0,n.jsx)(a.code,{children:".bashrc"})," or ",(0,n.jsx)(a.code,{children:".profile"}),". Set environment variables in the ",(0,n.jsx)(a.code,{children:"EXECUTE"})," clause. For example:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"=# CREATE EXTERNAL WEB TABLE output (output text)\n    EXECUTE 'PATH=/home/gpadmin/programs; export PATH; myprogram.sh' \n    FORMAT 'TEXT';\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Scripts must be executable by the ",(0,n.jsx)(a.code,{children:"gpadmin"})," user and reside in the same location on the coordinator or segment hosts."]}),"\n",(0,n.jsx)(a.p,{children:"The following command defines a web table that runs a script. The script runs on each segment host where a segment has output rows to process."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"=# CREATE EXTERNAL WEB TABLE log_output \n    (linenum int, message text) \n    EXECUTE '/var/load_scripts/get_log_data.sh' ON HOST \n    FORMAT 'TEXT' (DELIMITER '|');\n"})}),"\n",(0,n.jsx)(a.h2,{id:"url-based-external-web-tables",children:"URL-based external web tables"}),"\n",(0,n.jsx)(a.p,{children:"A URL-based web table accesses data from a web server using the HTTP protocol. Web table data is dynamic; the data is not rescannable."}),"\n",(0,n.jsxs)(a.p,{children:["Specify the ",(0,n.jsx)(a.code,{children:"LOCATION"})," of files on a web server using ",(0,n.jsx)(a.code,{children:"http://"}),". The web data file(s) must reside on a web server that Cloudberry Database segment hosts can access. The number of URLs specified corresponds to the number of segment instances that work in parallel to access the web table. For example, if you specify 2 external files to a Cloudberry Database system with 8 primary segments, 2 of the 8 segments access the web table in parallel at query runtime."]}),"\n",(0,n.jsx)(a.p,{children:"The following sample command defines a web table that gets data from several URLs."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"=# CREATE EXTERNAL WEB TABLE ext_expenses (name text, \n  date date, amount float4, category text, description text) \n  LOCATION ( \n\n  'http://intranet.company.com/expenses/sales/file.csv',\n  'http://intranet.company.com/expenses/exec/file.csv',\n  'http://intranet.company.com/expenses/finance/file.csv',\n  'http://intranet.company.com/expenses/ops/file.csv',\n  'http://intranet.company.com/expenses/marketing/file.csv',\n  'http://intranet.company.com/expenses/eng/file.csv' \n\n   )\n  FORMAT 'CSV' ( HEADER );\n"})})]})}function m(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>d,a:()=>r});var n=t(67294);const s={},o=n.createContext(s);function r(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);