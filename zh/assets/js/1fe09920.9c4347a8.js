"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4593],{57249:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(85893),c=n(11151);const s={title:"Perform Incremental Backup and Restore"},r="Perform Incremental Backup and Restore",i={id:"sys-admin/backup-and-restore/perform-incremental-backup-and-restore",title:"Perform Incremental Backup and Restore",description:"Before reading this document, you are expected to first read the Perform Full Backup and Restore document.",source:"@site/docs/sys-admin/backup-and-restore/perform-incremental-backup-and-restore.md",sourceDirName:"sys-admin/backup-and-restore",slug:"/sys-admin/backup-and-restore/perform-incremental-backup-and-restore",permalink:"/zh/docs/sys-admin/backup-and-restore/perform-incremental-backup-and-restore",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-admin/backup-and-restore/perform-incremental-backup-and-restore.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1738720921,formattedLastUpdatedAt:"2025\u5e742\u67085\u65e5",frontMatter:{title:"Perform Incremental Backup and Restore"},sidebar:"docsbars",previous:{title:"Perform Full Backup and Restore",permalink:"/zh/docs/sys-admin/backup-and-restore/perform-full-backup-and-restore"},next:{title:"\u914d\u7f6e\u6570\u636e\u5e93\u7cfb\u7edf",permalink:"/zh/docs/sys-admin/configure-database-system"}},o={},d=[{value:"About incremental backup sets",id:"about-incremental-backup-sets",level:2},{value:"Use incremental backups",id:"use-incremental-backups",level:2},{value:"Example using incremental backup sets",id:"example-using-incremental-backup-sets",level:3},{value:"Create an incremental backup with <code>gpbackup</code>",id:"create-an-incremental-backup-with-gpbackup",level:3},{value:"Restore from an incremental backup with <code>gprestore</code>",id:"restore-from-an-incremental-backup-with-gprestore",level:3},{value:"Incremental backup notes",id:"incremental-backup-notes",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"perform-incremental-backup-and-restore",children:"Perform Incremental Backup and Restore"}),"\n",(0,t.jsxs)(a.p,{children:["Before reading this document, you are expected to first read the ",(0,t.jsx)(a.a,{href:"/zh/docs/sys-admin/backup-and-restore/perform-full-backup-and-restore",children:"Perform Full Backup and Restore"})," document."]}),"\n",(0,t.jsxs)(a.p,{children:["To back up and restore tables incrementally, use the ",(0,t.jsx)(a.code,{children:"gpbackup"})," and ",(0,t.jsx)(a.code,{children:"gprestore"})," utilities. Incremental backups include all specified heap tables, and append-optimized tables (including column-oriented ones) that have changed. Even a single row change triggers a backup of the entire append-optimized table. For partitioned append-optimized tables, only the modified leaf partitions are backed up."]}),"\n",(0,t.jsx)(a.p,{children:"Incremental backups are efficient when the total amount of data in append-optimized tables or table partitions that changed is small compared to the data that has not changed since the last backup."}),"\n",(0,t.jsx)(a.p,{children:"An incremental backup backs up an append-optimized table only if one of the following operations have been performed on the table after the last full or incremental backup:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"ALTER TABLE"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"DELETE"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"INSERT"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"TRUNCATE"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"UPDATE"})}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"DROP"})," and then re-create the table"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"To restore data from incremental backups, you need a complete incremental backup set."}),"\n",(0,t.jsx)(a.h2,{id:"about-incremental-backup-sets",children:"About incremental backup sets"}),"\n",(0,t.jsx)(a.p,{children:"An incremental backup set includes the following backups:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"A full backup. This is the full backup that the incremental backups are based on."}),"\n",(0,t.jsx)(a.li,{children:"The set of incremental backups that capture the changes to the database from the time of the full backup."}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["For example, you can create a full backup and then create 3 daily incremental backups. The full backup and all 3 incremental backups are the backup set. For information about using an incremental backup set, see ",(0,t.jsx)(a.a,{href:"#example-using-incremental-backup-sets",children:"Example using incremental backup sets"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["When you create or add to an incremental backup set, ",(0,t.jsx)(a.code,{children:"gpbackup"})," ensures that the backups in the set are created with a consistent set of backup options to ensure that the backup set can be used in a restore operation. For information about backup set consistency, see ",(0,t.jsx)(a.a,{href:"#use-incremental-backups",children:"Use incremental backups"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["When you create an incremental backup you include these options with the other ",(0,t.jsx)(a.code,{children:"gpbackup"})," options to create a backup:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--leaf-partition-data"}),": required for all backups in the incremental backup set."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Required when you create a full backup that will be the base backup for an incremental backup set."}),"\n",(0,t.jsx)(a.li,{children:"Required when you create an incremental backup."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--incremental"}),": required when you create an incremental backup."]}),"\n",(0,t.jsxs)(a.p,{children:["You cannot combine ",(0,t.jsx)(a.code,{children:"--data-only"})," or ",(0,t.jsx)(a.code,{children:"--metadata-only"})," with ",(0,t.jsx)(a.code,{children:"--incremental"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--from-timestamp"}),": optional. This option can be used with ",(0,t.jsx)(a.code,{children:"--incremental"}),". The timestamp you specify is an existing backup. The timestamp can be either a full backup or incremental backup. The backup being created must be compatible with the backup specified with the ",(0,t.jsx)(a.code,{children:"--from-timestamp"})," option."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"use-incremental-backups",children:"Use incremental backups"}),"\n",(0,t.jsxs)(a.p,{children:["When you add an incremental backup to a backup set, ",(0,t.jsx)(a.code,{children:"gpbackup"})," ensures that the full backup and the incremental backups are consistent by checking these ",(0,t.jsx)(a.code,{children:"gpbackup"})," options:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--dbname"}),": the database must be the same."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--backup-dir"}),": the directory must be the same. The backup set, the full backup and the incremental backups, must be in the same location."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--single-data-file"}),": this option must be either specified or absent for all backups in the set."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--include-table-file"}),", ",(0,t.jsx)(a.code,{children:"--include-schema"}),", or any other options that filter tables and schemas must be the same. When checking schema filters, only the schema names are checked, not the objects contained in the schemas."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--no-compression"}),": if this option is specified, it must be specified for all backups in the backup set."]}),"\n",(0,t.jsx)(a.p,{children:"If compression is used on the on the full backup, compression must be used on the incremental backups. Different compression levels are allowed for the backups in the backup set. For a backup, the default is compression level 1."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["If you try to add an incremental backup to a backup set, the backup operation fails if the ",(0,t.jsx)(a.code,{children:"gpbackup"})," options are not consistent."]}),"\n",(0,t.jsx)(a.h3,{id:"example-using-incremental-backup-sets",children:"Example using incremental backup sets"}),"\n",(0,t.jsxs)(a.p,{children:["Each backup has a timestamp taken when the backup is created. For example, if you create a backup on May 14, 2023, the backup file names contain ",(0,t.jsx)(a.code,{children:"20230514hhmmss"}),". The ",(0,t.jsx)(a.code,{children:"hhmmss"})," represents the time: hour, minute, and second."]}),"\n",(0,t.jsxs)(a.p,{children:["This example assumes that you have created two full backups and incremental backups of the database ",(0,t.jsx)(a.code,{children:"mytest"}),". To create the full backups, you used this command:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"gpbackup --dbname mytest --backup-dir /mybackup --leaf-partition-data\n"})}),"\n",(0,t.jsx)(a.p,{children:"You created incremental backups with this command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"gpbackup --dbname mytest --backup-dir /mybackup --leaf-partition-data --incremental\n"})}),"\n",(0,t.jsxs)(a.p,{children:["When you specify the ",(0,t.jsx)(a.code,{children:"--backup-dir"})," option, the backups are created in the ",(0,t.jsx)(a.code,{children:"/mybackup"})," directory on each Cloudberry Database host."]}),"\n",(0,t.jsxs)(a.p,{children:["In the example, the full backups have the timestamp keys ",(0,t.jsx)(a.code,{children:"20230514054532"})," and ",(0,t.jsx)(a.code,{children:"20231114064330"}),". The other backups are incremental backups. The example consists of two backup sets, the first with two incremental backups, and second with one incremental backup. The backups are listed from earliest to most recent."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"20230514054532"})," (full backup)"]}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"20230714095512"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"20230914081205"})}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"20231114064330"})," (full backup)"]}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"20230114051246"})}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["To create a new incremental backup based on the latest incremental backup, you must include the same ",(0,t.jsx)(a.code,{children:"--backup-dir"})," option as the incremental backup as well as the options ",(0,t.jsx)(a.code,{children:"--leaf-partition-data"})," and ",(0,t.jsx)(a.code,{children:"--incremental"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"gpbackup --dbname mytest --backup-dir /mybackup --leaf-partition-data --incremental\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You can specify the ",(0,t.jsx)(a.code,{children:"--from-timestamp"})," option to create an incremental backup based on an existing incremental or full backup. Based on the example, this command adds a fourth incremental backup to the backup set that includes ",(0,t.jsx)(a.code,{children:"20230914081205"})," as an incremental backup and uses ",(0,t.jsx)(a.code,{children:"20230514054532"})," as the full backup."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"gpbackup --dbname mytest --backup-dir /mybackup --leaf-partition-data --incremental --from-timestamp 20230914081205\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This command creates an incremental backup set based on the full backup ",(0,t.jsx)(a.code,{children:"20231114064330"})," and is separate from the backup set that includes the incremental backup ",(0,t.jsx)(a.code,{children:"20230114051246"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"gpbackup --dbname mytest --backup-dir /mybackup --leaf-partition-data --incremental --from-timestamp 20231114064330\n"})}),"\n",(0,t.jsxs)(a.p,{children:["To restore a database with the incremental backup ",(0,t.jsx)(a.code,{children:"20230914081205"}),", you need the incremental backups ",(0,t.jsx)(a.code,{children:"20120914081205"})," and ",(0,t.jsx)(a.code,{children:"20230714095512"}),", and the full backup ",(0,t.jsx)(a.code,{children:"20230514054532"}),". This would be the ",(0,t.jsx)(a.code,{children:"gprestore"})," command."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"gprestore --backup-dir /backupdir --timestamp 20230914081205\n"})}),"\n",(0,t.jsxs)(a.h3,{id:"create-an-incremental-backup-with-gpbackup",children:["Create an incremental backup with ",(0,t.jsx)(a.code,{children:"gpbackup"})]}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"gpbackup"})," output displays the timestamp of the backup on which the incremental backup is based. In this example, the incremental backup is based on the backup with timestamp ",(0,t.jsx)(a.code,{children:"20230802171642"}),". The backup ",(0,t.jsx)(a.code,{children:"20230802171642"})," can be an incremental or full backup."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"$ gpbackup --dbname test --backup-dir /backups --leaf-partition-data --incremental\n\n20230803:15:40:51 gpbackup:gpadmin:mdw:002907-[INFO]:-Starting backup of database test\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Backup Timestamp = 20230803154051\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Backup Database = test\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Gathering list of tables for backup\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Acquiring ACCESS SHARE locks on tables\nLocks acquired:  5 / 5 [================================================================] 100.00% 0s\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Gathering additional table metadata\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Metadata will be written to /backups/gpseg-1/backups/20230803/20230803154051/gpbackup_20230803154051_metadata.sql\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Writing global database metadata\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Global database metadata backup complete\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Writing pre-data metadata\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Pre-data metadata backup complete\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Writing post-data metadata\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Post-data metadata backup complete\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Basing incremental backup off of backup with timestamp = 20230802171642\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Writing data to file\nTables backed up:  4 / 4 [==============================================================] 100.00% 0s\n20230803:15:40:52 gpbackup:gpadmin:mdw:002907-[INFO]:-Data backup complete\n20230803:15:40:53 gpbackup:gpadmin:mdw:002907-[INFO]:-Found neither /usr/local/greenplum-db/./bin/gp_email_contacts.yaml nor /home/gpadmin/gp_email_contacts.yaml\n20230803:15:40:53 gpbackup:gpadmin:mdw:002907-[INFO]:-Email containing gpbackup report /backups/gpseg-1/backups/20230803/20230803154051/gpbackup_20230803154051_report will not be sent\n20230803:15:40:53 gpbackup:gpadmin:mdw:002907-[INFO]:-Backup completed successfully\n"})}),"\n",(0,t.jsxs)(a.h3,{id:"restore-from-an-incremental-backup-with-gprestore",children:["Restore from an incremental backup with ",(0,t.jsx)(a.code,{children:"gprestore"})]}),"\n",(0,t.jsxs)(a.p,{children:["When restoring an from an incremental backup, you can specify the ",(0,t.jsx)(a.code,{children:"--verbose"})," option to display the backups that are used in the restore operation on the command line. For example, the following ",(0,t.jsx)(a.code,{children:"gprestore"})," command restores a backup using the timestamp ",(0,t.jsx)(a.code,{children:"20230807092740"}),", an incremental backup. The output includes the backups that were used to restore the database data."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"$ gprestore --create-db --timestamp 20230807162904 --verbose\n...\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[INFO]:-Pre-data metadata restore complete\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Verifying backup file count\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Restoring data from backup with timestamp: 20230807162654\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Reading data for table public.tbl_ao from file (table 1 of 1)\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Checking whether segment agents had errors during restore\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Restoring data from backup with timestamp: 20230807162819\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Reading data for table public.test_ao from file (table 1 of 1)\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Checking whether segment agents had errors during restore\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Restoring data from backup with timestamp: 20230807162904\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Reading data for table public.homes2 from file (table 1 of 4)\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Reading data for table public.test2 from file (table 2 of 4)\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Reading data for table public.homes2a from file (table 3 of 4)\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Reading data for table public.test2a from file (table 4 of 4)\n20230807:16:31:56 gprestore:gpadmin:mdw:008603-[DEBUG]:-Checking whether segment agents had errors during restore\n20230807:16:31:57 gprestore:gpadmin:mdw:008603-[INFO]:-Data restore complete\n20230807:16:31:57 gprestore:gpadmin:mdw:008603-[INFO]:-Restoring post-data metadata\n20230807:16:31:57 gprestore:gpadmin:mdw:008603-[INFO]:-Post-data metadata restore complete\n...\n"})}),"\n",(0,t.jsx)(a.p,{children:"The output shows that the restore operation used three backups."}),"\n",(0,t.jsxs)(a.p,{children:["When restoring an from an incremental backup, ",(0,t.jsx)(a.code,{children:"gprestore"})," also lists the backups that are used in the restore operation in the ",(0,t.jsx)(a.code,{children:"gprestore"})," log file."]}),"\n",(0,t.jsxs)(a.p,{children:["During the restore operation, ",(0,t.jsx)(a.code,{children:"gprestore"})," displays an error if the full backup or other required incremental backup is not available."]}),"\n",(0,t.jsx)(a.h2,{id:"incremental-backup-notes",children:"Incremental backup notes"}),"\n",(0,t.jsx)(a.p,{children:"To create an incremental backup, or to restore data from an incremental backup set, you need the complete backup set. When you archive incremental backups, the complete backup set must be archived. You must archive all the files created on the coordinator and all segments."}),"\n",(0,t.jsxs)(a.p,{children:["If you do not specify the ",(0,t.jsx)(a.code,{children:"--from-timestamp"})," option when you create an incremental backup, ",(0,t.jsx)(a.code,{children:"gpbackup"})," uses the most recent backup with a consistent set of options."]}),"\n",(0,t.jsxs)(a.p,{children:["If you specify the ",(0,t.jsx)(a.code,{children:"--from-timestamp"})," option when you create an incremental backup, ",(0,t.jsx)(a.code,{children:"gpbackup"})," ensures that the options of the backup that is being created are consistent with the options of the specified backup."]}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"gpbackup"})," option ",(0,t.jsx)(a.code,{children:"--with-stats"})," is not required to be the same for all backups in the backup set. However, to perform a restore operation with the ",(0,t.jsx)(a.code,{children:"gprestore"})," option --with-stats to restore statistics, the backup you specify must have must have used the ",(0,t.jsx)(a.code,{children:"--with-stats"})," when creating the backup."]}),"\n",(0,t.jsx)(a.p,{children:"You can perform a restore operation from any backup in the backup set. However, changes captured in incremental backups later than the backup use to restore database data will not be restored."}),"\n",(0,t.jsxs)(a.p,{children:["When restoring from an incremental backup set, ",(0,t.jsx)(a.code,{children:"gprestore"})," checks the backups and restores each append-optimized table from the most recent version of the append-optimized table in the backup set and restores the heap tables from the latest backup."]}),"\n",(0,t.jsx)(a.p,{children:"The incremental back up set, a full backup and associated incremental backups, must be on a single device. For example, the backups in a backup set must all be on a file system or must all be on a Data Domain system."}),"\n",(0,t.jsxs)(a.p,{children:["If you specify the ",(0,t.jsx)(a.code,{children:"gprestore"})," option ",(0,t.jsx)(a.code,{children:"--incremental"})," to restore data from a specific incremental backup, you must also specify the ",(0,t.jsx)(a.code,{children:"--data-only"})," option. Before performing the restore operation, ",(0,t.jsx)(a.code,{children:"gprestore"})," ensures that the tables being restored exist. If a table does not exist, ",(0,t.jsx)(a.code,{children:"gprestore"})," returns an error and exits."]}),"\n",(0,t.jsx)(a.admonition,{type:"warning",children:(0,t.jsx)(a.p,{children:"Changes to the Cloudberry Database segment configuration invalidate incremental backups. After you change the segment configuration (add or remove segment instances), you must create a full backup before you can create an incremental backup."})})]})}function p(e={}){const{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>r});var t=n(67294);const c={},s=t.createContext(c);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);