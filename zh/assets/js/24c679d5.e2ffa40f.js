"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7875],{72003:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(85893),r=n(11151);const o={title:"MOVE"},c="MOVE",i={id:"sql-stmts/move",title:"MOVE",description:"Positions a cursor.",source:"@site/docs/sql-stmts/move.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/move",permalink:"/zh/docs/sql-stmts/move",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/move.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732243913,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",frontMatter:{title:"MOVE"},sidebar:"docsbars",previous:{title:"LOCK",permalink:"/zh/docs/sql-stmts/lock"},next:{title:"NOTIFY",permalink:"/zh/docs/sql-stmts/notify"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"move",children:"MOVE"}),"\n",(0,t.jsx)(s.p,{children:"Positions a cursor."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"MOVE [ <forward_direction> [ FROM | IN ] ] <cursor_name>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["where ",(0,t.jsx)(s.code,{children:"<forward_direction>"})," can be empty or one of:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"\xa0\xa0\xa0\xa0NEXT\n\xa0\xa0\xa0\xa0FIRST\n\xa0\xa0\xa0\xa0LAST\n\xa0\xa0\xa0\xa0ABSOLUTE <count>\n\xa0\xa0\xa0\xa0RELATIVE <count>\n\xa0\xa0\xa0\xa0<count>\n\xa0\xa0\xa0\xa0ALL\n\xa0\xa0\xa0\xa0FORWARD\n\xa0\xa0\xa0\xa0FORWARD <count>\n\xa0\xa0\xa0\xa0FORWARD ALL\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"MOVE"})," repositions a cursor without retrieving any data. ",(0,t.jsx)(s.code,{children:"MOVE"})," works exactly like the ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/fetch",children:(0,t.jsx)(s.code,{children:"FETCH"})})," command, except it only positions the cursor and does not return rows."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," You cannot ",(0,t.jsx)(s.code,{children:"MOVE"})," a ",(0,t.jsx)(s.code,{children:"PARALLEL RETRIEVE CURSOR"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," Because Cloudberry Database does not support scrollable cursors, it is not possible to move a cursor position backwards. You can only move a cursor forward in position using ",(0,t.jsx)(s.code,{children:"MOVE"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The parameters for the ",(0,t.jsx)(s.code,{children:"MOVE"})," command are identical to those of the ",(0,t.jsx)(s.code,{children:"FETCH"})," command; refer to ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/fetch",children:(0,t.jsx)(s.code,{children:"FETCH"})})," for details on syntax and usage."]}),"\n",(0,t.jsx)(s.h2,{id:"outputs",children:"Outputs"}),"\n",(0,t.jsxs)(s.p,{children:["On successful completion, a ",(0,t.jsx)(s.code,{children:"MOVE"})," command returns a command tag of the form"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"MOVE <count>\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The count is the number of rows that a ",(0,t.jsx)(s.code,{children:"FETCH"})," command with the same parameters would have returned (possibly zero)."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Start the transaction:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"BEGIN;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Create a cursor:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DECLARE mycursor CURSOR FOR SELECT * FROM films;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Skip the first 5 rows in the cursor ",(0,t.jsx)(s.code,{children:"mycursor"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"MOVE FORWARD 5 IN mycursor;\nMOVE 5\n"})}),"\n",(0,t.jsx)(s.p,{children:"Fetch the next row after that (row 6):"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"FETCH 1 FROM mycursor;\n code  | title  | did | date_prod  |  kind  |  len\n-------+--------+-----+------------+--------+-------\n P_303 | 48 Hrs | 103 | 1982-10-22 | Action | 01:37\n(1 row)\n"})}),"\n",(0,t.jsx)(s.p,{children:"Close the cursor and end the transaction:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CLOSE mycursor;\nCOMMIT;\n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["There is no ",(0,t.jsx)(s.code,{children:"MOVE"})," statement in the SQL standard."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/declare",children:"DECLARE"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/fetch",children:"FETCH"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/close",children:"CLOSE"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>c});var t=n(67294);const r={},o=t.createContext(r);function c(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);