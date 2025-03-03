"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2665],{14328:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var s=t(85893),r=t(11151);const n={title:"Configure Database System",toc_max_heading_level:5},o="Configure Database System",i={id:"sys-admin/configure-database-system",title:"Configure Database System",description:'Server configuration parameters affect the behavior of Cloudberry Database. They are part of the PostgreSQL "Grand Unified Configuration" system, so they are sometimes called "GUCs". Most of the Cloudberry Database server configuration parameters are the same as the PostgreSQL configuration parameters, but some are specific to Cloudberry Database.',source:"@site/docs/sys-admin/configure-database-system.md",sourceDirName:"sys-admin",slug:"/sys-admin/configure-database-system",permalink:"/docs/sys-admin/configure-database-system",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-admin/configure-database-system.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"Configure Database System",toc_max_heading_level:5},sidebar:"docsbars",previous:{title:"Perform Incremental Backup and Restore",permalink:"/docs/sys-admin/backup-and-restore/perform-incremental-backup-and-restore"},next:{title:"Check Database System",permalink:"/docs/sys-admin/check-database-system"}},l={},c=[{value:"Coordinator and local parameters",id:"coordinator-and-local-parameters",level:2},{value:"Set configuration parameters",id:"set-configuration-parameters",level:2},{value:"Set a local configuration parameter",id:"set-a-local-configuration-parameter",level:3},{value:"Set a coordinator configuration parameter",id:"set-a-coordinator-configuration-parameter",level:3},{value:"Set parameters at the system level",id:"set-parameters-at-the-system-level",level:4},{value:"Set parameters at the database level",id:"set-parameters-at-the-database-level",level:4},{value:"Set parameters at the row level",id:"set-parameters-at-the-row-level",level:4},{value:"Set parameters in a session level",id:"set-parameters-in-a-session-level",level:4},{value:"View server configuration parameter settings",id:"view-server-configuration-parameter-settings",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"configure-database-system",children:"Configure Database System"}),"\n",(0,s.jsx)(a.p,{children:'Server configuration parameters affect the behavior of Cloudberry Database. They are part of the PostgreSQL "Grand Unified Configuration" system, so they are sometimes called "GUCs". Most of the Cloudberry Database server configuration parameters are the same as the PostgreSQL configuration parameters, but some are specific to Cloudberry Database.'}),"\n",(0,s.jsx)(a.h2,{id:"coordinator-and-local-parameters",children:"Coordinator and local parameters"}),"\n",(0,s.jsxs)(a.p,{children:["Server configuration files contain parameters that configure server behavior. The Cloudberry Database configuration file, ",(0,s.jsx)(a.code,{children:"postgresql.conf"}),", resides in the data directory of the database instance."]}),"\n",(0,s.jsxs)(a.p,{children:["The coordinator and each segment instance have their own ",(0,s.jsx)(a.code,{children:"postgresql.conf"})," file. Some parameters are local: each segment instance examines its ",(0,s.jsx)(a.code,{children:"postgresql.conf"})," file to get the value of that parameter. Set local parameters on the coordinator and on each segment instance."]}),"\n",(0,s.jsx)(a.p,{children:"Other parameters are coordinator parameters that you set on the coordinator instance. The value is passed down to (or in some cases ignored by) the segment instances at query run time."}),"\n",(0,s.jsx)(a.h2,{id:"set-configuration-parameters",children:"Set configuration parameters"}),"\n",(0,s.jsxs)(a.p,{children:["Many configuration parameters limit who can change them and where or when they can be set. For example, to change certain parameters, you must be a Cloudberry Database superuser. Other parameters can be set only at the system level in the ",(0,s.jsx)(a.code,{children:"postgresql.conf"})," file or require a system restart to take effect."]}),"\n",(0,s.jsx)(a.p,{children:"Many configuration parameters are session parameters. You can set session parameters at the system level, the database level, the role level or the session level. Database users can change most session parameters within their session, but some require superuser permissions."}),"\n",(0,s.jsx)(a.h3,{id:"set-a-local-configuration-parameter",children:"Set a local configuration parameter"}),"\n",(0,s.jsxs)(a.p,{children:["To change a local configuration parameter across multiple segments, update the parameter in the ",(0,s.jsx)(a.code,{children:"postgresql.conf"})," file of each targeted segment, both primary and mirror. Use the ",(0,s.jsx)(a.code,{children:"gpconfig"})," utility to set a parameter in all Cloudberry Database ",(0,s.jsx)(a.code,{children:"postgresql.conf"})," files. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ gpconfig -c gp_vmem_protect_limit -v 4096\n"})}),"\n",(0,s.jsx)(a.p,{children:"Restart Cloudberry Database to make the configuration changes effective:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ gpstop -r\n"})}),"\n",(0,s.jsx)(a.h3,{id:"set-a-coordinator-configuration-parameter",children:"Set a coordinator configuration parameter"}),"\n",(0,s.jsx)(a.p,{children:"To set a coordinator configuration parameter, set it at the Cloudberry Database coordinator instance. If it is also a session parameter, you can set the parameter for a particular database, role or session. If a parameter is set at multiple levels, the most granular level takes precedence. For example, session overrides role, role overrides database, and database overrides system."}),"\n",(0,s.jsx)(a.h4,{id:"set-parameters-at-the-system-level",children:"Set parameters at the system level"}),"\n",(0,s.jsxs)(a.p,{children:["Coordinator parameter settings in the coordinator ",(0,s.jsx)(a.code,{children:"postgresql.conf"})," file are the system-wide default. To set a coordinator parameter:"]}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Edit the ",(0,s.jsx)(a.code,{children:"$COORDINATOR_DATA_DIRECTORY/postgresql.conf"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Find the parameter to set, uncomment it (remove the preceding ",(0,s.jsx)(a.code,{children:"#"})," character), and type the desired value."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Save and close the file."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["For session parameters that do not require a server restart, upload the ",(0,s.jsx)(a.code,{children:"postgresql.conf"})," changes as follows:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ gpstop -u\n"})}),"\n",(0,s.jsx)(a.p,{children:"For parameter changes that require a server restart, restart Cloudberry Database as follows:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ gpstop -r\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"set-parameters-at-the-database-level",children:"Set parameters at the database level"}),"\n",(0,s.jsxs)(a.p,{children:["Use ",(0,s.jsx)(a.code,{children:"ALTER DATABASE"})," to set parameters at the database level. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"ALTER DATABASE mydatabase SET search_path TO myschema;\n"})}),"\n",(0,s.jsx)(a.p,{children:"When you set a session parameter at the database level, every session that connects to that database uses that parameter setting. Settings at the database level override settings at the system level."}),"\n",(0,s.jsx)(a.h4,{id:"set-parameters-at-the-row-level",children:"Set parameters at the row level"}),"\n",(0,s.jsxs)(a.p,{children:["Use ",(0,s.jsx)(a.code,{children:"ALTER ROLE"})," to set a parameter at the role level. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"ALTER ROLE bob SET search_path TO bobschema;\n"})}),"\n",(0,s.jsx)(a.p,{children:"When you set a session parameter at the role level, every session initiated by that role uses that parameter setting. Settings at the role level override settings at the database level."}),"\n",(0,s.jsx)(a.h4,{id:"set-parameters-in-a-session-level",children:"Set parameters in a session level"}),"\n",(0,s.jsxs)(a.p,{children:["Any session parameter can be set in an active database session using the ",(0,s.jsx)(a.code,{children:"SET"})," command. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SET statement_mem TO '200MB';\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The parameter setting is valid for the rest of that session or until you issue a ",(0,s.jsx)(a.code,{children:"RESET "}),"command. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"RESET statement_mem;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Settings at the session level override those at the role level."}),"\n",(0,s.jsx)(a.h2,{id:"view-server-configuration-parameter-settings",children:"View server configuration parameter settings"}),"\n",(0,s.jsxs)(a.p,{children:["The SQL command ",(0,s.jsx)(a.code,{children:"SHOW"})," allows you to see the current server configuration parameter settings. For example, to see the settings for all parameters:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ psql -c 'SHOW ALL;'\n"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"SHOW"})," lists the settings for the coordinator instance only. To see the value of a particular parameter across the entire system (and all segments), use the ",(0,s.jsx)(a.code,{children:"gpconfig"})," utility. For example:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"$ gpconfig --show max_connections\n"})})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>o});var s=t(67294);const r={},n=s.createContext(r);function o(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);