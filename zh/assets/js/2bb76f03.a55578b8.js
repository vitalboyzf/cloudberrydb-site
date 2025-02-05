"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5366],{74834:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(85893),n=t(11151);const i={title:"CREATE RESOURCE QUEUE"},o="CREATE RESOURCE QUEUE",a={id:"sql-stmts/create-resource-queue",title:"CREATE RESOURCE QUEUE",description:"Defines a new resource queue.",source:"@site/docs/sql-stmts/create-resource-queue.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-resource-queue",permalink:"/zh/docs/sql-stmts/create-resource-queue",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-resource-queue.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"2025\u5e742\u67085\u65e5",frontMatter:{title:"CREATE RESOURCE QUEUE"},sidebar:"docsbars",previous:{title:"CREATE RESOURCE GROUP",permalink:"/zh/docs/sql-stmts/create-resource-group"},next:{title:"CREATE ROLE",permalink:"/zh/docs/sql-stmts/create-role"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function u(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"create-resource-queue",children:"CREATE RESOURCE QUEUE"}),"\n",(0,r.jsx)(s.p,{children:"Defines a new resource queue."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE RESOURCE QUEUE <name> WITH (<queue_attribute>=<value> [, ... ])\n"})}),"\n",(0,r.jsx)(s.p,{children:"where queue_attribute is:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"\xa0\xa0\xa0 ACTIVE_STATEMENTS=<integer>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ MAX_COST=<float >[COST_OVERCOMMIT={TRUE|FALSE}] ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ MIN_COST=<float >]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ PRIORITY={MIN|LOW|MEDIUM|HIGH|MAX} ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ MEMORY_LIMIT='<memory_units>' ]\n\n | MAX_COST=float [ COST_OVERCOMMIT={TRUE|FALSE} ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ ACTIVE_STATEMENTS=<integer >]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ MIN_COST=<float >]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ PRIORITY={MIN|LOW|MEDIUM|HIGH|MAX} ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[ MEMORY_LIMIT='<memory_units>' ]\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["Creates a new resource queue for Cloudberry Database resource management. A resource queue must have either an ",(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," or a ",(0,r.jsx)(s.code,{children:"MAX_COST"})," value (or it can have both). Only a superuser can create a resource queue."]}),"\n",(0,r.jsxs)(s.p,{children:["Resource queues with an ",(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," threshold set a maximum limit on the number of queries that can be run by roles assigned to that queue. It controls the number of active queries that are allowed to run at the same time. The value for ",(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," should be an integer greater than 0."]}),"\n",(0,r.jsxs)(s.p,{children:["Resource queues with a ",(0,r.jsx)(s.code,{children:"MAX_COST"})," threshold set a maximum limit on the total cost of queries that can be run by roles assigned to that queue. Cost is measured in the ",(0,r.jsx)(s.em,{children:"estimated total cost"})," for the query as determined by the query planner (as shown in the ",(0,r.jsx)(s.code,{children:"EXPLAIN"})," output for a query). Therefore, an administrator must be familiar with the queries typically run on the system in order to set an appropriate cost threshold for a queue. Cost is measured in units of disk page fetches; 1.0 equals one sequential disk page read. The value for ",(0,r.jsx)(s.code,{children:"MAX_COST"})," is specified as a floating point number (for example 100.0) or can also be specified as an exponent (for example 1e+2). If a resource queue is limited based on a cost threshold, then the administrator can allow ",(0,r.jsx)(s.code,{children:"COST_OVERCOMMIT=TRUE"})," (the default). This means that a query that exceeds the allowed cost threshold will be allowed to run but only when the system is idle. If ",(0,r.jsx)(s.code,{children:"COST_OVERCOMMIT=FALSE"})," is specified, queries that exceed the cost limit will always be rejected and never allowed to run. Specifying a value for ",(0,r.jsx)(s.code,{children:"MIN_COST"})," allows the administrator to define a cost for small queries that will be exempt from resource queueing."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note"})," GPORCA and the Postgres Planner utilize different query costing models and may compute different costs for the same query. The Cloudberry Database resource queue resource management scheme neither differentiates nor aligns costs between GPORCA and the Postgres Planner; it uses the literal cost value returned from the optimizer to throttle queries."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["When resource queue-based resource management is active, use the ",(0,r.jsx)(s.code,{children:"MEMORY_LIMIT"})," and ",(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," limits for resource queues rather than configuring cost-based limits. Even when using GPORCA, Cloudberry Database may fall back to using the Postgres Planner for certain queries, so using cost-based limits can lead to unexpected results."]}),"\n",(0,r.jsxs)(s.p,{children:["If a value is not defined for ",(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," or ",(0,r.jsx)(s.code,{children:"MAX_COST"}),", it is set to ",(0,r.jsx)(s.code,{children:"-1"})," by default (meaning no limit). After defining a resource queue, you must assign roles to the queue using the ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-role",children:"ALTER ROLE"})," or ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-role",children:"CREATE ROLE"})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["You can optionally assign a ",(0,r.jsx)(s.code,{children:"PRIORITY"})," to a resource queue to control the relative share of available CPU resources used by queries associated with the queue in relation to other resource queues. If a value is not defined for ",(0,r.jsx)(s.code,{children:"PRIORITY"}),", queries associated with the queue have a default priority of ",(0,r.jsx)(s.code,{children:"MEDIUM"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Resource queues with an optional ",(0,r.jsx)(s.code,{children:"MEMORY_LIMIT"})," threshold set a maximum limit on the amount of memory that all queries submitted through a resource queue can consume on a segment host. This determines the total amount of memory that all worker processes of a query can consume on a segment host during query execution. Cloudberry Database recommends that ",(0,r.jsx)(s.code,{children:"MEMORY_LIMIT"})," be used in conjunction with ",(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," rather than with ",(0,r.jsx)(s.code,{children:"MAX_COST"}),". The default amount of memory allotted per query on statement-based queues is: ",(0,r.jsx)(s.code,{children:"MEMORY_LIMIT / ACTIVE_STATEMENTS"}),". The default amount of memory allotted per query on cost-based queues is: ",(0,r.jsx)(s.code,{children:"MEMORY_LIMIT * (query_cost / MAX_COST)"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The default memory allotment can be overridden on a per-query basis using the ",(0,r.jsx)(s.code,{children:"statement_mem"})," server configuration parameter, provided that ",(0,r.jsx)(s.code,{children:"MEMORY_LIMIT"})," or ",(0,r.jsx)(s.code,{children:"max_statement_mem"})," is not exceeded. For example, to allocate more memory to a particular query:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"=> SET statement_mem='2GB';\n=> SELECT * FROM my_big_table WHERE column='value' ORDER BY id;\n=> RESET statement_mem;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"MEMORY_LIMIT"})," value for all of your resource queues should not exceed the amount of physical memory of a segment host. If workloads are staggered over multiple queues, memory allocations can be oversubscribed. However, queries can be cancelled during execution if the segment host memory limit specified in ",(0,r.jsx)(s.code,{children:"gp_vmem_protect_limit"})," is exceeded."]}),"\n",(0,r.jsxs)(s.p,{children:["For information about ",(0,r.jsx)(s.code,{children:"statement_mem"}),", ",(0,r.jsx)(s.code,{children:"max_statement"}),", and ",(0,r.jsx)(s.code,{children:"gp_vmem_protect_limit"}),", see Server Configuration Parameters."]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"name"})})}),"\n",(0,r.jsx)(s.p,{children:"The name of the resource queue."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS integer"})})}),"\n",(0,r.jsxs)(s.p,{children:["Resource queues with an ",(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," threshold limit the number of queries that can be run by roles assigned to that queue. It controls the number of active queries that are allowed to run at the same time. The value for ",(0,r.jsx)(s.code,{children:"ACTIVE_STATEMENTS"})," should be an integer greater than 0."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"MEMORY_LIMIT 'memory_units'"})})}),"\n",(0,r.jsxs)(s.p,{children:["Sets the total memory quota for all statements submitted from users in this resource queue. Memory units can be specified in kB, MB or GB. The minimum memory quota for a resource queue is 10MB. There is no maximum, however the upper boundary at query execution time is limited by the physical memory of a segment host. The default is no limit (",(0,r.jsx)(s.code,{children:"-1"}),")."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"MAX_COST float"})})}),"\n",(0,r.jsxs)(s.p,{children:["Resource queues with a ",(0,r.jsx)(s.code,{children:"MAX_COST"})," threshold set a maximum limit on the total cost of queries that can be run by roles assigned to that queue. Cost is measured in the ",(0,r.jsx)(s.em,{children:"estimated total cost"})," for the query as determined by the Cloudberry Database query optimizer (as shown in the ",(0,r.jsx)(s.code,{children:"EXPLAIN"})," output for a query). Therefore, an administrator must be familiar with the queries typically run on the system in order to set an appropriate cost threshold for a queue. Cost is measured in units of disk page fetches; 1.0 equals one sequential disk page read. The value for ",(0,r.jsx)(s.code,{children:"MAX_COST"})," is specified as a floating point number (for example 100.0) or can also be specified as an exponent (for example 1e+2)."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"COST_OVERCOMMIT boolean"})})}),"\n",(0,r.jsxs)(s.p,{children:["If a resource queue is limited based on ",(0,r.jsx)(s.code,{children:"MAX_COST"}),", then the administrator can allow ",(0,r.jsx)(s.code,{children:"COST_OVERCOMMIT"})," (the default). This means that a query that exceeds the allowed cost threshold will be allowed to run but only when the system is idle. If ",(0,r.jsx)(s.code,{children:"COST_OVERCOMMIT=FALSE"}),"is specified, queries that exceed the cost limit will always be rejected and never allowed to run."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"MIN_COST float"})})}),"\n",(0,r.jsxs)(s.p,{children:["The minimum query cost limit of what is considered a small query. Queries with a cost under this limit will not be queued and run immediately. Cost is measured in the ",(0,r.jsx)(s.em,{children:"estimated total cost"})," for the query as determined by the query planner (as shown in the ",(0,r.jsx)(s.code,{children:"EXPLAIN"})," output for a query). Therefore, an administrator must be familiar with the queries typically run on the system in order to set an appropriate cost for what is considered a small query. Cost is measured in units of disk page fetches; 1.0 equals one sequential disk page read. The value for ",(0,r.jsx)(s.code,{children:"MIN_COST"}),"is specified as a floating point number (for example 100.0) or can also be specified as an exponent (for example 1e+2)."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"PRIORITY={MIN|LOW|MEDIUM|HIGH|MAX}"})})}),"\n",(0,r.jsxs)(s.p,{children:["Sets the priority of queries associated with a resource queue. Queries or statements in queues with higher priority levels will receive a larger share of available CPU resources in case of contention. Queries in low-priority queues may be delayed while higher priority queries are run. If no priority is specified, queries associated with the queue have a priority of ",(0,r.jsx)(s.code,{children:"MEDIUM"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.code,{children:"gp_toolkit.gp_resqueue_status"})," system view to see the limit settings and current status of a resource queue:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT * from gp_toolkit.gp_resqueue_status WHERE \n  rsqname='queue_name';\n"})}),"\n",(0,r.jsxs)(s.p,{children:["There is also another system view named ",(0,r.jsx)(s.code,{children:"pg_stat_resqueue"})," which shows statistical metrics for a resource queue over time. To use this view, however, you must enable the ",(0,r.jsx)(s.code,{children:"stats_queue_level"}),' server configuration parameter. See "Managing Workload and Resources" in the ',(0,r.jsx)(s.em,{children:"Cloudberry Database Administrator Guide"})," for more information about using resource queues."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"CREATE RESOURCE QUEUE"})," cannot be run within a transaction."]}),"\n",(0,r.jsxs)(s.p,{children:["Also, an SQL statement that is run during the execution time of an ",(0,r.jsx)(s.code,{children:"EXPLAIN ANALYZE"})," command is excluded from resource queues."]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.p,{children:"Create a resource queue with an active query limit of 20:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE RESOURCE QUEUE myqueue WITH (ACTIVE_STATEMENTS=20);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create a resource queue with an active query limit of 20 and a total memory limit of 2000MB (each query will be allocated 100MB of segment host memory at execution time):"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE RESOURCE QUEUE myqueue WITH (ACTIVE_STATEMENTS=20, \n  MEMORY_LIMIT='2000MB');\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create a resource queue with a query cost limit of 3000.0:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE RESOURCE QUEUE myqueue WITH (MAX_COST=3000.0);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create a resource queue with a query cost limit of 310 (or 30000000000.0) and do not allow overcommit. Allow small queries with a cost under 500 to run immediately:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE RESOURCE QUEUE myqueue WITH (MAX_COST=3e+10, \n  COST_OVERCOMMIT=FALSE, MIN_COST=500.0);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create a resource queue with both an active query limit and a query cost limit:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE RESOURCE QUEUE myqueue WITH (ACTIVE_STATEMENTS=30, \n  MAX_COST=5000.00);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create a resource queue with an active query limit of 5 and a maximum priority setting:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE RESOURCE QUEUE myqueue WITH (ACTIVE_STATEMENTS=5, \n  PRIORITY=MAX);\n"})}),"\n",(0,r.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"CREATE RESOURCE QUEUE"})," is a Cloudberry Database extension. There is no provision for resource queues or resource management in the SQL standard."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-role",children:"ALTER ROLE"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-role",children:"CREATE ROLE"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-resource-queue",children:"ALTER RESOURCE QUEUE"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/drop-resource-queue",children:"DROP RESOURCE QUEUE"})]})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var r=t(67294);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);