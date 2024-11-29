"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[257],{95794:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var r=s(85893),o=s(11151);const t={title:"On macOS"},d="Compile and Install Cloudberry Database on macOS",l={id:"cbdb-macos-compile",title:"On macOS",description:"The source of this document is from the GitHub repository cloudberrydb/cloudberrydb.",source:"@site/docs/cbdb-macos-compile.md",sourceDirName:".",slug:"/cbdb-macos-compile",permalink:"/docs/cbdb-macos-compile",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/cbdb-macos-compile.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"Nov 29, 2024",frontMatter:{title:"On macOS"},sidebar:"docsbars",previous:{title:"Comparison with Greenplum Features",permalink:"/docs/cbdb-vs-gp-features"},next:{title:"On Linux",permalink:"/docs/cbdb-linux-compile"}},c={},i=[{value:"Step 1. Install needed dependencies",id:"step-1-install-needed-dependencies",level:2},{value:"Step 2. Enable password-free SSH connection to localhost",id:"step-2-enable-password-free-ssh-connection-to-localhost",level:2},{value:"Step 3. Configure, compile, and install",id:"step-3-configure-compile-and-install",level:2},{value:"Step 4. Verify the cluster",id:"step-4-verify-the-cluster",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"compile-and-install-cloudberry-database-on-macos",children:"Compile and Install Cloudberry Database on macOS"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The source of this document is from the GitHub repository ",(0,r.jsx)(n.a,{href:"https://github.com/cloudberrydb/cloudberrydb/blob/main/deploy/build/README.macOS.md",children:(0,r.jsx)(n.code,{children:"cloudberrydb/cloudberrydb"})}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"This document shares how to build, compile, and install Cloudberry Database on macOS (single node) for development and trial purposes. Follow the steps below."}),"\n",(0,r.jsx)(n.p,{children:"According to our test, these steps work well on macOS Ventura 13.4+ with both Intel and Apple silicon processors (M1 or M2). If you have an older version of macOS, upgrading is recommended. Make sure that the Mac you use has at least 4 cores and 8 GB memory, and is connected to the Internet."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"DO NOT use this guide for production deployment."})}),"\n",(0,r.jsx)(n.h2,{id:"step-1-install-needed-dependencies",children:"Step 1. Install needed dependencies"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone the source code of Cloudberry Database from GitHub to your local Mac."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:cloudberrydb/cloudberrydb.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter the ",(0,r.jsx)(n.code,{children:"cloudberrydb/"})," directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd cloudberrydb/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run the following command to install the needed dependencies. You will be asked to enter the ",(0,r.jsx)(n.code,{children:"sudo"})," password of your macOS system."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source deploy/build/README.macOS.bash\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This will install ",(0,r.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," if missing."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-enable-password-free-ssh-connection-to-localhost",children:"Step 2. Enable password-free SSH connection to localhost"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enable ",(0,r.jsx)(n.strong,{children:"Remote Login"})," on your macOS system by navigating to ",(0,r.jsx)(n.strong,{children:"System Preferences"})," > ",(0,r.jsx)(n.strong,{children:"General"})," > ",(0,r.jsx)(n.strong,{children:"Sharing"})," > ",(0,r.jsx)(n.strong,{children:"Remote Login"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command to verify whether password-free SSH connection to localhost has been enabled on your operating system."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh $(hostname)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If this command runs without error or requiring you to enter a password, run ",(0,r.jsx)(n.code,{children:"exit"})," and go to ",(0,r.jsx)(n.a,{href:"#step-3-configure-compile-and-install",children:"Step 3. Configure, compile, and install"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you are required to enter a password, take the following steps to set up password-free SSH connection."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"ssh-keygen"})," and then ",(0,r.jsx)(n.code,{children:"cat ~/.ssh/id_rsa.pub >>  ~/.ssh/authorized_keys"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"ssh $(hostname)"})," again to check whether password-free connection is ready."]}),"\n",(0,r.jsxs)(n.li,{children:["If ready, run ",(0,r.jsx)(n.code,{children:"exit"})," and go to ",(0,r.jsx)(n.a,{href:"#step-3-configure-compile-and-install",children:"Step 3. Configure, compile, and install"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If it is the first time you are using ",(0,r.jsx)(n.code,{children:"ssh"})," connection to localhost, you might need to accept the trust on the first use prompt:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"The authenticity of host '<your hostname>' can't be established.\nECDSA key fingerprint is SHA256:<fingerprint here>.\nAre you sure you want to continue connecting (yes/no)?\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If your hostname does not resolve, try adding your machine name to ",(0,r.jsx)(n.code,{children:"/etc/hosts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo -e "127.0.0.1\\t$HOSTNAME" | sudo tee -a /etc/hosts\n'})}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"step-3-configure-compile-and-install",children:"Step 3. Configure, compile, and install"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Run the following commands under the `cloudberrydb/` dir.\n# 1. Configure the build environment.\n\nBREWPREFIX=$(brew --prefix); export PATH="$BREWPREFIX/opt/gnu-sed/libexec/gnubin:$BREWPREFIX/opt/apr/bin:$PATH"; CXXFLAGS="-I $BREWPREFIX/include" CFLAGS="-ggdb -Og -g3 -fno-omit-frame-pointer -I $BREWPREFIX/include" LDFLAGS="-L $BREWPREFIX/lib" CC=$(which gcc-13) CXX=$(which g++-13) ./configure --enable-debug --prefix=$(cd ~; pwd)/install/cbdb;\n\n# 2. Compile and install Cloudberry Database.\n\nmake -j8\nmake -j8 install\n\n# 3. Bring in Greenplum environment for Cloudberry Database into your running shell.\n\nsource $(cd ~; pwd)/install/cbdb/greenplum_path.sh\n\n# 4. Install the Python dependencies.\n\npip3 install --user -r python-dependencies.txt\n\n# 5. Start a demo cluster.\n\nPORT_BASE=8000 make create-demo-cluster\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Prepare the test by running the following command. This command will configure the port and environment variables for the test. Environment variables such as ",(0,r.jsx)(n.code,{children:"PGPORT"})," and ",(0,r.jsx)(n.code,{children:"COORDINATOR_DATA_DIRECTORY"})," will be configured, which are the default port and the data directory of the coordinator node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source gpAux/gpdemo/gpdemo-env.sh\n"})}),"\n",(0,r.jsx)(n.h2,{id:"step-4-verify-the-cluster",children:"Step 4. Verify the cluster"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You can verify whether the cluster has started successfully by running the following command. If successful, you will see many active ",(0,r.jsx)(n.code,{children:"postgres"})," processes with ports ranging from ",(0,r.jsx)(n.code,{children:"8000"})," to ",(0,r.jsx)(n.code,{children:"8007"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ps -ef | grep postgres\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Connect to the Cloudberry Database and see the active segment information by querying the system table ",(0,r.jsx)(n.code,{children:"gp_segement_configuration"}),". For detailed description of this table, see the Greenplum document ",(0,r.jsx)(n.a,{href:"https://docs.vmware.com/en/VMware-Greenplum/7/greenplum-database/ref_guide-system_catalogs-gp_segment_configuration.html",children:"here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"$ psql -p 8000 postgres\npostgres=# select version();\npostgres=# select * from gp_segment_configuration;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'$ psql -p 8000 postgres\npsql (14.4, server 14.4)\nType "help" for help.\n\npostgres=# select version();\n                                                                                         version                                                                                         \n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n PostgreSQL 14.4 (Cloudberry Database 1.0.0+1c0d6e2224 build dev) on x86_64-apple-darwin22.4.0, compiled by gcc-13 (Homebrew GCC 13.2.0) 13.2.0, 64-bit compiled on Sep 22 2023 10:56:01\n(1 row)\n\npostgres=# select * from gp_segment_configuration;\n dbid | content | role | preferred_role | mode | status | port |          hostname           |           address           |                                                 datadir                                                  | warehouseid \n------+---------+------+----------------+------+--------+------+-----------------------------+-----------------------------+----------------------------------------------------------------------------------------------------------+-------------\n    1 |      -1 | p    | p              | n    | u      | 8000 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/qddir/demoDataDir-1         |           0\n    8 |      -1 | m    | m              | s    | u      | 8001 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/standby                     |           0\n    3 |       1 | p    | p              | s    | u      | 8003 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast2/demoDataDir1        |           0\n    6 |       1 | m    | m              | s    | u      | 8006 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror2/demoDataDir1 |           0\n    2 |       0 | p    | p              | s    | u      | 8002 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast1/demoDataDir0        |           0\n    5 |       0 | m    | m              | s    | u      | 8005 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror1/demoDataDir0 |           0\n    4 |       2 | p    | p              | s    | u      | 8004 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast3/demoDataDir2        |           0\n    7 |       2 | m    | m              | s    | u      | 8007 | cbdb.local | cbdb.local | /Users/cbdb/Documents/GitHub/upstream/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror3/demoDataDir2 |           0\n(8 rows)\n\npostgres=# \n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Now you can run ",(0,r.jsx)(n.code,{children:"installcheck-world"})," to start the cluster:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# In the folder where your cloned the source code\nmake installcheck-world\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Congratulations \ud83c\udf89! You've successfully installed and created a CloudberryDB cluster. Happy Hacking! \ud83d\ude09"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var r=s(67294);const o={},t=r.createContext(o);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);