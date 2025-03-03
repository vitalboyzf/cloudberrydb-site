"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8663],{42895:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(85893),i=n(11151);const r={title:"SET"},a="SET",o={id:"sql-stmts/set",title:"SET",description:"Changes the value of a run-time Cloudberry Database configuration parameter.",source:"@site/docs/sql-stmts/set.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/set",permalink:"/docs/sql-stmts/set",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/set.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"SET"},sidebar:"docsbars",previous:{title:"SET TRANSACTION",permalink:"/docs/sql-stmts/set-transaction"},next:{title:"SHOW",permalink:"/docs/sql-stmts/show"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"set",children:"SET"}),"\n",(0,t.jsx)(s.p,{children:"Changes the value of a run-time Cloudberry Database configuration parameter."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SET [ SESSION | LOCAL ] <configuration_parameter> { TO | = } { <value> | '<value>' | DEFAULT }\n\nSET [SESSION | LOCAL] TIME ZONE { <value> | '<value>' |  LOCAL | DEFAULT }\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"SET"})," command changes server configuration parameters. Any configuration parameter classified as a session parameter can be changed on-the-fly with ",(0,t.jsx)(s.code,{children:"SET"}),". (Some require superuser privileges to change, and others cannot be changed after server or session start.) ",(0,t.jsx)(s.code,{children:"SET"})," affects only the value used by the current session."]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"SET"})," or ",(0,t.jsx)(s.code,{children:"SET SESSION"})," is issued within a transaction that is later cancelled, the effects of the ",(0,t.jsx)(s.code,{children:"SET"})," command disappear when the transaction is rolled back. Once the surrounding transaction is committed, the effects will persist until the end of the session, unless overridden by another ",(0,t.jsx)(s.code,{children:"SET"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The effects of ",(0,t.jsx)(s.code,{children:"SET LOCAL"})," last only till the end of the current transaction, whether committed or not. A special case is ",(0,t.jsx)(s.code,{children:"SET"})," followed by ",(0,t.jsx)(s.code,{children:"SET LOCAL"})," within a single transaction: the ",(0,t.jsx)(s.code,{children:"SET LOCAL"})," value will be seen until the end of the transaction, but afterwards (if the transaction is committed) the ",(0,t.jsx)(s.code,{children:"SET"})," value will take effect."]}),"\n",(0,t.jsxs)(s.p,{children:["The effects of ",(0,t.jsx)(s.code,{children:"SET"})," or ",(0,t.jsx)(s.code,{children:"SET LOCAL"})," are also canceled by rolling back to a savepoint that is earlier than the command."]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"SET LOCAL"})," is used within a function that includes a ",(0,t.jsx)(s.code,{children:"SET"})," option for the same configuration parameter (see ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),"), the effects of the ",(0,t.jsx)(s.code,{children:"SET LOCAL"})," command disappear at function exit; the value in effect when the function was called is restored anyway. This allows ",(0,t.jsx)(s.code,{children:"SET LOCAL"})," to be used for dynamic or repeated changes of a parameter within a function, while retaining the convenience of using the ",(0,t.jsx)(s.code,{children:"SET"})," option to save and restore the caller's value. Note that a regular ",(0,t.jsx)(s.code,{children:"SET"})," command overrides any surrounding function's ",(0,t.jsx)(s.code,{children:"SET"})," option; its effects persist unless rolled back."]}),"\n",(0,t.jsx)(s.p,{children:"See Server Configuration Parameters for information about server parameters."}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"SESSION"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies that the command takes effect for the current session. This is the default if neither ",(0,t.jsx)(s.code,{children:"SESSION"})," nor ",(0,t.jsx)(s.code,{children:"LOCAL"})," appears."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"LOCAL"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies that the command takes effect for only the current transaction. After ",(0,t.jsx)(s.code,{children:"COMMIT"})," or ",(0,t.jsx)(s.code,{children:"ROLLBACK"}),", the session-level setting takes effect again. Issuing this outside of a transaction block emits a warning and otherwise has no effect."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"configuration_parameter"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of a settable Cloudberry Database run-time configuration parameter. Only parameters classified as ",(0,t.jsx)(s.em,{children:"session"})," can be changed with ",(0,t.jsx)(s.code,{children:"SET"}),". See Server Configuration Parameters for details."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"value"})})}),"\n",(0,t.jsxs)(s.p,{children:["New value of the parameter. Values can be specified as string constants, identifiers, numbers, or comma-separated lists of these, as appropriate for the particular parameter. ",(0,t.jsx)(s.code,{children:"DEFAULT"})," can be used to specify resetting the parameter to its default value (that is, whatever value it would have had if no ",(0,t.jsx)(s.code,{children:"SET"})," had been issued in the current session). If specifying memory sizing or time units, enclose the value in single quotes."]}),"\n",(0,t.jsxs)(s.p,{children:["There are a few configuration parameters that can only be adjusted using the ",(0,t.jsx)(s.code,{children:"SET"})," command or that have a special syntax:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"SCHEMA"})})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"SET SCHEMA '<value>'"})," is an alias for ",(0,t.jsx)(s.code,{children:"SET <search_path> TO <value>"}),". Only one schema may be specified using this syntax."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"NAMES"})})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"SET NAMES <value>"})," is an alias for ",(0,t.jsx)(s.code,{children:"SET client_encoding TO <value>"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"SEED"})})}),"\n",(0,t.jsxs)(s.p,{children:["Sets the internal seed for the random number generator (the function ",(0,t.jsx)(s.code,{children:"random()"}),"). Allowed values are floating-point numbers between -1 and 1 inclusive."]}),"\n",(0,t.jsxs)(s.p,{children:["You can also set the seed by invoking the ",(0,t.jsx)(s.code,{children:"setseed()"})," function:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT setseed(value);\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"TIME ZONE"})})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"SET TIME ZONE <value>"})," is an alias for ",(0,t.jsx)(s.code,{children:"SET timezone TO <value>"}),". The syntax ",(0,t.jsx)(s.code,{children:"SET TIME ZONE"})," allows special syntax for the time zone specification. Examples of valid values follow:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"'PST8PDT'"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"'Europe/Rome'"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"-7"})," (time zone 7 hours west from UTC)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"INTERVAL '-08:00' HOUR TO MINUTE"})," (time zone 8 hours west from UTC)."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"LOCAL"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"DEFAULT"})})]}),"\n",(0,t.jsx)(s.p,{children:"Set the time zone to your local time zone (that is, server's default value of timezone)."}),"\n",(0,t.jsxs)(s.p,{children:["See the ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/datatype-datetime.html#DATATYPE-TIMEZONES",children:"Time Zones"})," section of the PostgreSQL documentation for more information about time zones in Cloudberry Database."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"Set the schema search path:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SET search_path TO my_schema, public;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Increase the segment host memory per query to 200 MB:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SET statement_mem TO '200MB';\n"})}),"\n",(0,t.jsx)(s.p,{children:'Set the style of date to traditional POSTGRES with "day before month" input convention:'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SET datestyle TO postgres, dmy;\n"})}),"\n",(0,t.jsx)(s.p,{children:"Set the time zone for San Mateo, California (Pacific Time):"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SET TIME ZONE 'PST8PDT';\n"})}),"\n",(0,t.jsx)(s.p,{children:"Set the time zone for Italy:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SET TIME ZONE 'Europe/Rome'; \n"})}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"SET TIME ZONE"})," extends syntax defined in the SQL standard. The standard allows only numeric time zone offsets while Cloudberry Database allows more flexible time-zone specifications. All other ",(0,t.jsx)(s.code,{children:"SET"})," features are Cloudberry Database extensions."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/sql-stmts/reset",children:"RESET"}),", ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/show",children:"SHOW"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var t=n(67294);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);