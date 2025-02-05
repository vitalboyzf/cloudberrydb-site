"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1854],{9451:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(85893),s=t(11151);const o={title:"gpdemo"},d="gpdemo (New in v1.5.0)",r={id:"sys-utilities/gpdemo",title:"gpdemo",description:"Before v1.5.0, if you want to deploy a small Cloudberry Database cluster with segments on a single node to make a demo, you need to spend time writing configuration files and parameters. Starting from v1.5.0, you can use the built-in gpdemo script to quickly deploy a cluster with a specified number of segments only with a single command.",source:"@site/docs/sys-utilities/gpdemo.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpdemo",permalink:"/docs/sys-utilities/gpdemo",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpdemo.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"gpdemo"},sidebar:"docsbars",previous:{title:"gpdeletesystem",permalink:"/docs/sys-utilities/gpdeletesystem"},next:{title:"gpexpand",permalink:"/docs/sys-utilities/gpexpand"}},c={},l=[{value:"How to use",id:"how-to-use",level:2},{value:"Deploy with default settings",id:"deploy-with-default-settings",level:3},{value:"Deploy with customized settings",id:"deploy-with-customized-settings",level:3},{value:"Specify segment count",id:"specify-segment-count",level:4},{value:"Specify the data directory of a node",id:"specify-the-data-directory-of-a-node",level:4},{value:"Specify the initial port number of the coordinator node",id:"specify-the-initial-port-number-of-the-coordinator-node",level:4},{value:"Specify additional initialization parameter for each node in the cluster",id:"specify-additional-initialization-parameter-for-each-node-in-the-cluster",level:4},{value:"Command-line options",id:"command-line-options",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gpdemo-new-in-v150",children:"gpdemo (New in v1.5.0)"}),"\n",(0,i.jsxs)(n.p,{children:["Before v1.5.0, if you want to deploy a small Cloudberry Database cluster with segments on a single node to make a demo, you need to spend time writing configuration files and parameters. Starting from v1.5.0, you can use the built-in ",(0,i.jsx)(n.code,{children:"gpdemo"})," script to quickly deploy a cluster with a specified number of segments only with a single command."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gpdemo"})," is installed with other system utilities (such as ",(0,i.jsx)(n.code,{children:"gpinitsystem"}),", ",(0,i.jsx)(n.code,{children:"gpstart"}),", and ",(0,i.jsx)(n.code,{children:"gpstop"}),") in the  ",(0,i.jsx)(n.code,{children:"GPHOME/bin"})," directory."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["It is not recommended to use ",(0,i.jsx)(n.code,{children:"gpdemo"})," for production environments, except when deploying a single node cluster."]})}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsxs)(n.p,{children:["You can run ",(0,i.jsx)(n.code,{children:"gpdemo"})," once the RPM package is installed on the target server and ",(0,i.jsx)(n.code,{children:"greenplum_path.sh"})," is correctly loaded."]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-with-default-settings",children:"Deploy with default settings"}),"\n",(0,i.jsxs)(n.p,{children:["To quickly deploy a cluster without special requirements for the data directory location, initial port number, or segment count, you can run ",(0,i.jsx)(n.code,{children:"gpdemo"})," without any parameter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gpdemo\n"})}),"\n",(0,i.jsx)(n.p,{children:"After running this command, the script creates a cluster in the current path. The default configuration of the cluster is as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Segment count: 3"}),"\n",(0,i.jsxs)(n.li,{children:["Data directory: ",(0,i.jsx)(n.code,{children:"./datadirs"})]}),"\n",(0,i.jsxs)(n.li,{children:["The initial port number of coordinator: ",(0,i.jsx)(n.code,{children:"7000"})]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["Once a cluster is deployed, the script generates the ",(0,i.jsx)(n.code,{children:"gpdemo-env.sh"})," file in the current directory containing the basic information of the cluster. Before using ",(0,i.jsx)(n.code,{children:"gpdemo"})," to operate on the cluster, run ",(0,i.jsx)(n.code,{children:"source gpdemo-env.sh"})," to load this information."]}),(0,i.jsxs)(n.p,{children:["You need to run this command for each new shell session. To load the cluster information automatically, you can add this command to ",(0,i.jsx)(n.code,{children:"~/.bashrc"})," or  ",(0,i.jsx)(n.code,{children:"~/.zshrc"}),"."]})]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-with-customized-settings",children:"Deploy with customized settings"}),"\n",(0,i.jsx)(n.p,{children:"If you need to customize the number of segments, data directory location, and the initial port number of the cluster, refer to the following instructions."}),"\n",(0,i.jsx)(n.h4,{id:"specify-segment-count",children:"Specify segment count"}),"\n",(0,i.jsx)(n.p,{children:"For the default deployment, the number of segments in a cluster is 3."}),"\n",(0,i.jsxs)(n.p,{children:["To specify the number of segments in a cluster, you can add the ",(0,i.jsx)(n.code,{children:"NUM_PRIMARY_MIRROR_PAIRS"})," parameter to the ",(0,i.jsx)(n.code,{children:"gpdemo"})," command. For example, to specify the number of segments as 3, you can run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"NUM_PRIMARY_MIRROR_PAIRS=3 gpdemo\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Each segment node consists of a primary node and a mirror node. So every time the parameter value increases by ",(0,i.jsx)(n.code,{children:"1"}),", 2 more nodes will be created. To better capture data distribution issues, it is recommended to set the value to an odd number."]}),"\n",(0,i.jsxs)(n.li,{children:["When the parameter value is set to 0, a single-computing-node cluster is deployed. See ",(0,i.jsx)(n.a,{href:"/docs/deploy-cbdb-with-single-node",children:"Deploy Cloudberry Database with a Single Computing Node"})," for details."]}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"specify-the-data-directory-of-a-node",children:"Specify the data directory of a node"}),"\n",(0,i.jsxs)(n.p,{children:["Each node's data in a cluster is stored in the ",(0,i.jsx)(n.code,{children:"./datadirs"})," subdirectory of the current directory. To set the cluster's data directory location, use one of the following methods:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Switch to the target directory using ",(0,i.jsx)(n.code,{children:"cd"})," and run ",(0,i.jsx)(n.code,{children:"gpdemo"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"gpdemo"})," command, specify the ",(0,i.jsx)(n.code,{children:"DATADIRS"})," parameter to set the data directory. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"DATADIRS=/target/directory/ gpdemo\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["After a cluster is deployed, if you want to manually adjust the location of the data directory (by modifying the ",(0,i.jsx)(n.code,{children:"pg_hha.conf"}),"configuration file), you might need to know the default directories of the coordinator node and segment nodes."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Regular multi-node mode (which means ",(0,i.jsx)(n.code,{children:"NUM_PRIMARY_MIRROR_PAIRS"})," >  0)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Coordinator: ",(0,i.jsx)(n.code,{children:"./datadirs/qddir"})]}),"\n",(0,i.jsxs)(n.li,{children:["Coordinator Standby: ",(0,i.jsx)(n.code,{children:"./datadirs/standby"})]}),"\n",(0,i.jsxs)(n.li,{children:["Segments","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Primary: ",(0,i.jsx)(n.code,{children:"./datadirs/dbfast<N>"}),", where ",(0,i.jsx)(n.code,{children:"<N>"})," is the segment number."]}),"\n",(0,i.jsxs)(n.li,{children:["Mirror: ",(0,i.jsx)(n.code,{children:"./datadirs/dbfast_mirror<N>"}),", where ",(0,i.jsx)(n.code,{children:"<N>"}),"is the segment number."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Single-node mode (which means ",(0,i.jsx)(n.code,{children:"NUM_PRIMARY_MIRROR_PAIRS"})," =  0)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Coordinator: ",(0,i.jsx)(n.code,{children:"./datadirs/singlenodedir"})]}),"\n",(0,i.jsxs)(n.li,{children:["Coordinator Standby: ",(0,i.jsx)(n.code,{children:"./datadirs/standby"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h4,{id:"specify-the-initial-port-number-of-the-coordinator-node",children:"Specify the initial port number of the coordinator node"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the port number of the Coordinator node is ",(0,i.jsx)(n.code,{children:"7000"}),". Starting from this number, all other nodes in the cluster are assigned consecutive port numbers."]}),"\n",(0,i.jsxs)(n.p,{children:["To specify the initial port number of a cluster's coordinator node, you can add the ",(0,i.jsx)(n.code,{children:"PORT_BASE"})," parameter to the ",(0,i.jsx)(n.code,{children:"gpdemo"})," command. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"PORT_BASE=7000 gpdemo\n"})}),"\n",(0,i.jsx)(n.h4,{id:"specify-additional-initialization-parameter-for-each-node-in-the-cluster",children:"Specify additional initialization parameter for each node in the cluster"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BLDWRAP_POSTGRES_CONF_ADDONS"})," specifies the additional initialization parameter for each node in a cluster. The default value ",(0,i.jsx)(n.code,{children:"fsync=off"})," is for better concurrency performance."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["In a production environment, use ",(0,i.jsx)(n.code,{children:'export BLDWRAP_POSTGRES_CONF_ADDONS ="fsync=on"'})," to enable fsync.  Otherwise, the ACID  characteristics of the database will be affected. In the single-node mode, fsync is automatically enabled."]})}),"\n",(0,i.jsx)(n.h2,{id:"command-line-options",children:"Command-line options"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gpdemo"})," provides the following command-line options. You can also check them using ",(0,i.jsx)(n.code,{children:"gpdemo -H"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Option"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-K"})}),(0,i.jsx)(n.td,{children:"Skips the data consistency check when deploying a cluster. This option is not recommended."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-c"})}),(0,i.jsxs)(n.td,{children:["Checks the port occupancy and confirms whether a test cluster can be deployed.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Before running ",(0,i.jsx)(n.code,{children:"gpdemo -c"}),", you need to run ",(0,i.jsx)(n.code,{children:"source gpdemo-env.sh"})," to load the basic information of a cluster. The ",(0,i.jsx)(n.code,{children:"sh"})," file is located in the directory where the cluster is created."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-d"})}),(0,i.jsxs)(n.td,{children:["Deletes the test cluster.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Before running ",(0,i.jsx)(n.code,{children:"gpdemo -c"}),", you need to run ",(0,i.jsx)(n.code,{children:"source gpdemo-env.sh"})," to load the basic information of a cluster. The ",(0,i.jsx)(n.code,{children:"sh"})," file is located in the directory where the cluster is created."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-p"})}),(0,i.jsxs)(n.td,{children:["Views cluster status, version and other information of the coordinator and segment nodes.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Before running ",(0,i.jsx)(n.code,{children:"gpdemo -c"}),", you need to run ",(0,i.jsx)(n.code,{children:"source gpdemo-env.sh"})," to load the basic information of a cluster. The ",(0,i.jsx)(n.code,{children:"sh"})," file is located in the directory where the cluster is created."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"-H "})," or ",(0,i.jsx)(n.code,{children:"-H"})]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"gpdemo -h"})," outputs a brief help description.",(0,i.jsx)(n.code,{children:"gpdemo -H"})," outputs a more detailed help description, including additional configurations such as environment variables."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"-v"})}),(0,i.jsxs)(n.td,{children:["Checks the current ",(0,i.jsx)(n.code,{children:"gpdemo"})," version."]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var i=t(67294);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);