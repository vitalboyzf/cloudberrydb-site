"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8266],{96007:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(85893),n=t(11151);const i={title:"gpstate"},d="gpstate",o={id:"sys-utilities/gpstate",title:"gpstate",description:"Shows the status of a running Cloudberry Database system.",source:"@site/docs/sys-utilities/gpstate.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpstate",permalink:"/zh/docs/sys-utilities/gpstate",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpstate.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1732764009,formattedLastUpdatedAt:"2024\u5e7411\u670828\u65e5",frontMatter:{title:"gpstate"},sidebar:"docsbars",previous:{title:"gpstart",permalink:"/zh/docs/sys-utilities/gpstart"},next:{title:"gpstop",permalink:"/zh/docs/sys-utilities/gpstop"}},a={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Output Field Definitions",id:"output-field-definitions",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"gpstate",children:"gpstate"}),"\n",(0,r.jsx)(s.p,{children:"Shows the status of a running Cloudberry Database system."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"gpstate [-d <coordinator_data_directory>] [-B <parallel_processes>] \n          [-s | -b | -Q | -e] [-m | -c] [-p] [-i] [-f] [-v | -q] | -x \n          [-l\xa0<log_directory>]\n\ngpstate -? | -h | --help\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"gpstate"})," utility displays information about a running Cloudberry Database instance. There is additional information you may want to know about a Cloudberry Database system, since it is comprised of multiple PostgreSQL database instances (segments) spanning multiple machines. The ",(0,r.jsx)(s.code,{children:"gpstate"})," utility provides additional status information for a Cloudberry Database system, such as:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Which segments are down."}),"\n",(0,r.jsx)(s.li,{children:"Coordinator and segment configuration information (hosts, data directories, etc.)."}),"\n",(0,r.jsx)(s.li,{children:"The ports used by the system."}),"\n",(0,r.jsx)(s.li,{children:"A mapping of primary segments to their corresponding mirror segments."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-b (brief status)"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional. Display a brief summary of the state of the Cloudberry Database system. This is the default option."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-B parallel_processes"})})}),"\n",(0,r.jsxs)(s.p,{children:["The number of segments to check in parallel. You are expected to specify a number following this option, for example, ",(0,r.jsx)(s.code,{children:"gpstate -B 3"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-c (show primary to mirror mappings)"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional. Display mapping of primary segments to their corresponding mirror segments."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-d coordinator_data_directory"})})}),"\n",(0,r.jsxs)(s.p,{children:["Optional. The coordinator data directory. You are expected to specify the data directory following this option, for example, ",(0,r.jsx)(s.code,{children:"gpstate -d /data/master/gpseg-1"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-e (show segments with mirror status issues)"})})}),"\n",(0,r.jsx)(s.p,{children:"Show details on primary/mirror segment pairs that have potential issues. These issues include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Whether any segments are down."}),"\n",(0,r.jsxs)(s.li,{children:["Whether any primary-mirror segment pairs are out of sync \u2013 including information on how many bytes are remaining to sync (as displayed in the ",(0,r.jsx)(s.code,{children:"WAL sync remaining bytes"})," output field)."]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"gpstate -e"}),"does not display segment pairs that are in sync."]})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Whether any primary-mirror segment pairs are not in their preferred roles."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-f (show standby coordinator details)"})}),"\nDisplay details of the standby coordinator host if configured."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-i (show Cloudberry Database version)"})})}),"\n",(0,r.jsx)(s.p,{children:"Display the Cloudberry Database software version information for each instance."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-l logfile_directory"})})}),"\n",(0,r.jsxs)(s.p,{children:["The directory to write the log file. Defaults to ",(0,r.jsx)(s.code,{children:"~/gpAdminLogs"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-m (list mirrors)"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional. List the mirror segment instances in the system and their current role."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-p (show ports)"})})}),"\n",(0,r.jsx)(s.p,{children:"List the port numbers used throughout the Cloudberry Database system."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-q (no screen output)"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional. Run in quiet mode. Except for warning messages, command output is not displayed on the screen. However, this information is still written to the log file."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-Q (quick status)"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional. Checks segment status in the system catalog on the coordinator host. Does not poll the segments for status."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-s (detailed status)"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional. Displays detailed status information about the Cloudberry Database system."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-v (verbose output)"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional. Displays error messages and outputs detailed status and progress information."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-x (expand)"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional. Displays detailed information about the progress and state of a Cloudberry Database system expansion."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-? | -h | --help (help)"})})}),"\n",(0,r.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,r.jsx)(s.h2,{id:"output-field-definitions",children:"Output Field Definitions"}),"\n",(0,r.jsxs)(s.p,{children:["The following output fields are reported by ",(0,r.jsx)(s.code,{children:"gpstate -s"})," for the coordinator:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Output Data"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Coordinator host"}),(0,r.jsx)(s.td,{children:"host name of the coordinator"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Coordinator postgres process ID"}),(0,r.jsx)(s.td,{children:"PID of the coordinator database listener process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Coordinator data directory"}),(0,r.jsx)(s.td,{children:"file system location of the coordinator data directory"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Coordinator port"}),(0,r.jsxs)(s.td,{children:["port of the coordinator ",(0,r.jsx)(s.code,{children:"postgres"})," database listener process"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Coordinator current role"}),(0,r.jsxs)(s.td,{children:["dispatch = regular operating mode",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"utility = maintenance mode"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CloudberryDB array configuration type"}),(0,r.jsxs)(s.td,{children:["Standard = one NIC per host",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Multi-Home = multiple NICs per host"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CloudberryDB initsystem version"}),(0,r.jsx)(s.td,{children:"version of Cloudberry Database when system was first initialized"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CloudberryDB current version"}),(0,r.jsx)(s.td,{children:"current version of Cloudberry Database"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Postgres version"}),(0,r.jsx)(s.td,{children:"version of PostgreSQL that Cloudberry Database is based on"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CloudberryDB mirroring status"}),(0,r.jsx)(s.td,{children:"physical mirroring or none"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Coordinator standby"}),(0,r.jsx)(s.td,{children:"host name of the standby coordinator"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Standby coordinator state"}),(0,r.jsx)(s.td,{children:"status of the standby coordinator: active or passive"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["The following output fields are reported by ",(0,r.jsx)(s.code,{children:"gpstate -s"})," for each primary segment:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Output Data"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Hostname"}),(0,r.jsx)(s.td,{children:"system-configured host name"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Address"}),(0,r.jsx)(s.td,{children:"network address host name (NIC name)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Datadir"}),(0,r.jsx)(s.td,{children:"file system location of segment data directory"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Port"}),(0,r.jsxs)(s.td,{children:["port number of segment ",(0,r.jsx)(s.code,{children:"postgres"})," database listener process"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Current Role"}),(0,r.jsx)(s.td,{children:"current role of a segment: Mirror or Primary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Preferred Role"}),(0,r.jsx)(s.td,{children:"role at system initialization time: Mirror or Primary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Mirror Status"}),(0,r.jsxs)(s.td,{children:["status of a primary/mirror segment pair:",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Synchronized = data is up to date on both",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Not in Sync = the mirror segment has not caught up to the primary segment"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Current write location"}),(0,r.jsx)(s.td,{children:"Location where primary segment is writing new logs as they come in"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Bytes remaining to send to mirror"}),(0,r.jsx)(s.td,{children:"Bytes remaining to be sent from primary to mirror"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Active PID"}),(0,r.jsx)(s.td,{children:"active process ID of a segment"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Configuration reports status as"}),(0,r.jsx)(s.td,{children:"segment status as reported in the system catalog: Up or Down"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Database status"}),(0,r.jsx)(s.td,{children:"status of Cloudberry Database to incoming requests: Up, Down, or Suspended. A Suspended state means database activity is temporarily paused while a segment transitions from one state to another."})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["The following output fields are reported by ",(0,r.jsx)(s.code,{children:"gpstate -s"})," for each mirror segment:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Output Data"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Hostname"}),(0,r.jsx)(s.td,{children:"system-configured host name"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Address"}),(0,r.jsx)(s.td,{children:"network address host name (NIC name)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Datadir"}),(0,r.jsx)(s.td,{children:"file system location of segment data directory"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Port"}),(0,r.jsxs)(s.td,{children:["port number of segment ",(0,r.jsx)(s.code,{children:"postgres"})," database listener process"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Current Role"}),(0,r.jsx)(s.td,{children:"current role of a segment: Mirror or Primary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Preferred Role"}),(0,r.jsx)(s.td,{children:"role at system initialization time: Mirror or Primary"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Mirror Status"}),(0,r.jsxs)(s.td,{children:["status of a primary/mirror segment pair:",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Synchronized = data is up to date on both",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Not in Sync = the mirror segment has not caught up to the primary segment"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"WAL Sent Location"}),(0,r.jsx)(s.td,{children:"Log location up to which the primary segment has sent log data to the mirror"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"WAL Flush Location"}),(0,r.jsx)(s.td,{children:"Log location up to which the mirror segment has flushed the log data to disk"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"WAL Replay Location"}),(0,r.jsx)(s.td,{children:"Log location up to which the mirror segment has replayed logs locally"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Bytes received but remain to flush"}),(0,r.jsx)(s.td,{children:"Difference between flush log location and sent log location"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Bytes received but remain to replay"}),(0,r.jsx)(s.td,{children:"Difference between replay log location and sent log location"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Active PID"}),(0,r.jsx)(s.td,{children:"active process ID of a segment"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Configuration reports status as"}),(0,r.jsx)(s.td,{children:"segment status as reported in the system catalog: Up or Down"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Database status"}),(0,r.jsx)(s.td,{children:"status of Cloudberry Database to incoming requests: Up, Down, or Suspended. A Suspended state means database activity is temporarily paused while a segment transitions from one state to another."})]})]})]}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.p,{children:["When there is no connection between a primary segment and its mirror, ",(0,r.jsx)(s.code,{children:"gpstate -s"})," displays ",(0,r.jsx)(s.code,{children:"Unknown"})," in the following fields:"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Bytes remaining to send to mirror"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"WAL Sent Location"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"WAL Flush Location"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"WAL Replay Location"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Bytes received but remain to flush"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Bytes received but remain to replay"})}),"\n"]})]}),"\n",(0,r.jsxs)(s.p,{children:["The following output fields are reported by ",(0,r.jsx)(s.code,{children:"gpstate -f"})," for standby coordinator replication status:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Output Data"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Standby address"}),(0,r.jsx)(s.td,{children:"hostname of the standby coordinator"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Standby data dir"}),(0,r.jsx)(s.td,{children:"file system location of the standby coordinator data directory"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Standby port"}),(0,r.jsxs)(s.td,{children:["port of the standby coordinator ",(0,r.jsx)(s.code,{children:"postgres"})," database listener process"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Standby PID"}),(0,r.jsx)(s.td,{children:"process ID of the standby coordinator"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Standby status"}),(0,r.jsx)(s.td,{children:"status of the standby coordinator: Standby host passive"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"WAL Sender State"}),(0,r.jsx)(s.td,{children:"write-ahead log (WAL) streaming state: streaming, startup,backup, catchup"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Sync state"}),(0,r.jsx)(s.td,{children:"WAL sender synchronization state: sync"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Sent Location"}),(0,r.jsx)(s.td,{children:"WAL sender transaction log (xlog) record sent location"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Flush Location"}),(0,r.jsx)(s.td,{children:"WAL receiver xlog record flush location"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Replay Location"}),(0,r.jsx)(s.td,{children:"standby xlog record replay location"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.p,{children:"Show detailed status information of a Cloudberry Database system:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"gpstate -s\n"})}),"\n",(0,r.jsx)(s.p,{children:"Do a quick check for down segments in the coordinator host system catalog:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"gpstate -Q\n"})}),"\n",(0,r.jsx)(s.p,{children:"Show information about mirror segment instances:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"gpstate -m\n"})}),"\n",(0,r.jsx)(s.p,{children:"Show information about the standby coordinator configuration:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"gpstate -f\n"})}),"\n",(0,r.jsx)(s.p,{children:"Display the Cloudberry Database software version information:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"gpstate -i\n"})}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpstart",children:"gpstart"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpinitsystem",children:"gpexpand"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sys-utilities/gplogfilter",children:"gplogfilter"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>d});var r=t(67294);const n={},i=r.createContext(n);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);