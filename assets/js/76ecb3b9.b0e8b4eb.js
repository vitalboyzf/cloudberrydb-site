"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3690],{15208:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(85893),r=s(11151);const i={title:"GRANT"},o="GRANT",a={id:"sql-stmts/grant",title:"GRANT",description:"Defines access privileges.",source:"@site/docs/sql-stmts/grant.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/grant",permalink:"/docs/sql-stmts/grant",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/grant.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740637488,formattedLastUpdatedAt:"Feb 27, 2025",frontMatter:{title:"GRANT"},sidebar:"docsbars",previous:{title:"FETCH",permalink:"/docs/sql-stmts/fetch"},next:{title:"IMPORT FOREIGN SCHEMA",permalink:"/docs/sql-stmts/import-foreign-schema"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"grant",children:"GRANT"}),"\n",(0,t.jsx)(n.p,{children:"Defines access privileges."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GRANT { {SELECT | INSERT | UPDATE | DELETE | REFERENCES | \nTRIGGER | TRUNCATE } [, ...] | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0ON { [TABLE] [[[ONLY] <table_name> [, ...]] [, ...]]\n         | ALL TABLES IN SCHEMA <schema_name> [, ...] }\n\xa0\xa0\xa0\xa0TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { { SELECT | INSERT | UPDATE | REFERENCES } ( <column_name> [, ...] )\n    [, ...] | ALL [ PRIVILEGES ] ( <column_name> [, ...] ) }\n    ON [TABLE] [[[ONLY] <table_name> [, ...]] [, ...]]\n    TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { {USAGE | SELECT | UPDATE} [, ...] | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0ON { SEQUENCE <sequence_name> [, ...]\n         | ALL SEQUENCES IN SCHEMA <schema_name> [, ...] }\n\xa0\xa0\xa0\xa0TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { {CREATE | CONNECT | TEMPORARY | TEMP} [, ...] | ALL \n[PRIVILEGES] }\n\xa0\xa0\xa0\xa0ON DATABASE <database_name> [, ...]\n\xa0\xa0\xa0\xa0TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { USAGE | ALL [ PRIVILEGES ] }\n    ON DOMAIN <domain_name> [, ...]\n    TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { USAGE | ALL [ PRIVILEGES ] }\n    ON FOREIGN DATA WRAPPER <fdw_name> [, ...]\n    TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { USAGE | ALL [ PRIVILEGES ] }\n    ON FOREIGN SERVER <server_name> [, ...]\n    TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { EXECUTE | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0ON { { FUNCTION | PROCEDURE | ROUTINE } <routine_name> [ ( [ [ <argmode> ] [ <argname> ] <argtype> [, ...] ] ) ] [, ...]\n        | ALL { FUNCTIONS | PROCEDURES | ROUTINES }  IN SCHEMA <schema_name> [, ...] }\n\xa0\xa0\xa0\xa0TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { USAGE | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0ON LANGUAGE <lang_name> [, ...]\n\xa0\xa0\xa0\xa0TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { { CREATE | USAGE } [, ...] | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0ON SCHEMA <schema_name> [, ...]\n\xa0\xa0\xa0\xa0TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT { CREATE | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0ON TABLESPACE <tablespace_name> [, ...]\n\xa0\xa0\xa0\xa0TO <role_specification> [ WITH GRANT OPTION ]\n\nGRANT { USAGE | ALL [ PRIVILEGES ] }\n    ON TYPE <type_name> [, ...]\n    TO <role_specification> [, ...] [ WITH GRANT OPTION ]\n\nGRANT <role_name> [, ...] TO <role_specification> [, ...]\n    [ WITH ADMIN OPTION ]\n    [ GRANTED BY <role_specification> ]\n\nGRANT { SELECT | INSERT | ALL [PRIVILEGES] } \n\xa0\xa0\xa0\xa0ON PROTOCOL <protocolname>\n\xa0\xa0\xa0\xa0TO <username>\n\n-- where <role_specification> can be:\n\n    [ GROUP ] <role_name>\n  | PUBLIC\n  | CURRENT_USER\n  | SESSION_USER\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"GRANT"})," command has two basic variants: one that grants privileges on a database object (table, column, view, foreign table, sequence, database, foreign-data wrapper, foreign server, function, procedural language, schema, or tablespace), and one that grants membership in a role. These variants are similar in many ways, but they are different enough to be described separately."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"GRANT on Database Objects"})}),"\n",(0,t.jsxs)(n.p,{children:["This variant of the ",(0,t.jsx)(n.code,{children:"GRANT"})," command gives specific privileges on a database object to one or more roles. These privileges are added to those already granted, if any."]}),"\n",(0,t.jsxs)(n.p,{children:["The keyword ",(0,t.jsx)(n.code,{children:"PUBLIC"})," indicates that the privileges are to be granted to all roles, including those that may be created later. ",(0,t.jsx)(n.code,{children:"PUBLIC"})," may be thought of as an implicitly defined group-level role that always includes all roles. Any particular role will have the sum of privileges granted directly to it, privileges granted to any role it is presently a member of, and privileges granted to ",(0,t.jsx)(n.code,{children:"PUBLIC"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"WITH GRANT OPTION"})," is specified, the recipient of the privilege may in turn grant it to others. Without a grant option, the recipient cannot do that. Grant options cannot be granted to ",(0,t.jsx)(n.code,{children:"PUBLIC"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"There is no need to grant privileges to the owner of an object (usually the role that created it), as the owner has all privileges by default. (The owner could, however, choose to revoke some of their own privileges for safety.)\nit\nThe right to drop an object, or to alter its definition in any way is not treated as a grantable privilege; it is inherent in the owner, and cannot be granted or revoked. (However, a similar effect can be obtained by granting or revoking membership in the role that owns the object; see below.) The owner implicitly has all grant options for the object, too."}),"\n",(0,t.jsx)(n.p,{children:"The possible privileges are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"SELECT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"INSERT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"UPDATE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"DELETE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"TRUNCATE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"REFERENCES"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"TRIGGER"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"CREATE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"CONNECT"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TEMPORARY"}),", ",(0,t.jsx)(n.code,{children:"TEMP"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"EXECUTE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"USAGE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ALL PRIVILEGES"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"FUNCTION"})," syntax works for plain functions, aggregate functions, and window functions, but not for procedures; use ",(0,t.jsx)(n.code,{children:"PROCEDURE"})," for those. Alternatively, use ",(0,t.jsx)(n.code,{children:"ROUTINE"})," to refer to a function, aggregate function, window function, or procedure regardless of its precise type."]}),"\n",(0,t.jsxs)(n.p,{children:["There is also an option to grant privileges on all objects of the same type within one or more schemas. This functionality is currently supported only for tables, sequences, functions, and procedures. ",(0,t.jsx)(n.code,{children:"ALL TABLES"})," also affects views and foreign tables, just like the specific-object ",(0,t.jsx)(n.code,{children:"GRANT"})," command. ",(0,t.jsx)(n.code,{children:"ALL FUNCTIONS"})," also affects aggregate and window functions, but not procedures, again just like the specific-object ",(0,t.jsx)(n.code,{children:"GRANT"})," command. Use ",(0,t.jsx)(n.code,{children:"ALL ROUTINES"})," to include procedures."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"GRANT on Roles"})}),"\n",(0,t.jsxs)(n.p,{children:["This variant of the ",(0,t.jsx)(n.code,{children:"GRANT"})," command grants membership in a role to one or more other roles. Membership in a role is significant because it conveys the privileges granted to a role to each of its members."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"WITH ADMIN OPTION"})," is specified, the member may in turn grant membership in the role to others, and revoke membership in the role as well. Without the admin option, ordinary users cannot do that. A role is not considered to hold ",(0,t.jsx)(n.code,{children:"WITH ADMIN OPTION"})," on itself, but it may grant or revoke membership in itself from a database session where the session user matches the role. Database superusers can grant or revoke membership in any role to anyone. Roles having ",(0,t.jsx)(n.code,{children:"CREATEROLE"})," privilege can grant or revoke membership in any role that is not a superuser."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"GRANTED BY"})," is specified, the grant is recorded as having been done by the specified role. Only database superusers may use this option, except when it names the same role executing the command."]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the case with privileges, membership in a role cannot be granted to ",(0,t.jsx)(n.code,{children:"PUBLIC"}),". Note also that this form of the command does not allow the noise word ",(0,t.jsx)(n.code,{children:"GROUP"})," in role_specification."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"GRANT on Partitioned Tables"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, when you grant privileges to a partitioned table, Cloudberry Database recurses the operation to its child tables. To direct Cloudberry Database to perform the ",(0,t.jsx)(n.code,{children:"GRANT"})," on the partitioned table only, specify the ",(0,t.jsx)(n.code,{children:"ONLY <table_name>"})," clause."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"GRANT on Protocols"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the ",(0,t.jsx)(n.code,{children:"GRANT"})," command to specify which users can access a trusted protocol. (If the protocol is not trusted, you cannot give any other user permission to use it to read or write data.)"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To allow a user to create a readable external table with a trusted protocol:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GRANT SELECT ON PROTOCOL <protocolname> TO <username>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To allow a user to create a writable external table with a trusted protocol:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GRANT INSERT ON PROTOCOL <protocolname> TO <username>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To allow a user to create both readable and writable external table with a trusted protocol:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GRANT ALL ON PROTOCOL <protocolname> TO <username>\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can also use this command to grant users permissions to create and use ",(0,t.jsx)(n.code,{children:"s3"})," and ",(0,t.jsx)(n.code,{children:"pxf"})," external tables. However, external tables of type ",(0,t.jsx)(n.code,{children:"http"}),", ",(0,t.jsx)(n.code,{children:"https"}),", ",(0,t.jsx)(n.code,{children:"gpfdist"}),", and ",(0,t.jsx)(n.code,{children:"gpfdists"}),", are implemented internally in Cloudberry Database instead of as custom protocols. For these types, use the ",(0,t.jsx)(n.code,{children:"CREATE ROLE"})," or ",(0,t.jsx)(n.code,{children:"ALTER ROLE"})," command to set the ",(0,t.jsx)(n.code,{children:"CREATEEXTTABLE"})," or ",(0,t.jsx)(n.code,{children:"NOCREATEEXTTABLE"})," attribute for each user. See ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/create-role",children:"CREATE ROLE"})," for syntax and examples."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SELECT"})})}),"\n",(0,t.jsxs)(n.p,{children:["Allows ",(0,t.jsx)(n.code,{children:"SELECT"})," from any column, or the specific columns listed, of the specified table, view, or sequence. Also allows the use of ",(0,t.jsx)(n.code,{children:"COPY TO"}),". This privilege is also needed to reference existing column values in ",(0,t.jsx)(n.code,{children:"UPDATE"})," or ",(0,t.jsx)(n.code,{children:"DELETE"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"INSERT"})})}),"\n",(0,t.jsxs)(n.p,{children:["Allows ",(0,t.jsx)(n.code,{children:"INSERT"})," of a new row into the specified table. If specific columns are listed, only those columns may be assigned to in the ",(0,t.jsx)(n.code,{children:"INSERT"})," command (other columns will receive default values). Also allows ",(0,t.jsx)(n.code,{children:"COPY FROM"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"UPDATE"})})}),"\n",(0,t.jsxs)(n.p,{children:["Allows ",(0,t.jsx)(n.code,{children:"UPDATE"})," of any column, or the specific columns listed, of the specified table. ",(0,t.jsx)(n.code,{children:"SELECT ... FOR UPDATE"})," and ",(0,t.jsx)(n.code,{children:"SELECT ... FOR SHARE"})," also require this privilege on at least one column, (as well as the ",(0,t.jsx)(n.code,{children:"SELECT"})," privilege). For sequences, this privilege allows the use of the ",(0,t.jsx)(n.code,{children:"nextval()"})," and ",(0,t.jsx)(n.code,{children:"setval()"})," functions."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"DELETE"})})}),"\n",(0,t.jsxs)(n.p,{children:["Allows ",(0,t.jsx)(n.code,{children:"DELETE"})," of a row from the specified table."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"REFERENCES"})})}),"\n",(0,t.jsx)(n.p,{children:"This keyword is accepted, although foreign key constraints are currently not supported in Cloudberry Database. To create a foreign key constraint, it is necessary to have this privilege on both the referencing and referenced columns. The privilege may be granted for all columns of a table, or just specific columns."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"TRIGGER"})})}),"\n",(0,t.jsx)(n.p,{children:"Allows the creation of a trigger on the specified table."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," Cloudberry Database does not support triggers."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"TRUNCATE"})})}),"\n",(0,t.jsxs)(n.p,{children:["Allows ",(0,t.jsx)(n.code,{children:"TRUNCATE"})," of all rows from the specified table."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CREATE"})})}),"\n",(0,t.jsx)(n.p,{children:"For databases, allows new schemas to be created within the database."}),"\n",(0,t.jsx)(n.p,{children:"For schemas, allows new objects to be created within the schema. To rename an existing object, you must own the object and have this privilege for the containing schema."}),"\n",(0,t.jsx)(n.p,{children:"For tablespaces, allows tables and indexes to be created within the tablespace, and allows databases to be created that have the tablespace as their default tablespace. (Note that revoking this privilege will not alter the placement of existing objects.)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CONNECT"})})}),"\n",(0,t.jsxs)(n.p,{children:["Allows the user to connect to the specified database. This privilege is checked at connection startup (in addition to checking any restrictions imposed by ",(0,t.jsx)(n.code,{children:"pg_hba.conf"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"TEMPORARY"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"TEMP"})})]}),"\n",(0,t.jsx)(n.p,{children:"Allows temporary tables to be created while using the database."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"EXECUTE"})})}),"\n",(0,t.jsx)(n.p,{children:"Allows the use of the specified function and the use of any operators that are implemented on top of the function. This is the only type of privilege that is applicable to functions. (This syntax works for aggregate functions, as well.)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"USAGE"})})}),"\n",(0,t.jsx)(n.p,{children:"For procedural languages, allows the use of the specified language for the creation of functions in that language. This is the only type of privilege that is applicable to procedural languages."}),"\n",(0,t.jsx)(n.p,{children:"For schemas, allows access to objects contained in the specified schema (assuming that the objects' own privilege requirements are also met). Essentially this allows the grantee to look up objects within the schema."}),"\n",(0,t.jsxs)(n.p,{children:["For sequences, this privilege allows the use of the ",(0,t.jsx)(n.code,{children:"currval()"})," and ",(0,t.jsx)(n.code,{children:"nextval()"})," function."]}),"\n",(0,t.jsx)(n.p,{children:'For types and domains, this privilege allows the use of the type or domain in the creation of tables, functions, and other schema objects. (Note that it does not control general "usage" of the type, such as values of the type appearing in queries. It only prevents objects from being created that depend on the type. The main purpose of the privilege is controlling which users create dependencies on a type, which could prevent the owner from changing the type later.)'}),"\n",(0,t.jsx)(n.p,{children:"For foreign-data wrappers, this privilege enables the grantee to create new servers using that foreign-data wrapper."}),"\n",(0,t.jsx)(n.p,{children:"For servers, this privilege enables the grantee to create foreign tables using the server, and also to create, alter, or drop their own user's user mappings associated with that server."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ALL PRIVILEGES"})})}),"\n",(0,t.jsxs)(n.p,{children:["Grant all of the available privileges at once. The ",(0,t.jsx)(n.code,{children:"PRIVILEGES"})," key word is optional in Cloudberry Database, though it is required by strict SQL."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"PUBLIC"})})}),"\n",(0,t.jsx)(n.p,{children:"A special group-level role that denotes that the privileges are to be granted to all roles, including those that may be created later."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"WITH GRANT OPTION"})})}),"\n",(0,t.jsx)(n.p,{children:"The recipient of the privilege may in turn grant it to others."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"WITH ADMIN OPTION"})})}),"\n",(0,t.jsx)(n.p,{children:"The member of a role may in turn grant membership in the role to others."}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/revoke",children:"REVOKE"})," command is used to revoke access privileges."]}),"\n",(0,t.jsxs)(n.p,{children:["Cloudberry Database unifies the concepts of users and groups into a single kind of entity called a role. It is therefore not necessary to use the keyword ",(0,t.jsx)(n.code,{children:"GROUP"})," to identify whether a grantee is a user or a group. ",(0,t.jsx)(n.code,{children:"GROUP"})," is still allowed in the command, but it is a noise word."]}),"\n",(0,t.jsxs)(n.p,{children:["A user may perform ",(0,t.jsx)(n.code,{children:"SELECT"}),", ",(0,t.jsx)(n.code,{children:"INSERT"}),", and so forth, on a column if they hold that privilege for either the specific column or the whole table. Granting the privilege at the table level and then revoking it for one column does not do what you might wish: the table-level grant is unaffected by a column-level operation."]}),"\n",(0,t.jsxs)(n.p,{children:["When a non-owner of an object attempts to ",(0,t.jsx)(n.code,{children:"GRANT"})," privileges on the object, the command will fail outright if the user has no privileges whatsoever on the object. As long as some privilege is available, the command will proceed, but it will grant only those privileges for which the user has grant options. The ",(0,t.jsx)(n.code,{children:"GRANT ALL PRIVILEGES"})," forms will issue a warning message if no grant options are held, while the other forms will issue a warning if grant options for any of the privileges specifically named in the command are not held. (In principle these statements apply to the object owner as well, but since the owner is always treated as holding all grant options, the cases can never occur.)"]}),"\n",(0,t.jsxs)(n.p,{children:["Database superusers can access all objects regardless of object privilege settings. This is comparable to the rights of ",(0,t.jsx)(n.code,{children:"root"})," in a Unix system. As with ",(0,t.jsx)(n.code,{children:"root"}),", it's unwise to operate as a superuser except when absolutely necessary. One exception to this rule is view objects. Access to tables referenced in the view is determined by permissions of the view owner not the current user (even if the current user is a superuser)."]}),"\n",(0,t.jsxs)(n.p,{children:["If a superuser chooses to issue a ",(0,t.jsx)(n.code,{children:"GRANT"})," or ",(0,t.jsx)(n.code,{children:"REVOKE"})," command, the command is performed as though it were issued by the owner of the affected object. In particular, privileges granted via such a command will appear to have been granted by the object owner. (For role membership, the membership appears to have been granted by the containing role itself.)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GRANT"})," and ",(0,t.jsx)(n.code,{children:"REVOKE"})," can also be done by a role that is not the owner of the affected object, but is a member of the role that owns the object, or is a member of a role that holds privileges ",(0,t.jsx)(n.code,{children:"WITH GRANT OPTION"})," on the object. In this case the privileges will be recorded as having been granted by the role that actually owns the object or holds the privileges ",(0,t.jsx)(n.code,{children:"WITH GRANT OPTION"}),". For example, if table ",(0,t.jsx)(n.code,{children:"t1"})," is owned by role ",(0,t.jsx)(n.code,{children:"g1"}),", of which role ",(0,t.jsx)(n.code,{children:"u1"})," is a member, then ",(0,t.jsx)(n.code,{children:"u1"})," can grant privileges on ",(0,t.jsx)(n.code,{children:"t1"})," to ",(0,t.jsx)(n.code,{children:"u2"}),", but those privileges will appear to have been granted directly by ",(0,t.jsx)(n.code,{children:"g1"}),". Any other member of role ",(0,t.jsx)(n.code,{children:"g1"})," could revoke them later."]}),"\n",(0,t.jsxs)(n.p,{children:["If the role executing ",(0,t.jsx)(n.code,{children:"GRANT"})," holds the required privileges indirectly via more than one role membership path, it is unspecified which containing role will be recorded as having done the grant. In such cases it is best practice to use ",(0,t.jsx)(n.code,{children:"SET ROLE"})," to become the specific role you want to do the ",(0,t.jsx)(n.code,{children:"GRANT"})," as."]}),"\n",(0,t.jsxs)(n.p,{children:["Granting permission on a table does not automatically extend permissions to any sequences used by the table, including sequences tied to ",(0,t.jsx)(n.code,{children:"SERIAL"})," columns. Permissions on a sequence must be set separately."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"GRANT"})," command cannot be used to set privileges for the protocols ",(0,t.jsx)(n.code,{children:"file"}),", ",(0,t.jsx)(n.code,{children:"gpfdist"}),", or ",(0,t.jsx)(n.code,{children:"gpfdists"}),". These protocols are implemented internally in Cloudberry Database. Instead, use the ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/create-role",children:"CREATE ROLE"})," or ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/alter-role",children:"ALTER ROLE"})," command to set the ",(0,t.jsx)(n.code,{children:"CREATEEXTTABLE"})," attribute for the role."]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"psql"}),"'s ",(0,t.jsx)(n.code,{children:"\\dp"})," meta-command to obtain information about existing privileges for tables and columns. There are other ",(0,t.jsx)(n.code,{children:"\\d"})," meta-commands that you can use to display the privileges of non-table objects."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Grant insert privilege to all roles on table ",(0,t.jsx)(n.code,{children:"mytable"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GRANT INSERT ON mytable TO PUBLIC;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Grant all available privileges to user ",(0,t.jsx)(n.code,{children:"manuel"})," on view ",(0,t.jsx)(n.code,{children:"kinds"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GRANT ALL PRIVILEGES ON kinds TO manuel;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that while the above will indeed grant all privileges if run by a superuser or the owner of ",(0,t.jsx)(n.code,{children:"kinds"}),", when run by someone else it will only grant those permissions for which the granting role has grant options."]}),"\n",(0,t.jsxs)(n.p,{children:["Grant membership in role ",(0,t.jsx)(n.code,{children:"admins"})," to user ",(0,t.jsx)(n.code,{children:"joe"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GRANT admins TO joe;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:["According to the SQL standard, the ",(0,t.jsx)(n.code,{children:"PRIVILEGES"})," key word in ",(0,t.jsx)(n.code,{children:"ALL PRIVILEGES"})," is required, but it is optional in Cloudberry Database. The SQL standard does not support setting the privileges on more than one object per command."]}),"\n",(0,t.jsxs)(n.p,{children:["Cloudberry Database allows an object owner to revoke their own ordinary privileges: for example, a table owner can make the table read-only to theirself by revoking their own ",(0,t.jsx)(n.code,{children:"INSERT"}),", ",(0,t.jsx)(n.code,{children:"UPDATE"}),", ",(0,t.jsx)(n.code,{children:"DELETE"}),", and ",(0,t.jsx)(n.code,{children:"TRUNCATE"})," privileges. This is not possible according to the SQL standard. Cloudberry Database treats the owner's privileges as having been granted by the owner to the owner; therefore they can revoke them too. In the SQL standard, the owner's privileges are granted by an assumed ",(0,t.jsx)(n.em,{children:"system"})," entity. Not being ",(0,t.jsx)(n.em,{children:"system"}),", the owner cannot revoke these rights."]}),"\n",(0,t.jsxs)(n.p,{children:["The SQL standard allows the ",(0,t.jsx)(n.code,{children:"GRANTED BY"})," option to be used in all forms of ",(0,t.jsx)(n.code,{children:"GRANT"}),". Cloudberry Database only supports it when granting role membership, and even then only superusers may use it in nontrivial ways."]}),"\n",(0,t.jsxs)(n.p,{children:["The SQL standard provides for a ",(0,t.jsx)(n.code,{children:"USAGE"})," privilege on other kinds of objects: character sets, collations, translations."]}),"\n",(0,t.jsxs)(n.p,{children:["In the SQL standard, sequences only have a ",(0,t.jsx)(n.code,{children:"USAGE"})," privilege, which controls the use of the ",(0,t.jsx)(n.code,{children:"NEXT VALUE FOR"})," expression, which is equivalent to the function ",(0,t.jsx)(n.code,{children:"nextval()"})," in Cloudberry Database. The sequence privileges ",(0,t.jsx)(n.code,{children:"SELECT"})," and ",(0,t.jsx)(n.code,{children:"UPDATE"})," are Cloudberry Database extensions. The application of the sequence ",(0,t.jsx)(n.code,{children:"USAGE"})," privilege to the ",(0,t.jsx)(n.code,{children:"currval()"})," function is also a Cloudberry Database extension (as is the function itself)."]}),"\n",(0,t.jsx)(n.p,{children:"Privileges on databases, tablespaces, schemas, and languages are Cloudberry Database extensions."}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/sql-stmts/alter-default-privileges",children:"ALTER DEFAULT PRIVILEGES"}),", ",(0,t.jsx)(n.a,{href:"/docs/sql-stmts/revoke",children:"REVOKE"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);