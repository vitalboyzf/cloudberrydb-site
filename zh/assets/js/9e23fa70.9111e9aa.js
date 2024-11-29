"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7361],{96250:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(85893),t=s(11151);const o={title:"REVOKE"},r="REVOKE",a={id:"sql-stmts/revoke",title:"REVOKE",description:"Removes access privileges.",source:"@site/docs/sql-stmts/revoke.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/revoke",permalink:"/zh/docs/sql-stmts/revoke",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/revoke.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"2024\u5e7411\u670829\u65e5",frontMatter:{title:"REVOKE"},sidebar:"docsbars",previous:{title:"RETRIEVE",permalink:"/zh/docs/sql-stmts/retrieve"},next:{title:"ROLLBACK TO SAVEPOINT",permalink:"/zh/docs/sql-stmts/rollback-to-savepoint"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"revoke",children:"REVOKE"}),"\n",(0,i.jsx)(n.p,{children:"Removes access privileges."}),"\n",(0,i.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"REVOKE [GRANT OPTION FOR]\n       { {SELECT | INSERT | UPDATE | DELETE | REFERENCES | TRIGGER | TRUNCATE }\n       [, ...] | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0   ON { { [TABLE] [[[ONLY] <table_name> [, ...]] [, ...]] }\n          | ALL TABLES IN SCHEMA schema_name [, ...] }\n\xa0\xa0\xa0\xa0   FROM <role_specification> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CASCADE | RESTRICT]\n\nREVOKE [ GRANT OPTION FOR ]\n       { { SELECT | INSERT | UPDATE | REFERENCES } ( <column_name> [, ...] )\n       [, ...] | ALL [ PRIVILEGES ] ( <column_name> [, ...] ) }\n       ON { [ [TABLE] [[[ONLY] <table_name> [, ...]] [, ...]] }\n       FROM <role_specification> [, ...]\n       [ CASCADE | RESTRICT ]\n\nREVOKE [GRANT OPTION FOR] { {USAGE | SELECT | UPDATE} [,...] \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0| ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON { SEQUENCE <sequence_name> [, ...]\n            | ALL SEQUENCES IN SCHEMA schema_name [, ...] }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM <role_specification> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CASCADE | RESTRICT]\n\nREVOKE [GRANT OPTION FOR]\n       { {CREATE | CONNECT | TEMPORARY | TEMP} [, ...] | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON DATABASE <database_name> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM <role_specification> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CASCADE | RESTRICT]\n\nREVOKE [ GRANT OPTION FOR ]\n       { USAGE | ALL [ PRIVILEGES ] }\n       ON DOMAIN <domain_name> [, ...]\n       FROM <role_specification> [, ...]\n       [ CASCADE | RESTRICT ]\n\nREVOKE [ GRANT OPTION FOR ]\n       { USAGE | ALL [ PRIVILEGES ] }\n       ON FOREIGN DATA WRAPPER <fdw_name> [, ...]\n       FROM <role_specification> [, ...]\n       [ CASCADE | RESTRICT ]\n\nREVOKE [ GRANT OPTION FOR ]\n       { USAGE | ALL [ PRIVILEGES ] }\n       ON FOREIGN SERVER <server_name> [, ...]\n       FROM <role_specification> [, ...]\n       [ CASCADE | RESTRICT ]\n\nREVOKE [GRANT OPTION FOR] {EXECUTE | ALL [PRIVILEGES]}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON { { FUNCTION | PROCEDURE | ROUTINE }  <funcname> [( [[<argmode>] [<argname>] <argtype> [, ...]] )] [, ...]\n            | ALL { FUNCTIONS | PROCEDURES | ROUTINES } IN SCHEMA schema_name [, ...] }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM <role_specification> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CASCADE | RESTRICT]\n\nREVOKE [GRANT OPTION FOR] {USAGE | ALL [PRIVILEGES]}\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON LANGUAGE <lang_name> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM <role_specification> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ CASCADE | RESTRICT ]\n\nREVOKE [GRANT OPTION FOR] { {CREATE | USAGE} [, ...] | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON SCHEMA <schema_name> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM <role_specification> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CASCADE | RESTRICT]\n\nREVOKE [GRANT OPTION FOR] { CREATE | ALL [PRIVILEGES] }\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ON TABLESPACE <tablespace_name> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM <role_specification> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CASCADE | RESTRICT]\n\nREVOKE [ GRANT OPTION FOR ]\n       { USAGE | ALL [ PRIVILEGES ] }\n       ON TYPE <type_name> [, ...]\n       FROM <role_specification> [, ...]\n       [ CASCADE | RESTRICT ] \n\nREVOKE [ADMIN OPTION FOR] <role_name> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FROM [ GROUP ] <role_specification> [, ...]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[GRANTED BY <role_specification> ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[CASCADE | RESTRICT]\n\n-- where <role_specification> can be:\n\n    [ GROUP ] <role_name>\n  | PUBLIC\n  | CURRENT_USER\n  | SESSION_USER\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"REVOKE"})," command revokes previously granted privileges from one or more roles. The key word ",(0,i.jsx)(n.code,{children:"PUBLIC"})," refers to the implicitly defined group of all roles."]}),"\n",(0,i.jsxs)(n.p,{children:["See the description of the ",(0,i.jsx)(n.a,{href:"/zh/docs/sql-stmts/grant",children:"GRANT"})," command for the meaning of the privilege types."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that any particular role will have the sum of privileges granted directly to it, privileges granted to any role it is presently a member of, and privileges granted to ",(0,i.jsx)(n.code,{children:"PUBLIC"}),". Thus, for example, revoking ",(0,i.jsx)(n.code,{children:"SELECT"})," privilege from ",(0,i.jsx)(n.code,{children:"PUBLIC"})," does not necessarily mean that all roles have lost ",(0,i.jsx)(n.code,{children:"SELECT"})," privilege on the object: those who have it granted directly or via another role will still have it. Similarly, revoking ",(0,i.jsx)(n.code,{children:"SELECT"})," from a user might not prevent that user from using ",(0,i.jsx)(n.code,{children:"SELECT"})," if ",(0,i.jsx)(n.code,{children:"PUBLIC"})," or another membership role still has ",(0,i.jsx)(n.code,{children:"SELECT"})," rights."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"GRANT OPTION FOR"})," is specified, only the grant option for the privilege is revoked, not the privilege itself. Otherwise, both the privilege and the grant option are revoked."]}),"\n",(0,i.jsxs)(n.p,{children:["If a role holds a privilege with grant option and has granted it to other roles then the privileges held by those other roles are called dependent privileges. If the privilege or the grant option held by the first role is being revoked and dependent privileges exist, those dependent privileges are also revoked if ",(0,i.jsx)(n.code,{children:"CASCADE"})," is specified, else the revoke action will fail. This recursive revocation only affects privileges that were granted through a chain of roles that is traceable to the role that is the subject of this ",(0,i.jsx)(n.code,{children:"REVOKE"})," command. Thus, the affected roles may effectively keep the privilege if it was also granted through other roles."]}),"\n",(0,i.jsx)(n.p,{children:"When you revoke privileges on a table, Cloudberry Database revokes the corresponding column privileges (if any) on each column of the table, as well. On the other hand, if a role has been granted privileges on a table, then revoking the same privileges from individual columns will have no effect."}),"\n",(0,i.jsxs)(n.p,{children:["By default, when you revoke privileges on a partitioned table, Cloudberry Database recurses the operation to its child tables. To direct Cloudberry Database to perform the ",(0,i.jsx)(n.code,{children:"REVOKE"})," on the partitioned table only, specify the ",(0,i.jsx)(n.code,{children:"ONLY <table_name>"})," clause."]}),"\n",(0,i.jsxs)(n.p,{children:["When revoking membership in a role, ",(0,i.jsx)(n.code,{children:"GRANT OPTION"})," is instead called ",(0,i.jsx)(n.code,{children:"ADMIN OPTION"}),", but the behavior is similar. This form of the command also allows a ",(0,i.jsx)(n.code,{children:"GRANTED BY"})," option, but that option is currently ignored (except for checking the existence of the named role). Note also that this form of the command does not allow the noise word ",(0,i.jsx)(n.code,{children:"GROUP"})," in role_specification."]}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/zh/docs/sql-stmts/grant",children:"GRANT"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.p,{children:["A user may revoke only those privileges directly granted by that user. If, for example, user A grants a privilege with grant option to user B, and user B has in turn granted it to user C, then user A cannot revoke the privilege directly from C. Instead, user A could revoke the grant option from user B and use the ",(0,i.jsx)(n.code,{children:"CASCADE"})," option so that the privilege is in turn revoked from user C. For another example, if both A and B grant the same privilege to C, A can revoke their own grant but not B's grant, so C effectively still has the privilege."]}),"\n",(0,i.jsxs)(n.p,{children:["When a non-owner of an object attempts to ",(0,i.jsx)(n.code,{children:"REVOKE"})," privileges on the object, the command fails outright if the user has no privileges whatsoever on the object. As long as some privilege is available, the command proceeds, but it will revoke only those privileges for which the user has grant options. The ",(0,i.jsx)(n.code,{children:"REVOKE ALL PRIVILEGES"})," forms issue a warning message if no grant options are held, while the other forms issue a warning if grant options for any of the privileges specifically named in the command are not held. (In principle these statements apply to the object owner as well, but since Cloudberry Database always treats the owner as holding all grant options, the cases can never occur.)"]}),"\n",(0,i.jsxs)(n.p,{children:["If a superuser chooses to issue a ",(0,i.jsx)(n.code,{children:"GRANT"})," or ",(0,i.jsx)(n.code,{children:"REVOKE"})," command, Cloudberry Database performs the command as though it were issued by the owner of the affected object. Since all privileges ultimately come from the object owner (possibly indirectly via chains of grant options), it is possible for a superuser to revoke all privileges, but this might require use of ",(0,i.jsx)(n.code,{children:"CASCADE"})," as stated above."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"REVOKE"})," may also be invoked by a role that is not the owner of the affected object, but is a member of the role that owns the object, or is a member of a role that holds privileges ",(0,i.jsx)(n.code,{children:"WITH GRANT OPTION"})," on the object. In this case, Cloudberry Database performs the command as though it were issued by the containing role that actually owns the object or holds the privileges ",(0,i.jsx)(n.code,{children:"WITH GRANT OPTION"}),". For example, if table ",(0,i.jsx)(n.code,{children:"t1"})," is owned by role ",(0,i.jsx)(n.code,{children:"g1"}),", of which role ",(0,i.jsx)(n.code,{children:"u1"})," is a member, then ",(0,i.jsx)(n.code,{children:"u1"})," can revoke privileges on ",(0,i.jsx)(n.code,{children:"t1"})," that are recorded as being granted by ",(0,i.jsx)(n.code,{children:"g1"}),". This includes grants made by ",(0,i.jsx)(n.code,{children:"u1"})," as well as by other members of role ",(0,i.jsx)(n.code,{children:"g1"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If the role that runs ",(0,i.jsx)(n.code,{children:"REVOKE"})," holds privileges indirectly via more than one role membership path, it is unspecified which containing role will be used to perform the command. In such cases it is best practice to use ",(0,i.jsx)(n.code,{children:"SET ROLE"})," to become the specific role as which you want to do the ",(0,i.jsx)(n.code,{children:"REVOKE"}),". Failure to do so may lead to revoking privileges other than the ones you intended, or not revoking any privileges at all."]}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"psql"}),"'s ",(0,i.jsx)(n.code,{children:"\\dp"})," meta-command to obtain information about existing privileges for tables and columns. There are other ",(0,i.jsx)(n.code,{children:"\\d"})," meta-commands that you can use to display the privileges of non-table objects."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Revoke insert privilege for the public on table ",(0,i.jsx)(n.code,{children:"films"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"REVOKE INSERT ON films FROM PUBLIC;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Revoke all privileges from user ",(0,i.jsx)(n.code,{children:"manuel"})," on view ",(0,i.jsx)(n.code,{children:"kinds"}),". Note that this actually means revoke all privileges that the current role granted (if not a superuser)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"REVOKE ALL PRIVILEGES ON kinds FROM manuel;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Revoke membership in role ",(0,i.jsx)(n.code,{children:"admins"})," from user ",(0,i.jsx)(n.code,{children:"joe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"REVOKE admins FROM joe;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsxs)(n.p,{children:["The compatibility notes of the ",(0,i.jsx)(n.a,{href:"/zh/docs/sql-stmts/grant",children:"GRANT"})," command also apply to ",(0,i.jsx)(n.code,{children:"REVOKE"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Either ",(0,i.jsx)(n.code,{children:"RESTRICT"})," or ",(0,i.jsx)(n.code,{children:"CASCADE"})," is required according to the standard, but Cloudberry Database assumes ",(0,i.jsx)(n.code,{children:"RESTRICT"})," by default."]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-default-privileges",children:"ALTER DEFAULT PRIVILEGES"}),", ",(0,i.jsx)(n.a,{href:"/zh/docs/sql-stmts/grant",children:"GRANT"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var i=s(67294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);