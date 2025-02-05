"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5258],{379:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(85893),n=s(11151);const o={title:"Create and Manage Tablespaces"},c="Create and Manage Tablespaces",r={id:"create-and-manage-tablespaces",title:"Create and Manage Tablespaces",description:"Tablespaces allow database administrators to have multiple file systems per machine and decide how to best use physical storage to store database objects. Tablespaces allow you to assign different storage for frequently and infrequently used database objects or to control the I/O performance on certain database objects. For example, place frequently-used tables on file systems that use high performance solid-state drives (SSD), and place other tables on standard hard drives.",source:"@site/docs/create-and-manage-tablespaces.md",sourceDirName:".",slug:"/create-and-manage-tablespaces",permalink:"/docs/create-and-manage-tablespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/create-and-manage-tablespaces.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"Create and Manage Tablespaces"},sidebar:"docsbars",previous:{title:"Basic Query Syntax",permalink:"/docs/basic-query-syntax"},next:{title:"Create and Manage Tables",permalink:"/docs/create-and-manage-tables"}},i={},l=[{value:"Creating a Tablespace",id:"creating-a-tablespace",level:2},{value:"Using a Tablespace to Store Database Objects",id:"using-a-tablespace-to-store-database-objects",level:2},{value:"Viewing Existing Tablespaces",id:"viewing-existing-tablespaces",level:2},{value:"Dropping Tablespaces",id:"dropping-tablespaces",level:2},{value:"Moving the Location of Temporary or Transaction Files",id:"moving-the-location-of-temporary-or-transaction-files",level:2}];function d(e){const a={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"create-and-manage-tablespaces",children:"Create and Manage Tablespaces"}),"\n",(0,t.jsx)(a.p,{children:"Tablespaces allow database administrators to have multiple file systems per machine and decide how to best use physical storage to store database objects. Tablespaces allow you to assign different storage for frequently and infrequently used database objects or to control the I/O performance on certain database objects. For example, place frequently-used tables on file systems that use high performance solid-state drives (SSD), and place other tables on standard hard drives."}),"\n",(0,t.jsx)(a.p,{children:"A tablespace requires a host file system location to store its database files. In Cloudberry Database, the file system location must exist on all hosts including the hosts running the coordinator, standby coordinator, each primary segment, and each mirror segment."}),"\n",(0,t.jsx)(a.p,{children:"A tablespace is Cloudberry Database system object (a global object), you can use a tablespace from any database if you have appropriate privileges."}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Note"})," Cloudberry Database does not support different tablespace locations for a primary-mirror pair with the same content ID. It is only possible to configure different locations for different content IDs. Do not modify symbolic links under the ",(0,t.jsx)(a.code,{children:"pg_tblspc"})," directory so that primary-mirror pairs point to different file locations; this will lead to erroneous behavior."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"creating-a-tablespace",children:"Creating a Tablespace"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"CREATE TABLESPACE"})," command defines a tablespace. For example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE TABLESPACE fastspace LOCATION '/fastdisk/gpdb';\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Database superusers define tablespaces and grant access to database users with the ",(0,t.jsx)(a.code,{children:"GRANT``CREATE"}),"command. For example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"GRANT CREATE ON TABLESPACE fastspace TO admin;\n"})}),"\n",(0,t.jsx)(a.h2,{id:"using-a-tablespace-to-store-database-objects",children:"Using a Tablespace to Store Database Objects"}),"\n",(0,t.jsxs)(a.p,{children:["Users with the ",(0,t.jsx)(a.code,{children:"CREATE"})," privilege on a tablespace can create database objects in that tablespace, such as tables, indexes, and databases. The command is:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE tablename(options) TABLESPACE spacename\n"})}),"\n",(0,t.jsxs)(a.p,{children:["For example, the following command creates a table in the tablespace ",(0,t.jsx)(a.em,{children:"space1"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE TABLE foo(i int) TABLESPACE space1;\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You can also use the ",(0,t.jsx)(a.code,{children:"default_tablespace"})," parameter to specify the default tablespace for ",(0,t.jsx)(a.code,{children:"CREATE TABLE"})," and ",(0,t.jsx)(a.code,{children:"CREATE INDEX"})," commands that do not specify a tablespace:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SET default_tablespace = space1;\nCREATE TABLE foo(i int);\n"})}),"\n",(0,t.jsxs)(a.p,{children:["There is also the ",(0,t.jsx)(a.code,{children:"temp_tablespaces"})," configuration parameter, which determines the placement of temporary tables and indexes, as well as temporary files that are used for purposes such as sorting large data sets. This can be a comma-separate list of tablespace names, rather than only one, so that the load associated with temporary objects can be spread over multiple tablespaces. A random member of the list is picked each time a temporary object is to be created."]}),"\n",(0,t.jsxs)(a.p,{children:["The tablespace associated with a database stores that database's system catalogs, temporary files created by server processes using that database, and is the default tablespace selected for tables and indexes created within the database, if no ",(0,t.jsx)(a.code,{children:"TABLESPACE"})," is specified when the objects are created. If you do not specify a tablespace when you create a database, the database uses the same tablespace used by its template database."]}),"\n",(0,t.jsx)(a.p,{children:"You can use a tablespace from any database in the Cloudberry Database system if you have appropriate privileges."}),"\n",(0,t.jsx)(a.h2,{id:"viewing-existing-tablespaces",children:"Viewing Existing Tablespaces"}),"\n",(0,t.jsx)(a.p,{children:"Every Cloudberry Database system has the following default tablespaces."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"pg_global"})," for shared system catalogs."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"pg_default"}),", the default tablespace. Used by the ",(0,t.jsx)(a.em,{children:"template1"})," and ",(0,t.jsx)(a.em,{children:"template0"})," databases."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"These tablespaces use the default system location, the data directory locations created at system initialization."}),"\n",(0,t.jsxs)(a.p,{children:["To see tablespace information, use the ",(0,t.jsx)(a.code,{children:"pg_tablespace"})," catalog table to get the object ID (OID) of the tablespace and then use ",(0,t.jsx)(a.code,{children:"gp_tablespace_location()"})," function to display the tablespace directories. This is an example that lists one user-defined tablespace, ",(0,t.jsx)(a.code,{children:"myspace"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT oid, * FROM pg_tablespace ;\n\n  oid  |  spcname   | spcowner | spcacl | spcoptions\n-------+------------+----------+--------+------------\n  1663 | pg_default |       10 |        |\n  1664 | pg_global  |       10 |        |\n 16391 | myspace    |       10 |        |\n(3 rows)\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The OID for the tablespace ",(0,t.jsx)(a.code,{children:"myspace"})," is ",(0,t.jsx)(a.code,{children:"16391"}),". Run ",(0,t.jsx)(a.code,{children:"gp_tablespace_location()"})," to display the tablespace locations for a system that consists of two segment instances and the coordinator."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"# SELECT * FROM gp_tablespace_location(16391);\n gp_segment_id |    tblspc_loc\n---------------+------------------\n             0 | /data/mytblspace\n             1 | /data/mytblspace\n            -1 | /data/mytblspace\n(3 rows)\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This query uses ",(0,t.jsx)(a.code,{children:"gp_tablespace_location()"})," the ",(0,t.jsx)(a.code,{children:"gp_segment_configuration"})," catalog table to display segment instance information with the file system location for the ",(0,t.jsx)(a.code,{children:"myspace"})," tablespace."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"WITH spc AS (SELECT * FROM  gp_tablespace_location(16391))\n  SELECT seg.role, spc.gp_segment_id as seg_id, seg.hostname, seg.datadir, tblspc_loc \n    FROM spc, gp_segment_configuration AS seg \n    WHERE spc.gp_segment_id = seg.content ORDER BY seg_id;\n"})}),"\n",(0,t.jsx)(a.p,{children:"This is information for a test system that consists of two segment instances and the coordinator on a single host."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:" role | seg_id | hostname |       datadir        |    tblspc_loc\n------+--------+----------+----------------------+------------------\n p    |     -1 | testhost | /data/coordinator/gpseg-1 | /data/mytblspace\n p    |      0 | testhost | /data/data1/gpseg0   | /data/mytblspace\n p    |      1 | testhost | /data/data2/gpseg1   | /data/mytblspace\n(3 rows)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"dropping-tablespaces",children:"Dropping Tablespaces"}),"\n",(0,t.jsx)(a.p,{children:"To drop a tablespace, you must be the tablespace owner or a superuser. You cannot drop a tablespace until all objects in all databases using the tablespace are removed."}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"DROP TABLESPACE"})," command removes an empty tablespace."]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"You cannot drop a tablespace if it is not empty or if it stores temporary or transaction files."})}),"\n",(0,t.jsx)(a.h2,{id:"moving-the-location-of-temporary-or-transaction-files",children:"Moving the Location of Temporary or Transaction Files"}),"\n",(0,t.jsx)(a.p,{children:"You can move temporary or transaction files to a specific tablespace to improve database performance when running queries, creating backups, and to store data more sequentially."}),"\n",(0,t.jsxs)(a.p,{children:["The Cloudberry Database server configuration parameter ",(0,t.jsx)(a.code,{children:"temp_tablespaces"})," controls the location for both temporary tables and temporary spill files for hash aggregate and hash join queries. Temporary files for purposes such as sorting large data sets are also created in these tablespaces."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"temp_tablespaces"})," specifies tablespaces in which to create temporary objects (temp tables and indexes on temp tables) when a ",(0,t.jsx)(a.code,{children:"CREATE"})," command does not explicitly specify a tablespace."]}),"\n",(0,t.jsx)(a.p,{children:"Also note the following information about temporary or transaction files:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"You can dedicate only one tablespace for temporary or transaction files, although you can use the same tablespace to store other types of files."}),"\n",(0,t.jsx)(a.li,{children:"You cannot drop a tablespace if it used by temporary files."}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>r,a:()=>c});var t=s(67294);const n={},o=t.createContext(n);function c(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);