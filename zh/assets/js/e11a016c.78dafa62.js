"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1392],{92570:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var n=t(85893),i=t(11151);const l={title:"gpdeletesystem"},r="gpdeletesystem",d={id:"sys-utilities/gpdeletesystem",title:"gpdeletesystem",description:"Deletes a Cloudberry Database system that was initialized using gpinitsystem.",source:"@site/docs/sys-utilities/gpdeletesystem.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpdeletesystem",permalink:"/zh/docs/sys-utilities/gpdeletesystem",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpdeletesystem.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"2025\u5e742\u67085\u65e5",frontMatter:{title:"gpdeletesystem"},sidebar:"docsbars",previous:{title:"gpconfig",permalink:"/zh/docs/sys-utilities/gpconfig"},next:{title:"gpdemo",permalink:"/zh/docs/sys-utilities/gpdemo"}},o={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"gpdeletesystem",children:"gpdeletesystem"}),"\n",(0,n.jsxs)(s.p,{children:["Deletes a Cloudberry Database system that was initialized using ",(0,n.jsx)(s.code,{children:"gpinitsystem"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpdeletesystem [-d <coordinator_data_directory>] [-B <parallel_processes>] \n   [-f] [-l <logfile_directory>] [-D]\n\ngpdeletesystem -? \n\ngpdeletesystem -v\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"gpdeletesystem"})," utility performs the following actions:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Stop all ",(0,n.jsx)(s.code,{children:"postgres"})," processes (the segment instances and coordinator instance)."]}),"\n",(0,n.jsx)(s.li,{children:"Deletes all data directories."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Before running ",(0,n.jsx)(s.code,{children:"gpdeletesystem"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Move any backup files out of the coordinator and segment data directories."}),"\n",(0,n.jsx)(s.li,{children:"Make sure that Cloudberry Database is running."}),"\n",(0,n.jsx)(s.li,{children:"If you are currently in a segment data directory, change directory to another location. The utility fails with an error when run from within a segment data directory."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This utility will not uninstall the Cloudberry Database software."}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-d coordinator_data_directory"})})}),"\n",(0,n.jsxs)(s.p,{children:["Specifies the coordinator host data directory. If this option is not specified, the setting for the environment variable ",(0,n.jsx)(s.code,{children:"COORDINATOR_DATA_DIRECTORY"})," is used. If this option is specified, it overrides any setting of ",(0,n.jsx)(s.code,{children:"COORDINATOR_DATA_DIRECTORY"}),". If coordinator_data_directory cannot be determined, the utility returns an error."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-B parallel_processes"})})}),"\n",(0,n.jsx)(s.p,{children:"The number of segments to delete in parallel. If not specified, the utility will start up to 60 parallel processes depending on how many segment instances it needs to delete."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-f (force)"})})}),"\n",(0,n.jsx)(s.p,{children:"Force a delete even if backup files are found in the data directories. The default is to not delete Cloudberry Database instances if backup files are present."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-l logfile_directory"})})}),"\n",(0,n.jsxs)(s.p,{children:["The directory to write the log file. Defaults to ",(0,n.jsx)(s.code,{children:"~/gpAdminLogs"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-D (debug)"})})}),"\n",(0,n.jsx)(s.p,{children:"Sets logging level to debug."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-? (help)"})})}),"\n",(0,n.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-v (show utility version)"})})}),"\n",(0,n.jsx)(s.p,{children:"Displays the version, status, last updated date, and check sum of this utility."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"Delete a Cloudberry Database system:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpdeletesystem -d /gpdata/gp-1\n"})}),"\n",(0,n.jsx)(s.p,{children:"Delete a Cloudberry Database system even if backup files are present:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"gpdeletesystem -d /gpdata/gp-1 -f\n"})}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpinitsystem",children:"gpinitsystem"})})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>r});var n=t(67294);const i={},l=n.createContext(i);function r(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);