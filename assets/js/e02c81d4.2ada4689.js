"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8492],{82250:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(85893),r=t(11151);const s={title:"[101-6] Lesson 6: Backup and Restore Operations",description:"Learn how to backup and restore your data in the Cloudberry Database."},p=void 0,i={type:"mdx",permalink:"/bootcamp/101-6-backup-and-recovery-operations",source:"@site/src/pages/bootcamp/101-6-backup-and-recovery-operations.md",title:"[101-6] Lesson 6: Backup and Restore Operations",description:"Learn how to backup and restore your data in the Cloudberry Database.",frontMatter:{title:"[101-6] Lesson 6: Backup and Restore Operations",description:"Learn how to backup and restore your data in the Cloudberry Database."},unlisted:!1},o={},d=[{value:"Exercises",id:"exercises",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["The Cloudberry Database does not include the utility ",(0,n.jsx)(a.code,{children:"gpbackup"})," by default. It's maintained separately. Please follow the ",(0,n.jsx)(a.a,{href:"https://github.com/cloudberrydb/gpbackup",children:"README"})," to install ",(0,n.jsx)(a.code,{children:"gpbackup"})," before using it."]})}),"\n",(0,n.jsxs)(a.p,{children:["The parallel dump utility ",(0,n.jsx)(a.code,{children:"gpbackup"})," backs up the CloudberryDB master instance and each active segment instance at the same time."]}),"\n",(0,n.jsx)(a.p,{children:"By default, gpbackup creates dump files in the backups subdirectory."}),"\n",(0,n.jsx)(a.p,{children:"Several dump files are created for the master, containing database information such as DDL statements, the CloudberryDB system catalog tables, and metadata files. gpbackup creates dump files for each segment."}),"\n",(0,n.jsx)(a.p,{children:"You can perform full or incremental backups. To restore a database to its state when an incremental backup was made, it will restore the previous full backup and all subsequent incremental backups."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Backing up a Cloudberry Database",src:t(46825).Z+"",width:"834",height:"458"})}),"\n",(0,n.jsx)(a.p,{children:"Each file created for a backup begins with a 14-digit timestamp key that identifies the backup set the file belongs to."}),"\n",(0,n.jsx)(a.p,{children:"gpbackup can be run directly in a terminal on the master host, or you can add it to crontab on the master host to schedule regular backups."}),"\n",(0,n.jsxs)(a.p,{children:["The parallel restore utility ",(0,n.jsx)(a.code,{children:"gprestore"})," takes the timestamp key generated by gpbackup, validates the backup set, and restores the database objects and data into a distributed database in parallel. Parallel restore operations require a complete backup set created by gpbackup, a full backup and any required incremental backups."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Restoring a Cloudberry Database backup",src:t(25690).Z+"",width:"894",height:"492"})}),"\n",(0,n.jsx)(a.p,{children:"The gpbackup utility provides flexibility and verification options for use with the automated backup files produced by gpbackup or with backup files moved from the CloudberryDB array to an alternate location."}),"\n",(0,n.jsx)(a.h2,{id:"exercises",children:"Exercises"}),"\n",(0,n.jsx)(a.p,{children:"These exercises will walk through how to create a full backup of your database and then restore a table."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["To run a full backup, use ",(0,n.jsx)(a.code,{children:"gpbackup --dbname database --backup-dir /path/for/backup"}),".   This will backup the entire database to the directory given."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"[gpadmin@mdw tmp]$ gpbackup --dbname tutorial --backup-dir /tmp/\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"20230727:10:28:19 gpbackup:gpadmin:mdw:020061-[INFO]:-gpbackup version = 1.2.7-beta1+dev.7\n20230727:10:28:19 gpbackup:gpadmin:mdw:020061-[INFO]:-Greenplum Database Version = oudberry Database 1.0.0 build dev\n20230727:10:28:19 gpbackup:gpadmin:mdw:020061-[INFO]:-Starting backup of database tutorial\n20230727:10:28:19 gpbackup:gpadmin:mdw:020061-[INFO]:-Backup Timestamp = 20230727102819\n20230727:10:28:19 gpbackup:gpadmin:mdw:020061-[INFO]:-Backup Database = tutorial\n20230727:10:28:19 gpbackup:gpadmin:mdw:020061-[INFO]:-Gathering table state information\n20230727:10:28:19 gpbackup:gpadmin:mdw:020061-[INFO]:-Acquiring ACCESS SHARE locks on tables\nLocks acquired:  28 / 28 [==============================================================] 100.00% 0s\n20230727:10:28:19 gpbackup:gpadmin:mdw:020061-[INFO]:-Gathering additional table metadata\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Getting storage information\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Metadata will be written to /tmp/gpseg-1/backups/20230727/20230727102819/gpbackup_20230727102819_metadata.sql\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Writing global database metadata\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Global database metadata backup complete\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Writing pre-data metadata\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Pre-data metadata metadata backup complete\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Writing post-data metadata\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Post-data metadata backup complete\n20230727:10:28:20 gpbackup:gpadmin:mdw:020061-[INFO]:-Writing data to file\nTables backed up:  11 / 11 [============================================================] 100.00% 8s\n20230727:10:28:28 gpbackup:gpadmin:mdw:020061-[INFO]:-Data backup complete\n20230727:10:28:28 gpbackup:gpadmin:mdw:020061-[INFO]:-Skipped data backup of 3 external/foreign table(s).\n20230727:10:28:28 gpbackup:gpadmin:mdw:020061-[INFO]:-See /home/gpadmin/gpAdminLogs/gpbackup_20230727.log for a complete list of skipped tables.\n20230727:10:28:29 gpbackup:gpadmin:mdw:020061-[INFO]:-Found neither /usr/local/cloudberry-db/bin/gp_email_contacts.yaml nor /home/gpadmin/gp_email_contacts.yaml\n20230727:10:28:29 gpbackup:gpadmin:mdw:020061-[INFO]:-Email containing gpbackup report /tmp/gpseg-1/backups/20230727/20230727102819/gpbackup_20230727102819_report will not be sent\n20230727:10:28:29 gpbackup:gpadmin:mdw:020061-[INFO]:-Backup completed successfully\n"})}),"\n",(0,n.jsx)(a.p,{children:"This runs a full backup of the database created during the previous exercises."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"To view the backups:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"$ ls -al /tmp/\n\ndrwxrwxr-x 3 gpadmin gpadmin       21 Jul 27 10:28 gpseg-1\ndrwxrwxr-x 3 gpadmin gpadmin       21 Jul 27 10:28 gpseg1\ndrwxrwxr-x 3 gpadmin gpadmin       21 Jul 27 10:28 gpseg0\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Now, that we have a full backup let's remove data from a table to simulate a failure."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'psql (14.4, server 14.4)\nType "help" for help.\ntutorial=# select count(*) from faa.otp_r;\n  count\n---------\n1024552\n(1 row)\n'})}),"\n",(0,n.jsx)(a.p,{children:"This should return 1024552 rows in the table.  Let's truncate the table and then check the row count:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"tutorial=# truncate table faa.otp_r;\nTRUNCATE TABLE\ntutorial=# select count(*) from faa.otp_r;\ncount\n-------\n    0\n(1 row)\n\ntutorial=#\n"})}),"\n",(0,n.jsx)(a.p,{children:"The report should now show 0 rows in the table."}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Let's restore the data that was lost. First, exit from the psql shell by typing ",(0,n.jsx)(a.code,{children:"\\q"})," then issue the gprestore command(14 digital timestamp information could be got from previous gpbackup output, also you may record it down once you have done any backup before.):"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"gprestore --include-table faa.otp_r --data-only   --backup-dir /tmp/ --timestamp 20230727102819\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"20230727:10:38:29 gprestore:gpadmin:mdw:020373-[INFO]:-Restore Key = 20230727102819\n20230727:10:38:30 gprestore:gpadmin:mdw:020373-[INFO]:-gpbackup version = 1.2.7-beta1+dev.7\n20230727:10:38:30 gprestore:gpadmin:mdw:020373-[INFO]:-gprestore version = 1.2.7-beta1+dev.7\n20230727:10:38:30 gprestore:gpadmin:mdw:020373-[INFO]:-Greenplum Database Version = oudberry Database 1.0.0 build dev\n20230727:10:38:30 gprestore:gpadmin:mdw:020373-[INFO]:-Restoring sequence values\n20230727:10:38:30 gprestore:gpadmin:mdw:020373-[INFO]:-Sequence values restore complete\nTables restored:  1 / 1 [===============================================================] 100.00% 5s\n20230727:10:38:35 gprestore:gpadmin:mdw:020373-[INFO]:-Data restore complete\n20230727:10:38:35 gprestore:gpadmin:mdw:020373-[INFO]:-Found neither /usr/local/cloudberry-db/bin/gp_email_contacts.yaml nor /home/gpadmin/gp_email_contacts.yaml\n20230727:10:38:35 gprestore:gpadmin:mdw:020373-[INFO]:-Email containing gprestore report /tmp/gpseg-1/backups/20230727/20230727102819/gprestore_20230727102819_20230727103829_report will not be sent\n20230727:10:38:35 gprestore:gpadmin:mdw:020373-[INFO]:-Restore completed successfully\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Finally, verify the row count"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'[gpadmin@mdw tmp]$ psql -U gpadmin tutorial\npsql (14.4, server 14.4)\nType "help" for help.\ntutorial=# select count(*) from faa.otp_r;\n  count\n---------\n1024552\n(1 row)\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"The table should show 1024552 rows again as it was prior to the truncate call."})]})}function l(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},46825:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/backup-bdd1e84d8eb3a20f757dde8ca6c50fcd.jpg"},25690:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/restore-ca07539c739ac2844089187434a9d2f6.jpg"},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>p});var n=t(67294);const r={},s=n.createContext(r);function p(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);