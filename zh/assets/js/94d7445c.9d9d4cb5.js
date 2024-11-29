"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4799],{15750:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var i=s(85893),r=s(11151);const d={title:"reindexdb"},t="reindexdb",o={id:"sys-utilities/reindexdb",title:"reindexdb",description:"Rebuilds indexes in a database.",source:"@site/docs/sys-utilities/reindexdb.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/reindexdb",permalink:"/zh/docs/sys-utilities/reindexdb",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/reindexdb.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"2024\u5e7411\u670829\u65e5",frontMatter:{title:"reindexdb"},sidebar:"docsbars",previous:{title:"psql",permalink:"/zh/docs/sys-utilities/psql"},next:{title:"vacuumdb",permalink:"/zh/docs/sys-utilities/vacuumdb"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Notes",id:"notes",level:2},{value:"Environment",id:"environment",level:2},{value:"Diagnostics",id:"diagnostics",level:2},{value:"Notes",id:"notes-1",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"reindexdb",children:"reindexdb"}),"\n",(0,i.jsx)(n.p,{children:"Rebuilds indexes in a database."}),"\n",(0,i.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"reindexdb [<connection-option> ...] [<option> ...] [-S | --schema <schema>] ...\n        [-t | --table <table>] \n        [-i | --index <index>] ... [<dbname>]\n\nreindexdb [<connection-option> ...] [<option> ...] -a | --all\n\nreindexdb [<connection-option> ...] [<option> ...] -s | --system [<dbname>]\n\nreindexdb -? | --help\n\nreindexdb -V | --version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"reindexdb"})," is a utility for rebuilding indexes in Cloudberry Database."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"reindexdb"})," is a wrapper around the SQL command ",(0,i.jsx)(n.a,{href:"/zh/docs/sql-stmts/reindex",children:(0,i.jsx)(n.code,{children:"REINDEX"})}),". There is no effective difference between reindexing databases via this utility and via other methods for accessing the server."]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"reindexdb"})," accepts the following command-line arguments:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-a"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--all"})})]}),"\n",(0,i.jsx)(n.p,{children:"Reindex all databases."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[-d] dbname"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[--dbname=]dbname"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the name of the database to be reindexed, when ",(0,i.jsx)(n.code,{children:"-a"})," or ",(0,i.jsx)(n.code,{children:"--all"})," is not used. If this is not specified, Cloudberry Database reads the database name from the environment variable ",(0,i.jsx)(n.code,{children:"PGDATABASE"}),". If that is not set, the user name specified for the connection is used. The dbname can be a ",(0,i.jsx)(n.a,{href:"https://www.postgresql.org/docs/12/libpq-connect.html#LIBPQ-CONNSTRING",children:"connection string"}),". If so, connection string parameters will override any conflicting command line options."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-e"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--echo"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Echo the commands that ",(0,i.jsx)(n.code,{children:"reindexdb"})," generates and sends to the server."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-i index"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--index=index"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Recreate index only. You can recreate multiple indexes by specifying multiple ",(0,i.jsx)(n.code,{children:"-i"})," switches."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-q"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--quiet"})})]}),"\n",(0,i.jsx)(n.p,{children:"Do not display progress messages."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-s"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--system"})})]}),"\n",(0,i.jsx)(n.p,{children:"Reindex system catalogs only."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-S schema"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--schema=schema"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Reindex schema only. You can reindex multiple schemas by specifying multiple ",(0,i.jsx)(n.code,{children:"-S"})," switches."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-t table"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--table=table"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Reindex table only. You can reindex multiple tables by specifying multiple ",(0,i.jsx)(n.code,{children:"-t"})," switches."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-v"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--verbose"})})]}),"\n",(0,i.jsx)(n.p,{children:"Print detailed information during processing."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-V"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--version"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Print the ",(0,i.jsx)(n.code,{children:"reindexdb"})," version and exit."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-?"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--help"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Show help about ",(0,i.jsx)(n.code,{children:"reindexdb"})," command line arguments, and exit."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Connection Options"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"reindexdb"})," also accepts the following command-line arguments for connection parameters:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-h host"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--host=host"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable ",(0,i.jsx)(n.code,{children:"PGHOST"})," or defaults to localhost."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-p port"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--port=port"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the TCP port on which the Cloudberry coordinator database server is listening for connections. If not specified, reads from the environment variable ",(0,i.jsx)(n.code,{children:"PGPORT"})," or defaults to 5432."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-U username"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--username=username"})})]}),"\n",(0,i.jsxs)(n.p,{children:["The database user name to connect as. If not specified, reads from the environment variable ",(0,i.jsx)(n.code,{children:"PGUSER"})," or defaults to the current system user name."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-w"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--no-password"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,i.jsx)(n.code,{children:".pgpass"})," file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"-W"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--password"})})]}),"\n",(0,i.jsxs)(n.p,{children:["Force ",(0,i.jsx)(n.code,{children:"reindexdb"})," to prompt for a password before connecting to a database.\nThis option is never essential, since ",(0,i.jsx)(n.code,{children:"reindexdb"})," automatically prompts for a password if the server demands password authentication. However, ",(0,i.jsx)(n.code,{children:"reindexdb"})," will waste a connection attempt finding out that the server wants a password. In some cases it is worth typing ",(0,i.jsx)(n.code,{children:"-W"})," to avoid the extra connection attempt."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--maintenance-db=dbname"})})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the name of the database to connect to discover what other databases should be reindexed, when ",(0,i.jsx)(n.code,{children:"-a"})," or ",(0,i.jsx)(n.code,{children:"--all"})," is used. If not specified, the ",(0,i.jsx)(n.code,{children:"postgres"})," database will be used, and if that does not exist, ",(0,i.jsx)(n.code,{children:"template1"})," will be used. This can be a ",(0,i.jsx)(n.a,{href:"https://www.postgresql.org/docs/12/libpq-connect.html#LIBPQ-CONNSTRING",children:"connection"}),". If so, connection string parameters will override any conflicting command line options. Also, connection string parameters other than the database name itself will be re-used when connecting to other databases."]}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"reindexdb"})," causes locking of system catalog tables, which could affect currently running queries. To avoid disrupting ongoing business operations, schedule the ",(0,i.jsx)(n.code,{children:"reindexb"})," operation during a period of low activity."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"reindexdb"})," might need to connect several times to the coordinator server, asking for a password each time. It is convenient to have a ",(0,i.jsx)(n.code,{children:"~/.pgpass"})," file in such cases."]}),"\n",(0,i.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"PGDATABASE"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"PGHOST"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"PGPORT"})}),(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"PGUSER"})})]}),"\n",(0,i.jsx)(n.p,{children:"Default connection parameters."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"PG_COLOR"})})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies whether to use color in diagnostic messages. Possible values are ",(0,i.jsx)(n.code,{children:"always"}),", ",(0,i.jsx)(n.code,{children:"auto"}),", and ",(0,i.jsx)(n.code,{children:"never"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This utility, like most other Cloudberry Database utilities, also uses the environment variables supported by ",(0,i.jsx)(n.code,{children:"libpq"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"diagnostics",children:"Diagnostics"}),"\n",(0,i.jsxs)(n.p,{children:["In case of difficulty, see ",(0,i.jsx)(n.a,{href:"/zh/docs/sql-stmts/reindex",children:"REINDEX"})," and ",(0,i.jsx)(n.a,{href:"/zh/docs/sys-utilities/psql",children:"psql"})," for discussions of potential problems and error messages. The database server must be running at the targeted host. Also, any default connection settings and environment variables used by the ",(0,i.jsx)(n.code,{children:"libpq"})," front-end library will apply."]}),"\n",(0,i.jsx)(n.h2,{id:"notes-1",children:"Notes"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"reindexdb"})," might need to connect several times to the Cloudberry Database server, asking for a password each time. It is convenient to have a ",(0,i.jsx)(n.code,{children:"~/.pgpass"})," file in such cases."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["To reindex the database named ",(0,i.jsx)(n.code,{children:"mydb"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"reindexdb mydb\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To reindex the table ",(0,i.jsx)(n.code,{children:"foo"})," and the index ",(0,i.jsx)(n.code,{children:"bar"})," in a database named ",(0,i.jsx)(n.code,{children:"abcd"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"reindexdb --table=foo --index=bar abcd\n"})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/zh/docs/sql-stmts/reindex",children:"REINDEX"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(67294);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);