"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6659],{32995:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(85893),o=n(11151);const i={title:"dropuser"},t="dropuser",d={id:"sys-utilities/dropuser",title:"dropuser",description:"Removes a database role.",source:"@site/docs/sys-utilities/dropuser.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/dropuser",permalink:"/docs/sys-utilities/dropuser",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/dropuser.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"dropuser"},sidebar:"docsbars",previous:{title:"dropdb",permalink:"/docs/sys-utilities/dropdb"},next:{title:"gpactivatestandby",permalink:"/docs/sys-utilities/gpactivatestandby"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Connection options",id:"connection-options",level:3},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"dropuser",children:"dropuser"}),"\n",(0,r.jsx)(s.p,{children:"Removes a database role."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"dropuser [<connection-option> ...] [-e] [-i] <role_name>\n\ndropuser -? | --help \n\ndropuser -V | --version\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"dropuser"})," removes an existing role from Cloudberry Database. Only superusers and users with the ",(0,r.jsx)(s.code,{children:"CREATEROLE"})," privilege can remove roles. To remove a superuser role, you must yourself be a superuser."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"dropuser"})," is a wrapper around the SQL command ",(0,r.jsx)(s.code,{children:"DROP ROLE"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"role_name"})})}),"\n",(0,r.jsxs)(s.p,{children:["The name of the role to be removed. You will be prompted for a name if not specified on the command line and the ",(0,r.jsx)(s.code,{children:"-i"}),"/",(0,r.jsx)(s.code,{children:"--interactive"})," option is used."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-e | --echo"})})}),"\n",(0,r.jsxs)(s.p,{children:["Echo the commands that ",(0,r.jsx)(s.code,{children:"dropuser"})," generates and sends to the server."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-i | --interactive"})})}),"\n",(0,r.jsx)(s.p,{children:"Prompt for confirmation before actually removing the role, and prompt for the role name if none is specified on the command line."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"--if-exists"})})}),"\n",(0,r.jsx)(s.p,{children:"Do not throw an error if the user does not exist. A notice is issued in this case."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-V | --version"})})}),"\n",(0,r.jsxs)(s.p,{children:["Print the ",(0,r.jsx)(s.code,{children:"dropuser"})," version and exit."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-? | --help"})})}),"\n",(0,r.jsxs)(s.p,{children:["Show help about ",(0,r.jsx)(s.code,{children:"dropuser"})," command line arguments, and exit."]}),"\n",(0,r.jsx)(s.h3,{id:"connection-options",children:"Connection options"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-h host | --host=host"})})}),"\n",(0,r.jsxs)(s.p,{children:["The host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable ",(0,r.jsx)(s.code,{children:"PGHOST"})," or defaults to localhost."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-p port | --port=port"})})}),"\n",(0,r.jsxs)(s.p,{children:["The TCP port on which the Cloudberry coordinator database server is listening for connections. If not specified, reads from the environment variable ",(0,r.jsx)(s.code,{children:"PGPORT"})," or defaults to 5432."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-U username | --username=username"})})}),"\n",(0,r.jsxs)(s.p,{children:["The database role name to connect as. If not specified, reads from the environment variable ",(0,r.jsx)(s.code,{children:"PGUSER"})," or defaults to the current system role name."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-w | --no-password"})})}),"\n",(0,r.jsxs)(s.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,r.jsx)(s.code,{children:".pgpass"})," file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-W | --password"})})}),"\n",(0,r.jsx)(s.p,{children:"Force a password prompt."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["To remove the role ",(0,r.jsx)(s.code,{children:"joe"})," using default connection options:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"dropuser joe\nDROP ROLE\n"})}),"\n",(0,r.jsx)(s.p,{children:"To remove the role joe using connection options, with verification, and a peek at the underlying command:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:'dropuser -p 54321 -h coordinatorhost -i -e joe\nRole "joe" will be permanently removed.\nAre you sure? (y/n) y\nDROP ROLE "joe"\nDROP ROLE\n'})}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sys-utilities/createuser",children:"createuser"}),", ",(0,r.jsx)(s.a,{href:"/docs/sql-stmts/drop-role",children:(0,r.jsx)(s.code,{children:"DROP ROLE"})})]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>t});var r=n(67294);const o={},i=r.createContext(o);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);