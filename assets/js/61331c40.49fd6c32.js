"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6939],{1212:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(85893),r=s(11151);const t={title:"Use pgvector for Vector Similarity Search"},a="Use pgvector for Vector Similarity Search",c={id:"advanced-analytics/pgvector-search",title:"Use pgvector for Vector Similarity Search",description:"pgvector is an open-source plugin for vector similarity search. It supports both exact and approximate nearest neighbor searches, as well as L2 distance, inner product, and cosine distance. For more details, see pgvector/pgvector: Open-source vector similarity search for Postgres.",source:"@site/docs/advanced-analytics/pgvector-search.md",sourceDirName:"advanced-analytics",slug:"/advanced-analytics/pgvector-search",permalink:"/docs/advanced-analytics/pgvector-search",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/advanced-analytics/pgvector-search.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"Mar 3, 2025",frontMatter:{title:"Use pgvector for Vector Similarity Search"},sidebar:"docsbars",previous:{title:"Directory Table",permalink:"/docs/advanced-analytics/directory-tables"},next:{title:"Query Performance Overview",permalink:"/docs/performance/"}},d={},l=[{value:"Quick start",id:"quick-start",level:2},{value:"Store data",id:"store-data",level:2},{value:"Query data",id:"query-data",level:2},{value:"Index data",id:"index-data",level:2},{value:"HNSW index",id:"hnsw-index",level:3},{value:"Create an HNSW index",id:"create-an-hnsw-index",level:4},{value:"HNSW index options",id:"hnsw-index-options",level:4},{value:"HNSW index query options",id:"hnsw-index-query-options",level:4},{value:"HNSW index build time",id:"hnsw-index-build-time",level:4},{value:"View HNSW index progress",id:"view-hnsw-index-progress",level:4},{value:"IVFFlat index",id:"ivfflat-index",level:3},{value:"Create an IVFFlat index",id:"create-an-ivfflat-index",level:4},{value:"Specify the number of Probes",id:"specify-the-number-of-probes",level:4},{value:"View IVFFlat index progress",id:"view-ivfflat-index-progress",level:4},{value:"Use filters in indexes",id:"use-filters-in-indexes",level:3},{value:"Hybrid search",id:"hybrid-search",level:2},{value:"pgvector performance",id:"pgvector-performance",level:2},{value:"Exact search",id:"exact-search",level:3},{value:"Approximate search",id:"approximate-search",level:3}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"use-pgvector-for-vector-similarity-search",children:"Use pgvector for Vector Similarity Search"}),"\n",(0,i.jsxs)(n.p,{children:["pgvector is an open-source plugin for vector similarity search. It supports both exact and approximate nearest neighbor searches, as well as L2 distance, inner product, and cosine distance. For more details, see ",(0,i.jsx)(n.a,{href:"https://github.com/pgvector/pgvector",children:"pgvector/pgvector: Open-source vector similarity search for Postgres"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Apache Cloudberry allows you to use pgvector for data storage, querying, indexing, hybrid searches, and more through SQL statements. This document explains how to use pgvector in Apache Cloudberry."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["While the pgvector extension is maintained by the dedicated pgvector community, Cloudberry is committed to ensuring its compatibility and ease of use within our platform. Here is one ",(0,i.jsx)(n.a,{href:"https://github.com/cloudberry-contrib/pgvector",children:"forked pgvector version"}),", which is contributed by the community members and customized for Cloudberry, but please note that it is not maintained as one official Cloudberry project."]})}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,i.jsx)(n.p,{children:"Enable the extension (do this once in each database where you want to use it):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE EXTENSION vector;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create a vector column with 3 dimensions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE items (id bigserial PRIMARY KEY, embedding vector(3));\n"})}),"\n",(0,i.jsx)(n.p,{children:"Insert vector data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO items (embedding) VALUES ('[1,2,3]'), ('[4,5,6]');\n"})}),"\n",(0,i.jsx)(n.p,{children:"Get the nearest neighbors by L2 distance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM items ORDER BY embedding <-> '[3,1,2]' LIMIT 5;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note: Use ",(0,i.jsx)(n.code,{children:"<#>"})," for inner product and ",(0,i.jsx)(n.code,{children:"<=>"})," for cosine distance."]}),"\n",(0,i.jsx)(n.h2,{id:"store-data",children:"Store data"}),"\n",(0,i.jsx)(n.p,{children:"Create a table with a vector column:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE items (id bigserial PRIMARY KEY, embedding vector(3));\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or add a vector column to an existing table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE items ADD COLUMN embedding vector(3);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Insert vectors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO items (embedding) VALUES ('[1,2,3]'), ('[4,5,6]');\n"})}),"\n",(0,i.jsx)(n.p,{children:"Insert and update vectors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO items (id, embedding) VALUES (1, '[1,2,3]'), (2, '[4,5,6]')\n    ON CONFLICT (id) DO UPDATE SET embedding = EXCLUDED.embedding;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Update vectors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"UPDATE items SET embedding = '[1,2,3]' WHERE id = 1;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Delete vectors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE FROM items WHERE id = 1;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"query-data",children:"Query data"}),"\n",(0,i.jsx)(n.p,{children:"Get the nearest neighbors to a vector:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM items ORDER BY embedding <-> '[3,1,2]' LIMIT 5;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The supported distance functions are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<->"}),": L2 distance"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<#>"}),": negative inner product"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<=>"}),": cosine distance"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Get the nearest neighbors of a row:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM items WHERE id != 1 ORDER BY embedding <-> (SELECT embedding FROM items WHERE id = 1) LIMIT 5;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Get rows within a specific distance range:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM items WHERE embedding <-> '[3,1,2]' < 5;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note: Using ",(0,i.jsx)(n.code,{children:"ORDER BY"})," and ",(0,i.jsx)(n.code,{children:"LIMIT"})," together can take advantage of indexing."]}),"\n",(0,i.jsx)(n.p,{children:"Get the distance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT embedding <-> '[3,1,2]' AS distance FROM items;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For inner product, multiply by ",(0,i.jsx)(n.code,{children:"-1"})," (because ",(0,i.jsx)(n.code,{children:"<#>"})," returns the negative inner product)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT (embedding <#> '[3,1,2]') * -1 AS inner_product FROM items;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For cosine similarity, use ",(0,i.jsx)(n.code,{children:"1"})," minus the cosine distance."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT 1 - (embedding <=> '[3,1,2]') AS cosine_similarity FROM items;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Calculate the average of vectors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT AVG(embedding) FROM items;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Calculate the average of a group of vectors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT category_id, AVG(embedding) FROM items GROUP BY category_id;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"index-data",children:"Index data"}),"\n",(0,i.jsx)(n.p,{children:"By default, pgvector performs exact nearest neighbor searches, which provides a high recall rate."}),"\n",(0,i.jsxs)(n.p,{children:["If you need a higher recall rate, you can use approximate nearest neighbor search by adding an index, although this might reduce performance. Unlike adding a regular index, after adding an approximate index, ",(0,i.jsx)(n.strong,{children:"queries will return different results"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"pgvector supports the following index types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HNSW"}),"\n",(0,i.jsx)(n.li,{children:"IVFFlat"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"hnsw-index",children:"HNSW index"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"About HNSW"}),"\nHNSW (Hierarchical Navigable Small World) is an efficient algorithm for approximate nearest neighbor search, designed for processing large-scale and high-dimensional datasets."]}),"\n",(0,i.jsx)(n.p,{children:"The basic principles of HNSW are as follows:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Multi-level graph structure: HNSW organizes data by building a multi-level graph. In this graph, each node represents a data point (or vector), and the edges between nodes reflect their relative proximity in space."}),"\n",(0,i.jsx)(n.li,{children:"Search optimization: This multi-level structure allows the search process to skip over many irrelevant data points quickly, narrowing down the neighboring area of the query vector. This greatly improves query efficiency."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"HNSW is particularly useful in the following scenarios:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"High-dimensional data: HNSW index is very effective for high-dimensional datasets, because it is good at handling complex proximity relationships in high-dimensional space."}),"\n",(0,i.jsx)(n.li,{children:"Large datasets: HNSW index is suitable for large datasets because it balances query speed and recall rate better than many other types of indexes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Creating an HNSW index takes longer and uses more memory, but it offers better query performance (speed-recall tradeoff). Unlike IVFFlat, HNSW does not require a training step, so you can create the index even when the table has no data."}),"\n",(0,i.jsx)(n.p,{children:"Add an index for each distance function you plan to use."}),"\n",(0,i.jsx)(n.h4,{id:"create-an-hnsw-index",children:"Create an HNSW index"}),"\n",(0,i.jsx)(n.p,{children:"Each distance metric has its specific use cases. The choice of which method to use for creating an index depends on the type of search you want to optimize. For example, if your application focuses on getting vectors with similar direction but possibly different magnitudes, an index created with cosine distance might be more suitable. On the other hand, if you are concerned with the straight-line distance between vectors, you should choose an index based on L2 distance."}),"\n",(0,i.jsx)(n.p,{children:"L2 distance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING hnsw (embedding vector_l2_ops);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Inner product:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING hnsw (embedding vector_ip_ops);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Cosine distance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING hnsw (embedding vector_cosine_ops);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The maximum dimension for indexable vectors is 2000."}),"\n",(0,i.jsx)(n.h4,{id:"hnsw-index-options",children:"HNSW index options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"m"}),": The maximum number of connections per layer (",(0,i.jsx)(n.code,{children:"16"})," by default)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ef_construction"}),": The size of the dynamic candidate list used to build the graph (",(0,i.jsx)(n.code,{children:"64"})," by default)."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING hnsw (embedding vector_l2_ops) WITH (m = 16, ef_construction = 64);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A larger ",(0,i.jsx)(n.code,{children:"ef_construction"})," value provides higher recall but at the cost of index build time and insert speed."]}),"\n",(0,i.jsx)(n.h4,{id:"hnsw-index-query-options",children:"HNSW index query options"}),"\n",(0,i.jsxs)(n.p,{children:["Specify the size of the dynamic candidate list for searches (",(0,i.jsx)(n.code,{children:"40"})," by default). A larger value improves recall but reduces speed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SET hnsw.ef_search = 100;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"SET LOCAL"})," within a transaction to apply it to a single query:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nSET LOCAL hnsw.ef_search = 100;\nSELECT ...\nCOMMIT;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"hnsw-index-build-time",children:"HNSW index build time"}),"\n",(0,i.jsxs)(n.p,{children:["Index build speed increases greatly when the internal graph structure of the HNSW index fits into ",(0,i.jsx)(n.code,{children:"maintenance_work_mem"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SET maintenance_work_mem = '8GB';\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the graph no longer fits, you will receive a notification:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"NOTICE:  hnsw graph no longer fits into maintenance_work_mem after 100000 tuples\nDETAIL:  Building will take significantly more time.\nHINT:  Increase maintenance_work_mem to speed up builds.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note: Do not set ",(0,i.jsx)(n.code,{children:"maintenance_work_mem"})," too high, because this exhausts the server's memory."]}),"\n",(0,i.jsx)(n.p,{children:"Like other index types, it is faster to create the index after loading the initial data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SET max_parallel_maintenance_workers = 7; -- Including the leader thread\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more workers, you might also need to increase ",(0,i.jsx)(n.code,{children:"max_parallel_workers"})," (",(0,i.jsx)(n.code,{children:"8"})," by default)."]}),"\n",(0,i.jsx)(n.h4,{id:"view-hnsw-index-progress",children:"View HNSW index progress"}),"\n",(0,i.jsx)(n.p,{children:"You can check the progress when creating an HNSW index:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SELECT phase, round(100.0 * blocks_done / nullif(blocks_total, 0), 1) AS "%" FROM pg_stat_progress_create_index;\n'})}),"\n",(0,i.jsx)(n.p,{children:"The HNSW index build process includes the following phases:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"initializing"}),": The starting phase of index creation. In this phase, the system prepares all necessary resources and configurations to begin building the index."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"loading tuples"}),": Data points (or vectors) are added to the multi-level graph, and the corresponding connections are established."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ivfflat-index",children:"IVFFlat index"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"About IVFFlat"}),"\nThe IVFFlat index is a method for efficient vector search in large datasets, particularly useful for the Approximate Nearest Neighbor (ANN) search."]}),"\n",(0,i.jsx)(n.p,{children:"The basic principles of IVFFlat index are as follows:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Partitioned search space: IVFFlat works by dividing the data into multiple "lists". These lists are created by clustering the dataset (for example, using the K-means algorithm), with each list representing a cluster in the data space.'}),"\n",(0,i.jsx)(n.li,{children:"Reduced search complexity: Instead of searching through the entire dataset, the search first identifies which lists (or clusters) the search vector is likely to belong to, then only searches within those lists, reducing computing time."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"IVFFlat is particularly useful in the following scenarios:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Large datasets: For datasets containing many vectors, a full search (checking every vector) can be very time-consuming. IVFFlat optimizes the search process through clustering and partitioning."}),"\n",(0,i.jsx)(n.li,{children:"Approximate search: IVFFlat is an approximate nearest neighbor search method, suitable for scenarios where quick response times are needed and some inaccuracy in search results is acceptable."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To achieve good recall with IVFFlat, follow these best practices:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create the index after some data has been inserted into the table."}),"\n",(0,i.jsx)(n.li,{children:"Choose an appropriate number of lists. For tables with up to 1 million rows, it is recommended to use the number of rows divided by 1000 as the number of lists. For tables with more than 1 million rows, use the square root of the number of rows as the number of lists."}),"\n",(0,i.jsx)(n.li,{children:"Specify an appropriate number of probes during queries (the higher the number of probes, the higher the recall, but the slower the query). It is recommended to start by trying the square root of the number of lists. Add an index for each distance function you plan to use."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"create-an-ivfflat-index",children:"Create an IVFFlat index"}),"\n",(0,i.jsx)(n.p,{children:"Each distance metric has its specific use cases. The choice of which method to use for creating an index depends on the type of search you want to optimize. For example, if your application focuses on finding vectors with similar direction but possibly different magnitudes, an index created with cosine distance might be more suitable. On the other hand, if you are concerned with the straight-line distance between vectors, you should choose an index based on L2 distance."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"lists"})," parameter specifies the number of partitions (lists)."]}),"\n",(0,i.jsx)(n.p,{children:"L2 distance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING ivfflat (embedding vector_l2_ops) WITH (lists = 100);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Inner product:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING ivfflat (embedding vector_ip_ops) WITH (lists = 100);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Cosine distance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Attention: Apache Cloudberry currently supports indexing vectors with up to 2000 dimensions."}),"\n",(0,i.jsx)(n.h4,{id:"specify-the-number-of-probes",children:"Specify the number of Probes"}),"\n",(0,i.jsx)(n.p,{children:'The number of probes means how many "lists" the system checks during an approximate nearest neighbor search. These lists are subsets of the dataset created through clustering algorithms like K-means. Increasing the number of probes means the system checks more lists to get the nearest neighbors, thus improving accuracy. A higher number of probes increases search accuracy but also adds computing overhead, slowing down the search. Therefore, the number of probes is a parameter that should be balanced based on specific use cases.'}),"\n",(0,i.jsxs)(n.p,{children:["Specify the number of probes (",(0,i.jsx)(n.code,{children:"1"})," by default):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SET ivfflat.probes = 10;\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you choose a large number of probes, there might be some performance loss that impacts speed, but you will achieve higher recall. You can also set it to match the number of lists for an exact nearest neighbor search (in this case, the optimizer does use the index)."}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"SET LOCAL"})," within a transaction to set the number of probes for a single query:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"BEGIN;\nSET LOCAL ivfflat.probes = 10;\nSELECT ...\nCOMMIT;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"view-ivfflat-index-progress",children:"View IVFFlat index progress"}),"\n",(0,i.jsx)(n.p,{children:"You can check the index progress during its creation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT phase, tuples_done, tuples_total FROM pg_stat_progress_create_index;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The progress phases include:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"initializing"}),": The starting phase of index creation. The system prepares all necessary resources and configurations during this phase."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"performing k-means"}),": The k-means algorithm is used to divide the vector dataset into multiple lists (or clusters)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sorting tuples"}),": Sorting the data (tuples). This is done based on vector values or the lists they belong to, optimizing the index structure and improving search efficiency."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"loading tuples"}),": Data is actually loaded into the index structure, which means that tuple data is written to the index to ensure it meets indexing requirements."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Attention: ",(0,i.jsx)(n.code,{children:"tuples_done"})," and ",(0,i.jsx)(n.code,{children:"tuples_total"})," are only populated during the loading tuples phase."]}),"\n",(0,i.jsx)(n.h3,{id:"use-filters-in-indexes",children:"Use filters in indexes"}),"\n",(0,i.jsxs)(n.p,{children:["When creating an index, you can use a ",(0,i.jsx)(n.code,{children:"WHERE"})," clause to limit the scope of the index. This method allows vector searches to only consider rows that meet specific conditions, which improves search efficiency and accuracy."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM items WHERE category_id = 123 ORDER BY embedding <-> '[3,1,2]' LIMIT 5;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Create an index on one or more ",(0,i.jsx)(n.code,{children:"WHERE"})," columns for exact searches:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items (category_id);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create a partial index on a vector column for approximate searches:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING ivfflat (embedding vector_l2_ops) WITH (lists = 100) WHERE (category_id = 123);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For approximate searches with different values in multiple ",(0,i.jsx)(n.code,{children:"WHERE"})," columns, use partitioning:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE items (embedding vector(3), category_id int) PARTITION BY LIST(category_id);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"hybrid-search",children:"Hybrid search"}),"\n",(0,i.jsx)(n.p,{children:"Perform hybrid search using Apache Cloudberry full-text search:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT id, content FROM items, plainto_tsquery('hello search') query\n    WHERE textsearch @@ query ORDER BY ts_rank_cd(textsearch, query) DESC LIMIT 5;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"pgvector-performance",children:"pgvector performance"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"EXPLAIN ANALYZE"})," for performance debugging:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"EXPLAIN ANALYZE SELECT * FROM items ORDER BY embedding <-> '[3,1,2]' LIMIT 5;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"exact-search",children:"Exact search"}),"\n",(0,i.jsxs)(n.p,{children:["To speed up queries without an index, you can increase the value of the ",(0,i.jsx)(n.code,{children:"max_parallel_workers_per_gather"})," parameter."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SET max_parallel_workers_per_gather = 4;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If vectors are already normalized to a length of ",(0,i.jsx)(n.code,{children:"1"})," (for example, the ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/embeddings/which-distance-function-should-i-use",children:"OpenAI embeddings"}),"), using inner product can provide the best performance."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM items ORDER BY embedding <#> '[3,1,2]' LIMIT 5;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"approximate-search",children:"Approximate search"}),"\n",(0,i.jsx)(n.p,{children:"To speed up queries with an index, you can increase the number of inverted lists (at the cost of some recall)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON items USING ivfflat (embedding vector_l2_ops) WITH (lists = 1000);\n"})}),"\n",(0,i.jsx)(n.p,{children:"These are some guidelines for nearest neighbor search and performance optimization in pgvector. Depending on your needs and data structure, you can adjust and optimize based on these recommendations."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var i=s(67294);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);