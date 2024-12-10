"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5314],{6737:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>I,contentTitle:()=>E,default:()=>R,frontMatter:()=>S,metadata:()=>N,toc:()=>_});var s=r(85893),l=r(11151),t=r(67294),a=r(90512),i=r(12466),o=r(16550),d=r(20469),c=r(91980),u=r(67392),h=r(50012);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:l}}=e;return{value:n,label:r,attributes:s,default:l}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=b(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[o,c]=x({queryString:r,groupId:s}),[u,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,h.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),g=(()=>{const e=o??u;return m({value:e,tabValues:l})?e:null})();(0,d.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),p(e)}),[c,p,l]),tabValues:l}}var f=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:r,selectedValue:l,selectValue:t,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,r=d.indexOf(n),s=o[r].value;s!==l&&(c(n),t(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...t,className:(0,a.Z)("tabs__item",y.tabItem,t?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:l}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=g(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,s.jsx)(j,{...e,...n}),(0,s.jsx)(v,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,s.jsx)(w,{...e,children:p(e.children)},String(n))}const C={tabItem:"tabItem_Ymn6"};function D(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(C.tabItem,l),hidden:r,children:n})}const S={title:"On Linux"},E="Compile and Install Cloudberry Database on Linux",N={id:"cbdb-linux-compile",title:"On Linux",description:"The source of this document is from the GitHub repository cloudberrydb/cloudberrydb.",source:"@site/docs/cbdb-linux-compile.md",sourceDirName:".",slug:"/cbdb-linux-compile",permalink:"/docs/cbdb-linux-compile",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/cbdb-linux-compile.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733828171,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"On Linux"},sidebar:"docsbars",previous:{title:"On macOS",permalink:"/docs/cbdb-macos-compile"},next:{title:"Software and Hardware Configuration",permalink:"/docs/cbdb-op-software-hardware"}},I={},_=[{value:"Step 1. Clone GitHub repo",id:"step-1-clone-github-repo",level:2},{value:"Step 2. Install dependencies",id:"step-2-install-dependencies",level:2},{value:"Step 3. Perform prerequisite platform tasks",id:"step-3-perform-prerequisite-platform-tasks",level:2},{value:"Step 4. Build Cloudberry Database",id:"step-4-build-cloudberry-database",level:2},{value:"Step 5. Verify the cluster",id:"step-5-verify-the-cluster",level:2}];function A(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"compile-and-install-cloudberry-database-on-linux",children:"Compile and Install Cloudberry Database on Linux"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The source of this document is from the GitHub repository ",(0,s.jsx)(n.a,{href:"https://github.com/cloudberrydb/cloudberrydb/blob/main/deploy/build/README.Linux.md",children:(0,s.jsx)(n.code,{children:"cloudberrydb/cloudberrydb"})}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"This document shares how to compile and install Cloudberry Database on Linux systems (CentOS 7, RHEL, and Ubuntu). Note that this document is for developers to try out Cloudberry Database in a single-node environments. DO NOT use this document for production environments."}),"\n",(0,s.jsx)(n.p,{children:"Take the following steps to compile and install Cloudberry Database:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-1-clone-github-repo",children:"Clone GitHub repo"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-2-install-dependencies",children:"Install dependencies"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-3-perform-prerequisite-platform-tasks",children:"Perform prerequisite platform tasks"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-4-build-cloudberry-database",children:"Build Cloudberry Database"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-5-verify-the-cluster",children:"Verify the cluster"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-clone-github-repo",children:"Step 1. Clone GitHub repo"}),"\n",(0,s.jsxs)(n.p,{children:["Clone the GitHub repository ",(0,s.jsx)(n.code,{children:"cloudberrydb/cloudberrydb"})," to the target machine:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/cloudberrydb/cloudberrydb.git\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-install-dependencies",children:"Step 2. Install dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Enter the repository and install dependencies according to your operating systems:"}),"\n",(0,s.jsxs)(k,{children:[(0,s.jsxs)(D,{value:"centos-7",label:"For CentOS 7",default:!0,children:[(0,s.jsx)(n.p,{children:"The following steps work on CentOS 7. For other CentOS versions, these steps might work but are not guaranteed to work."}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the Bash script ",(0,s.jsx)(n.code,{children:"README.CentOS.bash"})," in the ",(0,s.jsx)(n.code,{children:"deploy/build"})," directory of the ",(0,s.jsx)(n.code,{children:"cloudberrydb/cloudberrydb"})," repository. To run this script, password is required. Then, some required dependencies will be automatically downloaded."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd cloudberrydb/deploy/build\n./README.CentOS.bash\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install additional packages required for configurations."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum -y install R apr apr-devel apr-util automake autoconf bash bison bison-devel bzip2 bzip2-devel centos-release-scl curl flex flex-devel gcc gcc-c++ git gdb iproute krb5-devel less libcurl libcurl-devel libevent libevent-devel libxml2 libxml2-devel libyaml libzstd-devel libzstd make openldap openssh openssh-clients openssh-server openssl openssl-devel openssl-libs perl python3-devel readline readline-devel rsync sed sudo tar vim wget which xerces-c-devel zip zlib && \\\nyum -y install epel-release\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update the GNU Compiler Collection (GCC) to version ",(0,s.jsx)(n.code,{children:"devtoolset-10"})," to support C++ 14."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'yum install centos-release-scl \nyum -y install devtoolset-10-gcc devtoolset-10-gcc-c++ devtoolset-10-binutils \nscl enable devtoolset-10 bash \nsource /opt/rh/devtoolset-10/enable \necho "source /opt/rh/devtoolset-10/enable" >> /etc/bashrc\nsource /etc/bashrc\ngcc -v\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Link cmake3 to cmake:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo ln -sf /usr/bin/cmake3 /usr/local/bin/cmake\n"})}),"\n"]}),"\n"]})]}),(0,s.jsx)(D,{value:"rockey-rhel-8",label:"For RHEL 8 and Rocky Linux 8",default:!0,children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install Development Tools."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo yum group install -y "Development Tools"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo yum install -y epel-release\n\nsudo yum install -y apr-devel bison bzip2-devel cmake3 flex gcc gcc-c++ krb5-devel libcurl-devel libevent-devel libkadm5  libxml2-devel libzstd-devel openssl-devel perl-ExtUtils-Embed python3-devel python3-pip readline-devel xerces-c-devel zlib-devel\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install more dependencies by running the ",(0,s.jsx)(n.code,{children:"README.Rhel-Rocky.bash"})," script."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/cloudberrydb/deploy/build/\n./README.Rhel-Rocky.bash\n"})}),"\n"]}),"\n"]})}),(0,s.jsx)(D,{value:"ubuntu-18.04",label:"For Ubuntu 18.04 or later",default:!0,children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install dependencies by running the ",(0,s.jsx)(n.code,{children:"README.Ubuntu.bash"})," script in the ",(0,s.jsx)(n.code,{children:"deploy/build"})," directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"## You need to enter your password to run.\nsudo ~/cloudberrydb/deploy/build/README.Ubuntu.bash\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When you run the ",(0,s.jsx)(n.code,{children:"README.Ubuntu.bash"})," script for dependencies, you will be asked to configure ",(0,s.jsx)(n.code,{children:"realm"})," for Kerberos. You can enter any realm, because this is just for testing, and during testing, it will reconfigure a local server/client. If you want to skip this manual configuration, run ",(0,s.jsx)(n.code,{children:"export DEBIAN_FRONTEND=noninteractive"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"If the script fails to download packages, we recommend that you can try another one software source for Ubuntu."}),"\n"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install GCC 10. Ubuntu 18.04 and later versions should use GCC 10 or newer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"## Install gcc-10\nsudo apt install software-properties-common\nsudo add-apt-repository ppa:ubuntu-toolchain-r/test\nsudo apt install gcc-10 g++-10\nsudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-10 100\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"step-3-perform-prerequisite-platform-tasks",children:"Step 3. Perform prerequisite platform tasks"}),"\n",(0,s.jsxs)(n.p,{children:["After you have installed all the dependencies for your operating system, it is time to do some prerequisite platform tasks before you go on building Cloudberry Database. These operation include manually running ",(0,s.jsx)(n.code,{children:"ldconfig"})," on all platforms, creating the ",(0,s.jsx)(n.code,{children:"gpadmin"})," user, and setting up a password to start the Cloudberry Database and test."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure that you add ",(0,s.jsx)(n.code,{children:"/usr/local/lib"})," and ",(0,s.jsx)(n.code,{children:"/usr/local/lib64"})," to the ",(0,s.jsx)(n.code,{children:"/etc/ld.so.conf"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo -e "/usr/local/lib \\n/usr/local/lib64" >> /etc/ld.so.conf\nldconfig\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create the ",(0,s.jsx)(n.code,{children:"gpadmin"})," user and set up the SSH key. Manually create SSH keys based on different operating systems, so that you can run ",(0,s.jsx)(n.code,{children:"ssh localhost"})," without a password."]}),"\n",(0,s.jsxs)(k,{children:[(0,s.jsx)(D,{value:"centos-rhel-rockey",label:"For CentOS, Rocky Linux, and RHEL",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"useradd gpadmin  # Creates gpadmin user\nsu - gpadmin  # Uses the gpadmin user\nssh-keygen  # Creates SSH key\ncat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys\nexit\n"})})}),(0,s.jsx)(D,{value:"ubuntu",label:"For Ubuntu",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"useradd -r -m -s /bin/bash gpadmin  # Creates gpadmin user\nsu - gpadmin  # Uses the gpadmin user\nssh-keygen  # Creates SSH key\ncat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys \nexit\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-4-build-cloudberry-database",children:"Step 4. Build Cloudberry Database"}),"\n",(0,s.jsx)(n.p,{children:"After you have installed all the dependencies and performed the prerequisite platform tasks, you can start to build Cloudberry Database. Run the following commands in sequence."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure the build environment. Enter the ",(0,s.jsx)(n.code,{children:"cloudberrydb"})," directory and run the ",(0,s.jsx)(n.code,{children:"configure"})," script."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd cloudberrydb\n./configure --with-perl --with-python --with-libxml --with-gssapi --prefix=/usr/local/cloudberrydb\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Cloudberry Database is built with GPORCA by default. If you want to build CBDB without GPORCA, add the ",(0,s.jsx)(n.code,{children:"--disable-orca"})," flag in the ",(0,s.jsx)(n.code,{children:"./configure"})," command."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./configure --disable-orca --with-perl --with-python --with-libxml --prefix=/usr/local/cloudberrydb\n"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Compile the code and install the database."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make -j8\nmake -j8 install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Bring in the Greenplum environment for your running shell."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ..\ncp -r cloudberrydb/ /home/gpadmin/\ncd /home/gpadmin/\nchown -R gpadmin:gpadmin cloudberrydb/\nsu - gpadmin\ncd cloudberrydb/\nsource /usr/local/cloudberrydb/greenplum_path.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the demo cluster."}),"\n",(0,s.jsxs)(k,{children:[(0,s.jsx)(D,{value:"centos",label:"For CentOS 7",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"scl enable devtoolset-10 bash \nsource /opt/rh/devtoolset-10/enable \nmake create-demo-cluster\n"})})}),(0,s.jsx)(D,{value:"ubuntu-rocky-rhel",label:"For Ubuntu, Rocky Linux, and RHEL",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make create-demo-cluster\n"})})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Prepare the test by running the following command. This command will configure the port and environment variables for the test."}),"\n",(0,s.jsxs)(n.p,{children:["Environment variables such as ",(0,s.jsx)(n.code,{children:"PGPORT"})," and ",(0,s.jsx)(n.code,{children:"COORDINATOR_DATA_DIRECTORY"})," will be configured, which are the default port and the data directory of the coordinator node."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source gpAux/gpdemo/gpdemo-env.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-5-verify-the-cluster",children:"Step 5. Verify the cluster"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can verify whether the cluster has started successfully by running the following command. If successful, you might see multiple active ",(0,s.jsx)(n.code,{children:"postgres"})," processes with ports ranging from ",(0,s.jsx)(n.code,{children:"7000"})," to ",(0,s.jsx)(n.code,{children:"7007"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ps -ef | grep postgres\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Connect to the Cloudberry Database and see the active segment information by querying the system table ",(0,s.jsx)(n.code,{children:"gp_segement_configuration"}),". For detailed description of this table, see the Greenplum document ",(0,s.jsx)(n.a,{href:"https://docs.vmware.com/en/VMware-Greenplum/6/greenplum-database/ref_guide-system_catalogs-gp_segment_configuration.html",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'$ psql -p 7000 postgres\npsql (14.4, server 14.4)\nType "help" for help.\n\npostgres=# select version();\n                                                                                        version                                                                                         \n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\nPostgreSQL 14.4 (Cloudberry Database 1.0.0+1c0d6e2224 build dev) on x86_64( GCC 13.2.0) 13.2.0, 64-bit compiled on Sep 22 2023 10:56:01\n(1 row)\n\npostgres=# select * from gp_segment_configuration;\n dbid | content | role | preferred_role | mode | status | port |  hostname  |  address   |                                   datadir                                    | warehouseid \n------+---------+------+----------------+------+--------+------+------------+------------+------------------------------------------------------------------------------+-------------\n    1 |      -1 | p    | p              | n    | u      | 7000 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/qddir/demoDataDir-1         |           0\n    8 |      -1 | m    | m              | s    | u      | 7001 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/standby                     |           0\n    3 |       1 | p    | p              | s    | u      | 7003 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast2/demoDataDir1        |           0\n    6 |       1 | m    | m              | s    | u      | 7006 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror2/demoDataDir1 |           0\n    2 |       0 | p    | p              | s    | u      | 7002 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast1/demoDataDir0        |           0\n    5 |       0 | m    | m              | s    | u      | 7005 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror1/demoDataDir0 |           0\n    4 |       2 | p    | p              | s    | u      | 7004 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast3/demoDataDir2        |           0\n    7 |       2 | m    | m              | s    | u      | 7007 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror3/demoDataDir2 |           0\n(8 rows)\n'})}),"\n"]}),"\n"]})]})}function R(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var s=r(67294);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);