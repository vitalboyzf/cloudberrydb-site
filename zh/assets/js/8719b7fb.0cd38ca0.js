"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3080],{47082:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var t=s(85893),i=s(11151);const o={title:"CREATE COLLATION"},l="CREATE COLLATION",c={id:"sql-stmts/create-collation",title:"CREATE COLLATION",description:"Defines a new collation.",source:"@site/docs/sql-stmts/create-collation.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-collation",permalink:"/zh/docs/sql-stmts/create-collation",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-collation.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"CREATE COLLATION"},sidebar:"docsbars",previous:{title:"CREATE CAST",permalink:"/zh/docs/sql-stmts/create-cast"},next:{title:"CREATE CONVERSION",permalink:"/zh/docs/sql-stmts/create-conversion"}},a={},r=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-collation",children:"CREATE COLLATION"}),"\n",(0,t.jsx)(n.p,{children:"Defines a new collation."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE COLLATION [ IF NOT EXISTS ] <name> (\n    [ LOCALE = <locale>, ]    \n    [ LC_COLLATE = <lc_collate>, ]    \n    [ LC_CTYPE = <lc_ctype>, ]\n    [ PROVIDER = <provider>, ]\n    [ DETERMINISTIC = <boolean>, ]\n    [ VERSION = <version> ])\n\nCREATE COLLATION [ IF NOT EXISTS ] <name> FROM <existing_collation>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CREATE COLLATION"})," defines a new collation using the specified operating system locale settings, or by copying an existing collation."]}),"\n",(0,t.jsxs)(n.p,{children:["To be able to create a collation, you must have ",(0,t.jsx)(n.code,{children:"CREATE"})," privilege on the destination schema."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IF NOT EXISTS"})})}),"\n",(0,t.jsx)(n.p,{children:"Do not throw an error if a collation with the same name already exists. A notice is issued in this case. Note that there is no guarantee that the existing collation is anything like the one that would have been created."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})})}),"\n",(0,t.jsx)(n.p,{children:"The name of the collation. The collation name can be schema-qualified. If it is not, the collation is defined in the current schema. The collation name must be unique within that schema. (The system catalogs can contain collations with the same name for other encodings, but these are ignored if the database encoding does not match.)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"locale"})})}),"\n",(0,t.jsxs)(n.p,{children:["This is a shortcut for setting ",(0,t.jsx)(n.code,{children:"LC_COLLATE"})," and ",(0,t.jsx)(n.code,{children:"LC_CTYPE"})," at once. If you specify this, you cannot specify either of those parameters."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"lc_collate"})})}),"\n",(0,t.jsxs)(n.p,{children:["Use the specified operating system locale for the ",(0,t.jsx)(n.code,{children:"LC_COLLATE"})," locale category."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"lc_ctype"})})}),"\n",(0,t.jsxs)(n.p,{children:["Use the specified operating system locale for the ",(0,t.jsx)(n.code,{children:"LC_CTYPE"})," locale category."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"provider"})})}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the provider to use for locale services associated with this collation. Possible values are: ",(0,t.jsx)(n.code,{children:"icu"}),", ",(0,t.jsx)(n.code,{children:"libc"}),". ",(0,t.jsx)(n.code,{children:"libc"})," is the default. The available choices depend on the operating system and build options."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"DETERMINISTIC"})})}),"\n",(0,t.jsxs)(n.p,{children:["Specifies whether the collation should use deterministic comparisons. The default is ",(0,t.jsx)(n.code,{children:"true"}),". A deterministic comparison considers strings that are not byte-wise equal to be unequal even if they are considered logically equal by the comparison. Cloudberry Database breaks ties using a byte-wise comparison. Comparison that is not deterministic can make the collation be, say, case- or accent-insensitive. For that, you need to choose an appropriate ",(0,t.jsx)(n.code,{children:"LC_COLLATE"})," setting and set the collation to not deterministic here."]}),"\n",(0,t.jsxs)(n.p,{children:["Nondeterministic collations are only supported with the ",(0,t.jsx)(n.code,{children:"icu"})," provider."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"version"})})}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the version string to store with the collation. Normally, this should be omitted, which will cause the version to be computed from the actual version of the collation as provided by the operating system. This option is intended to be used by ",(0,t.jsx)(n.code,{children:"pg_upgrade"})," for copying the version from an existing installation."]}),"\n",(0,t.jsxs)(n.p,{children:["See also ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-collation",children:"ALTER COLLATION"})," for how to handle collation version mismatches."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"existing_collation"})})}),"\n",(0,t.jsx)(n.p,{children:"The name of an existing collation to copy. The new collation will have the same properties as the existing one, but it will be an independent object."}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CREATE COLLATION"})," takes a ",(0,t.jsx)(n.code,{children:"SHARE ROW EXCLUSIVE"})," lock, which is self-conflicting, on the ",(0,t.jsx)(n.code,{children:"pg_collation"})," system catalog, so only one ",(0,t.jsx)(n.code,{children:"CREATE COLLATION"})," command can run at a time."]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-collation",children:"DROP COLLATION"})," to remove user-defined collations."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/12/collation.html",children:"Collation Support"})," in the PostgreSQL documentation for more information about collation support in Cloudberry Database."]}),"\n",(0,t.jsxs)(n.p,{children:["When using the ",(0,t.jsx)(n.code,{children:"libc"})," collation provider, the, locale must be applicable to the current database encoding. See ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-database",children:"CREATE DATABASE"})," for the precise rules."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["To create a collation from the operating system locale ",(0,t.jsx)(n.code,{children:"fr_FR.utf8"})," (assuming the current database encoding is ",(0,t.jsx)(n.code,{children:"UTF8"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE COLLATION french (LOCALE = 'fr_FR.utf8');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To create a collation using the ",(0,t.jsx)(n.code,{children:"icu"})," provider using German phone book sort order:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE COLLATION german_phonebook (provider = icu, locale = 'de-u-co-phonebk');\n"})}),"\n",(0,t.jsx)(n.p,{children:"To create a collation from an existing collation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE COLLATION german FROM "de_DE";\n'})}),"\n",(0,t.jsx)(n.p,{children:"This can be convenient to be able to use operating-system-independent collation names in applications."}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:["There is a ",(0,t.jsx)(n.code,{children:"CREATE COLLATION"})," statement in the SQL standard, but it is limited to copying an existing collation. The syntax to create a new collation is a Cloudberry Database extension."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-collation",children:"ALTER COLLATION"}),", ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-collation",children:"DROP COLLATION"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var t=s(67294);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);