"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2147],{30736:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>a});var o=r(85893),t=r(11151);const n={title:"DROP ROLE"},l="DROP ROLE",i={id:"sql-stmts/drop-role",title:"DROP ROLE",description:"Removes a database role.",source:"@site/docs/sql-stmts/drop-role.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-role",permalink:"/docs/sql-stmts/drop-role",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-role.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"DROP ROLE"},sidebar:"docsbars",previous:{title:"DROP RESOURCE QUEUE",permalink:"/docs/sql-stmts/drop-resource-queue"},next:{title:"DROP ROUTINE",permalink:"/docs/sql-stmts/drop-routine"}},d={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"drop-role",children:"DROP ROLE"}),"\n",(0,o.jsx)(s.p,{children:"Removes a database role."}),"\n",(0,o.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-sql",children:"DROP ROLE [IF EXISTS] <name> [, ...]\n"})}),"\n",(0,o.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"DROP ROLE"})," removes the specified role(s). To drop a superuser role, you must be a superuser yourself. To drop non-superuser roles, you must have ",(0,o.jsx)(s.code,{children:"CREATE ROLE"})," privilege."]}),"\n",(0,o.jsxs)(s.p,{children:["A role cannot be removed if it is still referenced in any database; an error will be raised if so. Before dropping the role, you must drop all the objects it owns (or reassign their ownership) and revoke any privileges the role has been granted on other objects. The ",(0,o.jsx)(s.a,{href:"/docs/sql-stmts/reassign-owned",children:(0,o.jsx)(s.code,{children:"REASSIGN OWNED"})})," and ",(0,o.jsx)(s.a,{href:"/docs/sql-stmts/drop-owned",children:(0,o.jsx)(s.code,{children:"DROP OWNED"})})," commands can be useful for this purpose."]}),"\n",(0,o.jsxs)(s.p,{children:["However, it is not necessary to remove role memberships involving the role; ",(0,o.jsx)(s.code,{children:"DROP ROLE"})," automatically revokes any memberships of the target role in other roles, and of other roles in the target role. The other roles are not dropped nor otherwise affected."]}),"\n",(0,o.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,o.jsx)(s.p,{children:"Do not throw an error if the role does not exist. A notice is issued in this case."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.code,{children:"name"})})}),"\n",(0,o.jsx)(s.p,{children:"The name of the role to remove."}),"\n",(0,o.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(s.p,{children:["Remove the roles named ",(0,o.jsx)(s.code,{children:"sally"})," and ",(0,o.jsx)(s.code,{children:"bob"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-sql",children:"DROP ROLE sally, bob;\n"})}),"\n",(0,o.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,o.jsxs)(s.p,{children:["The SQL standard defines ",(0,o.jsx)(s.code,{children:"DROP ROLE"}),", but it allows only one role to be dropped at a time, and it specifies different privilege requirements than Cloudberry Database uses."]}),"\n",(0,o.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/sql-stmts/reassign-owned",children:(0,o.jsx)(s.code,{children:"REASSIGN OWNED"})}),", ",(0,o.jsx)(s.a,{href:"/docs/sql-stmts/drop-owned",children:(0,o.jsx)(s.code,{children:"DROP OWNED"})}),", ",(0,o.jsx)(s.a,{href:"/docs/sql-stmts/create-role",children:(0,o.jsx)(s.code,{children:"CREATE ROLE"})}),", ",(0,o.jsx)(s.a,{href:"/docs/sql-stmts/alter-role",children:"ALTER ROLE"}),", ",(0,o.jsx)(s.a,{href:"/docs/sql-stmts/set-role",children:(0,o.jsx)(s.code,{children:"SET ROLE"})})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>i,a:()=>l});var o=r(67294);const t={},n=o.createContext(t);function l(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);