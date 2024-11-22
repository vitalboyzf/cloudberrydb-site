"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8774],{17561:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(85893),o=n(11151);const i={title:"pg_dumpall"},r="pg_dumpall",a={id:"sys-utilities/pg-dumpall",title:"pg_dumpall",description:"Extracts all databases in a Cloudberry Database system to a single script file or other archive file.",source:"@site/docs/sys-utilities/pg-dumpall.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/pg-dumpall",permalink:"/zh/docs/sys-utilities/pg-dumpall",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/pg-dumpall.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732243913,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",frontMatter:{title:"pg_dumpall"},sidebar:"docsbars",previous:{title:"pg_dump",permalink:"/zh/docs/sys-utilities/pg-dump"},next:{title:"pg_filedump",permalink:"/zh/docs/sys-utilities/pg-filedump"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Dump options",id:"dump-options",level:3},{value:"Connection options",id:"connection-options",level:3},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"pg_dumpall",children:"pg_dumpall"}),"\n",(0,t.jsx)(s.p,{children:"Extracts all databases in a Cloudberry Database system to a single script file or other archive file."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"pg_dumpall [<connection-option> ...] [<dump_option> ...]\n\npg_dumpall -? | --help\n\npg_dumpall -V | --version\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"pg_dumpall"})," is a standard PostgreSQL utility for backing up all databases in a Cloudberry Database (or PostgreSQL) instance, and is also supported in Cloudberry Database. It creates a single (non-parallel) dump file. For routine backups of Cloudberry Database it is better to use the Cloudberry Database backup utility, gpbackup, for the best performance."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"pg_dumpall"})," creates a single script file that contains SQL commands that can be used as input to ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/psql",children:"psql"})," to restore the databases. It does this by calling ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/pg-dump",children:"pg_dump"})," for each database. ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," also dumps global objects that are common to all databases. (",(0,t.jsx)(s.code,{children:"pg_dump"})," does not save these objects.) This currently includes information about database users and groups, and access permissions that apply to databases as a whole."]}),"\n",(0,t.jsxs)(s.p,{children:["Since ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," reads tables from all databases you will most likely have to connect as a database superuser in order to produce a complete dump. Also you will need superuser privileges to run the saved script in order to be allowed to add users and groups, and to create databases."]}),"\n",(0,t.jsxs)(s.p,{children:["The SQL script will be written to the standard output. Use the ",(0,t.jsx)(s.code,{children:"[-f | --file]"})," option or shell operators to redirect it into a file."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"pg_dumpall"})," needs to connect several times to the Cloudberry Database coordinator server (once per database). If you use password authentication it is likely to ask for a password each time. It is convenient to have a ",(0,t.jsx)(s.code,{children:"~/.pgpass"})," file in such cases."]}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(s.h3,{id:"dump-options",children:"Dump options"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-a | --data-only"})})}),"\n",(0,t.jsxs)(s.p,{children:["Dump only the data, not the schema (data definitions). This option is only meaningful for the plain-text format. For the archive formats, you may specify the option when you call ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/pg-restore",children:"pg_restore"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-c | --clean"})}),"\nOutput commands to clean (drop) database objects prior to (the commands for) creating them. This option is only meaningful for the plain-text format. For the archive formats, you may specify the option when you call ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/pg-restore",children:"pg_restore"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-f filename | --file=filename"})})}),"\n",(0,t.jsx)(s.p,{children:"Send output to the specified file."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-g | --globals-only"})})}),"\n",(0,t.jsx)(s.p,{children:"Dump only global objects (roles and tablespaces), no databases."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-o | --oids"})})}),"\n",(0,t.jsx)(s.p,{children:"Dump object identifiers (OIDs) as part of the data for every table. Use of this option is not recommended for files that are intended to be restored into Cloudberry Database."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-O | --no-owner"})})}),"\n",(0,t.jsxs)(s.p,{children:["Do not output commands to set ownership of objects to match the original database. By default, ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/pg-dump",children:"pg_dump"})," issues ",(0,t.jsx)(s.code,{children:"ALTER OWNER"})," or ",(0,t.jsx)(s.code,{children:"SET SESSION AUTHORIZATION"})," statements to set ownership of created database objects. These statements will fail when the script is run unless it is started by a superuser (or the same user that owns all of the objects in the script). To make a script that can be restored by any user, but will give that user ownership of all the objects, specify ",(0,t.jsx)(s.code,{children:"-O"}),". This option is only meaningful for the plain-text format. For the archive formats, you may specify the option when you call ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/pg-restore",children:"pg_restore"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-r | --roles-only"})})}),"\n",(0,t.jsx)(s.p,{children:"Dump only roles, not databases or tablespaces."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-s | --schema-only"})})}),"\n",(0,t.jsx)(s.p,{children:"Dump only the object definitions (schema), not data."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-S username | --superuser=username"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specify the superuser user name to use when deactivating triggers. This is relevant only if ",(0,t.jsx)(s.code,{children:"--disable-triggers"})," is used. It is better to leave this out, and instead start the resulting script as a superuser."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," Cloudberry Database does not support user-defined triggers."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-t | --tablespaces-only"})})}),"\n",(0,t.jsx)(s.p,{children:"Dump only tablespaces, not databases or roles."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-v | --verbose"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies verbose mode. This will cause ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/pg-dump",children:"pg_dump"})," to output detailed object comments and start/stop times to the dump file, and progress messages to standard error."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-V | --version"})})}),"\n",(0,t.jsxs)(s.p,{children:["Print the ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," version and exit."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-x | --no-privileges | --no-acl"})})}),"\n",(0,t.jsxs)(s.p,{children:["Prevent dumping of access privileges (",(0,t.jsx)(s.code,{children:"GRANT/REVOKE"})," commands)."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--binary-upgrade"})})}),"\n",(0,t.jsx)(s.p,{children:"This option is for use by in-place upgrade utilities. Its use for other purposes is not recommended or supported. The behavior of the option may change in future releases without notice."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--column-inserts | --attribute-inserts"})})}),"\n",(0,t.jsxs)(s.p,{children:["Dump data as ",(0,t.jsx)(s.code,{children:"INSERT"})," commands with explicit column names (",(0,t.jsx)(s.code,{children:"INSERT INTO <table> (<column>, ...) VALUES ..."}),"). This will make restoration very slow; it is mainly useful for making dumps that can be loaded into non-PostgreSQL-based databases. Also, since this option generates a separate command for each row, an error in reloading a row causes only that row to be lost rather than the entire table contents."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--disable-dollar-quoting"})})}),"\n",(0,t.jsx)(s.p,{children:"This option deactivates the use of dollar quoting for function bodies, and forces them to be quoted using SQL standard string syntax."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--disable-triggers"})})}),"\n",(0,t.jsxs)(s.p,{children:["This option is relevant only when creating a data-only dump. It instructs ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," to include commands to temporarily deactivate triggers on the target tables while the data is reloaded. Use this if you have triggers on the tables that you do not want to invoke during data reload. The commands emitted for ",(0,t.jsx)(s.code,{children:"--disable-triggers"})," must be done as superuser. So, you should also specify a superuser name with ",(0,t.jsx)(s.code,{children:"-S"}),", or preferably be careful to start the resulting script as a superuser."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," Cloudberry Database does not support user-defined triggers."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--inserts"})})}),"\n",(0,t.jsxs)(s.p,{children:["Dump data as ",(0,t.jsx)(s.code,{children:"INSERT"})," commands (rather than ",(0,t.jsx)(s.code,{children:"COPY"}),"). This will make restoration very slow; it is mainly useful for making dumps that can be loaded into non-PostgreSQL-based databases. Also, since this option generates a separate command for each row, an error in reloading a row causes only that row to be lost rather than the entire table contents. Note that the restore may fail altogether if you have rearranged column order. The ",(0,t.jsx)(s.code,{children:"--column-inserts"})," option is safe against column order changes, though even slower."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--lock-wait-timeout=timeout"})})}),"\n",(0,t.jsxs)(s.p,{children:["Do not wait forever to acquire shared table locks at the beginning of the dump. Instead, fail if unable to lock a table within the specified timeout. The timeout may be specified in any of the formats accepted by ",(0,t.jsx)(s.code,{children:"SET statement_timeout"}),". Allowed values vary depending on the server version you are dumping from, but an integer number of milliseconds is accepted by all Cloudberry Database versions."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--no-security-labels"})})}),"\n",(0,t.jsx)(s.p,{children:"Do not dump security labels."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--no-tablespaces"})})}),"\n",(0,t.jsx)(s.p,{children:"Do not output commands to select tablespaces. With this option, all objects will be created in whichever tablespace is the default during restore."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--no-unlogged-table-data"})})}),"\n",(0,t.jsx)(s.p,{children:"Do not dump the contents of unlogged tables. This option has no effect on whether or not the table definitions (schema) are dumped; it only suppresses dumping the table data."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--quote-all-identifiers"})})}),"\n",(0,t.jsxs)(s.p,{children:["Force quoting of all identifiers. By default, ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," quotes only identifiers that are reserved words in its own major version. This sometimes results in compatibility issues when dealing with servers of other versions that may have slightly different sets of reserved words. Using ",(0,t.jsx)(s.code,{children:"--quote-all-identifiers"})," prevents such issues, at the price of a harder-to-read dump script."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--resource-queues"})})}),"\n",(0,t.jsx)(s.p,{children:"Dump resource queue definitions."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--resource-groups"})})}),"\n",(0,t.jsx)(s.p,{children:"Dump resource group definitions."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--use-set-session-authorization"})})}),"\n",(0,t.jsxs)(s.p,{children:["Output SQL-standard ",(0,t.jsx)(s.code,{children:"SET SESSION AUTHORIZATION"})," commands instead of ",(0,t.jsx)(s.code,{children:"ALTER OWNER"})," commands to determine object ownership. This makes the dump more standards compatible, but depending on the history of the objects in the dump, may not restore properly. A dump using ",(0,t.jsx)(s.code,{children:"SET SESSION AUTHORIZATION"})," will require superuser privileges to restore correctly, whereas ",(0,t.jsx)(s.code,{children:"ALTER OWNER"})," requires lesser privileges."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--gp-syntax"})})}),"\n",(0,t.jsxs)(s.p,{children:["Output Cloudberry Database syntax in the ",(0,t.jsx)(s.code,{children:"CREATE TABLE"})," statements. This allows the distribution policy (",(0,t.jsx)(s.code,{children:"DISTRIBUTED BY"})," or ",(0,t.jsx)(s.code,{children:"DISTRIBUTED RANDOMLY"})," clauses) of a Cloudberry Database table to be dumped, which is useful for restoring into other Cloudberry Database systems."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--no-gp-syntax"})})}),"\n",(0,t.jsxs)(s.p,{children:["Do not output the table distribution clauses in the ",(0,t.jsx)(s.code,{children:"CREATE TABLE"})," statements."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-? | --help"})})}),"\n",(0,t.jsxs)(s.p,{children:["Show help about ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," command line arguments, and exit."]}),"\n",(0,t.jsx)(s.h3,{id:"connection-options",children:"Connection options"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-d connstr | --dbname=connstr"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies parameters used to connect to the server, as a connection string. See ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/libpq-connect.html#LIBPQ-CONNSTRING",children:"Connection Strings"})," in the PostgreSQL documentation for more information."]}),"\n",(0,t.jsxs)(s.p,{children:["The option is called ",(0,t.jsx)(s.code,{children:"--dbname"})," for consistency with other client applications, but because ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," needs to connect to many databases, the database name in the connection string will be ignored. Use the ",(0,t.jsx)(s.code,{children:"-l"})," option to specify the name of the database used to dump global objects and to discover what other databases should be dumped."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-h host | --host=host"})})}),"\n",(0,t.jsxs)(s.p,{children:["The host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGHOST"})," or defaults to ",(0,t.jsx)(s.code,{children:"localhost"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-l dbname | --database=dbname"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the name of the database in which to connect to dump global objects. If not specified, the ",(0,t.jsx)(s.code,{children:"postgres"})," database is used. If the ",(0,t.jsx)(s.code,{children:"postgres"})," database does not exist, the ",(0,t.jsx)(s.code,{children:"template1"})," database is used."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-p port | --port=port"})})}),"\n",(0,t.jsxs)(s.p,{children:["The TCP port on which the Cloudberry coordinator database server is listening for connections. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGPORT"})," or defaults to ",(0,t.jsx)(s.code,{children:"5432"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-U username | --username= username"})})}),"\n",(0,t.jsxs)(s.p,{children:["The database role name to connect as. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGUSER"})," or defaults to the current system role name."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-w | --no-password"})})}),"\n",(0,t.jsxs)(s.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,t.jsx)(s.code,{children:".pgpass"})," file the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-W | --password"})})}),"\n",(0,t.jsx)(s.p,{children:"Force a password prompt."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--role=rolename"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies a role name to be used to create the dump. This option causes ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," to issue a ",(0,t.jsx)(s.code,{children:"SET ROLE <rolename>"})," command after connecting to the database. It is useful when the authenticated user (specified by ",(0,t.jsx)(s.code,{children:"-U"}),") lacks privileges needed by ",(0,t.jsx)(s.code,{children:"pg_dumpall"}),", but can switch to a role with the required rights. Some installations have a policy against logging in directly as a superuser, and use of this option allows dumps to be made without violating the policy."]}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.p,{children:["Since ",(0,t.jsx)(s.code,{children:"pg_dumpall"})," calls ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/pg-dump",children:"pg_dump"})," internally, some diagnostic messages will refer to ",(0,t.jsx)(s.code,{children:"pg_dump"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Once restored, it is wise to run ",(0,t.jsx)(s.code,{children:"ANALYZE"})," on each database so the query planner has useful statistics. You can also run ",(0,t.jsx)(s.code,{children:"vacuumdb -a -z"})," to vacuum and analyze all databases."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"pg_dumpall"})," requires all needed tablespace directories to exist before the restore; otherwise, database creation will fail for databases in non-default locations."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"To dump all databases:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"pg_dumpall > db.out\n"})}),"\n",(0,t.jsx)(s.p,{children:"To reload database(s) from this file, you can use:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"psql template1 -f db.out\n"})}),"\n",(0,t.jsx)(s.p,{children:"To dump only global objects (including resource queues):"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"pg_dumpall -g --resource-queues\n"})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/pg-dump",children:"pg_dump"})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var t=n(67294);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);