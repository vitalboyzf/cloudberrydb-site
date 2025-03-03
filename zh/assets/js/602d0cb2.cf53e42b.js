"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[559],{88334:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>h,toc:()=>r});var t=n(85893),o=n(11151);const i={title:"gpsync"},c="gpsync",h={id:"sys-utilities/gpsync",title:"gpsync",description:"Copies files between multiple hosts at once.",source:"@site/docs/sys-utilities/gpsync.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpsync",permalink:"/zh/docs/sys-utilities/gpsync",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpsync.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740637488,formattedLastUpdatedAt:"2025\u5e742\u670827\u65e5",frontMatter:{title:"gpsync"},sidebar:"docsbars",previous:{title:"gpstop",permalink:"/zh/docs/sys-utilities/gpstop"},next:{title:"pg_checksums",permalink:"/zh/docs/sys-utilities/pg-checksums"}},l={},r=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"gpsync",children:"gpsync"}),"\n",(0,t.jsx)(s.p,{children:"Copies files between multiple hosts at once."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"gpsync { -f <hostfile_gpssh> | -h <hostname> [-h <hostname> ...] } \n      [-a][-J <character>] [-v] [[<user>@]<hostname>:]<file_to_copy> [...]\n      [[<user>@]<hostname>:]<copy_to_path> \n\ngpsync -? \n\ngpsync --version\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"gpsync"})," utility allows you to copy one or more files from the specified hosts to other specified hosts in one command using remote sync. For example, you can copy a file from the Cloudberry Database coordinator host to all of the segment hosts at the same time."]}),"\n",(0,t.jsxs)(s.p,{children:["To specify the hosts involved in the remote sync session, use the ",(0,t.jsx)(s.code,{children:"-f"})," option to specify a file containing a list of host names, or use the ",(0,t.jsx)(s.code,{children:"-h"})," option to name single host names on the command-line. At least one host name (",(0,t.jsx)(s.code,{children:"-h"}),") or a host file (",(0,t.jsx)(s.code,{children:"-f"}),") is required. The ",(0,t.jsx)(s.code,{children:"-J"})," option allows you to specify a single character to substitute for the hostname in the ",(0,t.jsx)(s.code,{children:"copy from"})," and ",(0,t.jsx)(s.code,{children:"copy to"})," destination strings. If ",(0,t.jsx)(s.code,{children:"-J"})," is not specified, the default substitution character is an equal sign (",(0,t.jsx)(s.code,{children:"="}),"). For example, the following command will copy ",(0,t.jsx)(s.code,{children:".bashrc"})," from the local host to ",(0,t.jsx)(s.code,{children:"/home/gpadmin"})," on all hosts named in ",(0,t.jsx)(s.code,{children:"hostfile_gpssh"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"gpsync -f hostfile_gpssh .bashrc =:/home/gpadmin\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If a user name is not specified in the host list or with user",(0,t.jsx)(s.code,{children:"@"})," in the file path, ",(0,t.jsx)(s.code,{children:"gpsync"})," will copy files as the currently logged in user. To determine the currently logged in user, do a ",(0,t.jsx)(s.code,{children:"whoami"})," command. By default, ",(0,t.jsx)(s.code,{children:"gpsync"})," goes to ",(0,t.jsx)(s.code,{children:"$HOME"})," of the session user on the remote hosts after login. To ensure the file is copied to the correct location on the remote hosts, it is recommended that you use absolute paths."]}),"\n",(0,t.jsxs)(s.p,{children:["Before using ",(0,t.jsx)(s.code,{children:"gpsync"}),", you must have a trusted host setup between the hosts involved in the remote sync session. You can use the utility ",(0,t.jsx)(s.code,{children:"gpssh-exkeys"})," to update the known host files and exchange public keys between hosts if you have not done so already."]}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-f hostfile_gpssh"})})}),"\n",(0,t.jsx)(s.p,{children:"Specifies the name of a file that contains a list of hosts that will participate in this remote sync session. The syntax of the host file is one host per line as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"<hostname>\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-h hostname"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies a single host name that will participate in this remote sync session. You can use the ",(0,t.jsx)(s.code,{children:"-h"})," option multiple times to specify multiple host names."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-a"})})}),"\n",(0,t.jsx)(s.p,{children:"Sync source and target directories in archival mode."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-J character"})})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"-J"})," option allows you to specify a single character to substitute for the hostname in the ",(0,t.jsx)(s.code,{children:"copy from"})," and ",(0,t.jsx)(s.code,{children:"copy to"})," destination strings. If ",(0,t.jsx)(s.code,{children:"-J"})," is not specified, the default substitution character is an equal sign (",(0,t.jsx)(s.code,{children:"="}),")."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-v (verbose mode)"})})}),"\n",(0,t.jsx)(s.p,{children:"Optional. Reports additional messages in addition to the remote sync command output."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"file_to_copy"})})}),"\n",(0,t.jsx)(s.p,{children:"Required. The file name (or absolute path) of a file that you want to copy to other hosts (or file locations). This can be either a file on the local host or on another named host."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"copy_to_path"})})}),"\n",(0,t.jsxs)(s.p,{children:["Required. The path where you want the file(s) to be copied on the named hosts. If an absolute path is not used, the file will be copied relative to ",(0,t.jsx)(s.code,{children:"$HOME"})," of the session user. You can also use the equal sign '",(0,t.jsx)(s.code,{children:"="}),"' (or another character that you specify with the ",(0,t.jsx)(s.code,{children:"-J"})," option) in place of a hostname. This will then substitute in each host name as specified in the supplied host file (",(0,t.jsx)(s.code,{children:"-f"}),") or with the ",(0,t.jsx)(s.code,{children:"-h"})," option."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-? (help)"})})}),"\n",(0,t.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--version"})})}),"\n",(0,t.jsx)(s.p,{children:"Displays the version of this utility."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Copy the file named ",(0,t.jsx)(s.code,{children:"installer.tar"})," to ",(0,t.jsx)(s.code,{children:"/"})," on all the hosts in the file ",(0,t.jsx)(s.code,{children:"hostfile_gpssh"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"gpsync -f hostfile_gpssh installer.tar =:/\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Copy the file named myfuncs.so to the specified location on the hosts named ",(0,t.jsx)(s.code,{children:"sdw1"})," and ",(0,t.jsx)(s.code,{children:"sdw2"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"gpsync -h sdw1 -h sdw2 myfuncs.so =:/usr/local/cloudberry-db/lib\n"})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpssh",children:"gpssh"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpssh-exkeys",children:"gpssh-exkeys"})]})]})}function a(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>h,a:()=>c});var t=n(67294);const o={},i=t.createContext(o);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);