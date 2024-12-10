"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9684],{76531:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(85893),r=t(11151);const o={title:"pg_restore"},i="pg_restore",a={id:"sys-utilities/pg-restore",title:"pg_restore",description:"Restores a database from an archive file created by pg_dump.",source:"@site/docs/sys-utilities/pg-restore.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/pg-restore",permalink:"/docs/sys-utilities/pg-restore",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/pg-restore.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"pg_restore"}},d={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Restore options",id:"restore-options",level:3},{value:"Connection options",id:"connection-options",level:3},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"pg_restore",children:"pg_restore"}),"\n",(0,n.jsxs)(s.p,{children:["Restores a database from an archive file created by ",(0,n.jsx)(s.code,{children:"pg_dump"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"pg_restore [<connection-option> ...] [<restore_option> ...] <filename>\n\npg_restore -? | --help\n\npg_restore -V | --version\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"pg_restore"})," is a utility for restoring a database from an archive created by ",(0,n.jsx)(s.a,{href:"/docs/sys-utilities/pg-dump",children:"pg_dump"})," in one of the non-plain-text formats. It will issue the commands necessary to reconstruct the database to the state it was in at the time it was saved. The archive files also allow ",(0,n.jsx)(s.code,{children:"pg_restore"})," to be selective about what is restored, or even to reorder the items prior to being restored."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"pg_restore"})," can operate in two modes. If a database name is specified, the archive is restored directly into the database. Otherwise, a script containing the SQL commands necessary to rebuild the database is created and written to a file or standard output. The script output is equivalent to the plain text output format of ",(0,n.jsx)(s.code,{children:"pg_dump"}),". Some of the options controlling the output are therefore analogous to ",(0,n.jsx)(s.code,{children:"pg_dump"})," options."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"pg_restore"}),' cannot restore information that is not present in the archive file. For instance, if the archive was made using the "dump data as ',(0,n.jsx)(s.code,{children:"INSERT"}),' commands" option, ',(0,n.jsx)(s.code,{children:"pg_restore"})," will not be able to load the data using ",(0,n.jsx)(s.code,{children:"COPY"})," statements."]}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"filename"})})}),"\n",(0,n.jsx)(s.p,{children:"Specifies the location of the archive file (or directory, for a directory-format archive) to be restored. If not specified, the standard input is used."}),"\n",(0,n.jsx)(s.h3,{id:"restore-options",children:"Restore options"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-a | --data-only"})})}),"\n",(0,n.jsx)(s.p,{children:"Restore only the data, not the schema (data definitions). Table data and sequence values are restored, if present in the archive."}),"\n",(0,n.jsxs)(s.p,{children:["This option is similar to, but for historical reasons not identical to, specifying ",(0,n.jsx)(s.code,{children:"--section=data"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-c | --clean"})})}),"\n",(0,n.jsx)(s.p,{children:"Clean (drop) database objects before recreating them. (This might generate some harmless error messages, if any objects were not present in the destination database.)"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-C | --create"})})}),"\n",(0,n.jsxs)(s.p,{children:["Create the database before restoring into it. If ",(0,n.jsx)(s.code,{children:"--clean"})," is also specified, drop and recreate the target database before connecting to it."]}),"\n",(0,n.jsxs)(s.p,{children:["When this option is used, the database named with ",(0,n.jsx)(s.code,{children:"-d"})," is used only to issue the initial ",(0,n.jsx)(s.code,{children:"DROP DATABASE"})," and ",(0,n.jsx)(s.code,{children:"CREATE DATABASE"})," commands. All data is restored into the database name that appears in the archive."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-d dbname | --dbname=dbname"})})}),"\n",(0,n.jsxs)(s.p,{children:["Connect to this database and restore directly into this database. This utility, like most other Cloudberry Database utilities, also uses the environment variables supported by ",(0,n.jsx)(s.code,{children:"libpq"}),". However it does not read ",(0,n.jsx)(s.code,{children:"PGDATABASE"})," when a database name is not supplied."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-e | --exit-on-error"})})}),"\n",(0,n.jsx)(s.p,{children:"Exit if an error is encountered while sending SQL commands to the database. The default is to continue and to display a count of errors at the end of the restoration."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-f outfilename | --file=outfilename"})})}),"\n",(0,n.jsxs)(s.p,{children:["Specify output file for generated script, or for the listing when used with ",(0,n.jsx)(s.code,{children:"-l"}),". Default is the standard output."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-F c|d|t | --format={custom | directory | tar}"})})}),"\n",(0,n.jsxs)(s.p,{children:["The format of the archive produced by ",(0,n.jsx)(s.a,{href:"/docs/sys-utilities/pg-dump",children:"pg_dump"}),". It is not necessary to specify the format, since ",(0,n.jsx)(s.code,{children:"pg_restore"})," will determine the format automatically. Format can be ",(0,n.jsx)(s.code,{children:"custom"}),", ",(0,n.jsx)(s.code,{children:"directory"}),", or ",(0,n.jsx)(s.code,{children:"tar"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-I index | --index=index"})})}),"\n",(0,n.jsx)(s.p,{children:"Restore definition of named index only."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-j | --number-of-jobs | --jobs=number-of-jobs"})})}),"\n",(0,n.jsxs)(s.p,{children:["Run the most time-consuming parts of ",(0,n.jsx)(s.code,{children:"pg_restore"})," \u2014 those which load data, create indexes, or create constraints \u2014 using multiple concurrent jobs. This option can dramatically reduce the time to restore a large database to a server running on a multiprocessor machine."]}),"\n",(0,n.jsx)(s.p,{children:"Each job is one process or one thread, depending on the operating system, and uses a separate connection to the server."}),"\n",(0,n.jsx)(s.p,{children:"The optimal value for this option depends on the hardware setup of the server, of the client, and of the network. Factors include the number of CPU cores and the disk setup. A good place to start is the number of CPU cores on the server, but values larger than that can also lead to faster restore times in many cases. Of course, values that are too high will lead to decreased performance because of thrashing."}),"\n",(0,n.jsxs)(s.p,{children:["Only the custom archive format is supported with this option. The input file must be a regular file (not, for example, a pipe). This option is ignored when emitting a script rather than connecting directly to a database server. Also, multiple jobs cannot be used together with the option ",(0,n.jsx)(s.code,{children:"--single-transaction"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-l | --list"})})}),"\n",(0,n.jsxs)(s.p,{children:["List the contents of the archive. The output of this operation can be used with the ",(0,n.jsx)(s.code,{children:"-L"})," option to restrict and reorder the items that are restored."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-L list-file | --use-list=list-file"})})}),"\n",(0,n.jsxs)(s.p,{children:["Restore elements in the list-file only, and in the order they appear in the file. Note that if filtering switches such as ",(0,n.jsx)(s.code,{children:"-n"})," or ",(0,n.jsx)(s.code,{children:"-t"})," are used with ",(0,n.jsx)(s.code,{children:"-L"}),", they will further restrict the items restored."]}),"\n",(0,n.jsxs)(s.p,{children:["list-file is normally created by editing the output of a previous ",(0,n.jsx)(s.code,{children:"-l"})," operation. Lines can be moved or removed, and can also be commented out by placing a semicolon (;) at the start of the line. See below for examples."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-n schema | --schema=schema"})})}),"\n",(0,n.jsxs)(s.p,{children:["Restore only objects that are in the named schema. This can be combined with the ",(0,n.jsx)(s.code,{children:"-t"})," option to restore just a specific table."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-O | --no-owner"})})}),"\n",(0,n.jsxs)(s.p,{children:["Do not output commands to set ownership of objects to match the original database. By default, ",(0,n.jsx)(s.code,{children:"pg_restore"})," issues ",(0,n.jsx)(s.code,{children:"ALTER OWNER"})," or ",(0,n.jsx)(s.code,{children:"SET SESSION AUTHORIZATION"})," statements to set ownership of created schema elements. These statements will fail unless the initial connection to the database is made by a superuser (or the same user that owns all of the objects in the script). With ",(0,n.jsx)(s.code,{children:"-O"}),", any user name can be used for the initial connection, and this user will own all the created objects."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-P 'function-name(argtype [, ...])' | --function='function-name(argtype [, ...])'"})})}),"\n",(0,n.jsxs)(s.p,{children:["Restore the named function only. The function name must be enclosed in quotes. Be careful to spell the function name and arguments exactly as they appear in the dump file's table of contents (as shown by the ",(0,n.jsx)(s.code,{children:"--list"})," option)."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-s | --schema-only"})})}),"\n",(0,n.jsx)(s.p,{children:"Restore only the schema (data definitions), not data, to the extent that schema entries are present in the archive."}),"\n",(0,n.jsxs)(s.p,{children:["This option is the inverse of ",(0,n.jsx)(s.code,{children:"--data-only"}),". It is similar to, but for historical reasons not identical to, specifying ",(0,n.jsx)(s.code,{children:"--section=pre-data --section=post-data"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["(Do not confuse this with the ",(0,n.jsx)(s.code,{children:"--schema"}),' option, which uses the word "schema" in a different meaning.)']}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-S username | --superuser=username"})})}),"\n",(0,n.jsxs)(s.p,{children:["Specify the superuser user name to use when deactivating triggers. This is only relevant if ",(0,n.jsx)(s.code,{children:"--disable-triggers"})," is used."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note"})," Cloudberry Database does not support user-defined triggers."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-t table | --table=table"})})}),"\n",(0,n.jsxs)(s.p,{children:["Restore definition and/or data of named table only. Multiple tables may be specified with multiple ",(0,n.jsx)(s.code,{children:"-t"})," switches. This can be combined with the ",(0,n.jsx)(s.code,{children:"-n"})," option to specify a schema."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-T trigger | --trigger=trigger"})})}),"\n",(0,n.jsx)(s.p,{children:"Restore named trigger only."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note"})," Cloudberry Database does not support user-defined triggers."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-v | --verbose"})})}),"\n",(0,n.jsx)(s.p,{children:"Specifies verbose mode."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-V | --version"})})}),"\n",(0,n.jsxs)(s.p,{children:["Print the ",(0,n.jsx)(s.code,{children:"pg_restore"})," version and exit."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-x | --no-privileges | --no-acl"})})}),"\n",(0,n.jsxs)(s.p,{children:["Prevent restoration of access privileges (",(0,n.jsx)(s.code,{children:"GRANT/REVOKE"})," commands)."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-1 | --single-transaction"})})}),"\n",(0,n.jsx)(s.p,{children:"Run the restore as a single transaction. This ensures that either all the commands complete successfully, or no changes are applied."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--disable-triggers"})})}),"\n",(0,n.jsxs)(s.p,{children:["This option is relevant only when performing a data-only restore. It instructs ",(0,n.jsx)(s.code,{children:"pg_restore"})," to run commands to temporarily deactivate triggers on the target tables while the data is reloaded. Use this if you have triggers on the tables that you do not want to invoke during data reload. The commands emitted for ",(0,n.jsx)(s.code,{children:"--disable-triggers"})," must be done as superuser. So you should also specify a superuser name with ",(0,n.jsx)(s.code,{children:"-S"})," or, preferably, run ",(0,n.jsx)(s.code,{children:"pg_restore"})," as a superuser."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note"})," Cloudberry Database does not support user-defined triggers."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--no-data-for-failed-tables"})})}),"\n",(0,n.jsx)(s.p,{children:"By default, table data is restored even if the creation command for the table failed (e.g., because it already exists). With this option, data for such a table is skipped. This behavior is useful when the target database may already contain the desired table contents. Specifying this option prevents duplicate or obsolete data from being loaded. This option is effective only when restoring directly into a database, not when producing SQL script output."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--no-security-labels"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not output commands to restore security labels, even if the archive contains them."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--no-tablespaces"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not output commands to select tablespaces. With this option, all objects will be created in whichever tablespace is the default during restore."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--section=sectionname"})})}),"\n",(0,n.jsxs)(s.p,{children:["Only restore the named section. The section name can be ",(0,n.jsx)(s.code,{children:"pre-data"}),", ",(0,n.jsx)(s.code,{children:"data"}),", or ",(0,n.jsx)(s.code,{children:"post-data"}),". This option can be specified more than once to select multiple sections."]}),"\n",(0,n.jsx)(s.p,{children:"The default is to restore all sections."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--use-set-session-authorization"})})}),"\n",(0,n.jsxs)(s.p,{children:["Output SQL-standard ",(0,n.jsx)(s.code,{children:"SET SESSION AUTHORIZATION"})," commands instead of ",(0,n.jsx)(s.code,{children:"ALTER OWNER"})," commands to determine object ownership. This makes the dump more standards-compatible, but depending on the history of the objects in the dump, it might not restore properly."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-? | --help"})})}),"\n",(0,n.jsxs)(s.p,{children:["Show help about ",(0,n.jsx)(s.code,{children:"pg_restore"})," command line arguments, and exit."]}),"\n",(0,n.jsx)(s.h3,{id:"connection-options",children:"Connection options"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-h host | --host host"})})}),"\n",(0,n.jsxs)(s.p,{children:["The host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable ",(0,n.jsx)(s.code,{children:"PGHOST"})," or defaults to localhost."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-p port | --port port"})})}),"\n",(0,n.jsxs)(s.p,{children:["The TCP port on which the Cloudberry Database coordinator database server is listening for connections. If not specified, reads from the environment variable ",(0,n.jsx)(s.code,{children:"PGPORT"})," or defaults to 5432."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-U username | --username username"})})}),"\n",(0,n.jsxs)(s.p,{children:["The database role name to connect as. If not specified, reads from the environment variable ",(0,n.jsx)(s.code,{children:"PGUSER"})," or defaults to the current system role name."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-w | --no-password"})})}),"\n",(0,n.jsxs)(s.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,n.jsx)(s.code,{children:".pgpass"})," file the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-W | --password"})})}),"\n",(0,n.jsx)(s.p,{children:"Force a password prompt."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--role=rolename"})})}),"\n",(0,n.jsxs)(s.p,{children:["Specifies a role name to be used to perform the restore. This option causes ",(0,n.jsx)(s.code,{children:"pg_restore"})," to issue a ",(0,n.jsx)(s.code,{children:"SET ROLE rolename"})," command after connecting to the database. It is useful when the authenticated user (specified by ",(0,n.jsx)(s.code,{children:"-U"}),") lacks privileges needed by ",(0,n.jsx)(s.code,{children:"pg_restore"}),", but can switch to a role with the required rights. Some installations have a policy against logging in directly as a superuser, and use of this option allows restores to be performed without violating the policy."]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:["If your installation has any local additions to the ",(0,n.jsx)(s.code,{children:"template1"})," database, be careful to load the output of ",(0,n.jsx)(s.code,{children:"pg_restore"})," into a truly empty database; otherwise you are likely to get errors due to duplicate definitions of the added objects. To make an empty database without any local additions, copy from ",(0,n.jsx)(s.code,{children:"template0"})," not ",(0,n.jsx)(s.code,{children:"template1"}),", for example:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE DATABASE foo WITH TEMPLATE template0;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["When restoring data to a pre-existing table and the option ",(0,n.jsx)(s.code,{children:"--disable-triggers"})," is used, ",(0,n.jsx)(s.code,{children:"pg_restore"})," emits commands to deactivate triggers on user tables before inserting the data, then emits commands to re-enable them after the data has been inserted. If the restore is stopped in the middle, the system catalogs may be left in the wrong state."]}),"\n",(0,n.jsxs)(s.p,{children:["See also the ",(0,n.jsx)(s.code,{children:"pg_dump"})," documentation for details on limitations of ",(0,n.jsx)(s.code,{children:"pg_dump"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Once restored, it is wise to run ",(0,n.jsx)(s.code,{children:"ANALYZE"})," on each restored table so the query planner has useful statistics."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Assume we have dumped a database called ",(0,n.jsx)(s.code,{children:"mydb"})," into a custom-format dump file:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"pg_dump -Fc mydb > db.dump\n"})}),"\n",(0,n.jsx)(s.p,{children:"To drop the database and recreate it from the dump:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"dropdb mydb\npg_restore -C -d template1 db.dump\n"})}),"\n",(0,n.jsxs)(s.p,{children:["To reload the dump into a new database called ",(0,n.jsx)(s.code,{children:"newdb"}),". Notice there is no ",(0,n.jsx)(s.code,{children:"-C"}),", we instead connect directly to the database to be restored into. Also note that we clone the new database from ",(0,n.jsx)(s.code,{children:"template0"})," not ",(0,n.jsx)(s.code,{children:"template1"}),", to ensure it is initially empty:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"createdb -T template0 newdb\npg_restore -d newdb db.dump\n"})}),"\n",(0,n.jsx)(s.p,{children:"To reorder database items, it is first necessary to dump the table of contents of the archive:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"pg_restore -l db.dump > db.list\n"})}),"\n",(0,n.jsx)(s.p,{children:"The listing file consists of a header and one line for each item, for example,"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"; Archive created at Mon Sep 14 13:55:39 2009\n;     dbname: DBDEMOS\n;     TOC Entries: 81\n;     Compression: 9\n;     Dump Version: 1.10-0\n;     Format: CUSTOM\n;     Integer: 4 bytes\n;     Offset: 8 bytes\n;     Dumped from database version: 9.4.24\n;     Dumped by pg_dump version: 9.4.24\n;\n; Selected TOC Entries:\n;\n3; 2615 2200 SCHEMA - public pasha\n1861; 0 0 COMMENT - SCHEMA public pasha\n1862; 0 0 ACL - public pasha\n317; 1247 17715 TYPE public composite pasha\n319; 1247 25899 DOMAIN public domain0 pasha2\n"})}),"\n",(0,n.jsx)(s.p,{children:"Semicolons start a comment, and the numbers at the start of lines refer to the internal archive ID assigned to each item. Lines in the file can be commented out, deleted, and reordered. For example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"10; 145433 TABLE map_resolutions postgres\n;2; 145344 TABLE species postgres\n;4; 145359 TABLE nt_header postgres\n6; 145402 TABLE species_records postgres\n;8; 145416 TABLE ss_old postgres\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Could be used as input to ",(0,n.jsx)(s.code,{children:"pg_restore"})," and would only restore items 10 and 6, in that order:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"pg_restore -L db.list db.dump\n"})}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sys-utilities/pg-dump",children:"pg_dump"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(67294);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);