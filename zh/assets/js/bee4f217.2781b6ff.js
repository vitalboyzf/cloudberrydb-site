"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[857],{93605:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var l=s(85893),r=s(11151);const i={title:"\u900f\u660e\u6570\u636e\u52a0\u5bc6"},c="\u900f\u660e\u6570\u636e\u52a0\u5bc6",d={id:"security/transparent-data-encryption",title:"\u900f\u660e\u6570\u636e\u52a0\u5bc6",description:"\u4e3a\u4e86\u6ee1\u8db3\u4fdd\u62a4\u7528\u6237\u6570\u636e\u5b89\u5168\u7684\u9700\u6c42\uff0cCloudberry Database \u652f\u6301\u900f\u660e\u6570\u636e\u52a0\u5bc6\uff08Transparent Data Encryption\uff0c\u7b80\u79f0  TDE\uff09\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/transparent-data-encryption.md",sourceDirName:"security",slug:"/security/transparent-data-encryption",permalink:"/zh/docs/security/transparent-data-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/security/transparent-data-encryption.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"\u900f\u660e\u6570\u636e\u52a0\u5bc6"},sidebar:"docsbars",previous:{title:"Set Password Profile",permalink:"/zh/docs/security/set-password-profile"},next:{title:"Backup and Restore Overview",permalink:"/zh/docs/sys-admin/backup-and-restore/"}},a={},t=[{value:"\u52a0\u5bc6\u7b97\u6cd5\u7b80\u4ecb",id:"\u52a0\u5bc6\u7b97\u6cd5\u7b80\u4ecb",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:3},{value:"\u5bc6\u94a5\u7ba1\u7406\u6a21\u5757",id:"\u5bc6\u94a5\u7ba1\u7406\u6a21\u5757",level:3},{value:"\u7b97\u6cd5\u5206\u7c7b",id:"\u7b97\u6cd5\u5206\u7c7b",level:3},{value:"AES \u52a0\u5bc6\u7b97\u6cd5",id:"aes-\u52a0\u5bc6\u7b97\u6cd5",level:4},{value:"\u66f4\u591a ISO/IEC \u52a0\u5bc6\u7b97\u6cd5",id:"\u66f4\u591a-isoiec-\u52a0\u5bc6\u7b97\u6cd5",level:4},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u9a8c\u8bc1\u65b9\u6cd5",id:"\u9a8c\u8bc1\u65b9\u6cd5",level:2},{value:"\u9a8c\u8bc1\u8fc7\u7a0b",id:"\u9a8c\u8bc1\u8fc7\u7a0b",level:3}];function h(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u900f\u660e\u6570\u636e\u52a0\u5bc6",children:"\u900f\u660e\u6570\u636e\u52a0\u5bc6"}),"\n",(0,l.jsx)(e.p,{children:"\u4e3a\u4e86\u6ee1\u8db3\u4fdd\u62a4\u7528\u6237\u6570\u636e\u5b89\u5168\u7684\u9700\u6c42\uff0cCloudberry Database \u652f\u6301\u900f\u660e\u6570\u636e\u52a0\u5bc6\uff08Transparent Data Encryption\uff0c\u7b80\u79f0  TDE\uff09\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u900f\u660e\u6570\u636e\u52a0\u5bc6\uff08TDE\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u52a0\u5bc6\u6570\u636e\u5e93\u6570\u636e\u6587\u4ef6\u7684\u6280\u672f\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6570\u636e\u6307\u7684\u662f\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6587\u4ef6\u5728\u786c\u76d8\u4e0a\u4ee5\u5bc6\u6587\u5b58\u50a8\uff0c\u5728\u5185\u5b58\u4e2d\u4ee5\u660e\u6587\u5904\u7406\uff0cTDE \u7528\u4e8e\u4fdd\u62a4\u9759\u6001\u6570\u636e\uff0c\u56e0\u6b64\u4e5f\u53eb\u9759\u6001\u6570\u636e\u52a0\u5bc6\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u201c\u900f\u660e\u201d\u610f\u5473\u7740\u7528\u6237\u65e0\u9700\u6539\u53d8\u64cd\u4f5c\u4e60\u60ef\uff0cTDE \u81ea\u52a8\u7ba1\u7406\u52a0\u5bc6/\u89e3\u5bc6\u8fc7\u7a0b\uff0c\u65e0\u9700\u7528\u6237\u6216\u5e94\u7528\u7a0b\u5e8f\u5e72\u9884\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u52a0\u5bc6\u7b97\u6cd5\u7b80\u4ecb",children:"\u52a0\u5bc6\u7b97\u6cd5\u7b80\u4ecb"}),"\n",(0,l.jsx)(e.h3,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"DEK (Data Encryption Key)\uff1a\u7528\u4e8e\u52a0\u5bc6\u6570\u636e\u7684\u5bc6\u94a5\uff0c\u7531\u6570\u636e\u5e93\u751f\u6210\uff0c\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"DEK \u660e\u6587\uff1a\u4e0e DEK \u540c\u4e49\uff0c\u53ea\u80fd\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"Master Key\uff1a\u4e3b\u5bc6\u94a5\uff0c\u7528\u4e8e\u52a0\u5bc6 DEK\u3002"}),"\n",(0,l.jsx)(e.li,{children:"DEK \u5bc6\u6587\uff1a\u4f7f\u7528 Master Key \u52a0\u5bc6\u540e\u7684 DEK\uff0c\u6301\u4e45\u5316\u5b58\u50a8\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u5bc6\u94a5\u7ba1\u7406\u6a21\u5757",children:"\u5bc6\u94a5\u7ba1\u7406\u6a21\u5757"}),"\n",(0,l.jsx)(e.p,{children:"\u5bc6\u94a5\u7ba1\u7406\u6a21\u5757\u662f\u900f\u660e\u6570\u636e\u52a0\u5bc6\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0c\u91c7\u7528\u4e24\u5c42\u5bc6\u94a5\u7ed3\u6784\uff1aMaster Key \u548c DEK\u3002Master Key \u7528\u4e8e\u52a0\u5bc6 DEK\uff0c\u5b58\u50a8\u5728\u6570\u636e\u5e93\u5916\u90e8\uff1bDEK \u7528\u4e8e\u52a0\u5bc6\u6570\u636e\u5e93\u6570\u636e\uff0c\u5bc6\u6587\u5f62\u5f0f\u4fdd\u5b58\u5728\u6570\u636e\u5e93\u4e2d\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u7b97\u6cd5\u5206\u7c7b",children:"\u7b97\u6cd5\u5206\u7c7b"}),"\n",(0,l.jsx)(e.p,{children:"\u52a0\u5bc6\u7b97\u6cd5\u5206\u4e3a\u4e24\u7c7b\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5bf9\u79f0\u52a0\u5bc6\uff1a\u52a0\u5bc6\u548c\u89e3\u5bc6\u4f7f\u7528\u76f8\u540c\u5bc6\u94a5\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u975e\u5bf9\u79f0\u52a0\u5bc6\uff1a\u516c\u94a5\u52a0\u5bc6\uff0c\u79c1\u94a5\u89e3\u5bc6\uff0c\u9002\u5408\u4e00\u5bf9\u591a\u3001\u591a\u5bf9\u4e00\u7684\u52a0\u5bc6\u9700\u6c42\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u79f0\u52a0\u5bc6\u4e2d\u7684\u5206\u7ec4\u52a0\u5bc6\u7b97\u6cd5\u662f\u4e3b\u6d41\u9009\u62e9\uff0c\u6027\u80fd\u4f18\u4e8e\u6d41\u52a0\u5bc6\u548c\u975e\u5bf9\u79f0\u52a0\u5bc6\u3002Cloudberry Database \u652f\u6301 AES \u548c SM4 \u4e24\u79cd\u5206\u7ec4\u52a0\u5bc6\u7b97\u6cd5\u3002"}),"\n",(0,l.jsx)(e.h4,{id:"aes-\u52a0\u5bc6\u7b97\u6cd5",children:"AES \u52a0\u5bc6\u7b97\u6cd5"}),"\n",(0,l.jsx)(e.p,{children:"AES \u662f\u56fd\u9645\u6807\u51c6\u7684\u5206\u7ec4\u52a0\u5bc6\u7b97\u6cd5\uff0c\u652f\u6301 128\u3001192 \u548c 256 \u4f4d\u5bc6\u94a5\uff0c\u5e38\u89c1\u52a0\u5bc6\u6a21\u5f0f\u5305\u62ec\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"ECB: \u7535\u5b50\u5bc6\u7801\u672c\u6a21\u5f0f"}),"\n",(0,l.jsx)(e.li,{children:"CBC: \u5bc6\u7801\u5206\u7ec4\u94fe\u8868\u6a21\u5f0f"}),"\n",(0,l.jsx)(e.li,{children:"CFB: \u5bc6\u6587\u53cd\u9988\u6a21\u5f0f"}),"\n",(0,l.jsx)(e.li,{children:"OFB: \u8f93\u51fa\u53cd\u9988\u6a21\u5f0f"}),"\n",(0,l.jsx)(e.li,{children:"CTR: \u8ba1\u6570\u5668\u6a21\u5f0f"}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\u66f4\u591a-isoiec-\u52a0\u5bc6\u7b97\u6cd5",children:"\u66f4\u591a ISO/IEC \u52a0\u5bc6\u7b97\u6cd5"}),"\n",(0,l.jsx)(e.p,{children:"\u66f4\u591a ISO/IEC \u7b97\u6cd5\u5305\u62ec\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"ISO/IEC 14888-3/AMD1\uff08\u5373 SM2\uff09\uff1a\u975e\u5bf9\u79f0\u52a0\u5bc6\uff0c\u57fa\u4e8e ECC\uff0c\u6027\u80fd\u4f18\u4e8e RSA\u3002"}),"\n",(0,l.jsx)(e.li,{children:"ISO/IEC 10118-3:2018\uff08\u5373 SM3\uff09\uff1a\u6d88\u606f\u6458\u8981\u7b97\u6cd5\uff0c\u7c7b\u4f3c MD5\uff0c\u8f93\u51fa 256 \u4f4d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"ISO/IEC 18033-3:2010/AMD1:2021\uff08\u5373 SM4\uff09\uff1a\u65e0\u7ebf\u5c40\u57df\u7f51\u6807\u51c6\u7684\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\uff0c\u652f\u6301 128 \u4f4d\u5bc6\u94a5\u548c\u5206\u7ec4\u957f\u5ea6\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4f7f\u7528\u900f\u660e\u6570\u636e\u52a0\u5bc6\uff08TDE\uff09\u529f\u80fd\u524d\uff0c\u8bf7\u786e\u4fdd\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5b89\u88c5 OpenSSL\uff1aCloudberry Database \u8282\u70b9\u4e0a\u5fc5\u987b\u5b89\u88c5 OpenSSL\u3002\u901a\u5e38\uff0cLinux \u53d1\u884c\u7248\u7684\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u81ea\u5e26 OpenSSL\u3002"}),"\n",(0,l.jsx)(e.li,{children:"Cloudberry Database \u7248\u672c\uff1a\u786e\u4fdd\u4f60\u7684 Cloudberry Database \u7248\u672c\u4e0d\u4f4e\u4e8e v1.6.0\uff0c\u8be5\u7248\u672c\u5f00\u59cb\u652f\u6301 TDE \u529f\u80fd\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u90e8\u7f72 Cloudberry Database \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u6765\u5f00\u542f TDE \u529f\u80fd\uff0c\u4e4b\u540e\u7684\u6240\u6709\u6570\u636e\u52a0\u5bc6\u64cd\u4f5c\u5c06\u5bf9\u7528\u6237\u5b8c\u5168\u900f\u660e\u3002\u8981\u5728\u6570\u636e\u5e93\u521d\u59cb\u5316\u65f6\u542f\u7528 TDE\uff0c\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"gpinitsystem"})," \u547d\u4ee4\u5e76\u6307\u5b9a ",(0,l.jsx)(e.code,{children:"-T"})," \u53c2\u6570\u3002Cloudberry Database \u652f\u6301\u4e24\u79cd\u52a0\u5bc6\u7b97\u6cd5\uff1aAES \u548c SM4\u3002\u4ee5\u4e0b\u662f\u5f00\u542f TDE \u7684\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 AES256 \u52a0\u5bc6\u7b97\u6cd5\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"gpinitsystem -c gpinitsystem_config -T AES256\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 SM4 \u52a0\u5bc6\u7b97\u6cd5\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"gpinitsystem -c gpinitsystem_config -T SM4\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u9a8c\u8bc1\u65b9\u6cd5",children:"\u9a8c\u8bc1\u65b9\u6cd5"}),"\n",(0,l.jsx)(e.p,{children:"\u900f\u660e\u6570\u636e\u52a0\u5bc6\u529f\u80fd\u5bf9\u7528\u6237\u662f\u900f\u660e\u7684\uff0c\u5f00\u542f\u6216\u5173\u95ed\u6b64\u7279\u6027\u90fd\u4e0d\u4f1a\u5f71\u54cd\u7528\u6237\u7684\u8bfb\u5199\u64cd\u4f5c\u4f53\u9a8c\u3002\u7136\u800c\uff0c\u4e3a\u4e86\u9a8c\u8bc1\u52a0\u5bc6\u529f\u80fd\u7684\u6709\u6548\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6a21\u62df\u5bc6\u94a5\u6587\u4ef6\u4e22\u5931\u573a\u666f\uff0c\u5e76\u786e\u4fdd\u6570\u636e\u5e93\u5728\u6ca1\u6709\u5bc6\u94a5\u6587\u4ef6\u65f6\u65e0\u6cd5\u542f\u52a8\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5bc6\u94a5\u6587\u4ef6\u8def\u5f84\u5728 Coordinator \u8282\u70b9\u4e0a\uff0c \u8981\u5b9a\u4f4d\u5bc6\u94a5\u6587\u4ef6\u7684\u4f4d\u7f6e\uff0c\u5148\u627e\u5230 Coordinator \u8282\u70b9\u7684\u6570\u636e\u76ee\u5f55\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"COORDINATOR_DATA_DIRECTORY=/home/gpadmin/work/data0/master/gpseg-1\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7136\u540e\u518d\u627e\u5bc6\u94a5\u6587\u4ef6\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"$ pwd\n/home/gpadmin/work/data0/master/gpseg-1\n\n$ ls -l pg_cryptokeys/live/\ntotal 8\n-rw------- 1 gpadmin gpadmin 48 Apr 12 10:26 relation.wkey\n-rw------- 1 gpadmin gpadmin 48 Apr 12 10:26 wal.wkey\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,l.jsx)(e.code,{children:"relation.wkey"})," \u662f\u7528\u6765\u52a0\u5bc6\u6570\u636e\u6587\u4ef6\u7684\u5bc6\u94a5\uff0c",(0,l.jsx)(e.code,{children:"wal.wkey"})," \u662f\u7528\u6765\u52a0\u5bc6 WAL \u65e5\u5fd7\u7684\u5bc6\u94a5\u3002\u73b0\u5728\u53ea\u6709 ",(0,l.jsx)(e.code,{children:"relation.wkey"})," \u6709\u4f5c\u7528\uff0cWAL \u65e5\u5fd7\u8fd8\u6ca1\u6709\u52a0\u5bc6\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u9a8c\u8bc1\u8fc7\u7a0b",children:"\u9a8c\u8bc1\u8fc7\u7a0b"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u8868\u5e76\u5199\u5165\u6570\u636e\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u4e2a\u9644\u52a0\u5b58\u50a8\uff08Append-Only\uff0cAO\uff09\u8868\u5e76\u63d2\u5165\u6570\u636e\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"postgres=# create table ao2 (id int) with(appendonly=true);\npostgres=# insert into ao2 select generate_series(1,10);\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u786e\u8ba4\u6570\u636e\u5df2\u6210\u529f\u63d2\u5165\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u505c\u6b62\u6570\u636e\u5e93\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"gpstop -a\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6a21\u62df\u5bc6\u94a5\u6587\u4ef6\u4e22\u5931\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5207\u6362\u5230\u5bc6\u94a5\u6587\u4ef6\u6240\u5728\u76ee\u5f55\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"cd /home/gpadmin/work/data0/master/gpseg-1/pg_cryptokeys/\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5c06\u5bc6\u94a5\u6587\u4ef6\u79fb\u81f3\u5176\u4ed6\u76ee\u5f55\uff08\u6a21\u62df\u4e22\u5931\u5bc6\u94a5\u6587\u4ef6\u7684\u573a\u666f\uff09\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"mv live backup\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5c1d\u8bd5\u542f\u52a8\u6570\u636e\u5e93\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"gpstart"})," \u547d\u4ee4\u542f\u52a8\u6570\u636e\u5e93\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"gpstart -a\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7531\u4e8e\u7f3a\u5c11\u5bc6\u94a5\u6587\u4ef6\uff0c\u6570\u636e\u5e93\u5c06\u65e0\u6cd5\u542f\u52a8\u3002\u4f60\u53ef\u4ee5\u5728 Coordinator \u8282\u70b9\u7684\u6570\u636e\u5e93\u65e5\u5fd7\u4e2d\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u9519\u8bef\u65e5\u5fd7\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"FATAL: cluster has no data encryption keys\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u8bf4\u660e\u6570\u636e\u5e93\u5728\u5bc6\u94a5\u4e22\u5931\u7684\u60c5\u51b5\u4e0b\u65e0\u6cd5\u542f\u52a8\uff0c\u4ece\u800c\u786e\u4fdd\u4e86\u6570\u636e\u7684\u5b89\u5168\u6027\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6062\u590d\u5bc6\u94a5\u6587\u4ef6\uff0c\u5c06\u4e4b\u524d\u5907\u4efd\u7684\u5bc6\u94a5\u6587\u4ef6\u79fb\u56de\u539f\u76ee\u5f55\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"mv backup live\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u91cd\u65b0\u542f\u52a8\u6570\u636e\u5e93\u5e76\u9a8c\u8bc1\u6570\u636e\u3002"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"gpstart"})," \u547d\u4ee4\u518d\u6b21\u542f\u52a8\u6570\u636e\u5e93\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"gpstart -a\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u6570\u636e\u5e93\u6210\u529f\u542f\u52a8\u540e\uff0c\u67e5\u8be2\u8868 ",(0,l.jsx)(e.code,{children:"ao2"})," \u9a8c\u8bc1\u6570\u636e\u662f\u5426\u6b63\u5e38\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"postgres=# select * from ao2 order by id;\nid\n----\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n(10 rows)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u53ef\u4ee5\u9a8c\u8bc1\u900f\u660e\u6570\u636e\u52a0\u5bc6\u529f\u80fd\u7684\u6709\u6548\u6027\uff0c\u5373\u6570\u636e\u5e93\u5728\u7f3a\u5c11\u5bc6\u94a5\u6587\u4ef6\u65f6\u65e0\u6cd5\u542f\u52a8\uff0c\u4fdd\u8bc1\u4e86\u9759\u6001\u6570\u636e\u7684\u5b89\u5168\u6027\u3002"})]})}function o(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>d,a:()=>c});var l=s(67294);const r={},i=l.createContext(r);function c(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);