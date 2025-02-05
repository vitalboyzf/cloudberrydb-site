"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9975],{58802:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(85893),t=n(11151);const o={title:"gpexpand"},r="gpexpand",a={id:"sys-utilities/gpexpand",title:"gpexpand",description:"Expands an existing Cloudberry Database across new hosts in the system.",source:"@site/docs/sys-utilities/gpexpand.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpexpand",permalink:"/docs/sys-utilities/gpexpand",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpexpand.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"Feb 5, 2025",frontMatter:{title:"gpexpand"},sidebar:"docsbars",previous:{title:"gpdemo",permalink:"/docs/sys-utilities/gpdemo"},next:{title:"gpfdist",permalink:"/docs/sys-utilities/gpfdist"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Specify hosts using hostnames or IP addresses",id:"specify-hosts-using-hostnames-or-ip-addresses",level:2},{value:"Use host systems with multiple NICs",id:"use-host-systems-with-multiple-nics",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"gpexpand",children:"gpexpand"}),"\n",(0,i.jsx)(s.p,{children:"Expands an existing Cloudberry Database across new hosts in the system."}),"\n",(0,i.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"gpexpand [{-f|--hosts-file} <hosts_file>]\n\xa0\xa0\xa0\xa0\xa0\xa0  | {-i|--input} <input_file> [-B <batch_size>]\n\xa0\xa0\xa0\xa0\xa0   | [{-d | --duration} <hh:mm:ss> | {-e|--end} '<YYYY-MM-DD hh:mm:ss>'] \n          [-a|-analyze] \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  [-n  <parallel_processes>]\n\xa0\xa0\xa0\xa0\xa0\xa0  | {-r|--rollback}\n\xa0\xa0\xa0\xa0\xa0\xa0  | {-c|--clean}\n        [-v|--verbose] [-s|--silent]\n        [{-t|--tardir} <directory> ]\n        [-S|--simple-progress ]\n\ngpexpand -? | -h | --help \n\ngpexpand --version\n"})}),"\n",(0,i.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["You are logged in as the Cloudberry Database superuser (",(0,i.jsx)(s.code,{children:"gpadmin"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:["The new segment hosts have been installed and configured as per the existing segment hosts. This involves:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Configuring the hardware and OS"}),"\n",(0,i.jsx)(s.li,{children:"Installing the Cloudberry software"}),"\n",(0,i.jsxs)(s.li,{children:["Creating the ",(0,i.jsx)(s.code,{children:"gpadmin"})," user account"]}),"\n",(0,i.jsx)(s.li,{children:"Exchanging SSH keys."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"Enough disk space on your segment hosts to temporarily hold a copy of your largest table."}),"\n",(0,i.jsxs)(s.li,{children:["When redistributing data, Cloudberry Database must be running in production mode. Cloudberry Database cannot be running in restricted mode or in coordinator mode. The ",(0,i.jsx)(s.code,{children:"gpstart"})," options ",(0,i.jsx)(s.code,{children:"-R"})," or ",(0,i.jsx)(s.code,{children:"-m"})," cannot be specified to start Cloudberry Database."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," These utilities cannot be run while ",(0,i.jsx)(s.code,{children:"gpexpand"})," is performing segment initialization."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"gpbackup"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"gpcheckcat"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"gpconfig"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"gppkg"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"gprestore"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Important"})," When expanding a Cloudberry Database system, you must deactivate Cloudberry interconnect proxies before adding new hosts and segment instances to the system, and you must update the ",(0,i.jsx)(s.code,{children:"gp_interconnect_proxy_addresses"})," parameter with the newly-added segment instances before you re-enable interconnect proxies."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"gpexpand"})," utility performs system expansion in two phases: segment instance initialization and then table data redistribution."]}),"\n",(0,i.jsxs)(s.p,{children:["In the initialization phase, ",(0,i.jsx)(s.code,{children:"gpexpand"})," runs with an input file that specifies data directories, dbid values, and other characteristics of the new segment instances. You can create the input file manually, or by following the prompts in an interactive interview."]}),"\n",(0,i.jsxs)(s.p,{children:["If you choose to create the input file using the interactive interview, you can optionally specify a file containing a list of expansion system hosts. If your platform or command shell limits the length of the list of hostnames that you can type when prompted in the interview, specifying the hosts with ",(0,i.jsx)(s.code,{children:"-f"})," may be mandatory."]}),"\n",(0,i.jsx)(s.p,{children:"In addition to initializing the segment instances, the initialization phase performs these actions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates an expansion schema named ",(0,i.jsx)(s.em,{children:"gpexpand"})," in the postgres database to store the status of the expansion operation, including detailed status for tables."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["In the table data redistribution phase, ",(0,i.jsx)(s.code,{children:"gpexpand"})," redistributes table data to rebalance the data across the old and new segment instances."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," Data redistribution should be performed during low-use hours. Redistribution can be divided into batches over an extended period."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["To begin the redistribution phase, run ",(0,i.jsx)(s.code,{children:"gpexpand"})," with no options or with the ",(0,i.jsx)(s.code,{children:"-d"})," (duration), ",(0,i.jsx)(s.code,{children:"-e"})," (end time), or ",(0,i.jsx)(s.code,{children:"-i"})," options. If you specify an end time or duration, then the utility redistributes tables in the expansion schema until the specified end time or duration is reached. If you specify ",(0,i.jsx)(s.code,{children:"-i"})," or no options, then the utility redistribution phase continues until all tables in the expansion schema are reorganized. Each table is reorganized using ",(0,i.jsx)(s.code,{children:"ALTER TABLE"})," commands to rebalance the tables across new segments, and to set tables to their original distribution policy. If ",(0,i.jsx)(s.code,{children:"gpexpand"})," completes the reorganization of all tables, it displays a success message and ends."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," This utility uses secure shell (SSH) connections between systems to perform its tasks. In large Cloudberry Database deployments, cloud deployments, or deployments with a large number of segments per host, this utility may exceed the host's maximum threshold for unauthenticated connections. Consider updating the SSH ",(0,i.jsx)(s.code,{children:"MaxStartups"})," and ",(0,i.jsx)(s.code,{children:"MaxSessions"})," configuration parameters to increase this threshold. For more information about SSH configuration options, refer to the SSH documentation for your Linux distribution."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-a | --analyze"})})}),"\n",(0,i.jsxs)(s.p,{children:["Run ",(0,i.jsx)(s.code,{children:"ANALYZE"})," to update the table statistics after expansion. The default is to not run ",(0,i.jsx)(s.code,{children:"ANALYZE"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-B batch_size"})})}),"\n",(0,i.jsxs)(s.p,{children:["Batch size of remote commands to send to a given host before making a one-second pause. Default is ",(0,i.jsx)(s.code,{children:"16"}),". Valid values are 1-128."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"gpexpand"})," utility issues a number of setup commands that may exceed the host's maximum threshold for unauthenticated connections as defined by ",(0,i.jsx)(s.code,{children:"MaxStartups"})," in the SSH daemon configuration. The one-second pause allows authentications to be completed before ",(0,i.jsx)(s.code,{children:"gpexpand"})," issues any more commands."]}),"\n",(0,i.jsxs)(s.p,{children:["The default value does not normally need to be changed. However, it may be necessary to reduce the maximum number of commands if ",(0,i.jsx)(s.code,{children:"gpexpand"})," fails with connection errors such as ",(0,i.jsx)(s.code,{children:"'ssh_exchange_identification: Connection closed by remote host.'"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-c | --clean"})})}),"\n",(0,i.jsx)(s.p,{children:"Remove the expansion schema."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-d | --duration hh:mm:ss"})})}),"\n",(0,i.jsx)(s.p,{children:"Duration of the expansion session from beginning to end."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-e | --end 'YYYY-MM-DD hh:mm:ss'"})})}),"\n",(0,i.jsx)(s.p,{children:"Ending date and time for the expansion session."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-f | --hosts-file filename"})})}),"\n",(0,i.jsx)(s.p,{children:"Specifies the name of a file that contains a list of new hosts for system expansion. Each line of the file must contain a single host name."}),"\n",(0,i.jsxs)(s.p,{children:["This file can contain hostnames with or without network interfaces specified. The ",(0,i.jsx)(s.code,{children:"gpexpand"})," utility handles either case, adding interface numbers to end of the hostname if the original nodes are configured with multiple network interfaces."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," The Cloudberry Database segment host naming convention is ",(0,i.jsx)(s.code,{children:"sdwN"})," where ",(0,i.jsx)(s.code,{children:"sdw"})," is a prefix and ",(0,i.jsx)(s.code,{children:"N"})," is an integer. For example, ",(0,i.jsx)(s.code,{children:"sdw1"}),", ",(0,i.jsx)(s.code,{children:"sdw2"})," and so on. For hosts with multiple interfaces, the convention is to append a dash (",(0,i.jsx)(s.code,{children:"-"}),") and number to the host name. For example, ",(0,i.jsx)(s.code,{children:"sdw1-1"})," and ",(0,i.jsx)(s.code,{children:"sdw1-2"})," are the two interface names for host ",(0,i.jsx)(s.code,{children:"sdw1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For information about using a hostname or IP address, see ",(0,i.jsx)(s.a,{href:"#specify-hosts-using-hostnames-or-ip-addresses",children:"Specifying Hosts using Hostnames or IP Addresses"}),". Also, see ",(0,i.jsx)(s.a,{href:"#using-host-systems-with-multiple-nics",children:"Using Host Systems with Multiple NICs"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-i | --input input_file"})})}),"\n",(0,i.jsx)(s.p,{children:"Specifies the name of the expansion configuration file, which contains one line for each segment to be added in the format of:"}),"\n",(0,i.jsx)(s.p,{children:"hostname|address|port|datadir|dbid|content|preferred_role"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-n parallel_processes"})})}),"\n",(0,i.jsx)(s.p,{children:"The number of tables to redistribute simultaneously. Valid values are 1 - 96."}),"\n",(0,i.jsxs)(s.p,{children:["Each table redistribution process requires two database connections: one to alter the table, and another to update the table's status in the expansion schema. Before increasing ",(0,i.jsx)(s.code,{children:"-n"}),", check the current value of the server configuration parameter ",(0,i.jsx)(s.code,{children:"max_connections"})," and make sure the maximum connection limit is not exceeded."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-r | --rollback"})})}),"\n",(0,i.jsx)(s.p,{children:"Roll back a failed expansion setup operation."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-s | --silent"})})}),"\n",(0,i.jsx)(s.p,{children:"Runs in silent mode. Does not prompt for confirmation to proceed on warnings."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-S | --simple-progress"})})}),"\n",(0,i.jsxs)(s.p,{children:["If specified, the ",(0,i.jsx)(s.code,{children:"gpexpand"})," utility records only the minimum progress information in the Cloudberry Database table ",(0,i.jsx)(s.em,{children:"gpexpand.expansion_progress"}),". The utility does not record the relation size information and status information in the table ",(0,i.jsx)(s.em,{children:"gpexpand.status_detail"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Specifying this option can improve performance by reducing the amount of progress information written to the ",(0,i.jsx)(s.em,{children:"gpexpand"})," tables."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"[-t | --tardir] directory"})})}),"\n",(0,i.jsxs)(s.p,{children:["The fully qualified path to a directory on segment hosts where the ",(0,i.jsx)(s.code,{children:"gpexpand"})," utility copies a temporary tar file. The file contains Cloudberry Database files that are used to create segment instances. The default directory is the user home directory."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-v | --verbose"})})}),"\n",(0,i.jsx)(s.p,{children:"Verbose debugging output. With this option, the utility will output all DDL and DML used to expand the database."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"--version"})})}),"\n",(0,i.jsx)(s.p,{children:"Display the utility's version number and exit."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-? | -h | --help"})})}),"\n",(0,i.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,i.jsx)(s.h2,{id:"specify-hosts-using-hostnames-or-ip-addresses",children:"Specify hosts using hostnames or IP addresses"}),"\n",(0,i.jsx)(s.p,{children:"When expanding a Cloudberry Database system, you can specify either a hostname or an IP address for the value."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If you specify a hostname, the resolution of the hostname to an IP address should be done locally for security. For example, you should use entries in a local ",(0,i.jsx)(s.code,{children:"/etc/hosts"})," file to map a hostname to an IP address. The resolution of a hostname to an IP address should not be performed by an external service such as a public DNS server. You must stop the Cloudberry system before you change the mapping of a hostname to a different IP address."]}),"\n",(0,i.jsx)(s.li,{children:"If you specify an IP address, the address should not be changed after the initial configuration. When segment mirroring is enabled, replication from the primary to the mirror segment will fail if the IP address changes from the configured value. For this reason, you should use a hostname when expanding a Cloudberry Database system unless you have a specific requirement to use IP addresses."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["When expanding a Cloudberry system, ",(0,i.jsx)(s.code,{children:"gpexpand"})," populates ",(0,i.jsx)(s.code,{children:"gp_segment_configuration"})," catalog table with the new segment instance information. Cloudberry Database uses the ",(0,i.jsx)(s.code,{children:"address"})," value of the ",(0,i.jsx)(s.code,{children:"gp_segment_configuration"})," catalog table when looking up host systems for Cloudberry interconnect (internal) communication between the coordinator and segment instances and between segment instances, and for other internal communication."]}),"\n",(0,i.jsx)(s.h2,{id:"use-host-systems-with-multiple-nics",children:"Use host systems with multiple NICs"}),"\n",(0,i.jsx)(s.p,{children:"If host systems are configured with multiple NICs, you can expand a Cloudberry Database system to use each NIC as a Cloudberry host system. You must ensure that the host systems are configured with sufficient resources to support all the segment instances being added to the host. Also, if you enable segment mirroring, you must ensure that the expanded Cloudberry system configuration supports failover if a host system fails."}),"\n",(0,i.jsxs)(s.p,{children:["For example, this is a ",(0,i.jsx)(s.code,{children:"gpexpand"})," configuration file for a simple Cloudberry system. The segment host ",(0,i.jsx)(s.code,{children:"gp7s1"})," and ",(0,i.jsx)(s.code,{children:"gp7s2"})," are configured with two NICs, ",(0,i.jsx)(s.code,{children:"-s1"})," and ",(0,i.jsx)(s.code,{children:"-s2"}),", where the Cloudberry Database system uses each NIC as a host system."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"gp7s1-s2|gp7s1-s2|40001|/data/data1/gpseg2|6|2|p\ngp7s2-s1|gp7s2-s1|50000|/data/mirror1/gpseg2|9|2|m\ngp7s2-s1|gp7s2-s1|40000|/data/data1/gpseg3|7|3|p\ngp7s1-s2|gp7s1-s2|50001|/data/mirror1/gpseg3|8|3|m\n"})}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(s.p,{children:["Run ",(0,i.jsx)(s.code,{children:"gpexpand"})," with an input file to initialize new segments and create the expansion schema in the postgres database:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ gpexpand -i input_file\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Run ",(0,i.jsx)(s.code,{children:"gpexpand"})," for sixty hours maximum duration to redistribute tables to new segments:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"$ gpexpand -d 60:00:00\n"})}),"\n",(0,i.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/sys-utilities/gpssh-exkeys",children:"gpssh-exkeys"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var i=n(67294);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);