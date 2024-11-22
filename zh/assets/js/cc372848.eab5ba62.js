"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4251],{28366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(85893),s=n(11151);const o={title:"ALTER OPERATOR"},i="ALTER OPERATOR",a={id:"sql-stmts/alter-operator",title:"ALTER OPERATOR",description:"Changes the definition of an operator.",source:"@site/docs/sql-stmts/alter-operator.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-operator",permalink:"/zh/docs/sql-stmts/alter-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-operator.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732243913,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",frontMatter:{title:"ALTER OPERATOR"},sidebar:"docsbars",previous:{title:"ALTER OPERATOR FAMILY",permalink:"/zh/docs/sql-stmts/alter-operator-family"},next:{title:"ALTER POLICY",permalink:"/zh/docs/sql-stmts/alter-policy"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"alter-operator",children:"ALTER OPERATOR"}),"\n",(0,r.jsx)(t.p,{children:"Changes the definition of an operator."}),"\n",(0,r.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"ALTER OPERATOR <name> ( {<left_type> | NONE} , {<right_type> | NONE} ) \n   OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER OPERATOR <name> ( {<left_type> | NONE} , {<right_type> | NONE} ) \n    SET SCHEMA <new_schema>\n\nALTER OPERATOR name ( { <left_type> | NONE } , { <right_type> | NONE } )\n    SET ( {  RESTRICT = { <res_proc> | NONE }\n           | JOIN = { <join_proc> | NONE }\n         } [, ... ] )\n"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ALTER OPERATOR"})," changes the definition of an operator."]}),"\n",(0,r.jsxs)(t.p,{children:["You must own the operator to use ",(0,r.jsx)(t.code,{children:"ALTER OPERATOR"}),". To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,r.jsx)(t.code,{children:"CREATE"})," privilege on the operator's schema. (These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the operator. However, a superuser can alter ownership of any operator anyway.)"]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"name"})})}),"\n",(0,r.jsx)(t.p,{children:"The name (optionally schema-qualified) of an existing operator."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"left_type"})})}),"\n",(0,r.jsxs)(t.p,{children:["The data type of the operator's left operand; write ",(0,r.jsx)(t.code,{children:"NONE"})," if the operator has no left operand."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"right_type"})})}),"\n",(0,r.jsxs)(t.p,{children:["The data type of the operator's right operand; write ",(0,r.jsx)(t.code,{children:"NONE"})," if the operator has no right operand."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"new_owner"})})}),"\n",(0,r.jsx)(t.p,{children:"The new owner of the operator."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"new_schema"})})}),"\n",(0,r.jsx)(t.p,{children:"The new schema for the operator."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"res_proc"})})}),"\n",(0,r.jsxs)(t.p,{children:["The restriction selectivity estimator function for this operator; write ",(0,r.jsx)(t.code,{children:"NONE"})," to remove the existing selectivity estimator."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"join_proc"})})}),"\n",(0,r.jsxs)(t.p,{children:["The join selectivity estimator function for this operator; write ",(0,r.jsx)(t.code,{children:"NONE"})," to remove the existing selectivity estimator."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.p,{children:["Change the owner of a custom operator ",(0,r.jsx)(t.code,{children:"a @@ b"})," for type ",(0,r.jsx)(t.code,{children:"text"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"ALTER OPERATOR @@ (text, text) OWNER TO joe;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Change the restriction and join selectivity estimator functions of a custom operator ",(0,r.jsx)(t.code,{children:"a && b"})," for type ",(0,r.jsx)(t.code,{children:"int[]"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"ALTER OPERATOR && (_int4, _int4) SET (RESTRICT = _int_contsel, JOIN = _int_contjoinsel);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(t.p,{children:["There is no ",(0,r.jsx)(t.code,{children:"ALTER OPERATOR"})," statement in the SQL standard."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-operator",children:"CREATE OPERATOR"}),", ",(0,r.jsx)(t.a,{href:"/zh/docs/sql-stmts/drop-operator",children:"DROP OPERATOR"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);