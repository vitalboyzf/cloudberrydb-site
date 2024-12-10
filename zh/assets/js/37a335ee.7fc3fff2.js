"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[218],{71378:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(85893),a=s(11151);const o={title:"\u5730\u7406\u7a7a\u95f4\u5206\u6790"},r="\u5730\u7406\u7a7a\u95f4\u5206\u6790",l={id:"advanced-analytics/postgis",title:"\u5730\u7406\u7a7a\u95f4\u5206\u6790",description:"PostGIS \u6269\u5c55\u4e86 PostgreSQL \u7684\u529f\u80fd\uff0c\u589e\u52a0\u4e86\u5bf9\u5730\u7406\u7a7a\u95f4\u6570\u636e\u7684\u5b58\u50a8\u3001\u7d22\u5f15\u548c\u67e5\u8be2\u652f\u6301\u3002Cloudberry Database \u652f\u6301 PostGIS \u8fdb\u884c\u5730\u7406\u7a7a\u95f4\u5206\u6790\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced-analytics/postgis.md",sourceDirName:"advanced-analytics",slug:"/advanced-analytics/postgis",permalink:"/zh/docs/advanced-analytics/postgis",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/advanced-analytics/postgis.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"\u5730\u7406\u7a7a\u95f4\u5206\u6790"},sidebar:"docsbars",previous:{title:"\u9009\u62e9\u8868\u5b58\u50a8\u6a21\u578b",permalink:"/zh/docs/table-storage-models"},next:{title:"Directory Table",permalink:"/zh/docs/advanced-analytics/directory-tables"}},i={},d=[{value:"\u4e3a Cloudberry Database \u7f16\u8bd1 PostGIS",id:"\u4e3a-cloudberry-database-\u7f16\u8bd1-postgis",level:2},{value:"\u5728 Cloudberry Database \u4e2d\u4f7f\u7528 PostGIS",id:"\u5728-cloudberry-database-\u4e2d\u4f7f\u7528-postgis",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u5730\u7406\u7a7a\u95f4\u5206\u6790",children:"\u5730\u7406\u7a7a\u95f4\u5206\u6790"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://postgis.net/",children:"PostGIS"})," \u6269\u5c55\u4e86 PostgreSQL \u7684\u529f\u80fd\uff0c\u589e\u52a0\u4e86\u5bf9\u5730\u7406\u7a7a\u95f4\u6570\u636e\u7684\u5b58\u50a8\u3001\u7d22\u5f15\u548c\u67e5\u8be2\u652f\u6301\u3002Cloudberry Database \u652f\u6301 PostGIS \u8fdb\u884c\u5730\u7406\u7a7a\u95f4\u5206\u6790\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4e3a\u4f60\u7684 Cloudberry Database \u96c6\u7fa4\u7f16\u8bd1\u548c\u6784\u5efa PostGIS\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u67e5\u770b Cloudberry Database PostGIS \u9879\u76ee\u7684\u4ed3\u5e93\uff0c\u8bf7\u8bbf\u95ee ",(0,t.jsx)(n.a,{href:"https://github.com/cloudberrydb/postgis",children:(0,t.jsx)(n.code,{children:"cloudberrydb/postgis"})}),"\u3002\u8be5\u4ed3\u5e93\u7684 PostGIS \u662f\u4e13\u95e8\u4e3a Cloudberry Database \u6253\u9020\u7684\uff0c\u672c\u6587\u6863\u4ecb\u7ecd\u7684\u7f16\u8bd1\u6784\u5efa\u65b9\u6cd5\uff0c\u662f\u57fa\u4e8e\u8be5\u4ed3\u5e93\u7684\u4ee3\u7801\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3a-cloudberry-database-\u7f16\u8bd1-postgis",children:"\u4e3a Cloudberry Database \u7f16\u8bd1 PostGIS"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e3a Cloudberry Database \u5b89\u88c5 PostGIS \u4e4b\u524d\uff0c\u8bf7\u5148\u5b89\u88c5\u6240\u9700\u7684\u4f9d\u8d56\u9879\u5e76\u7f16\u8bd1\u82e5\u5e72\u7ec4\u4ef6\u3002\u76ee\u524d\uff0c\u4ec5\u652f\u6301\u5728 CentOS \u7cfb\u7edf\u4e0a\u8fdb\u884c\u7f16\u8bd1\u6784\u5efa\uff0c\u672a\u6765\u8ba1\u5212\u652f\u6301 Rocky Linux\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5f00\u59cb\u7f16\u8bd1\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd Cloudberry Database \u5df2\u6b63\u786e\u5b89\u88c5\u3002\u5982\u679c\u5c1a\u672a\u5b89\u88c5\uff0c\u8bf7\u53c2\u9605",(0,t.jsx)(n.a,{href:"https://cloudberrydb.org/zh/docs/",children:"\u6587\u6863"}),"\u83b7\u53d6\u5b89\u88c5\u8bf4\u660e\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yum install -y libtool proj-devel boost-devel gmp-devel mpfr-devel pcre-devel protobuf protobuf-c protobuf-devel protobuf-c-devel && \\\nyum install -y gcc make subversion gcc-c++ sqlite-devel libxml2-devel swig expat-devel libcurl-devel python36-devel json-c\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6784\u5efa\u76f8\u5173\u7ec4\u4ef6\uff08GDAL\u3001CGAL\u3001SFCGAL \u548c GEOS\uff09\u3002\u8bf7\u786e\u4fdd\u4f60\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"root"})," \u7528\u6237\u8fdb\u884c\u6784\u5efa\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6784\u5efa GDAL\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://gdal.org/index.html",children:"GDAL"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u6805\u683c\u548c\u77e2\u91cf\u5730\u7406\u7a7a\u95f4\u6570\u636e\u683c\u5f0f\u7684\u8f6c\u6362\u5e93\u3002\u6309\u7167\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://download.osgeo.org/gdal/2.2.1/gdal-2.2.1.tar.gz --no-check-certificate\ntar xf gdal-2.2.1.tar.gz\ncd gdal-2.2.1/\n./configure --prefix=/usr/local/gdal-2.2.1\nmake && make install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6784\u5efa CGAL\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.cgal.org/",children:"CGAL"})," \u63d0\u4f9b\u4e86\u4e00\u4e2a C++ \u5e93\uff0c\u5b83\u4ee5\u4e00\u79cd\u6613\u4e8e\u8bbf\u95ee\u7684\u65b9\u5f0f\u63d0\u4f9b\u4e86\u9ad8\u6548\u4e14\u53ef\u9760\u7684\u51e0\u4f55\u7b97\u6cd5\u3002\u6309\u7167\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/CGAL/cgal/archive/releases/CGAL-4.13.tar.gz\ntar xf CGAL-4.13.tar.gz\ncd cgal-releases-CGAL-4.13/\nmkdir build && cd build\ncmake ..\nmake && make install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6784\u5efa SFCGAL\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Oslandia/SFCGAL",children:"SFCGAL"})," \u662f\u4e00\u4e2a\u56f4\u7ed5 CGAL \u7684 C++ \u5c01\u88c5\u5e93\uff0c\u652f\u6301 ISO 19107:2013 \u548c OGC Simple Features Access 1.2 \u89c4\u8303\uff0c\u7528\u4e8e 3D \u64cd\u4f5c\u3002\u6309\u7167\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/Oslandia/SFCGAL/archive/v1.3.6.tar.gz\ntar xf v1.3.6.tar.gz\ncd SFCGAL-1.3.6/\nmkdir build && cd build\ncmake -DCMAKE_INSTALL_PREFIX=/usr/local/sfcgal-1.3.6 ..\nmake && make install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6784\u5efa GEOS\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://libgeos.org/",children:"GEOS"})," \u662f\u4e00\u4e2a C/C++ \u8ba1\u7b97\u51e0\u4f55\u5e93\uff0c\u4e13\u6ce8\u4e8e\u5730\u7406\u4fe1\u606f\u7cfb\u7edf (GIS) \u8f6f\u4ef6\u4e2d\u4f7f\u7528\u7684\u7b97\u6cd5\u3002\u6309\u7167\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://download.osgeo.org/geos/geos-3.7.0.tar.bz2 --no-check-certificate\ntar xf geos-3.7.0.tar.bz2\ncd geos-3.7.0/\n./configure --prefix=/usr/local/geos-3.7.0/\nmake && make install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u66f4\u65b0 ",(0,t.jsx)(n.code,{children:"/etc/ld.so.conf"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5b89\u88c5\u4e0a\u8ff0\u7ec4\u4ef6\u540e\uff0c\u66f4\u65b0 ",(0,t.jsx)(n.code,{children:"/etc/ld.so.conf"})," \u6587\u4ef6\uff0c\u4ee5\u914d\u7f6e\u52a8\u6001\u52a0\u8f7d\u5668\u641c\u7d22\u7ec4\u4ef6\u7684\u76ee\u5f55\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat << EOF >> /etc/ld.so.conf\n/usr/lib/\n/usr/lib64/\n/usr/local/sfcgal-1.3.6/lib64/\n/usr/local/gdal-2.2.1/lib/\n/usr/local/geos-3.7.0/lib/\nEOF\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\u6267\u884c ",(0,t.jsx)(n.code,{children:"ldconfig"})," \u547d\u4ee4\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6784\u5efa\u5e76\u5b89\u88c5 PostGIS."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5c06 ",(0,t.jsx)(n.code,{children:"cloudberrydb/postgis"})," \u4ed3\u5e93\u4e0b\u8f7d\u5230\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"/home/gpadmin"})," \u76ee\u5f55\u4e2d\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/cloudberrydb/postgis.git /home/gpadmin/postgis\nchown -R gpadmin:gpadmin /home/gpadmin/postgis\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7f16\u8bd1 PostGIS\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5f00\u59cb\u7f16\u8bd1\u6d41\u7a0b\u524d\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ee5\u786e\u4fdd\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u5b8c\u6bd5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"source /usr/local/cloudberrydb/greenplum_path.sh\nsource /home/gpadmin/cloudberrydb/gpAux/gpdemo/gpdemo-env.sh\nscl enable devtoolset-10 bash\nsource /opt/rh/devtoolset-10/enable\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u7ee7\u7eed\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cd /home/gpadmin/postgis/postgis/build/postgis-2.5.4/\n./autogen.sh\n./configure --prefix="${GPHOME}" --with-pgconfig="${GPHOME}"/bin/pg_config --with-raster --without-topology --with-gdalconfig=/usr/local/gdal-2.2.1/bin/gdal-config --with-sfcgal=/usr/local/sfcgal-1.3.6/bin/sfcgal-config --with-geosconfig=/usr/local/geos-3.7.0/bin/geos-config\nmake && make install\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5728-cloudberry-database-\u4e2d\u4f7f\u7528-postgis",children:"\u5728 Cloudberry Database \u4e2d\u4f7f\u7528 PostGIS"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Cloudberry Database \u96c6\u7fa4\u4e0a\u7f16\u8bd1\u548c\u52a0\u8f7d PostGIS\uff0c\u5e76\u5df2\u542f\u52a8\u6f14\u793a\u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u7528 PostGIS \u548c\u652f\u6301\u7684\u6269\u5c55\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"$ psql -p 7000 postgres\n\npostgres=# CREATE EXTENSION postgis;     -- \u5f00\u542f PostGIS \u548c\u6805\u683c\npostgres=# CREATE EXTENSION fuzzystrmatch;     -- \u7528\u4e8e\u5b89\u88c5 Tiger Geocoder\npostgres=# CREATE EXTENSION postgis_tiger_geocoder;     -- \u5f00\u542f Tiger Geocoder\npostgres=# CREATE EXTENSION address_standardizer;     -- \u5f00\u542f address_standardizer\npostgres=# CREATE EXTENSION address_standardizer_data_us;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 PostGIS \u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u975e OpenGIS \u8868\u5e76\u63d2\u5165\u548c\u67e5\u8be2\u5404\u79cd\u51e0\u4f55\u5bf9\u8c61\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a geom_test \u7684\u8868\u3002\nCREATE TABLE geom_test ( gid int4, geom geometry, \n  name varchar(25) );\n\n-- \u5411\u8868\u4e2d\u63d2\u5165\u4e00\u884c\u6570\u636e\uff0cgid \u4e3a 1,geometry \u5b57\u6bb5\u4f7f\u7528 WKT \u683c\u5f0f\u8868\u793a\u4e00\u4e2a\u4e09\u7ef4\u591a\u8fb9\u5f62\u5bf9\u8c61\uff08\u4e00\u4e2a\u4e09\u7ef4\u6b63\u65b9\u5f62\uff09,name \u4e3a '3D Square'\u3002\nINSERT INTO geom_test ( gid, geom, name )\n  VALUES ( 1, 'POLYGON((0 0 0,0 5 0,5 5 0,5 0 0,0 0 0))', '3D Square');\n  \n-- \u63d2\u5165\u7b2c\u4e8c\u884c\u6570\u636e\uff0cgid \u4e3a 2\uff0cgeometry \u4e3a\u4e00\u6761\u4e09\u7ef4\u7ebf\u4e32\uff0cname \u4e3a '3D Line'\u3002\nINSERT INTO geom_test ( gid, geom, name ) \n  VALUES ( 2, 'LINESTRING(1 1 1,5 5 5,7 7 5)', '3D Line' );\n  \n-- \u63d2\u5165\u7b2c\u4e09\u884c\uff0cgid \u4e3a 3\uff0cgeometry \u4e3a\u4e00\u4e2a\u4e8c\u7ef4\u591a\u70b9\u5bf9\u8c61\uff0cname \u4e3a '2D Aggregate Point'\u3002\nINSERT INTO geom_test ( gid, geom, name )\n  VALUES ( 3, 'MULTIPOINT(3 4,8 9)', '2D Aggregate Point' );\n\n-- \u5148\u4f7f\u7528 ST_GeomFromEWKT \u4ece EWKT \u6784\u9020\u4e00\u4e2a\u4e09\u7ef4\u7ebf\u4e32\u5bf9\u8c61\uff0c\u7136\u540e\u7528 Box3D \u83b7\u53d6\u8be5\u5bf9\u8c61\u7684\u4e09\u7ef4\u8fb9\u754c\u6846\u3002\u518d\u4f7f\u7528 && \u64cd\u4f5c\u7b26\u67e5\u8be2 geom_test \u8868\u4e2d\u7684 geom \u5b57\u6bb5\u4e0e\u8be5\u8fb9\u754c\u6846\u76f8\u4ea4\u7684\u6240\u6709\u884c\u3002\nSELECT * from geom_test WHERE geom &&\n  Box3D(ST_GeomFromEWKT('LINESTRING(2 2 0, 3 3 0)'));\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 PostGIS \u521b\u5efa\u5305\u542b\u5730\u7406\u53c2\u8003\u7684\u8868\uff0c\u63d2\u5165\u5730\u7406\u7f16\u7801\u70b9\u6570\u636e\uff0c\u4ee5\u53ca\u8f93\u51fa\u70b9\u6570\u636e\u4e3a\u6807\u51c6\u6587\u672c\u683c\u5f0f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a geotest \u7684\u8868\u3002\nCREATE TABLE geotest (id INT4, name VARCHAR(32) );\n\n-- \u4e3a\u8868 geotest \u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a geopoint \u7684 geometry \u5217\uff0c\u5b9a\u4e49\u4e3a POINT \u70b9\u7c7b\u578b\uff0c\u5750\u6807\u7ef4\u5ea6\u4e3a 2\uff0c\u5e76\u6307\u5b9a\u5176\u7a7a\u95f4\u53c2\u8003\u7cfb\u7edf (SRID) \u4e3a 4326\uff08\u4ee3\u8868 WGS84 \u5730\u7406\u5750\u6807\u7cfb\uff09\u3002\nSELECT AddGeometryColumn('geotest','geopoint', 4326,'POINT',2);\n\n-- \u63d2\u5165\u7b2c\u4e00\u884c\u6570\u636e\uff0cid \u4e3a 1\uff0cname \u4e3a 'Olympia'\uff0cgeopoint \u662f\u4f7f\u7528 ST_GeometryFromText \u4ece WKT \u6587\u672c\u6784\u9020\u7684\u4e00\u4e2a\u70b9\u5bf9\u8c61\uff0c\u5176\u5750\u6807\u4e3a (-122.90, 46.97)\uff0cSRID \u4e3a 4326\u3002\nINSERT INTO geotest (id, name, geopoint)\n  VALUES (1, 'Olympia', ST_GeometryFromText('POINT(-122.90 46.97)', 4326));\n  \n-- \u63d2\u5165\u7b2c\u4e8c\u884c\u6570\u636e\uff0cid \u4e3a 2\uff0cname \u4e3a 'Renton'\uff0c\u70b9\u5750\u6807\u4e3a (-122.22, 47.50)\uff0cSRID \u540c\u6837\u4e3a 4326\u3002\nINSERT INTO geotest (id, name, geopoint)\n  VALUES (2, 'Renton', ST_GeometryFromText('POINT(-122.22 47.50)', 4326));\n\n-- \u4ece geotest \u8868\u4e2d\u9009\u62e9 name \u548c geopoint \u5b57\u6bb5,\u4f46\u5c06 geopoint \u5b57\u6bb5\u4f7f\u7528 ST_AsText \u51fd\u6570\u8f6c\u6362\u4e3a\u6807\u51c6\u6587\u672c (WKT) \u683c\u5f0f\u8f93\u51fa\u3002\nSELECT name,ST_AsText(geopoint) FROM geotest;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528\u7a7a\u95f4\u7d22\u5f15\u529f\u80fd\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u521b\u5efa\u8868\u683c\nCREATE TABLE spatial_data (\n  id SERIAL PRIMARY KEY,\n  geom geometry\n);\n\n-- \u63d2\u5165\u6570\u636e\nINSERT INTO spatial_data (geom) VALUES \n(ST_GeomFromText('POINT(0 0)')),\n(ST_GeomFromText('POINT(1 1)')),\n(ST_GeomFromText('POLYGON((0 0, 4 0, 4 4, 0 4, 0 0))'));\n\n-- \u521b\u5efa\u7a7a\u95f4\u7d22\u5f15\nCREATE INDEX spatial_data_gist_idx\n  ON spatial_data\n  USING GIST (geom);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u5173 PostGIS \u7684\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"https://postgis.net/documentation/manual/",children:"PostGIS \u5b98\u65b9\u624b\u518c"}),"\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(67294);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);