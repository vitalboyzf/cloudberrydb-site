"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4128],{61512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(85893),o=t(11151);const i={title:"ALTER COLLATION"},l="ALTER COLLATION",a={id:"sql-stmts/alter-collation",title:"ALTER COLLATION",description:"Changes the definition of a collation.",source:"@site/docs/sql-stmts/alter-collation.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-collation",permalink:"/docs/sql-stmts/alter-collation",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-collation.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"ALTER COLLATION"},sidebar:"docsbars",previous:{title:"ALTER AGGREGATE",permalink:"/docs/sql-stmts/alter-aggregate"},next:{title:"ALTER CONVERSION",permalink:"/docs/sql-stmts/alter-conversion"}},r={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-collation",children:"ALTER COLLATION"}),"\n",(0,s.jsx)(n.p,{children:"Changes the definition of a collation."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER COLLATION <name> REFRESH VERSION\n\nALTER COLLATION <name> RENAME TO <new_name>\nALTER COLLATION <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\nALTER COLLATION <name> SET SCHEMA <new_schema>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER COLLATION"})," changes the definition of a collation."]}),"\n",(0,s.jsxs)(n.p,{children:["You must own the collation to use ",(0,s.jsx)(n.code,{children:"ALTER COLLATION"}),". To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the collation's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the collation. However, a superuser can alter ownership of any collation anyway.)"]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing collation."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The new name of the collation."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,s.jsx)(n.p,{children:"The new owner of the collation."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,s.jsx)(n.p,{children:"The new schema for the collation."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"REFRESH VERSION"})})}),"\n",(0,s.jsxs)(n.p,{children:["Update the collation's version. See the ",(0,s.jsx)(n.a,{href:"#notes",children:"Notes"})," below."]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.p,{children:"When using collations provided by the ICU library, the ICU-specific version of the collator is recorded in the system catalog when the collation object is created. When the collation is used, the current version is checked against the recorded version, and a warning is issued when there is a mismatch, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'WARNING: collation "xx-x-icu" has version mismatch\nDETAIL: The collation in the database was created using version 1.2.3.4, but the operating system provides version 2.3.4.5.\nHINT: Rebuild all objects affected by this collation and run ALTER COLLATION pg_catalog."xx-x-icu" REFRESH VERSION, or build PostgreSQL with the right library version.\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A change in collation definitions can lead to corrupt indexes and other problems because the database system relies on stored objects having a certain sort order. Generally, this should be avoided, but it can happen in legitimate circumstances, such as when using ",(0,s.jsx)(n.code,{children:"pg_upgrade"})," to upgrade to server binaries linked with a newer version of ICU. When this happens, all objects depending on the collation should be rebuilt, for example, using ",(0,s.jsx)(n.code,{children:"REINDEX"}),". When that is done, the collation version can be refreshed using the command ",(0,s.jsx)(n.code,{children:"ALTER COLLATION ... REFRESH VERSION"}),". This will update the system catalog to record the current collator version and will make the warning go away. Note that this does not actually check whether all affected objects have been rebuilt correctly."]}),"\n",(0,s.jsx)(n.p,{children:"The following query can be used to identify all collations in the current database that need to be refreshed and the objects that depend on them:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SELECT pg_describe_object(refclassid, refobjid, refobjsubid) AS "Collation",\n       pg_describe_object(classid, objid, objsubid) AS "Object"\n  FROM pg_depend d JOIN pg_collation c\n       ON refclassid = \'pg_collation\'::regclass AND refobjid = c.oid\n  WHERE c.collversion <> pg_collation_actual_version(c.oid)\n  ORDER BY 1, 2;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["To rename the collation de_DE to ",(0,s.jsx)(n.code,{children:"german"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER COLLATION "de_DE" RENAME TO german;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To change the owner of the collation ",(0,s.jsx)(n.code,{children:"en_US"})," to ",(0,s.jsx)(n.code,{children:"joe"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER COLLATION "en_US" OWNER TO joe;\n'})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["There is no ",(0,s.jsx)(n.code,{children:"ALTER COLLATION"})," statement in the SQL standard."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-collation",children:"CREATE COLLATION"}),", ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/drop-collation",children:"DROP COLLATION"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(67294);const o={},i=s.createContext(o);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);