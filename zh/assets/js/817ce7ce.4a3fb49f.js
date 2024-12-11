"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2664],{72139:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=n(85893),o=n(11151);const t={title:"ALTER ROLE"},a="ALTER ROLE",i={id:"sql-stmts/alter-role",title:"ALTER ROLE",description:"Changes a database role (user or group).",source:"@site/docs/sql-stmts/alter-role.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-role",permalink:"/zh/docs/sql-stmts/alter-role",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-role.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733903724,formattedLastUpdatedAt:"2024\u5e7412\u670811\u65e5",frontMatter:{title:"ALTER ROLE"},sidebar:"docsbars",previous:{title:"ALTER RESOURCE QUEUE",permalink:"/zh/docs/sql-stmts/alter-resource-queue"},next:{title:"ALTER ROUTINE",permalink:"/zh/docs/sql-stmts/alter-routine"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"alter-role",children:"ALTER ROLE"}),"\n",(0,r.jsx)(s.p,{children:"Changes a database role (user or group)."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE <role_specification> [ WITH ] <option> [ ... ]\n"})}),"\n",(0,r.jsxs)(s.p,{children:["where ",(0,r.jsx)(s.code,{children:"<option>"})," can be:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"    SUPERUSER | NOSUPERUSER\n  | CREATEDB | NOCREATEDB\n  | CREATEROLE | NOCREATEROLE\n  | CREATEEXTTABLE | NOCREATEEXTTABLE  [ ( attribute='value' [, ...] )\n     where attributes and values are:\n       type='readable'|'writable'\n       protocol='gpfdist'|'http'\n  | INHERIT | NOINHERIT\n  | LOGIN | NOLOGIN\n  | REPLICATION | NOREPLICATION\n  | BYPASSRLS | NOBYPASSRLS\n  | CONNECTION LIMIT <connlimit>\n  | [ ENCRYPTED ] PASSWORD '<password>' | PASSWORD NULL\n  | VALID UNTIL '<timestamp>'\n  | [ DENY <deny_point> ]\n  | [ DENY BETWEEN <deny_point> AND <deny_point>]\n  | [ DROP DENY FOR <deny_point> ]\n\nALTER ROLE <name> RENAME TO <new_name>\n\nALTER ROLE { <role_specification> | ALL } [ IN DATABASE <database_name> ] SET <configuration_parameter> { TO | = } { <value> | DEFAULT }\nALTER ROLE { <role_specification> | ALL } [ IN DATABASE <database_name> ] SET <configuration_parameter> FROM CURRENT\nALTER ROLE { <role_specification> | ALL } [ IN DATABASE <database_name> ] RESET <configuration_parameter>\nALTER ROLE { <role_specification> | ALL } [ IN DATABASE <database_name> ] RESET ALL\n\nALTER ROLE <role_specification> RESOURCE QUEUE {<queue_name> | NONE}\nALTER ROLE <role_specification> RESOURCE GROUP {<group_name> | NONE}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["where ",(0,r.jsx)(s.code,{children:"<role_specification>"})," can be:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"    <role_name>\n  | CURRENT_USER\n  | SESSION_USER\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ALTER ROLE"})," changes the attributes of a Cloudberry Database role. There are several variants of this command."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"WITH option"})})}),"\n",(0,r.jsxs)(s.p,{children:["Changes many of the role attributes that can be specified in ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-role",children:"CREATE ROLE"}),". (All of the possible attributes are covered, execept that there are no options for adding or removing memberships; use ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/grant",children:"GRANT"})," and ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/revoke",children:"REVOKE"})," for that.) Attributes not mentioned in the command retain their previous settings. Database superusers can change any of these settings for any role. Roles having ",(0,r.jsx)(s.code,{children:"CREATEROLE"})," privilege can change any of these settings except ",(0,r.jsx)(s.code,{children:"SUPERUSER"}),", ",(0,r.jsx)(s.code,{children:"REPLICATION"}),", and ",(0,r.jsx)(s.code,{children:"BYPASSRLS"}),", but only for non-superuser and non-replication roles. Ordinary roles can only change their own password."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"RENAME"})})}),"\n",(0,r.jsxs)(s.p,{children:["Changes the name of the role. Database superusers can rename any role. Roles having ",(0,r.jsx)(s.code,{children:"CREATEROLE"})," privilege can rename non-superuser roles. The current session user cannot be renamed (connect as a different user to rename a role). Because MD5-encrypted passwords use the role name as cryptographic salt, renaming a role clears its password if the password is MD5-encrypted."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"SET | RESET"})})}),"\n",(0,r.jsxs)(s.p,{children:["Changes a role's session default for a specified configuration parameter, either for all databases or, when the ",(0,r.jsx)(s.code,{children:"IN DATABASE"})," clause is specified, only for sessions in the named database. If ",(0,r.jsx)(s.code,{children:"ALL"})," is specified instead of a role name, this changes the setting for all roles. Using ",(0,r.jsx)(s.code,{children:"ALL"})," with ",(0,r.jsx)(s.code,{children:"IN DATABASE"})," is effectively the same as using the command ",(0,r.jsx)(s.code,{children:"ALTER DATABASE ... SET ..."}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Whenever the role subsequently starts a new session, the specified value becomes the session default, overriding whatever setting is present in the server configuration file (",(0,r.jsx)(s.code,{children:"postgresql.conf"}),") or has been received from the ",(0,r.jsx)(s.code,{children:"postgres"})," command line. This only happens at login time; running ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-role",children:"SET ROLE"})," or ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-session-authorization",children:"SET SESSION AUTHORIZATION"})," does not cause new configuration values to be set. Settings set for all databases are overridden by database-specific settings attached to a role. Settings for specific databases or specific roles override settings for all roles."]}),"\n",(0,r.jsxs)(s.p,{children:["Superusers can change anyone's session defaults. Roles having ",(0,r.jsx)(s.code,{children:"CREATEROLE"})," privilege can change defaults for non-superuser roles. Ordinary roles can only set defaults for themselves. Certain configuration variables cannot be set this way, or can only be set if a superuser issues the command. Only superusers can change a setting for all roles in all databases."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"RESOURCE QUEUE"})})}),"\n",(0,r.jsxs)(s.p,{children:["Assigns the role to a resource queue. The role would then be subject to the limits assigned to the resource queue when issuing queries. Specify ",(0,r.jsx)(s.code,{children:"NONE"})," to assign the role to the default resource queue. A role can belong to only one resource queue. For a role without ",(0,r.jsx)(s.code,{children:"LOGIN"})," privilege, resource queues have no effect. See ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-resource-queue",children:"CREATE RESOURCE QUEUE"})," for more information."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"RESOURCE GROUP"})})}),"\n",(0,r.jsxs)(s.p,{children:["Assigns a resource group to the role. The role would then be subject to the concurrent transaction, memory, and CPU limits configured for the resource group. You can assign a single resource group to one or more roles. You cannot assign a resource group that you create for an external component to a role. See ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-resource-group",children:"CREATE RESOURCE GROUP"})," for additional information."]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"name"})})}),"\n",(0,r.jsx)(s.p,{children:"The name of the role whose attributes are to be altered."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"CURRENT_USER"})})}),"\n",(0,r.jsx)(s.p,{children:"Alter the current user instead of an explicitly identified role."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"SESSION_USER"})})}),"\n",(0,r.jsx)(s.p,{children:"Alter the current session user instead of an explicitly identified role."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"SUPERUSER"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"NOSUPERUSER"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"CREATEDB"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"NOCREATEDB"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"CREATEROLE"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"NOCREATEROLE"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"INHERIT"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"NOINHERIT"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"LOGIN"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"NOLOGIN"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"REPLICATION"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"NOREPLICATION"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"BYPASSRLS"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"NOBYPASSRLS"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"CONNECTION LIMIT connlimit"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"[ ENCRYPTED ] PASSWORD 'password'"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"PASSWORD NULL"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"VALID UNTIL 'timestamp'"})})]}),"\n",(0,r.jsxs)(s.p,{children:["These clauses alter attributes originally set by ",(0,r.jsx)(s.code,{children:"CREATE ROLE"}),". For more information, see the ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-role",children:"CREATE ROLE"})," reference page."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"new_name"})})}),"\n",(0,r.jsx)(s.p,{children:"The new name of the role."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"database_name"})})}),"\n",(0,r.jsx)(s.p,{children:"The name of the database in which to set the configuration parameter."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"configuration_parameter"})}),(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"value"})})]}),"\n",(0,r.jsxs)(s.p,{children:["Set this role's session default for the specified configuration parameter to the given value. If value is ",(0,r.jsx)(s.code,{children:"DEFAULT"})," or, equivalently, ",(0,r.jsx)(s.code,{children:"RESET"})," is used, the role-specific parameter setting is removed, so the role will inherit the system-wide default setting in new sessions. Use ",(0,r.jsx)(s.code,{children:"RESET ALL"})," to clear all role-specific settings. ",(0,r.jsx)(s.code,{children:"SET FROM CURRENT"})," saves the session's current value of the parameter as the role-specific value. If ",(0,r.jsx)(s.code,{children:"IN DATABASE"})," is specified, the configuration parameter is set or removed for the given role and database only."]}),"\n",(0,r.jsxs)(s.p,{children:["Role-specific variable settings take effect only at login; ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-role",children:"SET ROLE"})," and ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/set-session-authorization",children:"SET SESSION AUTHORIZATION"})," do not process role-specific variable settings."]}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/set",children:"SET"})," and Server Configuration Parameters for more information about allowed parameter names and values."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"group_name"})})}),"\n",(0,r.jsxs)(s.p,{children:["The name of the resource group to assign to this role. Specifying the group_name ",(0,r.jsx)(s.code,{children:"NONE"})," removes the role's current resource group assignment and assigns a default resource group based on the role's capability. ",(0,r.jsx)(s.code,{children:"SUPERUSER"})," roles are assigned the ",(0,r.jsx)(s.code,{children:"admin_group"})," resource group, while the ",(0,r.jsx)(s.code,{children:"default_group"})," resource group is assigned to non-admin roles."]}),"\n",(0,r.jsx)(s.p,{children:"You cannot assign a resource group that you create for an external component to a role."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"queue_name"})})}),"\n",(0,r.jsxs)(s.p,{children:["The name of the resource queue to which the user-level role is to be assigned. Only roles with ",(0,r.jsx)(s.code,{children:"LOGIN"})," privilege can be assigned to a resource queue. To unassign a role from a resource queue and put it in the default resource queue, specify ",(0,r.jsx)(s.code,{children:"NONE"}),". A role can belong only to one resource queue."]}),"\n",(0,r.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(s.p,{children:["Use ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-role",children:"CREATE ROLE"})," to add a new role, and ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/drop-role",children:"DROP ROLE"})," to remove a role."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ALTER ROLE"})," cannot change a role's memberships; use ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/grant",children:"GRANT"})," and ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/revoke",children:"REVOKE"})," to do that."]}),"\n",(0,r.jsxs)(s.p,{children:["You must exercise caution when specifying an unencrypted password with this command. The password will be transmitted to the server in clear text, and it might also be logged in the client's command history or the server log. The psql command-line client contains a meta-command ",(0,r.jsx)(s.code,{children:"\\password"})," that can be used to change a role's password without exposing the clear text password."]}),"\n",(0,r.jsxs)(s.p,{children:["It is also possible to tie a session default to a specific database rather than to a role; see ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-database",children:"ALTER DATABASE"}),". If there is a conflict, database-role-specific settings override role-specific ones, which in turn override database-specific ones."]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.p,{children:"Change the password for a role:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE daria WITH PASSWORD 'passwd123';\n"})}),"\n",(0,r.jsx)(s.p,{children:"Remove a role's password:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE daria WITH PASSWORD NULL;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Change a password expiration date, specifying that the password should expire at midday on 4th May 2022 using the time zone which is one hour ahead of UTC:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE scott VALID UNTIL 'May 4 12:00:00 2022 +1';\n"})}),"\n",(0,r.jsx)(s.p,{children:"Make a password valid forever:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE luke VALID UNTIL 'infinity';\n"})}),"\n",(0,r.jsx)(s.p,{children:"Give a role the ability to create other roles and new databases:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE joelle CREATEROLE CREATEDB;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Give a role a non-default setting of the ",(0,r.jsx)(s.code,{children:"maintenance_work_mem"})," parameter:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE admin SET maintenance_work_mem = 100000;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Give a role a non-default, database-specific setting of the ",(0,r.jsx)(s.code,{children:"client_min_messages"})," parameter:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE fred IN DATABASE devel SET client_min_messages = DEBUG;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Assign a role to a resource queue:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE sammy RESOURCE QUEUE poweruser;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Give a role permission to create writable external tables:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE load CREATEEXTTABLE (type='writable');\n"})}),"\n",(0,r.jsx)(s.p,{children:"Alter a role so it does not allow login access on Sundays:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE user3 DENY DAY 'Sunday';\n"})}),"\n",(0,r.jsx)(s.p,{children:"Alter a role to remove the constraint that does not allow login access on Sundays:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE user3 DROP DENY FOR DAY 'Sunday';\n"})}),"\n",(0,r.jsx)(s.p,{children:"Assign a new resource group to a role:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER ROLE parttime_user RESOURCE GROUP rg_light;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"ALTER ROLE"})," statement is a Cloudberry Database extension."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-role",children:"CREATE ROLE"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/drop-role",children:"DROP ROLE"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-database",children:"ALTER DATABASE"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/set",children:"SET"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-resource-group",children:"CREATE RESOURCE GROUP"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-resource-queue",children:"CREATE RESOURCE QUEUE"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/grant",children:"GRANT"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/revoke",children:"REVOKE"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>a});var r=n(67294);const o={},t=r.createContext(o);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);