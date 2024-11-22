"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7246],{82986:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=n(85893),i=n(11151);const c={title:"gpcheckcat"},a="gpcheckcat",r={id:"sys-utilities/gpcheckcat",title:"gpcheckcat",description:"The gpcheckcat utility tests Cloudberry Database catalog tables for inconsistencies.",source:"@site/docs/sys-utilities/gpcheckcat.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpcheckcat",permalink:"/docs/sys-utilities/gpcheckcat",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpcheckcat.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732177246,formattedLastUpdatedAt:"Nov 21, 2024",frontMatter:{title:"gpcheckcat"},sidebar:"docsbars",previous:{title:"gpbackup",permalink:"/docs/sys-utilities/gpbackup"},next:{title:"gpcheckperf",permalink:"/docs/sys-utilities/gpcheckperf"}},o={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Notes",id:"notes",level:2}];function d(e){const s={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"gpcheckcat",children:"gpcheckcat"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," utility tests Cloudberry Database catalog tables for inconsistencies."]}),"\n",(0,t.jsxs)(s.p,{children:["The utility is in ",(0,t.jsx)(s.code,{children:"$GPHOME/bin/lib"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"gpcheckcat [ <options<] [ <dbname>] \n\n  Options:\n     -g <dir>\n     -p <port>\n     -s <test_name | 'test_name1, test_name2 [, ...]'>  \n     -P <password>\n     -U <user_name>\n     -S {none | only}\n     -O\n     -R <test_name | 'test_name1, test_name2 [, ...]'>\n     -C <catalog_name>\n     -B <parallel_processes>\n     -v\n     -A\n     -x \"<parameter_name>=<value>\"\n\ngpcheckcat  -l \n\ngpcheckcat -? | --help \n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," utility runs multiple tests that check for database catalog inconsistencies. Some of the tests cannot be run concurrently with other workload statements or the results will not be usable. Restart the database in restricted mode when running ",(0,t.jsx)(s.code,{children:"gpcheckcat"}),", otherwise ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," might report inconsistencies due to ongoing database operations rather than the actual number of inconsistencies. If you run ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," without stopping database activity, run it with ",(0,t.jsx)(s.code,{children:"-O"})," option."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," Any time you run the utility, it checks for and deletes orphaned, temporary database schemas (temporary schemas without a session ID) in the specified databases. The utility displays the results of the orphaned, temporary schema check on the command line and also logs the results."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Catalog inconsistencies are inconsistencies that occur between Cloudberry Database system tables. In general, there are three types of inconsistencies:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Inconsistencies in system tables at the segment level. For example, an inconsistency between a system table that contains table data and a system table that contains column data. As another, a system table that contains duplicates in a column that should to be unique."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Inconsistencies between same system table across segments. For example, a system table is missing row on one segment, but other segments have this row. As another example, the values of specific row column data are different across segments, such as table owner or table access privileges."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Inconsistency between a catalog table and the filesystem. For example, a file exists in database directory, but there is no entry for it in the pg_class table."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-A"})})}),"\n",(0,t.jsxs)(s.p,{children:["Run ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," on all databases in the Cloudberry Database installation."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-B <parallel_processes>"})})}),"\n",(0,t.jsx)(s.p,{children:"The number of processes to run in parallel."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," utility attempts to determine the number of simultaneous processes (the batch size) to use. The utility assumes it can use a buffer with a minimum of 20MB for each process. The maximum number of parallel processes is the number of Cloudberry Database segment instances. The utility displays the number of parallel processes that it uses when it starts checking the catalog."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," The utility might run out of memory if the number of errors returned exceeds the buffer size. If an out of memory error occurs, you can lower the batch size with the ",(0,t.jsx)(s.code,{children:"-B"})," option. For example, if the utility displays a batch size of 936 and runs out of memory, you can specify ",(0,t.jsx)(s.code,{children:"-B 468"})," to run 468 processes in parallel."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-C catalog_table"})})}),"\n",(0,t.jsx)(s.p,{children:"Run cross consistency, foreign key, and ACL tests for the specified catalog table."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-g data_directory"})})}),"\n",(0,t.jsx)(s.p,{children:"Generate SQL scripts to fix catalog inconsistencies. The scripts are placed in data_directory."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-l"})})}),"\n",(0,t.jsxs)(s.p,{children:["List the ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," tests."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-O"})})}),"\n",(0,t.jsxs)(s.p,{children:["Run only the ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," tests that can be run in online (not restricted) mode."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-p port"})})}),"\n",(0,t.jsx)(s.p,{children:"This option specifies the port that is used by the Cloudberry Database."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-P password"})})}),"\n",(0,t.jsx)(s.p,{children:"The password of the user connecting to Cloudberry Database."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-R test_name | 'test_name1,test_name2 [, ...]'"})})}),"\n",(0,t.jsx)(s.p,{children:"Specify one or more tests to run. Specify multiple tests as a comma-delimited list of test names enclosed in quotes."}),"\n",(0,t.jsx)(s.p,{children:"Some tests can be run only when Cloudberry Database is in restricted mode."}),"\n",(0,t.jsx)(s.p,{children:"These are the tests that can be performed:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"acl"})," - Cross consistency check for access control privileges"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"aoseg_table"})," - Check that the vertical partition information (vpinfo) on segment instances is consistent with ",(0,t.jsx)(s.code,{children:"pg_attribute"})," (checks only append-optimized, column storage tables in the database)"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"duplicate"})," - Check for duplicate entries"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"foreign_key"})," - Check foreign keys"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"inconsistent"})," - Cross consistency check for coordinator segment inconsistency"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"missing_extraneous"})," - Cross consistency check for missing or extraneous entries"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"owner"})," - Check table ownership that is inconsistent with the coordinator database"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"orphaned_toast_tables"})," - Check for orphaned TOAST tables."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," There are several ways a TOAST table can become orphaned where a repair script cannot be generated and a manual catalog change is required. One way is if the ",(0,t.jsx)(s.code,{children:"reltoastrelid"})," entry in ",(0,t.jsx)(s.em,{children:"pg_class"})," points to an incorrect TOAST table (a TOAST table mismatch). Another way is if both the ",(0,t.jsx)(s.code,{children:"reltoastrelid"})," in ",(0,t.jsx)(s.em,{children:"pg_class"})," is missing and the ",(0,t.jsx)(s.code,{children:"pg_depend"})," entry is missing (a double orphan TOAST table). If a manual catalog change is needed, ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," will display detailed steps you can follow to update the catalog."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"part_integrity"})," - Check ",(0,t.jsx)(s.em,{children:"pg_partition"})," branch integrity, partition with OIDs, partition distribution policy"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"unique_index_violation"})," - Check tables that have columns with the unique index constraint for duplicate entries"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"dependency"})," - Check for dependency on non-existent objects (restricted mode only)"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"distribution_policy"})," - Check constraints on randomly distributed tables (restricted mode only)"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"namespace"})," - Check for schemas with a missing schema definition (restricted mode only)"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"pgclass"})," - Check ",(0,t.jsx)(s.em,{children:"pg_class"})," entry that does not have any corresponding ",(0,t.jsx)(s.em,{children:"pg_attribute"})," entry (restricted mode only)"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-s `test_name | 'test_name1, test_name2 [, ...]'"})})}),"\n",(0,t.jsx)(s.p,{children:"Specify one ore more tests to skip. Specify multiple tests as a comma-delimited list of test names enclosed in quotes."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-S {none | only}"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specify this option to control the testing of catalog tables that are shared across all databases in the Cloudberry Database installation, such as ",(0,t.jsx)(s.em,{children:"pg_database"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The value ",(0,t.jsx)(s.code,{children:"none"})," deactivates testing of shared catalog tables. The value ",(0,t.jsx)(s.code,{children:"only"})," tests only the shared catalog tables."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-U user_name"})})}),"\n",(0,t.jsx)(s.p,{children:"The user connecting to Cloudberry Database."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-? | --help"})})}),"\n",(0,t.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-v (verbose)"})})}),"\n",(0,t.jsx)(s.p,{children:"Displays detailed information about the tests that are performed."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:'-x "<parameter_name>=<value>"'})})}),"\n",(0,t.jsxs)(s.p,{children:["Set a server configuration parameter, such as ",(0,t.jsx)(s.code,{children:"log_min_messages"}),", at a session level. To set multiple configuration parameters, use the ",(0,t.jsx)(s.code,{children:"-x"})," option multiple times."]}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.p,{children:["The utility identifies tables with missing attributes and displays them in various locations in the output and in a non-standardized format. The utility also displays a summary list of tables with missing attributes in the format ",(0,t.jsx)(s.code,{children:"<database>. <schema>. <table>. <segment_id>"})," after the output information is displayed."]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," detects inconsistent OID (Object ID) information, it generates one or more verification files that contain an SQL query. You can run the SQL query to see details about the OID inconsistencies and investigate the inconsistencies. The files are generated in the directory where ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," is invoked."]}),"\n",(0,t.jsx)(s.p,{children:"This is the format of the file:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"gpcheckcat.verify.dbname.catalog_table_name.test_name.TIMESTAMP.sql\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This is an example verification filename created by ",(0,t.jsx)(s.code,{children:"gpcheckcat"})," when it detects inconsistent OID (Object ID) information in the catalog table ",(0,t.jsx)(s.em,{children:"pg_type"})," in the database ",(0,t.jsx)(s.code,{children:"mydb"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"gpcheckcat.verify.mydb.pg_type.missing_extraneous.20150420102715.sql\n"})}),"\n",(0,t.jsx)(s.p,{children:"This is an example query from a verification file:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT *\n  FROM (\n       SELECT relname, oid FROM pg_class WHERE reltype \n         IN (1305822,1301043,1301069,1301095)\n       UNION ALL\n       SELECT relname, oid FROM gp_dist_random('pg_class') WHERE reltype \n         IN (1305822,1301043,1301069,1301095)\n       ) alltyprelids\n  GROUP BY relname, oid ORDER BY count(*) desc ;\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var t=n(67294);const i={},c=t.createContext(i);function a(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);