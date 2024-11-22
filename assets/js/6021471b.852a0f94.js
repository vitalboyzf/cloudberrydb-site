"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5076],{62553:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(85893),i=t(11151);const r={title:"gpshrink"},d="gpshrink",a={id:"sys-utilities/gpshrink",title:"gpshrink",description:"Cloudberry Database scales in clusters using the gpshrink system tool. When cluster resources are idle, such as disk space usage consistently below 20% or low CPU and memory usage, gpshrink can be used to reduce the size of the cluster, saving server resources. Users can remove segments from redundant servers with the gpshrink tool to scale in the cluster.",source:"@site/docs/sys-utilities/gpshrink.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpshrink",permalink:"/docs/sys-utilities/gpshrink",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpshrink.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732243913,formattedLastUpdatedAt:"Nov 22, 2024",frontMatter:{title:"gpshrink"},sidebar:"docsbars",previous:{title:"gprecoverseg",permalink:"/docs/sys-utilities/gprecoverseg"},next:{title:"gpssh-exkeys",permalink:"/docs/sys-utilities/gpssh-exkeys"}},l={},c=[{value:"Steps to Scale In a Cluster Using gpshrink",id:"steps-to-scale-in-a-cluster-using-gpshrink",level:2}];function o(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"gpshrink",children:"gpshrink"}),"\n",(0,n.jsxs)(s.p,{children:["Cloudberry Database scales in clusters using the ",(0,n.jsx)(s.code,{children:"gpshrink"})," system tool. When cluster resources are idle, such as disk space usage consistently below 20% or low CPU and memory usage, ",(0,n.jsx)(s.code,{children:"gpshrink"})," can be used to reduce the size of the cluster, saving server resources. Users can remove segments from redundant servers with the ",(0,n.jsx)(s.code,{children:"gpshrink"})," tool to scale in the cluster."]}),"\n",(0,n.jsx)(s.p,{children:"The gpshrink tool operates in two phases:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Preparation Phase"}),": Collects information about all user tables in the database that need redistribution."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Data Redistribution Phase"}),": Redistributes data for all tables in the database cluster, adjusting for the expanded or reduced size of the cluster."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"steps-to-scale-in-a-cluster-using-gpshrink",children:"Steps to Scale In a Cluster Using gpshrink"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create a three-node cluster:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"make create-demo-cluster\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create a test table and check pre-scale-in status:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"-- Create table and insert data\nCREATE TABLE test(a INT); \nINSERT INTO test SELECT i FROM generate_series(1,100) i;\n-- Check data distribution of the test table\nSELECT gp_segment_id, COUNT(*) FROM test GROUP BY gp_segment_id;\n-- Check metadata status\nSELECT * FROM gp_distribution_policy;\nSELECT * FROM gp_segment_configuration;\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Create a shrinktest file and list segments to delete:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"touch shrinktest\n"})}),"\n",(0,n.jsx)(s.p,{children:"The segment information format should be: hostname|address|port|datadir|dbid|content|role. Include both primary and mirror segment information. To delete multiple segments, list segments with higher content numbers first. Ensure the preferred role matches the role, listing primary before mirror."}),"\n",(0,n.jsx)(s.p,{children:"Example format for deleting one segment:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"i-thd001y0|i-thd001y0|7004|/home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast3/demoDataDir2|4|2|p\ni-thd001y0|i-thd001y0|7007|/home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror3/demoDataDir2|7|2|m\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Run the ",(0,n.jsx)(s.code,{children:"gpshrink"})," Command Twice:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# Preparation phase\ngpshrink -i shrinktest\n# Redistribution phase\ngpshrink -i shrinktest\n"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Main Parameters"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-i"})}),(0,n.jsx)(s.td,{children:"Specifies the file containing the segments to delete."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-c"})}),(0,n.jsx)(s.td,{children:"Clears collected table information."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-a"})}),(0,n.jsx)(s.td,{children:"Gathers statistics for tables after redistribution."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"-d"})}),(0,n.jsx)(s.td,{children:"Sets maximum execution time for redistribution, terminating if exceeded."})]})]})]}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsx)(s.p,{children:"How gpshrink Works in Two Phases:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The first ",(0,n.jsx)(s.code,{children:"gpshrink -i shrinktest"})," command prepares for scaling in by reading the segments to be deleted from the ",(0,n.jsx)(s.code,{children:"shrinktest"})," file, creating the tables ",(0,n.jsx)(s.code,{children:"gpshrink.status"})," (to record the status of ",(0,n.jsx)(s.code,{children:"gpshrink"}),") and ",(0,n.jsx)(s.code,{children:"gpshrink.status_detail"})," (to record the status of each table), and identifying all tables that need redistribution."]}),"\n",(0,n.jsxs)(s.li,{children:["The second ",(0,n.jsx)(s.code,{children:"gpshrink -i shrinktest"})," command handles the data redistribution, calculates the segment size after deletion, and redistributes data across the scaled-in cluster. It then removes the corresponding segments from ",(0,n.jsx)(s.code,{children:"gp_segment_configuration"}),". During this phase, creating new tables is not recommended, as they cannot be redistributed across the scaled-in cluster. Some statements might fail due to locked tables."]}),"\n"]})]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If the first ",(0,n.jsx)(s.code,{children:"gpshrink -i shrinktest"})," fails, it might be due to an error in the ",(0,n.jsx)(s.code,{children:"shrinktest"})," file. Clear the collected data with ",(0,n.jsx)(s.code,{children:"gpshrink -c"})," and rerun ",(0,n.jsx)(s.code,{children:"gpshrink -i shrinktest"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["If the second ",(0,n.jsx)(s.code,{children:"gpshrink -i shrinktest"})," fails, log in to the database to check the status of tables and proceed with further redistribution or rollback as needed."]}),"\n"]})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Check the test table status after scaling in:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"-- Check data distribution of the test table\nSELECT gp_segment_id, COUNT(*) FROM test GROUP BY gp_segment_id;\n-- Check metadata status\nSELECT * FROM gp_distribution_policy;\nSELECT * FROM gp_segment_configuration;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>d});var n=t(67294);const i={},r=n.createContext(i);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);