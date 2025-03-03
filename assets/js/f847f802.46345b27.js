"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7182],{56202:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var n=t(85893),o=t(11151);const d={title:"Load Data Using COPY"},s="Load Data into Cloudberry Database Using COPY",i={id:"data-loading/load-data-using-copy",title:"Load Data Using COPY",description:"COPY FROM copies data from a file or standard input in a local file system into a table and appends the data to the table contents. COPY is non-parallel: data is loaded in a single process using the Cloudberry Database coordinator instance. Using COPY is only recommended for very small data files.",source:"@site/docs/data-loading/load-data-using-copy.md",sourceDirName:"data-loading",slug:"/data-loading/load-data-using-copy",permalink:"/docs/data-loading/load-data-using-copy",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/data-loading/load-data-using-copy.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"Load Data Using COPY"},sidebar:"docsbars",previous:{title:"Data Loading Overview",permalink:"/docs/data-loading/"},next:{title:"Load Data Using gpfdist",permalink:"/docs/data-loading/load-data-using-gpfdist"}},l={},c=[{value:"Load from a file",id:"load-from-a-file",level:2},{value:"Load from STDIN",id:"load-from-stdin",level:2},{value:"Load data using <code>\\copy</code> in psql",id:"load-data-using-copy-in-psql",level:2},{value:"Input format",id:"input-format",level:2}];function r(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.h1,{id:"load-data-into-cloudberry-database-using-copy",children:["Load Data into Cloudberry Database Using ",(0,n.jsx)(a.code,{children:"COPY"})]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"COPY FROM"})," copies data from a file or standard input in a local file system into a table and appends the data to the table contents. ",(0,n.jsx)(a.code,{children:"COPY"})," is non-parallel: data is loaded in a single process using the Cloudberry Database coordinator instance. Using ",(0,n.jsx)(a.code,{children:"COPY"})," is only recommended for very small data files."]}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"COPY"})," source file must be accessible to the ",(0,n.jsx)(a.code,{children:"postgres"})," process on the coordinator host. Specify the ",(0,n.jsx)(a.code,{children:"COPY"})," source file name relative to the data directory on the coordinator host, or specify an absolute path."]}),"\n",(0,n.jsxs)(a.p,{children:["Cloudberry Database copies data from ",(0,n.jsx)(a.code,{children:"STDIN"})," or ",(0,n.jsx)(a.code,{children:"STDOUT"})," using the connection between the client and the coordinator server."]}),"\n",(0,n.jsx)(a.h2,{id:"load-from-a-file",children:"Load from a file"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"COPY"})," command requests the ",(0,n.jsx)(a.code,{children:"postgres"})," backend to open the specified file, to read it and append it to the target table. To be able to read the file, the backend needs to have read permissions on the file, and you need to specify the file name using an absolute path on the coordinator host, or using a relative path to the coordinator data directory."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"COPY <table_name> FROM </path/to/filename>;\n"})}),"\n",(0,n.jsx)(a.h2,{id:"load-from-stdin",children:"Load from STDIN"}),"\n",(0,n.jsxs)(a.p,{children:["To avoid the problem of copying the data file to the coordinator host before loading the data, ",(0,n.jsx)(a.code,{children:"COPY FROM STDIN"})," uses the Standard Input channel and feeds data directly into the ",(0,n.jsx)(a.code,{children:"postgres"})," backend. After the ",(0,n.jsx)(a.code,{children:"COPY FROM STDIN"})," command starts, the backend will accept lines of data until a single line only contains a backslash-period (",(0,n.jsx)(a.code,{children:"\\."}),")."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"COPY <table_name> FROM <STDIN>;\n"})}),"\n",(0,n.jsxs)(a.h2,{id:"load-data-using-copy-in-psql",children:["Load data using ",(0,n.jsx)(a.code,{children:"\\copy"})," in psql"]}),"\n",(0,n.jsxs)(a.p,{children:["Do not confuse the psql ",(0,n.jsx)(a.code,{children:"\\copy"})," command with the ",(0,n.jsx)(a.code,{children:"COPY"})," SQL command. The ",(0,n.jsx)(a.code,{children:"\\copy"})," invokes a regular ",(0,n.jsx)(a.code,{children:"COPY FROM STDIN"})," and sends the data from the psql client to the backend. Therefore, any file must locate on the host where the psql client runs, and must be accessible to the user which runs the client."]}),"\n",(0,n.jsxs)(a.p,{children:["To avoid the problem of copying the data file to the coordinator host before loading the data, ",(0,n.jsx)(a.code,{children:"COPY FROM STDIN"})," uses the Standard Input channel and feeds data directly into the ",(0,n.jsx)(a.code,{children:"postgres"})," backend. After the ",(0,n.jsx)(a.code,{children:"COPY FROM STDIN"})," command started, the backend will accept lines of data until a single line only contains a backslash-period (",(0,n.jsx)(a.code,{children:"\\."}),"). psql is wrapping all of this into the handy ",(0,n.jsx)(a.code,{children:"\\copy"})," command."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"\\copy <table_name> FROM <filename>;\n"})}),"\n",(0,n.jsx)(a.h2,{id:"input-format",children:"Input format"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"COPY FROM"})," accepts a ",(0,n.jsx)(a.code,{children:"FORMAT"})," parameter, which specifies the format of the input data. The possible values are ",(0,n.jsx)(a.code,{children:"TEXT"}),", ",(0,n.jsx)(a.code,{children:"CSV"})," (Comma Separated Values), and ",(0,n.jsx)(a.code,{children:"BINARY"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"COPY <table_name> FROM </path/to/filename> WITH (FORMAT csv);\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"FORMAT csv"})," will read comma-separated values. The ",(0,n.jsx)(a.code,{children:"FORMAT text"})," by default uses tabulators to separate the values, the ",(0,n.jsx)(a.code,{children:"DELIMITER"})," option specifies a different character as value delimiter."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"COPY <table_name> FROM </path/to/filename> WITH (FORMAT text, DELIMITER '|');\n"})}),"\n",(0,n.jsxs)(a.p,{children:["By default, the default client encoding is used, and you can change this using the ",(0,n.jsx)(a.code,{children:"ENCODING"})," option. This is useful if data is coming from another operating system."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"COPY <table_name> FROM </path/to/filename> WITH (ENCODING 'latin1');\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>s});var n=t(67294);const o={},d=n.createContext(o);function s(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);