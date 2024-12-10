"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1835],{87788:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=s(85893),i=s(11151);const o={title:"Deploy with a Single Computing Node"},r="Deploy Cloudberry Database with a Single Computing Node (New in v1.5.0)",d={id:"deploy-cbdb-with-single-node",title:"Deploy with a Single Computing Node",description:"Cloudberry Database is not fully compatible with PostgreSQL, and some features and syntax are Cloudberry Database-specific. If your business already relies on Cloudberry Database and you want to use the Cloudberry Database-specific syntax and features on a single node to avoid compatibility issues with PostgreSQL, you can consider deploying Cloudberry Database free of segments.",source:"@site/docs/deploy-cbdb-with-single-node.md",sourceDirName:".",slug:"/deploy-cbdb-with-single-node",permalink:"/docs/deploy-cbdb-with-single-node",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/deploy-cbdb-with-single-node.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733828171,formattedLastUpdatedAt:"Dec 10, 2024",frontMatter:{title:"Deploy with a Single Computing Node"},sidebar:"docsbars",previous:{title:"Deploy Manually Using RPM Package",permalink:"/docs/cbdb-op-deploy-guide"},next:{title:"Data Loading Overview",permalink:"/docs/data-loading/"}},l={},a=[{value:"How to deploy",id:"how-to-deploy",level:2},{value:"Step 1. Prepare to deploy",id:"step-1-prepare-to-deploy",level:3},{value:"Add <code>gpadmin</code> admin user",id:"add-gpadmin-admin-user",level:4},{value:"Disable SELinux and firewall software",id:"disable-selinux-and-firewall-software",level:4},{value:"Set system parameters",id:"set-system-parameters",level:4},{value:"Shared memory settings",id:"shared-memory-settings",level:5},{value:"IP segmentation settings",id:"ip-segmentation-settings",level:5},{value:"System memory",id:"system-memory",level:5},{value:"Resource limit",id:"resource-limit",level:5},{value:"CORE DUMP",id:"core-dump",level:5},{value:"Set mount options for the XFS file system",id:"set-mount-options-for-the-xfs-file-system",level:5},{value:"Blockdev value",id:"blockdev-value",level:5},{value:"I/O scheduling policy settings for disks",id:"io-scheduling-policy-settings-for-disks",level:5},{value:"Disable Transparent Huge Pages (THP)",id:"disable-transparent-huge-pages-thp",level:5},{value:"Disable IPC object deletion",id:"disable-ipc-object-deletion",level:5},{value:"SSH connection threshold",id:"ssh-connection-threshold",level:5},{value:"Clock synchronization",id:"clock-synchronization",level:5},{value:"Step 2. Install Cloudberry Database",id:"step-2-install-cloudberry-database",level:3},{value:"Step 3. Deploy Cloudberry Database with a single computing node",id:"step-3-deploy-cloudberry-database-with-a-single-computing-node",level:3},{value:"Common issues",id:"common-issues",level:2},{value:"How to check the deployment mode of a cluster",id:"how-to-check-the-deployment-mode-of-a-cluster",level:3},{value:"Where is the data directory",id:"where-is-the-data-directory",level:3},{value:"How it works",id:"how-it-works",level:2},{value:"User-behavior changes",id:"user-behavior-changes",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-cloudberry-database-with-a-single-computing-node-new-in-v150",children:"Deploy Cloudberry Database with a Single Computing Node (New in v1.5.0)"}),"\n",(0,t.jsx)(n.p,{children:"Cloudberry Database is not fully compatible with PostgreSQL, and some features and syntax are Cloudberry Database-specific. If your business already relies on Cloudberry Database and you want to use the Cloudberry Database-specific syntax and features on a single node to avoid compatibility issues with PostgreSQL, you can consider deploying Cloudberry Database free of segments."}),"\n",(0,t.jsxs)(n.p,{children:["Starting from v1.5.0, Cloudberry Database provides the single-computing-node deployment mode. This mode runs under the ",(0,t.jsx)(n.code,{children:"utility"})," gp_role, with only one coordinator (QD) node and one coordinator standby node, without a segment node or data distribution. You can directly connect to the coordinator and run queries as if you were connecting to a regular multi-node cluster. Note that some SQL statements are not effective in this mode because data distribution does not exist, and some SQL statements are not supported. See ",(0,t.jsx)(n.a,{href:"#user-behavior-changes",children:"user behavior changes"})," for details."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-deploy",children:"How to deploy"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-prepare-to-deploy",children:"Step 1. Prepare to deploy"}),"\n",(0,t.jsx)(n.p,{children:"Log into each host as the root user, and modify the settings of each node server in the order of the following sections."}),"\n",(0,t.jsxs)(n.h4,{id:"add-gpadmin-admin-user",children:["Add ",(0,t.jsx)(n.code,{children:"gpadmin"})," admin user"]}),"\n",(0,t.jsxs)(n.p,{children:["Follow the example below to create a user group and username ",(0,t.jsx)(n.code,{children:"gpadmin"}),". Set the user group and username identifier to ",(0,t.jsx)(n.code,{children:"520"}),". Create and specify the ",(0,t.jsx)(n.code,{children:"gpadmin"})," home directory ",(0,t.jsx)(n.code,{children:"/home/gpadmin"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"groupadd -g 520 gpadmin  # Adds user group gpadmin.\nuseradd -g 520 -u 520 -m -d /home/gpadmin/ -s /bin/bash gpadmin  # Adds username gpadmin and creates the home directory of gpadmin.\npasswd gpadmin  # Sets a password for gpadmin; after executing, follow the prompts to input the password.\n"})}),"\n",(0,t.jsx)(n.h4,{id:"disable-selinux-and-firewall-software",children:"Disable SELinux and firewall software"}),"\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"systemctl status firewalld"})," to view the firewall status. If the firewall is on, you need to turn it off by setting the ",(0,t.jsx)(n.code,{children:"SELINUX"})," parameter to ",(0,t.jsx)(n.code,{children:"disabled"})," in the ",(0,t.jsx)(n.code,{children:"/etc/selinux/config"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"SELINUX=disabled\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also disable the firewall using the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl stop firewalld.service\nsystemctl disable firewalld.service\n"})}),"\n",(0,t.jsx)(n.h4,{id:"set-system-parameters",children:"Set system parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Add relevant system parameters in the ",(0,t.jsx)(n.code,{children:"/etc/sysctl.conf"})," configuration file, and run the ",(0,t.jsx)(n.code,{children:"sysctl -p"})," command to make the configuration file effective."]}),"\n",(0,t.jsx)(n.p,{children:"When setting the configuration parameters, you can take the following example as a reference and set them according to your needs. Details of some of these parameters and recommended settings are provided below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kernel.shmall = _PHYS_PAGES / 2\nkernel.shmall = 197951838\nkernel.shmmax = kernel.shmall * PAGE_SIZE\nkernel.shmmax = 810810728448\nkernel.shmmni = 4096\nvm.overcommit_memory = 2\nvm.overcommit_ratio = 95\nnet.ipv4.ip_local_port_range = 10000 65535\nkernel.sem = 250 2048000 200 8192\nkernel.sysrq = 1\nkernel.core_uses_pid = 1\nkernel.msgmnb = 65536\nkernel.msgmax = 65536\nkernel.msgmni = 2048\nnet.ipv4.tcp_syncookies = 1\nnet.ipv4.conf.default.accept_source_route = 0\nnet.ipv4.tcp_max_syn_backlog = 4096\nnet.ipv4.conf.all.arp_filter = 1\nnet.ipv4.ipfrag_high_thresh = 41943040\nnet.ipv4.ipfrag_low_thresh = 31457280\nnet.ipv4.ipfrag_time = 60\nnet.core.netdev_max_backlog = 10000\nnet.core.rmem_max = 2097152\nnet.core.wmem_max = 2097152\nvm.swappiness = 10\nvm.zone_reclaim_mode = 0\nvm.dirty_expire_centisecs = 500\nvm.dirty_writeback_centisecs = 100\nvm.dirty_background_ratio = 0\nvm.dirty_ratio = 0\nvm.dirty_background_bytes = 1610612736\nvm.dirty_bytes = 4294967296\n"})}),"\n",(0,t.jsx)(n.h5,{id:"shared-memory-settings",children:"Shared memory settings"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"/etc/sysctl.conf"})," configuration file, ",(0,t.jsx)(n.code,{children:"kernel.shmall"})," represents the total amount of available shared memory, in pages. ",(0,t.jsx)(n.code,{children:"kernel.shmmax"})," represents the maximum size of a single shared memory segment, in bytes."]}),"\n",(0,t.jsxs)(n.p,{children:["You can define these 2 values using the operating system's ",(0,t.jsx)(n.code,{children:"_PHYS_PAGES"})," and ",(0,t.jsx)(n.code,{children:"PAGE_SIZE"})," parameters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kernel.shmall = ( _PHYS_PAGES / 2)\nkernel.shmmax = ( _PHYS_PAGES / 2) * PAGE_SIZE\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To get the values of these 2 operating system parameters, you can use ",(0,t.jsx)(n.code,{children:"getconf"}),", for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$echo $(expr $(getconf _PHYS_PAGES)/2) \n$echo $(expr $(getconf _PHYS_PAGES)/2 \\*$(getconf PAGE_SIZE))\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vm.overcommit_memory"})," indicates the overcommit handling modes for memory. Available options are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"0"}),": Heuristic overcommit handling"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1"}),": Always overcommit"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"2"}),": Don't overcommit"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Set the value of this parameter to ",(0,t.jsx)(n.code,{children:"2"})," to refuse overcommit."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vm.overcommit_ratio"})," is a kernel parameter and is the percentage of RAM occupied by the application process. The default value on CentOS is ",(0,t.jsx)(n.code,{children:"50"}),". ",(0,t.jsx)(n.code,{children:"vm.overcommit_ratio"})," is calculated as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"vm.overcommit_ratio = (RAM - 0.026 * gp_vmem) / RAM\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The calculation method of ",(0,t.jsx)(n.code,{children:"gp_vmem"})," is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# If the system memory is less than 256 GB, use the following formula to calculate:\ngp_vmem = ((SWAP + RAM) \u2013 (7.5GB + 0.05 * RAM)) / 1.7\n\n# If the system memory is greater than or equal to 256 GB, use the following formula to calculate:\ngp_vmem = ((SWAP + RAM) \u2013 (7.5GB + 0.05 * RAM)) / 1.17\n\n# In the above formulas, SWAP is the swap space on the host, in GB.\n# RAM is the size of the memory installed on the host, in GB.\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"ip-segmentation-settings",children:"IP segmentation settings"}),"\n",(0,t.jsx)(n.p,{children:"When the Cloudberry Database uses the UDP protocol for internal connection, the network card controls the fragmentation and reassembly of IP packets. If the size of a UDP message is larger than the maximum size of network transmission unit (MTU), the IP layer fragments the message."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"net.ipv4.ipfrag_high_thresh"}),": When the total size of IP fragments exceeds this threshold, the kernel will attempt to reorganize IP fragments. If the fragments exceed this threshold but all fragments have not arrived within the specified time, the kernel will not reorganize the fragments. This threshold is typically used to control whether larger shards are reorganized. The default value is ",(0,t.jsx)(n.code,{children:"4194304"})," bytes (4 MB)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"net.ipv4.ipfrag_low_thresh"}),": Indicates that when the total size of IP fragments is below this threshold, the kernel will wait as long as possible for more fragments to arrive, to allow for larger reorganizations. This threshold is used to minimize unfinished reorganization operations and improve system performance. The default value is ",(0,t.jsx)(n.code,{children:"3145728"})," bytes (3 MB)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"net.ipv4.ipfrag_time"})," is a kernel parameter that controls the IP fragment reassembly timeout. The default value is ",(0,t.jsx)(n.code,{children:"30"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to set the above parameters to the following values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"net.ipv4.ipfrag_high_thresh = 41943040\nnet.ipv4.ipfrag_low_thresh = 31457280\nnet.ipv4.ipfrag_time = 60\n"})}),"\n",(0,t.jsx)(n.h5,{id:"system-memory",children:"System memory"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the server memory exceeds 64 GB, the following parameters are recommended in the ",(0,t.jsx)(n.code,{children:"/etc/sysctl.conf "})," configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"vm.dirty_background_ratio = 0\nvm.dirty_ratio = 0\nvm.dirty_background_bytes = 1610612736 # 1.5GB\nvm.dirty_bytes = 4294967296 # 4GB\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the server memory is less than 64 GB, you do not need to set ",(0,t.jsx)(n.code,{children:"vm.dirty_background_bytes "})," or ",(0,t.jsx)(n.code,{children:"vm.dirty_bytes"}),". It is recommended to set the following parameters in the ",(0,t.jsx)(n.code,{children:"/etc/sysctl.conf "})," configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"vm.dirty_background_ratio = 3 \nvm.dirty_ratio = 10\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To deal with emergency situations when the system is under memory pressure, it is recommended to add the ",(0,t.jsx)(n.code,{children:"vm.min_free_kbytes"})," parameter to the ",(0,t.jsx)(n.code,{children:"/etc/sysctl.conf"})," configuration file to control the amount of available memory reserved by the system. It is recommended to set ",(0,t.jsx)(n.code,{children:"vm.min_free_kbytes"})," to 3% of the system's physical memory, with the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'awk \'BEGIN {OFMT = "%.0f";} /MemTotal/ {print "vm.min_free_kbytes =", $2 * .03;}\' /proc/meminfo  /etc/sysctl.conf\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The setting of ",(0,t.jsx)(n.code,{children:"vm.min_free_kbytes"})," is not recommended to exceed 5% of the system's physical memory."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"resource-limit",children:"Resource limit"}),"\n",(0,t.jsxs)(n.p,{children:["Edit the ",(0,t.jsx)(n.code,{children:"/etc/security/limits.conf"})," file and add the following content, which will limit the amount of hardware and software resources."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"*soft nofile 524288\n*hard nofile 524288\n*soft nproc 131072\n*hard nproc 131072\n"})}),"\n",(0,t.jsx)(n.h5,{id:"core-dump",children:"CORE DUMP"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the following parameter to the ",(0,t.jsx)(n.code,{children:"/etc/sysctl.conf"})," configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kernel.core_pattern=/var/core/core.%h.%t\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to make the configuration effective:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sysctl -p\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the following parameter to ",(0,t.jsx)(n.code,{children:"/etc/security/limits.conf"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"* soft core unlimited\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"set-mount-options-for-the-xfs-file-system",children:"Set mount options for the XFS file system"}),"\n",(0,t.jsx)(n.p,{children:"XFS is the file system for the data directory of Cloudberry Database. XFS has the following mount options:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rw,nodev,noatime,inode64\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can set up XFS file mounting in the ",(0,t.jsx)(n.code,{children:"/etc/fstab"})," file. See the following commands. You need to choose the file path according to the actual situation:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'mkdir -p /data0/\nmkfs.xfs -f /dev/vdc\necho "/dev/vdc /data0 xfs rw,nodev,noatime,nobarrier,inode64 0 0"  /etc/fstab\nmount /data0\nchown -R gpadmin:gpadmin /data0/\n'})}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to check whether the mounting is successful:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"df-h\n"})}),"\n",(0,t.jsx)(n.h5,{id:"blockdev-value",children:"Blockdev value"}),"\n",(0,t.jsxs)(n.p,{children:["The blockdev value for each disk file should be ",(0,t.jsx)(n.code,{children:"16384"}),". To verify the blockdev value of a disk device, use the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo/sbin/blockdev --getra<devname>\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example, to verify the blockdev value of the example server disk:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo/sbin/blockdev --getra /dev/vdc\n"})}),"\n",(0,t.jsx)(n.p,{children:"To modify the blockdev value of a device file, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo/sbin/blockdev --setra<bytes> <devname>\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example, to modify the file blockdev value of the hard disk of the example server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo/sbin/blockdev --setra16384/dev/vdc\n"})}),"\n",(0,t.jsx)(n.h5,{id:"io-scheduling-policy-settings-for-disks",children:"I/O scheduling policy settings for disks"}),"\n",(0,t.jsx)(n.p,{children:"The disk type, operating system, and scheduling policies of Cloudberry Database are as follows:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Storage device type"}),(0,t.jsx)("th",{children:"OS"}),(0,t.jsx)("th",{children:"Recommended scheduling policy"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"NVMe"}),(0,t.jsx)("td",{children:"RHEL 7"}),(0,t.jsx)("td",{children:"none"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"RHEL 8"}),(0,t.jsx)("td",{children:"none"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Ubuntu"}),(0,t.jsx)("td",{children:"none"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"SSD"}),(0,t.jsx)("td",{children:"RHEL 7"}),(0,t.jsx)("td",{children:"noop"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"RHEL 8"}),(0,t.jsx)("td",{children:"none"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Ubuntu"}),(0,t.jsx)("td",{children:"none"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"3",children:"Other"}),(0,t.jsx)("td",{children:"RHEL 7"}),(0,t.jsx)("td",{children:"deadline"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"RHEL 8"}),(0,t.jsx)("td",{children:"mq-deadline"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Ubuntu"}),(0,t.jsx)("td",{children:"mq-deadline"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Refer to the following command to modify the scheduling policy. Note that this command is only a temporary modification, and the modification becomes invalid after the server is restarted."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo schedulername>/sys/block/<devname>/queue/scheduler\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example, temporarily modify the disk I/O scheduling policy of the example server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo deadline>/sys/block/vdc/queue/scheduler\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To permanently modify the scheduling policy, use the system utility ",(0,t.jsx)(n.code,{children:"grubby"}),". After using ",(0,t.jsx)(n.code,{children:"grubby"}),", the modification takes effect immediately after you restart the server. The sample command is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'grubby --update-kernel=ALL --args="elevator=deadline"\n'})}),"\n",(0,t.jsx)(n.p,{children:"To view the kernel parameter settings, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"grubby --info=ALL\n"})}),"\n",(0,t.jsx)(n.h5,{id:"disable-transparent-huge-pages-thp",children:"Disable Transparent Huge Pages (THP)"}),"\n",(0,t.jsx)(n.p,{children:"You need to disable Transparent Huge Pages (THP), because it reduces database performance. The command is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'grubby --update-kernel=ALL --args="transparent_hugepage=never"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Check the status of THP:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat /sys/kernel/mm/*transparent_hugepage/enabled\n"})}),"\n",(0,t.jsx)(n.h5,{id:"disable-ipc-object-deletion",children:"Disable IPC object deletion"}),"\n",(0,t.jsxs)(n.p,{children:["Disable IPC object deletion by setting the value of ",(0,t.jsx)(n.code,{children:"RemoveIPC"})," to ",(0,t.jsx)(n.code,{children:"no"}),". You can set this parameter in the ",(0,t.jsx)(n.code,{children:"/etc/systemd/logind.conf"})," file of Cloudberry Database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"RemoveIPC=no\n"})}),"\n",(0,t.jsx)(n.p,{children:"After disabling it, run the following command to restart the server to make the disabling setting effective:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"service systemd-logind restart\n"})}),"\n",(0,t.jsx)(n.h5,{id:"ssh-connection-threshold",children:"SSH connection threshold"}),"\n",(0,t.jsxs)(n.p,{children:["To set the SSH connection threshold, you need to modify the ",(0,t.jsx)(n.code,{children:"MaxStartups"})," and ",(0,t.jsx)(n.code,{children:"MaxSessions"})," parameters in the ",(0,t.jsx)(n.code,{children:"/etc/ssh/sshd_config"})," configuration file. Both of the following writing methods are acceptable."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"MaxStartups 200\nMaxSessions 200\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"MaxStartups 10:30:200\nMaxSessions 200\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to restart the server to make the setting take effect:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"service sshd restart\n"})}),"\n",(0,t.jsx)(n.h5,{id:"clock-synchronization",children:"Clock synchronization"}),"\n",(0,t.jsx)(n.p,{children:"Cloudberry Database requires the clock synchronization to be configured for all hosts, and the clock synchronization service should be started when the host starts. You can choose one of the following synchronization methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use the coordinator node's time as the source, and other hosts synchronize the clock of the coordinator node host."}),"\n",(0,t.jsx)(n.li,{children:"Synchronize clocks using an external clock source."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The example in this document uses an external clock source for synchronization, that is, adding the following configuration to the ",(0,t.jsx)(n.code,{children:"/etc/chrony.conf"})," configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Use public servers from the pool.ntp.org project.\n# Please consider joining the pool (http://www.pool.ntp.org/join.html).\nserver 0.centos.pool.ntp.org iburst\n"})}),"\n",(0,t.jsx)(n.p,{children:"After setting, you can run the following command to check the clock synchronization status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl status chronyd\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-install-cloudberry-database",children:"Step 2. Install Cloudberry Database"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the RPM package to the home directory of ",(0,t.jsx)(n.code,{children:"gpadmin"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget -P /home/gpadmin <download address>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the RPM package in the ",(0,t.jsx)(n.code,{children:"/home/gpadmin"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["When running the following command, you need to replace ",(0,t.jsx)(n.code,{children:"<RPM package path>"})," with the actual RPM package path, as the ",(0,t.jsx)(n.code,{children:"root"})," user. During the installation, the directory ",(0,t.jsx)(n.code,{children:"/usr/local/cloudberry-db/"})," is automatically created."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /home/gpadmin\nyum install <RPM package path>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Grant the ",(0,t.jsx)(n.code,{children:"gpadmin"})," user the permission to access the ",(0,t.jsx)(n.code,{children:"/usr/local/cloudberry-db/"})," directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chown -R gpadmin:gpadmin /usr/local\nchown -R gpadmin:gpadmin /usr/local/cloudberry*\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure local SSH connection for the node. As the ",(0,t.jsx)(n.code,{children:"gpadmin "})," user, perform the following operations:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh-keygen\nssh-copy-id localhost\nssh `hostname` # Makes sure that the local SSH connection works well.\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-3-deploy-cloudberry-database-with-a-single-computing-node",children:"Step 3. Deploy Cloudberry Database with a single computing node"}),"\n",(0,t.jsxs)(n.p,{children:["Use the scripting tool ",(0,t.jsx)(n.a,{href:"/docs/sys-utilities/gpdemo",children:(0,t.jsx)(n.code,{children:"gpdemo"})})," to quickly deploy Cloudberry Database. ",(0,t.jsx)(n.code,{children:"gpdemo"})," is included in the RPM package and will be installed in the ",(0,t.jsx)(n.code,{children:"GPHOME/bin"})," directory along with the configuration scripts (gpinitsystem, gpstart, and gpstop). ",(0,t.jsx)(n.code,{children:"gpdemo"})," supports quickly deploying Cloudberry Database with a single computing node."]}),"\n",(0,t.jsxs)(n.p,{children:["In the above ",(0,t.jsx)(n.a,{href:"#set-mount-options-for-the-xfs-file-system",children:"setting mount options for the XFS file system"}),", the XFS  file system's data directory is mounted on ",(0,t.jsx)(n.code,{children:"/data0"}),". The following commands deploy a single-computing-node cluster in this data directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /data0\nNUM_PRIMARY_MIRROR_PAIRS=0 gpdemo  # Uses gpdemo\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"gpdemo"})," is running, a warning will be output ",(0,t.jsx)(n.code,{children:"[WARNING]: -SinglenodeMode has been enabled, no segment will be created."}),", which indicates that Cloudberry Database is currently being deployed in the single-computing-node mode."]}),"\n",(0,t.jsx)(n.h2,{id:"common-issues",children:"Common issues"}),"\n",(0,t.jsx)(n.h3,{id:"how-to-check-the-deployment-mode-of-a-cluster",children:"How to check the deployment mode of a cluster"}),"\n",(0,t.jsx)(n.p,{children:"Perform the following steps to confirm the deployment mode of the current Cloudberry Database cluster:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Connect to the coordinator node."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Execute ",(0,t.jsx)(n.code,{children:"SHOW gp_role;"})," to view the operating mode of the cluster."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"utility"})," is returned, it indicates that the cluster is in utility mode (maintenance mode), where only the coordinator node is available."]}),"\n",(0,t.jsxs)(n.p,{children:["Continue to run the ",(0,t.jsx)(n.code,{children:"SHOW gp_internal_is_singlenode;"})," command to see whether the cluster is in the single-computing-node mode."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"on"})," is returned, the current cluster is in the single-computing-node mode."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"off"})," is returned, the current cluster is in utility maintenance mode."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"dispatch"})," is returned, it means that the current cluster is a regular cluster containing segment nodes. You can further check the segment count, status, port, data directory, and other information of the cluster by running ",(0,t.jsx)(n.code,{children:"SELECT * FROM n;"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"where-is-the-data-directory",children:"Where is the data directory"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"gpdemo"})," automatically creates a data directory in the current path (",(0,t.jsx)(n.code,{children:"$PWD"}),"). For the single-computing-node deployment:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The default directory of the coordinator is ",(0,t.jsx)(n.code,{children:"./datadirs/singlenodedir"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The default directory of the coordinator standby node is ",(0,t.jsx)(n.code,{children:"./datadirs/standby"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsxs)(n.p,{children:["When you are deploying Cloudberry Database in the single-computing-node mode, the deployment script ",(0,t.jsx)(n.code,{children:"gpdemo"})," writes ",(0,t.jsx)(n.code,{children:"gp_internal_is_singlenode = true"})," to the configuration file ",(0,t.jsx)(n.code,{children:"postgresql.conf"})," and starts a coordinator and a coordinator standby node with the ",(0,t.jsx)(n.code,{children:"gp_role = utility"})," parameter setting. All data is written locally without a segment or data distribution."]}),"\n",(0,t.jsx)(n.h2,{id:"user-behavior-changes",children:"User-behavior changes"}),"\n",(0,t.jsx)(n.p,{children:"In the single-computing-node mode, the product behavior of Cloudberry Database has the following changes. You should pay attention to these changes before performing related operations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When you execute ",(0,t.jsx)(n.code,{children:"CREATE TABLE"})," to create a table, the ",(0,t.jsx)(n.code,{children:"DISTRIBUTED BY"})," clause no longer takes effect. A warning is output: ",(0,t.jsx)(n.code,{children:"WARNING: DISTRIBUTED BY clause has no effect in singlenode mode"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"SCATTER BY"})," clause of the ",(0,t.jsx)(n.code,{children:"SELECT"})," statement is no longer effective. A warning is output: ",(0,t.jsx)(n.code,{children:"WARNING: SCATTER BY clause has no effect in singlenode mode"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Other statements that are not supported (for example, ",(0,t.jsx)(n.code,{children:"ALTER TABLE SET DISTRIBUTED BY"}),") are declined with an error."]}),"\n",(0,t.jsxs)(n.li,{children:["The lock level of ",(0,t.jsx)(n.code,{children:"UPDATE"})," and  ",(0,t.jsx)(n.code,{children:"DELETE"})," statements will be reduced from  ",(0,t.jsx)(n.code,{children:"ExclusiveLock"})," to  ",(0,t.jsx)(n.code,{children:"RowExclusiveLock"})," to provide better concurrency performance, because there is only a single node without global transactions or global deadlocks. This behavior is consistent with PostgreSQL."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var t=s(67294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);