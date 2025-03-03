"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5030],{82289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(85893),s=a(11151);const r={title:"Directory Table"},o="Directory Table",l={id:"advanced-analytics/directory-tables",title:"Directory Table",description:"Cloudberry Database has introduced directory tables in v1.5.3 for unified management of unstructured data on local or object storage.",source:"@site/docs/advanced-analytics/directory-tables.md",sourceDirName:"advanced-analytics",slug:"/advanced-analytics/directory-tables",permalink:"/docs/advanced-analytics/directory-tables",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/advanced-analytics/directory-tables.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1740637488,formattedLastUpdatedAt:"Feb 27, 2025",frontMatter:{title:"Directory Table"},sidebar:"docsbars",previous:{title:"Geospatial Analytics",permalink:"/docs/advanced-analytics/postgis"},next:{title:"Use pgvector for Vector Similarity Search",permalink:"/docs/advanced-analytics/pgvector-search"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Create a directory table",id:"create-a-directory-table",level:3},{value:"Create in local storage",id:"create-in-local-storage",level:4},{value:"Create in external storage",id:"create-in-external-storage",level:4},{value:"View the field information of directory table",id:"view-the-field-information-of-directory-table",level:3},{value:"Upload file into directory table",id:"upload-file-into-directory-table",level:3},{value:"Query and use the files managed by directory table",id:"query-and-use-the-files-managed-by-directory-table",level:3},{value:"Delete the file managed by Directory  Table",id:"delete-the-file-managed-by-directory--table",level:3},{value:"Delete a directory table",id:"delete-a-directory-table",level:3}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"directory-table",children:"Directory Table"}),"\n",(0,n.jsxs)(t.p,{children:["Cloudberry Database has introduced ",(0,n.jsx)(t.em,{children:"directory tables"})," in v1.5.3 for unified management of unstructured data on local or object storage."]}),"\n",(0,n.jsx)(t.p,{children:"In the context of large-scale AI, AI applications have generated the need to manage unstructured multi-modal corpora. There is a need to continuously prepare a large amount of high-quality curated unstructured corpora, train large models through data iteration, and summarize rich knowledge bases. Therefore, there are technical challenges in the management and processing of structured corpora."}),"\n",(0,n.jsx)(t.p,{children:"To address these challenges, Cloudberry Database introduces directory tables for managing multiple types of unstructured data. Developer users can use simple SQL statements to take advantage of the capabilities of multiple computing engines to achieve one-stop data processing and application development."}),"\n",(0,n.jsx)(t.p,{children:"Directory tables store, manage, and analyze unstructured data objects. They reside within tablespaces. When unstructured data files are imported, a directory table record (file metadata) is created, and the file itself is loaded into object storage. The table metadata remains associated with the corresponding object storage file."}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h3,{id:"create-a-directory-table",children:"Create a directory table"}),"\n",(0,n.jsx)(t.p,{children:"You can create a directory table in a local tablespace or in a tablespace of an external storage (such as object storage services or distributed file systems like HDFS)."}),"\n",(0,n.jsx)(t.h4,{id:"create-in-local-storage",children:"Create in local storage"}),"\n",(0,n.jsxs)(t.p,{children:["To create a directory table in local storage, follow the SQL syntax below. You need to replace ",(0,n.jsx)(t.code,{children:"<table_name>"})," and ",(0,n.jsx)(t.code,{children:"<tablespace_name>"})," with the actual table name and tablespace name."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"-- Method 1: To create a directory table in a tablespace other than the default one,\n-- create the tablespace first and then create the directory table within that tablespace.\nCREATE TABLESPACE <tablespace_name>\n       LOCATION '<tablespace_path>';\n\nCREATE DIRECTORY TABLE <table_name>\n       TABLESPACE <tablespace_name>;\n\n\n-- Method 2: To create a directory table in the default tablespace, simply omit the TABLESPACE clause.\nCREATE DIRECTORY TABLE <table_name>;\n"})}),"\n",(0,n.jsx)(t.h4,{id:"create-in-external-storage",children:"Create in external storage"}),"\n",(0,n.jsx)(t.p,{children:"To create a directory table in an external storage, you first need to create a tablespace in that storage. You'll need to provide connection information of the external storage server, such as server IP address, protocol, and access credentials. The following examples show how to create directory tables on QingCloud Object Storage and HDFS."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create server objects and define connection methods for external data sources. Cloudberry Database supports protocols for multiple storage options, including S3 object storage and HDFS. The following examples create server objects named ",(0,n.jsx)(t.code,{children:"oss_server"})," and ",(0,n.jsx)(t.code,{children:"hdfs_server"})," on QingCloud and HDFS, respectively."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For QingCloud:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE STORAGE SERVER oss_server OPTIONS(protocol 'qingstor', prefix '<path prefix>', endpoint '<endpoint address>', https 'true', virtual_host 'false');\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For HDFS:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE STORAGE SERVER hdfs_server OPTIONS(protocol 'hdfs', namenode '<HDFS node IP:port>', https 'false');\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The parameters in the above commands are described as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"protocol"}),": The protocol used to connect to the external data source. In the examples above, ",(0,n.jsx)(t.code,{children:"'qingstor'"})," indicates using the QingCloud object storage service protocol, and ",(0,n.jsx)(t.code,{children:"'hdfs'"})," indicates using the HDFS storage service protocol."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"prefix"}),": Sets the path prefix when accessing object storage. If this prefix is set, all operations will be limited to this specific path, such as ",(0,n.jsx)(t.code,{children:"prefix '/rose-oss-test4/usf1'"}),". This is typically used to organize and isolate data stored in the same bucket."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"endpoint"}),": Specifies the network address of the external object storage service. For example, ",(0,n.jsx)(t.code,{children:"'pek3b.qingstor.com'"})," is a specific regional node of the QingCloud service. Through this endpoint, Cloudberry Database can access external data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"https"}),": Specifies whether to connect to the object storage service using the HTTPS protocol. In this command, ",(0,n.jsx)(t.code,{children:"'false'"})," indicates using an unencrypted HTTP connection. This setting might be influenced by data transmission security requirements, and it is generally recommended to use HTTPS to ensure data security."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"virtual_host"}),": Determines whether to access the bucket using virtual hosting. ",(0,n.jsx)(t.code,{children:"'false'"})," means that bucket access is not done in virtual host style (which means that the bucket name is not included in the URL). This option is typically dependent on the URL format support provided by the storage service provider."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"namenode"}),": Represents the IP of the HDFS node. You need to replace ",(0,n.jsx)(t.code,{children:"<HDFS node IP:port>"})," with the actual IP address and port number, such as ",(0,n.jsx)(t.code,{children:"'192.168.51.106:8020'"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create user mappings to provide the current user with the authentication information required to access these external servers."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For QingCloud:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE STORAGE USER MAPPING FOR CURRENT_USER STORAGE SERVER oss_server OPTIONS (accesskey '<QingCloud access key>', secretkey '<QingCloud secret key>');\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For HDFS:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE STORAGE USER MAPPING FOR CURRENT_USER STORAGE SERVER hdfs_server OPTIONS (auth_method 'simple');\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The parameters in the above commands are described as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"accesskey"})," and ",(0,n.jsx)(t.code,{children:"secretkey"}),": These parameters provide the necessary authentication information. ",(0,n.jsx)(t.code,{children:"'accesskey'"})," and ",(0,n.jsx)(t.code,{children:"'secretkey'"})," are similar to username and password, and are used to access the object storage service."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"auth_method"}),": Indicates the authentication method for accessing HDFS. ",(0,n.jsx)(t.code,{children:"simple"})," indicates simple authentication mode, and ",(0,n.jsx)(t.code,{children:"kerberos"})," indicates using Kerberos authentication mode."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create tablespaces on the external servers. These tablespaces are specifically associated with the previously defined external servers, and the ",(0,n.jsx)(t.code,{children:"location"})," option of the tablespace specifies a specific path on the external storage. The following examples create tablespaces ",(0,n.jsx)(t.code,{children:"dir_oss"})," and ",(0,n.jsx)(t.code,{children:"dir_hdfs"})," on QingCloud and HDFS, respectively."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For QingCloud:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLESPACE dir_oss location '<object_storage_path>' SERVER oss_server HANDLER '$libdir/dfs_tablespace, remote_file_handler';\n\n-- You need to replace <object_storage_path> with the actual path on the object storage, such as /tbs-49560-0-mgq-multi/oss-server-01-17.\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For HDFS:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLESPACE dir_hdfs location '<object_storage_path>' SERVER hdfs_server HANDLER '$libdir/dfs_tablespace, remote_file_handler';\n\n-- You need to replace <object_storage_path> with the actual path on the object storage, such as /tbs-49560-0-mgq-multi/oss-server-01-17.\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create directory tables in the tablespaces. The following statements create directory tables ",(0,n.jsx)(t.code,{children:"dir_table_oss"})," and ",(0,n.jsx)(t.code,{children:"dir_table_hdfs"})," in tablespaces ",(0,n.jsx)(t.code,{children:"dir_oss"})," and ",(0,n.jsx)(t.code,{children:"dir_hdfs"}),", respectively."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE DIRECTORY TABLE dir_table_oss TABLESPACE dir_oss;\nCREATE DIRECTORY TABLE dir_table_hdfs TABLESPACE dir_hdfs;\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["If you encounter the error message ",(0,n.jsx)(t.code,{children:"directory ... does not exist"})," while creating the tablespace, you need to configure ",(0,n.jsx)(t.code,{children:"shared_preload_libraries"})," for the cluster and then import the library to the object storage. To do this, follow these steps:"]}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Execute the command ",(0,n.jsx)(t.code,{children:"gpconfig -c shared_preload_libraries -v 'dfs_tablespace'"})," to configure the cluster."]}),"\n",(0,n.jsxs)(t.li,{children:["Restart the cluster using the command ",(0,n.jsx)(t.code,{children:"gpstop -ra"}),"."]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"view-the-field-information-of-directory-table",children:"View the field information of directory table"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"\\dY    -- Lists all the directory tables.\n\\d <directory_table>    -- Shows the field information of a directory table.\n"})}),"\n",(0,n.jsx)(t.p,{children:"In general, the fields of a directory table are as follows:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Field name"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Data type"})}),(0,n.jsx)(t.th,{children:"Note"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"RELATIVE_PATH"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TEXT"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"SIZE"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"NUMBER"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"LAST_MODIFIED"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TIMESTAMP_LTZ"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MD5"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"HEX"})}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TAGS"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"JSONB"})}),(0,n.jsx)(t.td,{children:'User-defined tags. Can be used to mark data lineage, file upload department/team, classification. "k1=v1, k2=v2"'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"upload-file-into-directory-table",children:"Upload file into directory table"}),"\n",(0,n.jsx)(t.p,{children:"After uploading a file to a directory table, Cloudberry Database manages the file's upload to local storage or object storage and stores the file's metadata in the directory table. In Cloudberry Database v1.5.3, users cannot directly manage object storage directory files."}),"\n",(0,n.jsx)(t.p,{children:"Upload files from local storage to database object storage:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"\\COPY '<directory_table_name>' FROM '<local_path_to_file> <target_path>';\nCOPY '<directory_table_name>' FROM '<local_path_to_file> <target_path>';  -- Optionally omits the starting slash \\\n\n-- <directory_table_name> is the directory table name.\n-- <local_path_to_file> is the local path to the file to be uploaded.\n-- <target_path> is the target path to the local or object storage, and the file will be uploaded to this path.\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["It is recommended to use the subdirectory capability of ",(0,n.jsx)(t.code,{children:"<path>"})," to ensure that the directory path after uploading is consistent with the local one, which simplifies file management."]})}),"\n",(0,n.jsx)(t.p,{children:"For enhanced file management and data flow tracking, you can add tags to the upload command. These tags provide additional information or markings for your files."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"\\COPY '<directory_table_name>' FROM '<local_path_to_file>' '<target_path>' WITH tag '<tag_name>';\n"})}),"\n",(0,n.jsx)(t.p,{children:"Examples:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"-- Uploads the file to the root path.\n\\COPY BINARY dir_table_oss FROM '/data/country.data' 'country.data';\n\n-- Uploads the file to a specified path top_level/second_level\n\\COPY BINARY dir_table_oss FROM '/data/region.tbl' 'top_level/second_level/region.tbl';\n\n-- Uploads the file to the root path with a tag\n\\COPY BINARY dir_table_oss FROM '/data/country1.data' 'country1.data' with tag 'country';\n\n-- Uploads the file to a specified path top_level/second_level with a tag\n\\COPY BINARY dir_table_oss FROM '/data/region1.tbl' 'top_level/second_level/region1.tbl' with tag 'region';\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also use the command-line tool ",(0,n.jsx)(t.code,{children:"cbload"})," to upload files in bulk to object storage. Use the syntax ",(0,n.jsx)(t.code,{children:"cbload --inputfile <directory>"})," to upload files in a directory to object storage. The command-line flags for ",(0,n.jsx)(t.code,{children:"cbload"})," are as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"Usage:\n  cbload [flags]\n\nFlags:\n      --database string       Database to connect to (default gpadmin)\n      --dest-path string      Path relative to the table root directory (default: root directory of the table)\n      --force-password-auth   Force a password prompt (default false)\n      --help                  Print help info and exit\n      --host string           Host to connect to (default localhost)\n      --input-file strings    Input files or directory\n      --logfile string        Log output to logfile (default none)\n      --port int              Port to connect to (default 5432)\n      --stop-on-error         Stop loading files when an error occurs (default false)\n      --table string          Table to load to\n      --tag string            File tag\n      --tasks int             The maximum number of files that concurrently loads (default 1)\n      --user string           User to connect as (default gpadmin)\n      --verbose               Indicates that the tool should generate verbose output (default false)\n      --version               Print version info and exit\n"})}),"\n",(0,n.jsx)(t.h3,{id:"query-and-use-the-files-managed-by-directory-table",children:"Query and use the files managed by directory table"}),"\n",(0,n.jsx)(t.p,{children:"Query the metadata of a file in directory table:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"-- Uses the table function directory_table() to read the file metadata and content.\nSELECT relative_path, \n       size, \n       last_modified, \n       md5,\n       tag,\n       content\n       FROM directory_table('<directory_table>');\n\n-- You can use one of the following statements to query the data of a directory table.\nSELECT * FROM <directory_table>;\nSELECT * FROM DIRECTORY_TABLE('<directory_table>');\n"})}),"\n",(0,n.jsx)(t.h3,{id:"delete-the-file-managed-by-directory--table",children:"Delete the file managed by Directory  Table"}),"\n",(0,n.jsx)(t.p,{children:"To delete a file managed by directory table, you need the admin privilege:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT remove_file('dir_table_oss', 'country.data');\n\n-- This command deletes the file country.data managed in the table dir_table_oss.\n"})}),"\n",(0,n.jsx)(t.h3,{id:"delete-a-directory-table",children:"Delete a directory table"}),"\n",(0,n.jsx)(t.p,{children:"Delete a directory table. After the deletion, all the file managed by the table will be deleted as well. To delete a directory table, you need the admin privilege."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP DIRECTORY TABLE <table_name>;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>o});var n=a(67294);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);