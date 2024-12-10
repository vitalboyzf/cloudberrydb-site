"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5710],{22081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=t(85893),r=t(11151);const d={title:"Window Functions"},i="Window Functions in Cloudberry Database",o={id:"functions/window-functions",title:"Window Functions",description:"The following are Cloudberry Database built-in window functions. All window functions are immutable.",source:"@site/docs/functions/window-functions.md",sourceDirName:"functions",slug:"/functions/window-functions",permalink:"/zh/docs/functions/window-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/functions/window-functions.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733828171,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"Window Functions"},sidebar:"docsbars",previous:{title:"JSON Functions and Operators",permalink:"/zh/docs/functions/json-functions-and-operators"},next:{title:"Advanced Aggregate Functions",permalink:"/zh/docs/functions/advanced-aggregate-functions"}},c={},l=[];function a(e){const n={code:"code",em:"em",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"window-functions-in-cloudberry-database",children:"Window Functions in Cloudberry Database"}),"\n",(0,s.jsxs)(n.p,{children:["The following are Cloudberry Database built-in window functions. All window functions are ",(0,s.jsx)(n.em,{children:"immutable"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Function"}),(0,s.jsx)(n.th,{children:"Return Type"}),(0,s.jsx)(n.th,{children:"Full Syntax"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cume_dist()"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"double precision"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"CUME_DIST() OVER ( [PARTITION BY"})," expr ",(0,s.jsx)(n.code,{children:"] ORDER BY"})," expr ",(0,s.jsx)(n.code,{children:")"})]}),(0,s.jsx)(n.td,{children:"Calculates the cumulative distribution of a value in a group of values. Rows with equal values always evaluate to the same cumulative distribution value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"dense_rank()"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bigint"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"DENSE_RANK () OVER ( [PARTITION BY"})," expr ",(0,s.jsx)(n.code,{children:"] ORDER BY"})," expr ",(0,s.jsx)(n.code,{children:")"})]}),(0,s.jsx)(n.td,{children:"Computes the rank of a row in an ordered group of rows without skipping rank values. Rows with equal values are given the same rank value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"first_value(*expr*)"})}),(0,s.jsx)(n.td,{children:"same as input expr type"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"FIRST_VALUE("})," expr ",(0,s.jsx)(n.code,{children:") OVER ( [PARTITION BY"})," expr ",(0,s.jsx)(n.code,{children:"] ORDER BY"})," expr ",(0,s.jsx)(n.code,{children:"[ROWS|RANGE"})," frame_expr ",(0,s.jsx)(n.code,{children:"] )"})]}),(0,s.jsx)(n.td,{children:"Returns the first value in an ordered set of values."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"lag(*expr* [,*offset*] [,*default*])"})}),(0,s.jsxs)(n.td,{children:["same as input ",(0,s.jsx)(n.em,{children:"expr"})," type"]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"LAG("})," ",(0,s.jsx)(n.em,{children:"expr"})," ",(0,s.jsx)(n.code,{children:"[,"})," ",(0,s.jsx)(n.em,{children:"offset"})," ",(0,s.jsx)(n.code,{children:"] [,"})," ",(0,s.jsx)(n.em,{children:"default"})," ",(0,s.jsx)(n.code,{children:"]) OVER ( [PARTITION BY"})," ",(0,s.jsx)(n.em,{children:"expr"})," ",(0,s.jsx)(n.code,{children:"] ORDER BY"})," ",(0,s.jsx)(n.em,{children:"expr"})," ",(0,s.jsx)(n.code,{children:")"})]}),(0,s.jsxs)(n.td,{children:["Provides access to more than one row of the same table without doing a self join. Given a series of rows returned from a query and a position of the cursor, ",(0,s.jsx)(n.code,{children:"LAG"})," provides access to a row at a given physical offset prior to that position. The default ",(0,s.jsx)(n.code,{children:"offset"})," is 1. ",(0,s.jsx)(n.em,{children:"default"})," sets the value that is returned if the offset goes beyond the scope of the window. If ",(0,s.jsx)(n.em,{children:"default"})," is not specified, the default value is null."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"last_value(*expr*)"})}),(0,s.jsxs)(n.td,{children:["same as input ",(0,s.jsx)(n.em,{children:"expr"})," type"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"LAST_VALUE(*expr*) OVER ( [PARTITION BY *expr*] ORDER BY *expr* [ROWS|RANGE *frame_expr*] )"})}),(0,s.jsx)(n.td,{children:"Returns the last value in an ordered set of values."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"lead(*expr* [,*offset*] [,*default*])"})}),(0,s.jsxs)(n.td,{children:["same as input ",(0,s.jsx)(n.em,{children:"expr"})," type"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"LEAD(*expr*[,*offset*] [,*expr**default*]) OVER ( [PARTITION BY *expr*] ORDER BY *expr* )"})}),(0,s.jsxs)(n.td,{children:["Provides access to more than one row of the same table without doing a self join. Given a series of rows returned from a query and a position of the cursor, ",(0,s.jsx)(n.code,{children:"lead"})," provides access to a row at a given physical offset after that position. If ",(0,s.jsx)(n.em,{children:"offset"})," is not specified, the default offset is 1. ",(0,s.jsx)(n.em,{children:"default"})," sets the value that is returned if the offset goes beyond the scope of the window. If ",(0,s.jsx)(n.em,{children:"default"})," is not specified, the default value is null."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ntile(*expr*)"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bigint"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"NTILE(*expr*) OVER ( [PARTITION BY *expr*] ORDER BY *expr* )"})}),(0,s.jsxs)(n.td,{children:["Divides an ordered data set into a number of buckets (as defined by ",(0,s.jsx)(n.em,{children:"expr"}),") and assigns a bucket number to each row."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"percent_rank()"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"double precision"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PERCENT_RANK () OVER ( [PARTITION BY *expr*] ORDER BY *expr*)"})}),(0,s.jsxs)(n.td,{children:["Calculates the rank of a hypothetical row ",(0,s.jsx)(n.code,{children:"R"})," minus 1, divided by 1 less than the number of rows being evaluated (within a window partition)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rank()"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bigint"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RANK () OVER ( [PARTITION BY *expr*] ORDER BY *expr*)"})}),(0,s.jsx)(n.td,{children:"Calculates the rank of a row in an ordered group of values. Rows with equal values for the ranking criteria receive the same rank. The number of tied rows are added to the rank number to calculate the next rank value. Ranks may not be consecutive numbers in this case."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"row_number()"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"bigint"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ROW_NUMBER () OVER ( [PARTITION BY *expr*] ORDER BY *expr*)"})}),(0,s.jsx)(n.td,{children:"Assigns a unique number to each row to which it is applied (either each row in a window partition or each row of the query)."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(67294);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);