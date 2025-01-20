"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4085],{10129:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=t(85893),o=t(11151);const a={title:"ROLLBACK TO SAVEPOINT"},i="ROLLBACK TO SAVEPOINT",r={id:"sql-stmts/rollback-to-savepoint",title:"ROLLBACK TO SAVEPOINT",description:"Rolls back the current transaction to a savepoint.",source:"@site/docs/sql-stmts/rollback-to-savepoint.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/rollback-to-savepoint",permalink:"/docs/sql-stmts/rollback-to-savepoint",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/rollback-to-savepoint.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1736835446,formattedLastUpdatedAt:"Jan 14, 2025",frontMatter:{title:"ROLLBACK TO SAVEPOINT"},sidebar:"docsbars",previous:{title:"REVOKE",permalink:"/docs/sql-stmts/revoke"},next:{title:"ROLLBACK",permalink:"/docs/sql-stmts/rollback"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"rollback-to-savepoint",children:"ROLLBACK TO SAVEPOINT"}),"\n",(0,n.jsx)(s.p,{children:"Rolls back the current transaction to a savepoint."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ROLLBACK [ WORK | TRANSACTION ] TO [ SAVEPOINT ] <savepoint_name>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"This command rolls back all commands that were run after the savepoint was established. The savepoint remains valid and can be rolled back to again later, if needed."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ROLLBACK TO SAVEPOINT"})," implicitly destroys all savepoints that were established after the named savepoint."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"WORK"})}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TRANSACTION"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional key words. They have no effect."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"savepoint_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the savepoint to roll back to."}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/release-savepoint",children:"RELEASE SAVEPOINT"})," to destroy a savepoint without discarding the effects of commands run after it was established."]}),"\n",(0,n.jsx)(s.p,{children:"Specifying a savepoint name that has not been established is an error."}),"\n",(0,n.jsxs)(s.p,{children:["Cursors have somewhat non-transactional behavior with respect to savepoints. Any cursor that is opened inside a savepoint will be closed when the savepoint is rolled back. If a previously opened cursor is affected by a ",(0,n.jsx)(s.code,{children:"FETCH"})," command inside a savepoint that is later rolled back, the cursor remains at the position that ",(0,n.jsx)(s.code,{children:"FETCH"})," left it pointing to (that is, cursor motion caused by ",(0,n.jsx)(s.code,{children:"FETCH"})," is not rolled back). Closing a cursor is not undone by rolling back, either. However, other side-effects caused by the cursor's query (such as side-effects of volatile functions called by the query) ",(0,n.jsx)(s.em,{children:"are"})," rolled back if they occur during a savepoint that is later rolled back. A cursor whose execution causes a transaction to end prematurely is put in a cannot-execute state, so while the transaction can be restored using ",(0,n.jsx)(s.code,{children:"ROLLBACK TO SAVEPOINT"}),", the cursor can no longer be used."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["To undo the effects of the commands run after ",(0,n.jsx)(s.code,{children:"my_savepoint"})," was established:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ROLLBACK TO SAVEPOINT my_savepoint;\n"})}),"\n",(0,n.jsx)(s.p,{children:"Cursor positions are not affected by a savepoint rollback:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"BEGIN;\nDECLARE foo CURSOR FOR SELECT 1 UNION SELECT 2;\nSAVEPOINT foo;\nFETCH 1 FROM foo;\ncolumn \n----------\n        1\n\nROLLBACK TO SAVEPOINT foo;\nFETCH 1 FROM foo;\ncolumn \n----------\n        2\n\nCOMMIT;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["The SQL standard specifies that the key word ",(0,n.jsx)(s.code,{children:"SAVEPOINT"})," is mandatory, but Cloudberry Database (and Oracle) allow it to be omitted. SQL allows only ",(0,n.jsx)(s.code,{children:"WORK"}),", not ",(0,n.jsx)(s.code,{children:"TRANSACTION"}),", as a noise word after ",(0,n.jsx)(s.code,{children:"ROLLBACK"}),". Also, SQL has an optional clause ",(0,n.jsx)(s.code,{children:"AND [NO] CHAIN"})," which is not currently supported by Cloudberry Database. Otherwise, this command conforms to the SQL standard."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/begin",children:(0,n.jsx)(s.code,{children:"BEGIN"})}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/commit",children:(0,n.jsx)(s.code,{children:"COMMIT"})}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/release-savepoint",children:(0,n.jsx)(s.code,{children:"RELEASE SAVEPOINT"})}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback",children:(0,n.jsx)(s.code,{children:"ROLLBACK"})}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/savepoint",children:(0,n.jsx)(s.code,{children:"SAVEPOINT"})})]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>i});var n=t(67294);const o={},a=n.createContext(o);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);