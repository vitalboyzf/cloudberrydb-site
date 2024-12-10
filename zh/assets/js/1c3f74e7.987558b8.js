"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4742],{8902:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(85893),n=s(11151);const r={title:"PREPARE"},i="PREPARE",o={id:"sql-stmts/prepare",title:"PREPARE",description:"Prepares a statement for execution.",source:"@site/docs/sql-stmts/prepare.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/prepare",permalink:"/zh/docs/sql-stmts/prepare",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/prepare.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"PREPARE"},sidebar:"docsbars",previous:{title:"NOTIFY",permalink:"/zh/docs/sql-stmts/notify"},next:{title:"REASSIGN OWNED",permalink:"/zh/docs/sql-stmts/reassign-owned"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"prepare",children:"PREPARE"}),"\n",(0,a.jsx)(t.p,{children:"Prepares a statement for execution."}),"\n",(0,a.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"PREPARE <name> [ (<data_type> [, ...] ) ] AS <statement>\n"})}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"PREPARE"})," creates a prepared statement. A prepared statement is a server-side object that can be used to optimize performance. When the ",(0,a.jsx)(t.code,{children:"PREPARE"})," statement is run, the specified statement is parsed, analyzed, and rewritten. When an ",(0,a.jsx)(t.code,{children:"EXECUTE"})," command is subsequently issued, the prepared statement is planned and run. This division of labor avoids repetitive parse analysis work, while allowing the execution plan to depend on the specific parameter values supplied."]}),"\n",(0,a.jsxs)(t.p,{children:["Prepared statements can take parameters, values that are substituted into the statement when it is run. When creating the prepared statement, refer to parameters by position, using ",(0,a.jsx)(t.code,{children:"$1"}),", ",(0,a.jsx)(t.code,{children:"$2"}),", etc. You can optionally specify a corresponding list of parameter data types. When a parameter's data type is not specified or is declared as ",(0,a.jsx)(t.code,{children:"unknown"}),", the type is inferred from the context in which the parameter is first referenced (if possible). When running the statement, specify the actual values for these parameters in the ",(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/execute",children:"EXECUTE"})," statement."]}),"\n",(0,a.jsxs)(t.p,{children:["Prepared statements last only for the duration of the current database session. When the session ends, the prepared statement is forgotten, so it must be recreated before being used again. This also means that a single prepared statement cannot be used by multiple simultaneous database clients; however, each client can create their own prepared statement to use. You can manually clean up a prepared statement using the ",(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/deallocate",children:"DEALLOCATE"})," command."]}),"\n",(0,a.jsx)(t.p,{children:"Prepared statements have the largest performance advantage when a single session is being used to run a large number of similar statements. The performance difference will be particularly significant if the statements are complex to plan or rewrite, for example, if the query involves a join of many tables or requires the application of several rules. If the statement is relatively simple to plan and rewrite but relatively expensive to run, the performance advantage of prepared statements will be less noticeable."}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"name"})})}),"\n",(0,a.jsx)(t.p,{children:"An arbitrary name given to this particular prepared statement. It must be unique within a single session and is subsequently used to run or deallocate a previously prepared statement."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"data_type"})})}),"\n",(0,a.jsxs)(t.p,{children:["The data type of a parameter to the prepared statement. If the data type of a particular parameter is unspecified or is specified as ",(0,a.jsx)(t.code,{children:"unknown"}),", it will be inferred from the context in which the parameter is first referenced. To refer to the parameters in the prepared statement itself, use ",(0,a.jsx)(t.code,{children:"$1"}),", ",(0,a.jsx)(t.code,{children:"$2"}),", etc."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"statement"})})}),"\n",(0,a.jsxs)(t.p,{children:["Any ",(0,a.jsx)(t.code,{children:"SELECT"}),", ",(0,a.jsx)(t.code,{children:"INSERT"}),", ",(0,a.jsx)(t.code,{children:"UPDATE"}),", ",(0,a.jsx)(t.code,{children:"DELETE"}),", or ",(0,a.jsx)(t.code,{children:"VALUES"})," statement."]}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(t.p,{children:["A prepared statement can be run with either a ",(0,a.jsx)(t.em,{children:"generic plan"})," or a ",(0,a.jsx)(t.em,{children:"custom plan"}),". A generic plan is the same across all executions, while a custom plan is generated for a specific execution using the parameter values given in that call. Use of a generic plan avoids planning overhead, but in some situations a custom plan will be much more efficient to run because the planner can make use of knowledge of the parameter values. If the prepared statement has no parameters, a generic plan is always used."]}),"\n",(0,a.jsxs)(t.p,{children:["By default (with the default value, ",(0,a.jsx)(t.code,{children:"auto"}),", for the server configuration parameter ",(0,a.jsx)(t.code,{children:"plan_cache_mode"}),"), the server automatically chooses whether to use a generic or custom plan for a prepared statement that has parameters. The current rule for this is that the first five executions are done with custom plans and then Cloudberry Database calculates the average estimated cost of those plans. Then a generic plan is created and its estimated cost is compared to the average custom-plan cost. Subsequent executions use the generic plan if its cost is not so much higher than the average custom-plan cost as to make repeated replanning seem preferable."]}),"\n",(0,a.jsxs)(t.p,{children:["You can override this heuristic, forcing the server to use either generic or custom plans, by setting ",(0,a.jsx)(t.code,{children:"plan_cache_mode"})," to ",(0,a.jsx)(t.code,{children:"force_generic_plan"})," or ",(0,a.jsx)(t.code,{children:"force_custom_plan"})," respectively. This setting is primarily useful if the generic plan's cost estimate is badly off for some reason, allowing it to be chosen even though its actual cost is much more than that of a custom plan."]}),"\n",(0,a.jsxs)(t.p,{children:["To examine the query plan Cloudberry Database is using for a prepared statement, use ",(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/explain",children:"EXPLAIN"}),", for example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"EXPLAIN EXECUTE <name>(<parameter_values>);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If a generic plan is in use, it will contain parameter symbols ",(0,a.jsx)(t.code,{children:"$n"}),", while a custom plan will have the supplied parameter values substituted into it."]}),"\n",(0,a.jsxs)(t.p,{children:["For more information on query planning and the statistics collected by Cloudberry Database for that purpose, see the ",(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/analyze",children:"ANALYZE"})," documentation."]}),"\n",(0,a.jsxs)(t.p,{children:["Although the main point of a prepared statement is to avoid repeated parse analysis and planning of the statement, Cloudberry Database will force re-analysis and re-planning of the statement before using it whenever database objects used in the statement have undergone definitional (DDL) changes since the previous use of the prepared statement. Also, if the value of ",(0,a.jsx)(t.code,{children:"search_path"})," changes from one use to the next, the statement will be re-parsed using the new ",(0,a.jsx)(t.code,{children:"search_path"}),". These rules make use of a prepared statement semantically almost equivalent to re-submitting the same query text over and over, but with a performance benefit if no object definitions are changed, especially if the best plan remains the same across uses. An example of a case where the semantic equivalence is not perfect is that if the statement refers to a table by an unqualified name, and then a new table of the same name is created in a schema appearing earlier in the ",(0,a.jsx)(t.code,{children:"search_path"}),", no automatic re-parse will occur since no object used in the statement changed. However, if some other change forces a re-parse, the new table will be referenced in subsequent uses."]}),"\n",(0,a.jsx)(t.p,{children:"You can see all prepared statements available in the session by querying the pg_prepared_statements system view."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.p,{children:["Create a prepared statement for an ",(0,a.jsx)(t.code,{children:"INSERT"})," statement, and then run it:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"PREPARE fooplan (int, text, bool, numeric) AS\n    INSERT INTO foo VALUES($1, $2, $3, $4);\nEXECUTE fooplan(1, 'Hunter Valley', 't', 200.00);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Create a prepared statement for a ",(0,a.jsx)(t.code,{children:"SELECT"})," statement, and then run it. Note that the data type of the second parameter is not specified, so it is inferred from the context in which ",(0,a.jsx)(t.code,{children:"$2"})," is used:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"PREPARE usrrptplan (int) AS\n    SELECT * FROM users u, logs l WHERE u.usrid=$1 AND u.usrid=l.usrid\n    AND l.date = $2;\nEXECUTE usrrptplan(1, current_date);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,a.jsxs)(t.p,{children:["The SQL standard includes a ",(0,a.jsx)(t.code,{children:"PREPARE"})," statement, but it can only be used in embedded SQL, and it uses a different syntax."]}),"\n",(0,a.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/execute",children:"EXECUTE"}),", ",(0,a.jsx)(t.a,{href:"/zh/docs/sql-stmts/deallocate",children:"DEALLOCATE"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var a=s(67294);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);