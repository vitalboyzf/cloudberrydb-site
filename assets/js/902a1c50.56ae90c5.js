"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3639],{66599:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var r=i(85893),t=i(11151);const n={title:"gpmovemirrors"},o="gpmovemirrors",d={id:"sys-utilities/gpmovemirrors",title:"gpmovemirrors",description:"Moves mirror segment instances to new locations.",source:"@site/docs/sys-utilities/gpmovemirrors.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpmovemirrors",permalink:"/docs/sys-utilities/gpmovemirrors",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpmovemirrors.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"gpmovemirrors"},sidebar:"docsbars",previous:{title:"gpmemwatcher",permalink:"/docs/sys-utilities/gpmemwatcher"},next:{title:"gppkg",permalink:"/docs/sys-utilities/gppkg"}},l={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"gpmovemirrors",children:"gpmovemirrors"}),"\n",(0,r.jsx)(s.p,{children:"Moves mirror segment instances to new locations."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"gpmovemirrors -i <move_config_file> [-d <coordinator_data_directory>] \n          [-l <logfile_directory>] [-b <segment_batch_size>]\n          [-B <batch_size>] [-v] [--hba-hostnames <boolean>] \n\ngpmovemirrors -? \n\ngpmovemirrors --version\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"gpmovemirrors"})," utility moves mirror segment instances to new locations. You may want to move mirrors to new locations to optimize distribution or data storage."]}),"\n",(0,r.jsx)(s.p,{children:"By default, the utility will prompt you for the file system location(s) where it will move the mirror segment data directories."}),"\n",(0,r.jsxs)(s.p,{children:["You must make sure that the user who runs ",(0,r.jsx)(s.code,{children:"gpmovemirrors"})," (the ",(0,r.jsx)(s.code,{children:"gpadmin"})," user) has permissions to write to the data directory locations specified. You may want to create these directories on the segment hosts and ",(0,r.jsx)(s.code,{children:"chown"})," them to the appropriate user before running ",(0,r.jsx)(s.code,{children:"gpmovemirrors"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-b segment_batch_size"})})}),"\n",(0,r.jsxs)(s.p,{children:["The maximum number of segments per host to operate on in parallel. Valid values are ",(0,r.jsx)(s.code,{children:"1"})," to ",(0,r.jsx)(s.code,{children:"128"}),". If not specified, the utility will start recovering up to 64 segments in parallel on each host."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-B batch_size"})})}),"\n",(0,r.jsxs)(s.p,{children:["The number of hosts to work on in parallel. If not specified, the utility will start working on up to 16 hosts in parallel. Valid values are ",(0,r.jsx)(s.code,{children:"1"})," to ",(0,r.jsx)(s.code,{children:"64"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-d coordinator_data_directory"})})}),"\n",(0,r.jsxs)(s.p,{children:["The coordinator data directory. If not specified, the value set for ",(0,r.jsx)(s.code,{children:"$COORDINATOR_DATA_DIRECTORY"})," will be used."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"--hba-hostnames boolean"})})}),"\n",(0,r.jsxs)(s.p,{children:["Optional. Controls whether this utility uses IP addresses or host names in the ",(0,r.jsx)(s.code,{children:"pg_hba.conf"})," file when updating this file with addresses that can connect to Cloudberry Database. When set to 0 -- the default value -- this utility uses IP addresses when updating this file. When set to 1, this utility uses host names when updating this file. For consistency, use the same value that was specified for ",(0,r.jsx)(s.code,{children:"HBA_HOSTNAMES"})," when the Cloudberry Database system was initialized."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-i move_config_file"})})}),"\n",(0,r.jsx)(s.p,{children:"A configuration file containing information about which mirror segments to move, and where to move them."}),"\n",(0,r.jsxs)(s.p,{children:["You must have one mirror segment listed for each primary segment in the system. Each line inside the configuration file has the following format (as per attributes in the ",(0,r.jsx)(s.code,{children:"gp_segment_configuration"})," catalog table):"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"<old_address>|<port>|<data_dir> <new_address>|<port>|<data_dir>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Where ",(0,r.jsx)(s.code,{children:"<old_address>"})," and ",(0,r.jsx)(s.code,{children:"<new_address>"})," are the host names or IP addresses of the segment hosts, ",(0,r.jsx)(s.code,{children:"<port>"})," is the communication port, and ",(0,r.jsx)(s.code,{children:"<data_dir>"})," is the segment instance data directory."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-l logfile_directory"})})}),"\n",(0,r.jsxs)(s.p,{children:["The directory to write the log file. Defaults to ",(0,r.jsx)(s.code,{children:"~/gpAdminLogs"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-v (verbose)"})})}),"\n",(0,r.jsx)(s.p,{children:"Sets logging output to verbose."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"--version (show utility version)"})})}),"\n",(0,r.jsx)(s.p,{children:"Displays the version of this utility."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-? (help)"})})}),"\n",(0,r.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.p,{children:"Moves mirrors from an existing Cloudberry Database system to a different set of hosts:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ gpmovemirrors -i move_config_file\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Where the ",(0,r.jsx)(s.code,{children:"move_config_file"})," looks something like this:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sdw2|50000|/data2/mirror/gpseg0 sdw3|50000|/data/mirror/gpseg0\nsdw2|50001|/data2/mirror/gpseg1 sdw4|50001|/data/mirror/gpseg1\nsdw3|50002|/data2/mirror/gpseg2 sdw1|50002|/data/mirror/gpseg2\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>o});var r=i(67294);const t={},n=r.createContext(t);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);