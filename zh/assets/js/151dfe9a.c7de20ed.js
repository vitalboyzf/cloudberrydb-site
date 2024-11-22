"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2920],{95610:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var n=a(85893),i=a(11151);const s={title:"gpbackup"},o="gpbackup",c={id:"sys-utilities/gpbackup",title:"gpbackup",description:"Create a Cloudberry Database backup for use with the gprestore utility.",source:"@site/docs/sys-utilities/gpbackup.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpbackup",permalink:"/zh/docs/sys-utilities/gpbackup",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpbackup.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732243913,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",frontMatter:{title:"gpbackup"},sidebar:"docsbars",previous:{title:"gpaddmirrors",permalink:"/zh/docs/sys-utilities/gpaddmirrors"},next:{title:"gpcheckcat",permalink:"/zh/docs/sys-utilities/gpcheckcat"}},l={},r=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Return Codes",id:"return-codes",level:2},{value:"Schema and Table Names",id:"schema-and-table-names",level:2},{value:"Examples",id:"examples",level:2},{value:"See Also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"gpbackup",children:"gpbackup"}),"\n",(0,n.jsxs)(t.p,{children:["Create a Cloudberry Database backup for use with the ",(0,n.jsx)(t.code,{children:"gprestore"})," utility."]}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"gpbackup --dbname <database_name>\n   [--backup-dir <directory>]\n   [--compression-level <level>]\n   [--compression-type <type>]\n   [--copy-queue-size <int>\n   [--data-only]\n   [--debug]\n   [--exclude-schema <schema_name> [--exclude-schema <schema_name> ...]]\n   [--exclude-table <schema.table> [--exclude-table <schema.table> ...]]\n   [--exclude-schema-file <file_name>]\n   [--exclude-table-file <file_name>]\n   [--include-schema <schema_name> [--include-schema <schema_name> ...]]\n   [--include-table <schema.table> [--include-table <schema.table> ...]]\n   [--include-schema-file <file_name>]\n   [--include-table-file <file_name>]\n   [--incremental [--from-timestamp <backup-timestamp>]]\n   [--jobs <int>]\n   [--leaf-partition-data]\n   [--metadata-only]\n   [--no-compression]\n   [--plugin-config <config_file_location>]\n   [--quiet]\n   [--single-data-file]\n   [--verbose]\n   [--version]\n   [--with-stats]\n   [--without-globals]\n\ngpbackup --help\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"gpbackup"})," utility backs up the contents of a database into a collection of metadata files and data files that can be used to restore the database at a later time using ",(0,n.jsx)(t.code,{children:"gprestore"}),". When you back up a database, you can specify table level and schema level filter options to back up specific tables. For example, you can combine schema level and table level options to back up all the tables in a schema except for a single table."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"gpbackup"})," backs up objects in the specified database as well as global Cloudberry Database system objects. Use ",(0,n.jsx)(t.code,{children:"--without-globals"})," to omit global objects. ",(0,n.jsx)(t.code,{children:"gprestore"})," does not restore global objects by default; use ",(0,n.jsx)(t.code,{children:"--with-globals"})," to restore them."]}),"\n",(0,n.jsx)(t.p,{children:"For materialized views, data is not backed up, only the materialized view definition is backed up."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"gpbackup"})," stores the object metadata files and DDL files for a backup in the Cloudberry Database master data directory by default. Cloudberry Database segments use the ",(0,n.jsx)(t.code,{children:"COPY ... ON SEGMENT"})," command to store their data for backed-up tables in compressed CSV data files, located in each segment's data directory."]}),"\n",(0,n.jsxs)(t.p,{children:["You can add the ",(0,n.jsx)(t.code,{children:"--backup-dir"})," option to copy all backup files from the Cloudberry Database master and segment hosts to an absolute path for later use. Additional options are provided to filter the backup set in order to include or exclude specific tables."]}),"\n",(0,n.jsxs)(t.p,{children:["You can create an incremental backup with the ",(0,n.jsx)(t.code,{children:"--incremental"})," option. Incremental backups are efficient when the total amount of data in append-optimized tables or table partitions that changed is small compared to the data has not changed."]}),"\n",(0,n.jsxs)(t.p,{children:["With the default ",(0,n.jsx)(t.code,{children:"--jobs"})," option (1 job), each ",(0,n.jsx)(t.code,{children:"gpbackup"})," operation uses a single transaction on the Cloudberry Database master host. The ",(0,n.jsx)(t.code,{children:"COPY ... ON SEGMENT"})," command performs the backup task in parallel on each segment host. The backup process acquires an ",(0,n.jsx)(t.code,{children:"ACCESS SHARE"})," lock on each table that is backed up. During the table locking process, the database should be in a quiescent state."]}),"\n",(0,n.jsxs)(t.p,{children:["When a back up operation completes, ",(0,n.jsx)(t.code,{children:"gpbackup"})," returns a status code."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"gpbackup"})," utility cannot be run while ",(0,n.jsx)(t.code,{children:"gpexpand"})," is initializing new segments. Backups created before the expansion cannot be restored with ",(0,n.jsx)(t.code,{children:"gprestore"})," after the cluster expansion is completed."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"gpbackup"})," can send status email notifications after a back up operation completes. You specify when the utility sends the mail and the email recipients in a configuration file."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": This utility uses secure shell (SSH) connections between systems to perform its tasks. In large Cloudberry Database deployments, cloud deployments, or deployments with a large number of segments per host, this utility may exceed the host's maximum threshold for unauthenticated connections. Consider updating the SSH ",(0,n.jsx)(t.code,{children:"MaxStartups"})," and ",(0,n.jsx)(t.code,{children:"MaxSessions"})," configuration parameters to increase this threshold. For more information about SSH configuration options, refer to the SSH documentation for your Linux distribution."]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--dbname database_name:"})," Required. Specifies the database to back up."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--backup-dir directory:"})," Optional. Copies all required backup files (metadata files and data files) to the specified directory. You must specify directory as an absolute path (not relative). If you do not supply this option, metadata files are created on the Cloudberry Database master host in the $MASTER_DATA_DIRECTORY/backups/YYYYMMDD/YYYYMMDDhhmmss/ directory. Segment hosts create CSV data files in the ",(0,n.jsx)(t.code,{children:"<seg_dir>/backups/YYYYMMDD/YYYYMMDDhhmmss/"})," directory. When you specify a custom backup directory, files are copied to these paths in subdirectories of the backup directory."]}),"\n",(0,n.jsxs)(t.p,{children:["You cannot combine this option with the option ",(0,n.jsx)(t.code,{children:"--plugin-config"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--compression-level level:"})," Optional. Specifies the compression level (from 1 to 9) used to compress data files. The default is 1. Note that ",(0,n.jsx)(t.code,{children:"gpbackup"})," uses compression by default."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--compression-type type:"})," Optional. Specifies the compression type (",(0,n.jsx)(t.code,{children:"gzip"})," or ",(0,n.jsx)(t.code,{children:"zstd"}),") used to compress data files. The default is ",(0,n.jsx)(t.code,{children:"gzip"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," In order to use the ",(0,n.jsx)(t.code,{children:"zstd"})," compression type, ",(0,n.jsx)(t.a,{href:"http://facebook.github.io/zstd/",children:"Zstandard"})," must be installed in a ",(0,n.jsx)(t.code,{children:"$PATH"})," accessible by the gpadmin user."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--copy-queue-size int:"})," Optional. Specifies the number of ",(0,n.jsx)(t.code,{children:"COPY"})," commands ",(0,n.jsx)(t.code,{children:"gpbackup"})," should enqueue when backing up using the ",(0,n.jsx)(t.code,{children:"--single-data-file"})," option. This option optimizes backup performance by reducing the amount of time spent initializing ",(0,n.jsx)(t.code,{children:"COPY"})," commands. If you do not set this option to 2 or greater, ",(0,n.jsx)(t.code,{children:"gpbackup"})," enqueues 1 ",(0,n.jsx)(t.code,{children:"COPY"})," command at a time."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," This option must be used with the ",(0,n.jsx)(t.code,{children:"--single-data-file"})," option and cannot be used with the ",(0,n.jsx)(t.code,{children:"--jobs"})," option.--data-onlyOptional. Backs up only the table data into CSV files, but does not backup metadata files needed to recreate the tables and other database objects."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--debug:"})," Optional. Displays verbose debug messages during operation."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--exclude-schema schema_name:"})," Optional. Specifies a database schema to exclude from the backup. You can specify this option multiple times to exclude multiple schemas. You cannot combine this option with the option ",(0,n.jsx)(t.code,{children:"--include-schema"}),", ",(0,n.jsx)(t.code,{children:"--include-schema-file"}),", or a table filtering option such as ",(0,n.jsx)(t.code,{children:"--include-table"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--exclude-schema-file file_name:"})," Optional. Specifies a text file containing a list of schemas to exclude from the backup. Each line in the text file must define a single schema. The file must not include trailing lines. If a schema name uses any character other than a lowercase letter, number, or an underscore character, then you must include that name in double quotes. You cannot combine this option with the option ",(0,n.jsx)(t.code,{children:"--include-schema"})," or ",(0,n.jsx)(t.code,{children:"--include-schema-file"}),", or a table filtering option such as ",(0,n.jsx)(t.code,{children:"--include-table"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--exclude-table schema.table:"})," Optional. Specifies a table to exclude from the backup. The table must be in the format ",(0,n.jsx)(t.code,{children:"<schema-name>.<table-name>"}),". If a table or schema name uses any character other than a lowercase letter, number, or an underscore character, then you must include that name in double quotes. You can specify this option multiple times. You cannot combine this option with the option ",(0,n.jsx)(t.code,{children:"--exclude-schema"}),", ",(0,n.jsx)(t.code,{children:"--exclude-schema-file"}),", or another a table filtering option such as ",(0,n.jsx)(t.code,{children:"--include-table"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you specify a leaf partition name, ",(0,n.jsx)(t.code,{children:"gpbackup"})," ignores the partition names. The leaf partition is not excluded."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--exclude-table-file file_name:"})," Optional. Specifies a text file containing a list of tables to exclude from the backup. Each line in the text file must define a single table using the format ",(0,n.jsx)(t.code,{children:"<schema-name>.<table-name>"}),". The file must not include trailing lines. If a table or schema name uses any character other than a lowercase letter, number, or an underscore character, then you must include that name in double quotes. You cannot combine this option with the option ",(0,n.jsx)(t.code,{children:"--exclude-schema"}),", ",(0,n.jsx)(t.code,{children:"--exclude-schema-file"}),", or another a table filtering option such as ",(0,n.jsx)(t.code,{children:"--include-table"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you specify leaf partition names in a file that is used with ",(0,n.jsx)(t.code,{children:"--exclude-table-file"}),", ",(0,n.jsx)(t.code,{children:"gpbackup"})," ignores the partition names. The leaf partitions are not excluded."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--include-schema schema_name:"})," Optional. Specifies a database schema to include in the backup. You can specify this option multiple times to include multiple schemas. If you specify this option, any schemas that are not included in subsequent ",(0,n.jsx)(t.code,{children:"--include-schema"})," options are omitted from the backup set. You cannot combine this option with the options ",(0,n.jsx)(t.code,{children:"--exclude-schema"}),", ",(0,n.jsx)(t.code,{children:"--exclude-schema-file"}),", ",(0,n.jsx)(t.code,{children:"--exclude-schema-file"}),", ",(0,n.jsx)(t.code,{children:"--include-table"}),", or ",(0,n.jsx)(t.code,{children:"--include-table-file"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--include-schema-file file_name:"})," Optional. Specifies a text file containing a list of schemas to back up. Each line in the text file must define a single schema. The file must not include trailing lines. If a schema name uses any character other than a lowercase letter, number, or an underscore character, then you must include that name in double quotes."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--include-table schema.table:"})," Optional. Specifies a table to include in the backup. The table must be in the format ",(0,n.jsx)(t.code,{children:"<schema-name>.<table-name>"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can specify this option multiple times. You cannot combine this option with a schema filtering option such as ",(0,n.jsx)(t.code,{children:"--include-schema"}),", or another table filtering option such as ",(0,n.jsx)(t.code,{children:"--exclude-table-file"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You can also specify the qualified name of a sequence, a view, or a materialized view."}),"\n",(0,n.jsx)(t.p,{children:"If you specify this option, the utility does not automatically back up dependent objects. You must also explicitly specify dependent objects that are required. For example, if you back up a view or a materialized view, you must also back up the tables that the view or materialized view uses. If you back up a table that uses a sequence, you must also back up the sequence."}),"\n",(0,n.jsxs)(t.p,{children:["You can optionally specify a table leaf partition name in place of the table name, to include only specific leaf partitions in a backup with the ",(0,n.jsx)(t.code,{children:"--leaf-partition-data"})," option. When a leaf partition is backed up, the leaf partition data is backed up along with the metadata for the partitioned table."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--include-table-file file_name:"})," Optional. Specifies a text file containing a list of tables to include in the backup. Each line in the text file must define a single table using the format ",(0,n.jsx)(t.code,{children:"<schema-name>.<table-name>"}),". The file must not include trailing lines."]}),"\n",(0,n.jsxs)(t.p,{children:["Any tables not listed in this file are omitted from the backup set. You cannot combine this option with a schema filtering option such as ",(0,n.jsx)(t.code,{children:"--include-schema"}),", or another table filtering option such as ",(0,n.jsx)(t.code,{children:"--exclude-table-file"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You can also specify the qualified name of a sequence, a view, or a materialized view."}),"\n",(0,n.jsx)(t.p,{children:"If you specify this option, the utility does not automatically back up dependent objects. You must also explicitly specify dependent objects that are required. For example, if you back up a view or a materialized view, you must also specify the tables that the view or the materialized view uses. If you specify a table that uses a sequence, you must also specify the sequence."}),"\n",(0,n.jsxs)(t.p,{children:["You can optionally specify a table leaf partition name in place of the table name, to include only specific leaf partitions in a backup with the ",(0,n.jsx)(t.code,{children:"--leaf-partition-data"})," option. When a leaf partition is backed up, the leaf partition data is backed up along with the metadata for the partitioned table."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--incremental:"})," Specify this option to add an incremental backup to an incremental backup set. A backup set is a full backup and one or more incremental backups. The backups in the set must be created with a consistent set of backup options to ensure that the backup set can be used in a restore operation."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"gpbackup"})," attempts to find the most recent existing backup with a consistent set of options. If the backup is a full backup, the utility creates a backup set. If the backup is an incremental backup, the utility adds the backup to the existing backup set. The incremental backup is added as the latest backup in the backup set. You can specify ",(0,n.jsx)(t.code,{children:"--from-timestamp"})," to override the default behavior."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--from-timestamp backup-timestamp"}),": Optional. Specifies the timestamp of a backup. The specified backup must have backup options that are consistent with the incremental backup that is being created. If the specified backup is a full backup, the utility creates a backup set. If the specified backup is an incremental backup, the utility adds the incremental backup to the existing backup set."]}),"\n",(0,n.jsxs)(t.p,{children:["You must specify ",(0,n.jsx)(t.code,{children:"--leaf-partition-data"})," with this option. You cannot combine this option with ",(0,n.jsx)(t.code,{children:"--data-only"})," or ",(0,n.jsx)(t.code,{children:"--metadata-only"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A backup is not created and the utility returns an error if the backup cannot add the backup to an existing incremental backup set or cannot use the backup to create a backup set."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--jobs int:"})," Optional. Specifies the number of jobs to run in parallel when backing up tables. By default, ",(0,n.jsx)(t.code,{children:"gpbackup"})," uses 1 job (database connection). Increasing this number can improve the speed of backing up data. When running multiple jobs, each job backs up tables in separate transactions. ",(0,n.jsx)(t.strong,{children:"Important:"})," If you specify a value higher than 1, the database should be in a quiescent state while the utility acquires a lock on the tables that are being backed up. If the utility cannot acquire a lock on a table being backed up it will exit."]}),"\n",(0,n.jsxs)(t.p,{children:["You cannot use this option in combination with the options ",(0,n.jsx)(t.code,{children:"--metadata-only"}),", ",(0,n.jsx)(t.code,{children:"--single-data-file"}),", or ",(0,n.jsx)(t.code,{children:"--plugin-config"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": When using the ",(0,n.jsx)(t.code,{children:"--jobs"})," flag, there is a potential deadlock scenario to generate a ",(0,n.jsx)(t.code,{children:"WARNING"})," message in the log files. During the metadata portion of the backup, the main worker process gathers Access Share locks on all the tables in the backup set. During the data portion of the backup, based on the value of the ",(0,n.jsx)(t.code,{children:"--jobs"})," flag, additional workers are created that attempt to take additional Access Share locks on the tables they back up. Between the metadata backup and the data backup, if a third party process (operations like ",(0,n.jsx)(t.code,{children:"TRUNCATE"}),", ",(0,n.jsx)(t.code,{children:"DROP"}),", ",(0,n.jsx)(t.code,{children:"ALTER"}),") attempts to access the same tables and obtain an Exclusive lock, the worker thread identifies the potential deadlock and hands off the table backup responsibilities to the main worker (that already has an Access Share lock on that particular table). A warning message is logged, similar to: ",(0,n.jsx)(t.code,{children:"[WARNING]:-Worker 5 could not acquire AccessShareLock for table public.foo."})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--leaf-partition-data"}),": Optional. For partitioned tables, creates one data file per leaf partition instead of one data file for the entire table (the default). Using this option also enables you to specify individual leaf partitions to include in or exclude from a backup, with the ",(0,n.jsx)(t.code,{children:"--include-table"}),", ",(0,n.jsx)(t.code,{children:"--include-table-file"}),", ",(0,n.jsx)(t.code,{children:"--exclude-table"}),", and ",(0,n.jsx)(t.code,{children:"--exclude-table-file"})," options.--metadata-onlyOptional. Creates only the metadata files (DDL) needed to recreate the database objects, but does not back up the actual table data."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--no-compression:"})," Optional. Do not compress the table data CSV files."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--plugin-config config-file_location:"})," Specify the location of the ",(0,n.jsx)(t.code,{children:"gpbackup"})," plugin configuration file, a YAML-formatted text file. The file contains configuration information for the plugin application that ",(0,n.jsx)(t.code,{children:"gpbackup"})," uses during the backup operation."]}),"\n",(0,n.jsxs)(t.p,{children:["If you specify the ",(0,n.jsx)(t.code,{children:"--plugin-config"})," option when you back up a database, you must specify this option with configuration information for a corresponding plugin application when you restore the database from the backup."]}),"\n",(0,n.jsxs)(t.p,{children:["You cannot combine this option with the option ",(0,n.jsx)(t.code,{children:"--backup-dir"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--quiet"}),": Optional. Suppress all non-warning, non-error log messages."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--single-data-file"}),": Optional. Create a single data file on each segment host for all tables backed up on that segment. By default, each ",(0,n.jsx)(t.code,{children:"gpbackup"})," creates one compressed CSV file for each table that is backed up on the segment. Note: If you use the ",(0,n.jsx)(t.code,{children:"--single-data-file"})," option to combine table backups into a single file per segment, you cannot set the ",(0,n.jsx)(t.code,{children:"gprestore"})," option ",(0,n.jsx)(t.code,{children:"--jobs"})," to a value higher than 1 to perform a parallel restore operation."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--verbose"}),": Optional. Print verbose log messages."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--version"}),": Optional. Print the version number and exit."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--with-stats"}),": Optional. Include query plan statistics in the backup set."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--without-globals"}),": Optional. Omit the global Cloudberry Database system objects during backup."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"--help:"})," Displays the online help."]}),"\n",(0,n.jsx)(t.h2,{id:"return-codes",children:"Return Codes"}),"\n",(0,n.jsxs)(t.p,{children:["One of these codes is returned after ",(0,n.jsx)(t.code,{children:"gpbackup"})," completes."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"0 -- Backup completed with no problems."}),"\n",(0,n.jsx)(t.li,{children:"1 -- Backup completed with non-fatal errors. See log file for more information."}),"\n",(0,n.jsx)(t.li,{children:"2 -- Backup failed with a fatal error. See log file for more information."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"schema-and-table-names",children:"Schema and Table Names"}),"\n",(0,n.jsxs)(t.p,{children:["When using the option ",(0,n.jsx)(t.code,{children:"--include-table"})," or ",(0,n.jsx)(t.code,{children:"--include-table-file"})," to filter backups, the schema or table names may contain upper-case characters, space ( ), newline (\\n), (\\t), or any of these special characters:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"~ # $ % ^ & * ( ) _ - + [ ] { } > < \\ | ; : / ? ! , \" '"})}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'public.foo"bar\npublic.foo bar\npublic.foo\\nbar\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": The ",(0,n.jsx)(t.code,{children:"--include-table"})," and ",(0,n.jsx)(t.code,{children:"--include-table-file"})," options do not support schema or table names that contain periods (",(0,n.jsx)(t.code,{children:"."}),") or evaluated newlines."]}),"\n",(0,n.jsx)(t.p,{children:"When the table name has special characters, the name must be enclosed in single quotes:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"gpbackup --dbname test --include-table 'my#1schema'.'my_$42_Table'\n"})}),"\n",(0,n.jsx)(t.p,{children:"When the table name contains single quotes, use an escape character for each quote or encapsulate the table name within double quotes. For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\ngpbackup --dbname test --include-table public.'foo\\'bar'\ngpbackup --dbname test --include-table public.\"foo'bar\"\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When using the option ",(0,n.jsx)(t.code,{children:"--include-table-file"}),", the table names in the text file do not require single quotes. For example, the contents of the text file could be similar to:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"my#1schema.my_$42_Table\nmy#1schema.my_$590_Table\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:'Backup all schemas and tables in the "demo" database, including global Cloudberry Database system objects statistics:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ gpbackup --dbname demo\n"})}),"\n",(0,n.jsx)(t.p,{children:'Backup all schemas and tables in the "demo" database except for the "twitter" schema:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ gpbackup --dbname demo --exclude-schema twitter\n"})}),"\n",(0,n.jsx)(t.p,{children:'Backup only the "twitter" schema in the "demo" database:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ gpbackup --dbname demo --include-schema twitter\n"})}),"\n",(0,n.jsx)(t.p,{children:'Backup all schemas and tables in the "demo" database, including global Cloudberry Database system objects and query statistics, and copy all backup files to the /home/gpadmin/backup directory:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ gpbackup --dbname demo --with-stats --backup-dir /home/gpadmin/backup\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This example uses ",(0,n.jsx)(t.code,{children:"--include-schema"})," with ",(0,n.jsx)(t.code,{children:"--exclude-table"})," to back up a schema except for a single table."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ gpbackup --dbname demo --include-schema mydata --exclude-table mydata.addresses\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You cannot use the option ",(0,n.jsx)(t.code,{children:"--exclude-schema"})," with a table filtering option such as ",(0,n.jsx)(t.code,{children:"--include-table"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/zh/docs/sys-utilities/gprestore",children:"gprestore"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>o});var n=a(67294);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);