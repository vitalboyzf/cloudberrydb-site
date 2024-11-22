"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8821],{97554:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=s(85893),a=s(11151);const l={title:"[101-1] Lesson 1: Create Users and Roles",description:"Learn how to create users and roles in the Cloudberry Database with this helpful introduction."},t=void 0,d={type:"mdx",permalink:"/zh/bootcamp/101-1-create-users-and-roles",source:"@site/i18n/zh/docusaurus-plugin-content-pages/bootcamp/101-1-create-users-and-roles.md",title:"[101-1] Lesson 1: Create Users and Roles",description:"Learn how to create users and roles in the Cloudberry Database with this helpful introduction.",frontMatter:{title:"[101-1] Lesson 1: Create Users and Roles",description:"Learn how to create users and roles in the Cloudberry Database with this helpful introduction."},unlisted:!1},i={},o=[{value:"Quick-start operations",id:"quick-start-operations",level:2},{value:"Create a user using the CREATE USER command",id:"create-a-user-using-the-create-user-command",level:3},{value:"Create a user using the createuser utility command",id:"create-a-user-using-the-createuser-utility-command",level:3},{value:"Create a users group and add the users to it",id:"create-a-users-group-and-add-the-users-to-it",level:3},{value:"What&#39;s next",id:"whats-next",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Cloudberry Database manages database access using roles. Initially, there is one superuser role, the role associated with the OS user who initialized the database instance, usually ",(0,r.jsx)(n.code,{children:"gpadmin"}),". This user owns all of the Cloudberry Database files and OS processes, so it is important to reserve the ",(0,r.jsx)(n.code,{children:"gpadmin"})," role for system tasks only."]}),"\n",(0,r.jsxs)(n.p,{children:["A role can be a user or a group. A user role can log into a database; that is, it has the ",(0,r.jsx)(n.code,{children:"LOGIN"})," attribute. A user or group role can become a member of a group."]}),"\n",(0,r.jsxs)(n.p,{children:["Permissions can be granted to users or groups. Initially, only the ",(0,r.jsx)(n.code,{children:"gpadmin"})," role is able to create roles. You can add roles using the ",(0,r.jsx)(n.code,{children:"createuser"})," utility command, ",(0,r.jsx)(n.code,{children:"CREATE ROLE"})," SQL command, or the ",(0,r.jsx)(n.code,{children:"CREATE USER"})," SQL command. The ",(0,r.jsx)(n.code,{children:"CREATE USER"})," command is the same as the ",(0,r.jsx)(n.code,{children:"CREATE ROLE"})," command except that it automatically assigns the role the ",(0,r.jsx)(n.code,{children:"LOGIN"})," attribute."]}),"\n",(0,r.jsx)(n.h2,{id:"quick-start-operations",children:"Quick-start operations"}),"\n",(0,r.jsx)(n.p,{children:"You can follow the examples below to create users and roles."}),"\n",(0,r.jsxs)(n.p,{children:["Before moving on to the operations, make sure that you have installed Cloudberry Database by following ",(0,r.jsx)(n.a,{href:"./cbdb-sandbox",children:"Install a Single-Node Cloudberry Database"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"create-a-user-using-the-create-user-command",children:"Create a user using the CREATE USER command"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Log into Cloudberry Database in Docker. Connect to the database as the ",(0,r.jsx)(n.code,{children:"gpadmin"})," user."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ psql\n\npsql (14.4, server 14.4)\nType "help" for help.\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"gpadmin=#\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a user named ",(0,r.jsx)(n.code,{children:"lily"})," using the ",(0,r.jsx)(n.code,{children:"CREATE USER"})," command, with a password ",(0,r.jsx)(n.code,{children:"changeme"}),". After the creation, you need to enter the password to log in as the user ",(0,r.jsx)(n.code,{children:"lily"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# CREATE USER lily WITH PASSWORD 'changeme';\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'NOTICE:  resource queue required -- using default resource queue "pg_default"\nCREATE ROLE\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Verify that the user ",(0,r.jsx)(n.code,{children:"lily"})," has been created."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# \\du\n                             List of roles\n Role name |                   Attributes                   | Member of\n-----------+------------------------------------------------+-----------\n gpadmin   | Superuser, Create role, Create DB, Replication | {}\n lily      |                                                | {}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-a-user-using-the-createuser-utility-command",children:"Create a user using the createuser utility command"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a user named ",(0,r.jsx)(n.code,{children:"lucy"})," using the ",(0,r.jsx)(n.code,{children:"createuser"})," utility command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# \\q  -- exit psql\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[gpadmin@mdw ~]$ createuser --interactive lucy\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You will be asked to choose whether the new role should be a superuser. Enter ",(0,r.jsx)(n.code,{children:"y"})," to create a superuser."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Shall the new role be a superuser? (y/n)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Connect to the database as the ",(0,r.jsx)(n.code,{children:"gpadmin"})," user."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ psql\n\npsql (14.4, server 14.4)\nType "help" for help.\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Verify that the user ",(0,r.jsx)(n.code,{children:"lucy"})," has been created."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# \\du\n                             List of roles\n Role name |                   Attributes                   | Member of\n-----------+------------------------------------------------+-----------\n gpadmin   | Superuser, Create role, Create DB, Replication | {}\n lily      |                                                | {}\n lucy      | Superuser, Create role, Create DB              | {}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# \\q  -- exit psql\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-a-users-group-and-add-the-users-to-it",children:"Create a users group and add the users to it"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Connect to the database as the ",(0,r.jsx)(n.code,{children:"gpadmin"})," user."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ psql\n\npsql (14.4, server 14.4)\nType "help" for help.\n'})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"gpadmin=#\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a group named ",(0,r.jsx)(n.code,{children:"users"})," using the ",(0,r.jsx)(n.code,{children:"CREATE ROLE"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# CREATE ROLE users;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'NOTICE:  resource queue required -- using default resource queue "pg_default"\nCREATE ROLE\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the ",(0,r.jsx)(n.code,{children:"lily"})," and ",(0,r.jsx)(n.code,{children:"lucy"})," users to the ",(0,r.jsx)(n.code,{children:"users"})," group."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# GRANT users TO lily, lucy;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT ROLE\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Verify that the two users have been added to the ",(0,r.jsx)(n.code,{children:"users"})," group."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# \\du\n                             List of roles\n Role name |                   Attributes                   | Member of\n-----------+------------------------------------------------+-----------\n gpadmin   | Superuser, Create role, Create DB, Replication | {}\n lily      |                                                | {users}\n lucy      | Superuser, Create role, Create DB              | {users}\n users     | Cannot login                                   | {}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["However, after creating the ",(0,r.jsx)(n.code,{children:"users"})," group, ",(0,r.jsx)(n.code,{children:"lily"})," and ",(0,r.jsx)(n.code,{children:"lucy"})," cannot log into Cloudberry Database yet. See the following error messages."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ psql -U lily -d gpadmin\n\npsql: error: connection to server on socket "/tmp/.s.PGSQL.5432" failed: FATAL:  no pg_hba.conf entry for host "[local]", user "lily", database "gpadmin", no encryption\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ psql -U lucy -d gpadmin\n\npsql: error: connection to server on socket "/tmp/.s.PGSQL.5432" failed: FATAL:  no pg_hba.conf entry for host "[local]", user "lucy", database "gpadmin", no encryption\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To make users (",(0,r.jsx)(n.code,{children:"lily"})," and ",(0,r.jsx)(n.code,{children:"lucy"}),") able to log into the database, you need to adjust the ",(0,r.jsx)(n.code,{children:"pg_hba.conf"})," configuration file on the master node and use ",(0,r.jsx)(n.code,{children:"gpstop"})," to populate the change."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Append ",(0,r.jsx)(n.code,{children:"local gpadmin lily md5"})," and ",(0,r.jsx)(n.code,{children:"local gpadmin lucy trust"})," to the ",(0,r.jsx)(n.code,{children:"pg_hba.conf"})," file on the master node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"gpadmin=# \\q  -- exit psql\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ echo "local gpadmin lily md5" >> /data0/database/master/gpseg-1/pg_hba.conf\n[gpadmin@mdw ~]$ echo "local gpadmin lucy trust" >> /data0/database/master/gpseg-1/pg_hba.conf\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Info:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pg_hba.conf"})," is a configuration file in Cloudberry Database to control access permissions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"md5"})," and ",(0,r.jsx)(n.code,{children:"trust"})," are the authentication methods. ",(0,r.jsx)(n.code,{children:"md5"})," means that the user needs to enter the password to log in. ",(0,r.jsx)(n.code,{children:"trust"})," means that the user can log in without entering the password."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"gpstop"})," to populate the change."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[gpadmin@mdw ~]$ gpstop -u\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"20230818:14:16:05:003653 gpstop:mdw:gpadmin-[INFO]:-Starting gpstop with args: -u\n20230818:14:16:05:003653 gpstop:mdw:gpadmin-[INFO]:-Gathering information and validating the environment...\n20230818:14:16:05:003653 gpstop:mdw:gpadmin-[INFO]:-Obtaining Cloudberry Coordinator catalog information\n20230818:14:16:05:003653 gpstop:mdw:gpadmin-[INFO]:-Obtaining Segment details from coordinator...\n20230818:14:16:05:003653 gpstop:mdw:gpadmin-[INFO]:-Cloudberry Version: 'postgres (Cloudberry Database) 1.0.0 build dev'\n20230818:14:16:05:003653 gpstop:mdw:gpadmin-[INFO]:-Signalling all postmaster processes to reload\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify that the two users can log into the database."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ psql -U lily -d gpadmin\nPassword for user lily:  # changeme\n\npsql (14.4, server 14.4)\nType "help" for help.\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ psql -U lucy -d gpadmin\n\npsql (14.4, server 14.4)\nType "help" for help.\n'})}),"\n",(0,r.jsxs)(n.p,{children:["User ",(0,r.jsx)(n.code,{children:"lily"})," and user ",(0,r.jsx)(n.code,{children:"lucy"}),' have had different privileges. You need to provide the password "changeme" for lily when login.']}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsxs)(n.p,{children:["After creating users and groups, you can follow ",(0,r.jsx)(n.a,{href:"./101-2-create-and-prepare-database",children:"Lesson 2: Create and Prepare Database"})," to create and prepare a database for the users"]}),"\n",(0,r.jsx)(n.p,{children:"Other tutorials:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./101-3-create-tables",children:"Lesson 3: Create Tables"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./101-4-data-loading",children:"Lesson 4: Data Loading"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./101-5-queries-and-performance-tuning",children:"Lesson 5: Queries and Performance Tuning"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./101-6-backup-and-recovery-operations",children:"Lesson 6: Backup and Restore Operations"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var r=s(67294);const a={},l=r.createContext(a);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);