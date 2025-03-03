"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4684],{38457:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var c=s(85893),d=s(11151);const r={title:"\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f"},l="\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f",t={id:"performance/update-stats-using-analyze",title:"\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f",description:"\u8981\u83b7\u5f97\u826f\u597d\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u51c6\u786e\u7684\u7edf\u8ba1\u4fe1\u606f\u51c6\u786e\u5341\u5206\u91cd\u8981\u3002\u901a\u8fc7\u4f7f\u7528 ANALYZE \u8bed\u53e5\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u67e5\u8be2\u4f18\u5316\u5668\u751f\u6210\u6700\u4f18\u7684\u67e5\u8be2\u8ba1\u5212\u3002Cloudberry Database \u5bf9\u8868\u8fdb\u884c\u5206\u6790\u65f6\uff0c\u76f8\u5173\u7684\u6570\u636e\u4fe1\u606f\u88ab\u5b58\u50a8\u5728\u7cfb\u7edf\u76ee\u5f55\u8868\u4e2d\u3002\u5982\u679c\u5b58\u50a8\u7684\u4fe1\u606f\u8fc7\u65f6\u4e86\uff0c\u67e5\u8be2\u4f18\u5316\u5668\u53ef\u80fd\u4f1a\u751f\u6210\u4f4e\u6548\u7684\u67e5\u8be2\u8ba1\u5212\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/performance/update-stats-using-analyze.md",sourceDirName:"performance",slug:"/performance/update-stats-using-analyze",permalink:"/zh/docs/performance/update-stats-using-analyze",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/performance/update-stats-using-analyze.md",tags:[],version:"current",lastUpdatedBy:"zhangfei",lastUpdatedAt:1740991732,formattedLastUpdatedAt:"2025\u5e743\u67083\u65e5",frontMatter:{title:"\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f"},sidebar:"docsbars",previous:{title:"Query Performance Overview",permalink:"/zh/docs/performance/"},next:{title:"\u5728 AO \u8868\u4e0a\u4f7f\u7528\u552f\u4e00\u7d22\u5f15",permalink:"/zh/docs/performance/use-unique-index-on-ao-tables"}},i={},o=[{value:"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u662f\u5426\u5df2\u66f4\u65b0",id:"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u662f\u5426\u5df2\u66f4\u65b0",level:2},{value:"\u6709\u9009\u62e9\u5730\u751f\u6210\u7edf\u8ba1\u4fe1\u606f",id:"\u6709\u9009\u62e9\u5730\u751f\u6210\u7edf\u8ba1\u4fe1\u606f",level:2},{value:"\u63d0\u9ad8\u7edf\u8ba1\u4fe1\u606f\u8d28\u91cf",id:"\u63d0\u9ad8\u7edf\u8ba1\u4fe1\u606f\u8d28\u91cf",level:2},{value:"\u4f55\u65f6\u6267\u884c <code>ANALYZE</code>",id:"\u4f55\u65f6\u6267\u884c-analyze",level:2},{value:"\u914d\u7f6e\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6",id:"\u914d\u7f6e\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f",children:"\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u83b7\u5f97\u826f\u597d\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u51c6\u786e\u7684\u7edf\u8ba1\u4fe1\u606f\u51c6\u786e\u5341\u5206\u91cd\u8981\u3002\u901a\u8fc7\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"ANALYZE"})," \u8bed\u53e5\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u67e5\u8be2\u4f18\u5316\u5668\u751f\u6210\u6700\u4f18\u7684\u67e5\u8be2\u8ba1\u5212\u3002Cloudberry Database \u5bf9\u8868\u8fdb\u884c\u5206\u6790\u65f6\uff0c\u76f8\u5173\u7684\u6570\u636e\u4fe1\u606f\u88ab\u5b58\u50a8\u5728\u7cfb\u7edf\u76ee\u5f55\u8868\u4e2d\u3002\u5982\u679c\u5b58\u50a8\u7684\u4fe1\u606f\u8fc7\u65f6\u4e86\uff0c\u67e5\u8be2\u4f18\u5316\u5668\u53ef\u80fd\u4f1a\u751f\u6210\u4f4e\u6548\u7684\u67e5\u8be2\u8ba1\u5212\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u662f\u5426\u5df2\u66f4\u65b0",children:"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u662f\u5426\u5df2\u66f4\u65b0"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u67e5\u770b\u4e00\u5f20\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u662f\u5426\u662f\u6700\u65b0\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"pg_stat_all_tables"})," \u7cfb\u7edf\u89c6\u56fe\u3002\u8fd9\u4e2a\u89c6\u56fe\u4e2d\u7684 ",(0,c.jsx)(n.code,{children:"last_analyze"})," \u5217\u663e\u793a\u8be5\u8868\u6700\u8fd1\u4e00\u6b21\u88ab\u5206\u6790\u7684\u65f6\u95f4\uff0c\u800c ",(0,c.jsx)(n.code,{children:"last_autoanalyze"})," \u5217\u663e\u793a\u8be5\u8868\u6700\u8fd1\u4e00\u6b21\u88ab\u81ea\u52a8\u5206\u6790\u7684\u65f6\u95f4\u3002\u6267\u884c  ",(0,c.jsx)(n.code,{children:"ANALYZE"})," \u8bed\u53e5\u65f6\uff0c\u8fd9\u4e24\u5217\u7684\u65f6\u95f4\u4fe1\u606f\u90fd\u4f1a\u88ab\u66f4\u65b0\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8981\u68c0\u67e5 ",(0,c.jsx)(n.code,{children:"test_analyze"})," \u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u662f\u5426\u5df2\u66f4\u65b0\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u67e5\u8be2\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT schemaname, relname, last_analyze, last_autoanalyze \nFROM pg_stat_all_tables \nWHERE relname = 'test_analyze';\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u6709\u9009\u62e9\u5730\u751f\u6210\u7edf\u8ba1\u4fe1\u606f",children:"\u6709\u9009\u62e9\u5730\u751f\u6210\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0d\u5e26\u4efb\u4f55\u53c2\u6570\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"})," \u8bed\u53e5\u4f1a\u66f4\u65b0\u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u8017\u65f6\u7684\u8fc7\u7a0b\uff0c\u4e0d\u63a8\u8350\u8fd9\u6837\u64cd\u4f5c\u3002\u5efa\u8bae\u5728\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u9009\u62e9\u6027\u5730\u5bf9\u8868\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"})," \uff0c\u6216\u8005\u4f7f\u7528 analyzedb \u5de5\u5177\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bf9\u5927\u8868\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"})," \u53ef\u80fd\u9700\u8981\u5f88\u957f\u65f6\u95f4\u3002\u5982\u679c\u65e0\u6cd5\u5bf9\u5927\u8868\u7684\u6240\u6709\u5217\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"}),"\uff0c\u53ef\u4ee5\u4ec5\u9488\u5bf9\u7279\u5b9a\u5217\u4f7f\u7528  ",(0,c.jsx)(n.code,{children:"ANALYZE table(column, ...)"})," \u6765\u751f\u6210\u7edf\u8ba1\u4fe1\u606f\u3002\u786e\u4fdd\u5728\u8fd9\u4e9b\u6761\u4ef6\u4e2d\u4f7f\u7528\u7684\u5217\u88ab\u5305\u542b\u5728\u5185\uff1a\u8fde\u63a5\u3001",(0,c.jsx)(n.code,{children:"WHERE"})," \u5b50\u53e5\u3001",(0,c.jsx)(n.code,{children:"SORT"})," \u5b50\u53e5\u3001",(0,c.jsx)(n.code,{children:"GROUP BY"})," \u5b50\u53e5\u6216 ",(0,c.jsx)(n.code,{children:"HAVING"})," \u5b50\u53e5\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u4ec5\u5bf9\u53d1\u751f\u53d8\u5316\u7684\u5206\u533a\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"}),"\uff0c\u4f8b\u5982\uff0c\u6dfb\u52a0\u65b0\u5206\u533a\u65f6\u3002\u8bf7\u6ce8\u610f\uff0c\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u53ef\u4ee5\u5728\u6839\u5206\u533a\u8868\u6216\u53f6\u5206\u533a\uff08\u5b9e\u9645\u5b58\u50a8\u6570\u636e\u548c\u7edf\u8ba1\u4fe1\u606f\u7684\u6587\u4ef6\uff09\u4e0a\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"}),"\u3002\u5728 Cloudberry Database \u4e2d\uff0c\u5bf9\u5206\u533a\u8868\u7684\u5355\u4e2a\u5206\u533a\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"})," \u8fd8\u4f1a\u66f4\u65b0\u6839\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u8fd9\u8868\u660e\u5bf9\u4e00\u4e2a\u5206\u533a\u8fdb\u884c\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u53ef\u80fd\u4f1a\u5f71\u54cd\u6574\u4e2a\u5206\u533a\u8868\u7684\u4f18\u5316\u5668\u7edf\u8ba1\u4fe1\u606f\u3002\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"pg_partition_tree()"})," \u51fd\u6570\u53ef\u4ee5\u627e\u5230\u53f6\u5206\u533a\u7684\u540d\u79f0\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM pg_partition_tree( 'parent_table' );\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u63d0\u9ad8\u7edf\u8ba1\u4fe1\u606f\u8d28\u91cf",children:"\u63d0\u9ad8\u7edf\u8ba1\u4fe1\u606f\u8d28\u91cf"}),"\n",(0,c.jsx)(n.p,{children:"\u751f\u6210\u7edf\u8ba1\u4fe1\u606f\u6240\u8017\u8d39\u7684\u65f6\u95f4\uff0c\u548c\u7edf\u8ba1\u4fe1\u606f\u7684\u8d28\u91cf\u6216\u51c6\u786e\u6027\u4e4b\u95f4\u5b58\u5728\u6743\u8861\u5173\u7cfb\uff0c\u4f60\u9700\u8981\u627e\u5230\u4e00\u4e2a\u5e73\u8861\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u5728\u5408\u7406\u7684\u65f6\u95f4\u5185\u5206\u6790\u5927\u8868\uff0c",(0,c.jsx)(n.code,{children:"ANALYZE"})," \u4f1a\u5bf9\u8868\u5185\u5bb9\u8fdb\u884c\u968f\u673a\u62bd\u6837\uff0c\u800c\u4e0d\u662f\u68c0\u67e5\u6bcf\u4e00\u884c\u3002\u82e5\u60f3\u589e\u52a0\u4e00\u5f20\u8868\u4e0a\u6240\u6709\u5217\u7684\u6837\u672c\u503c\u6570\u91cf\uff0c\u53ef\u4ee5\u8c03\u6574 ",(0,c.jsx)(n.code,{children:"default_statistics_target"})," \u914d\u7f6e\u53c2\u6570\u3002\u8be5\u53c2\u6570\u7684\u76ee\u6807\u503c\u8303\u56f4\u662f ",(0,c.jsx)(n.code,{children:"1"})," \u5230 ",(0,c.jsx)(n.code,{children:"10000"}),"\uff0c\u9ed8\u8ba4\u76ee\u6807\u503c\u4e3a ",(0,c.jsx)(n.code,{children:"100"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,c.jsx)(n.code,{children:"default_statistics_target"})," \u53c2\u6570\u5e94\u7528\u4e8e\u6240\u6709\u5217\uff0c\u5e76\u6307\u5b9a\u591a\u5c11\u6570\u91cf\u7684\u503c\u5b58\u50a8\u5728\u5e38\u89c1\u503c\u5217\u8868\u4e2d\u3002\u8f83\u5927\u7684\u76ee\u6807\u503c\u53ef\u80fd\u4f1a\u63d0\u9ad8\u67e5\u8be2\u8ba1\u5212\u5668\u7684\u4f30\u8ba1\u8d28\u91cf\uff0c\u5c24\u5176\u662f\u5bf9\u4e8e\u5177\u6709\u4e0d\u89c4\u5219\u6570\u636e\u6a21\u5f0f\u7684\u5217\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"SET default_statistics_target"})," \u8bed\u53e5\u5728\u4f1a\u8bdd\u7ea7\u522b\u8bbe\u7f6e ",(0,c.jsx)(n.code,{children:"default_statistics_target"}),"\u3002\u8981\u8bbe\u7f6e\u6b64\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\uff0c\u9700\u8981\u5728 ",(0,c.jsx)(n.code,{children:"postgresql.conf"})," \u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u5e76\u91cd\u65b0\u52a0\u8f7d\u6587\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u4f55\u65f6\u6267\u884c-analyze",children:["\u4f55\u65f6\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u4ee5\u4e0b\u60c5\u51b5\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"}),"\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u52a0\u8f7d\u6570\u636e\u4e4b\u540e"}),"\n",(0,c.jsxs)(n.li,{children:["\u6267\u884c ",(0,c.jsx)(n.code,{children:"CREATE INDEX"})," \u64cd\u4f5c\u4e4b\u540e"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6267\u884c ",(0,c.jsx)(n.code,{children:"INSERT"}),"\u3001",(0,c.jsx)(n.code,{children:"UPDATE"})," \u548c ",(0,c.jsx)(n.code,{children:"DELETE"})," \u64cd\u4f5c\u4e4b\u540e\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u64cd\u4f5c\u5927\u5927\u6539\u53d8\u4e86\u5e95\u5c42\u6570\u636e"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ANALYZE"})," \u53ea\u9700\u8981\u5bf9\u8868\u8fdb\u884c\u8bfb\u53d6\u9501\u5b9a\uff0c\u56e0\u6b64\u53ef\u4ee5\u4e0e\u5176\u4ed6\u6570\u636e\u5e93\u64cd\u4f5c\u5e76\u884c\u6267\u884c\u3002\u4f46\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\uff0c\u4e0d\u5efa\u8bae\u5728\u6267\u884c\u52a0\u8f7d\u3001",(0,c.jsx)(n.code,{children:"INSERT"}),"\u3001",(0,c.jsx)(n.code,{children:"UPDATE"}),"\u3001",(0,c.jsx)(n.code,{children:"DELETE"})," \u548c ",(0,c.jsx)(n.code,{children:"CREATE INDEX"})," \u64cd\u4f5c\u65f6\u6267\u884c ",(0,c.jsx)(n.code,{children:"ANALYZE"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u914d\u7f6e\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6",children:"\u914d\u7f6e\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6"}),"\n",(0,c.jsxs)(n.p,{children:["\u914d\u7f6e\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"gp_autostats_mode"})," \u4e0e ",(0,c.jsx)(n.code,{children:"gp_autostats_on_change_threshold"})," \u4e00\u8d77\u786e\u5b9a\u4f55\u65f6\u89e6\u53d1\u81ea\u52a8\u5206\u6790\u64cd\u4f5c\u3002\u5f53\u89e6\u53d1\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u65f6\uff0c\u4f18\u5316\u5668\u4f1a\u5728\u67e5\u8be2\u4e2d\u52a0\u5165 ",(0,c.jsx)(n.code,{children:"ANALYZE"})," \u6b65\u9aa4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,c.jsx)(n.code,{children:"gp_autostats_mode"})," \u7684\u503c\u4e3a ",(0,c.jsx)(n.code,{children:"none"}),"\u3002\u82e5\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"on_no_stats"}),"\uff0c\u5f53\u8868\u7684\u6240\u6709\u8005\u5bf9\u65e0\u7edf\u8ba1\u4fe1\u606f\u7684\u8868\u6267\u884c ",(0,c.jsx)(n.code,{children:"CREATE TABLE AS SELECT"}),"\u3001",(0,c.jsx)(n.code,{children:"INSERT"})," \u6216 ",(0,c.jsx)(n.code,{children:"COPY"})," \u64cd\u4f5c\u65f6\uff0c\u5c06\u89e6\u53d1\u5bf9\u8fd9\u4e9b\u64cd\u4f5c\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u800c\u5c06 ",(0,c.jsx)(n.code,{children:"gp_autostats_mode"})," \u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"on_change"})," \u65f6\uff0c\u4ec5\u5f53\u53d7\u5f71\u54cd\u7684\u884c\u6570\u8d85\u8fc7 ",(0,c.jsx)(n.code,{children:"gp_autostats_on_change_threshold"})," \u6240\u8bbe\u5b9a\u7684\u9608\u503c\u65f6\uff0c\u624d\u4f1a\u8fdb\u884c\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u3002\u8fd9\u4e2a\u9608\u503c\u7684\u9ed8\u8ba4\u503c\u662f ",(0,c.jsx)(n.code,{children:"2147483647"}),"\u3002\u5728\u8868\u6240\u6709\u8005\u6267\u884c ",(0,c.jsx)(n.code,{children:"CREATE TABLE AS SELECT"}),"\u3001",(0,c.jsx)(n.code,{children:"UPDATE"}),"\u3001",(0,c.jsx)(n.code,{children:"DELETE"}),"\u3001",(0,c.jsx)(n.code,{children:"INSERT"})," \u548c ",(0,c.jsx)(n.code,{children:"COPY"})," \u64cd\u4f5c\u65f6\uff0c\u5982\u679c\u53d7\u5f71\u54cd\u7684\u884c\u6570\u8d85\u8fc7\u4e86\u8fd9\u4e2a\u9608\u503c\uff0c\u5c31\u4f1a\u89e6\u53d1\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53e6\u5916\uff0c\u82e5\u5c06\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"gp_autostats_allow_nonowner"})," \u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"true"}),"\uff0cCloudberry Database \u5c06\u4f1a\u5728\u4ee5\u4e0b\u60c5\u51b5\u5bf9\u8868\u8fdb\u884c\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5f53 ",(0,c.jsx)(n.code,{children:"gp_autostats_mode"})," \u88ab\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"on_no_stats"}),"\uff0c\u5e76\u4e14\u7b2c\u4e00\u4e2a\u5bf9\u8868\u6267\u884c ",(0,c.jsx)(n.code,{children:"INSERT"})," \u6216 ",(0,c.jsx)(n.code,{children:"COPY"})," \u64cd\u4f5c\u7684\u975e\u6240\u6709\u8005\u7528\u6237\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5c06 ",(0,c.jsx)(n.code,{children:"gp_autostats_mode"})," \u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"none"})," \u5219\u4f1a\u505c\u7528\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u529f\u80fd\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5bf9\u4e8e\u5206\u533a\u8868\uff0c\u5982\u679c\u5728\u9876\u7ea7\u7236\u8868\u4e0a\u63d2\u5165\u6570\u636e\uff0c\u5c06\u4e0d\u4f1a\u89e6\u53d1\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u3002\u4f46\u5982\u679c\u5728\u5206\u533a\u8868\u7684\u53f6\u8868\uff08\u5b9e\u9645\u5b58\u50a8\u6570\u636e\u7684\u4f4d\u7f6e\uff09\u4e2d\u76f4\u63a5\u63d2\u5165\u6570\u636e\uff0c\u5219\u4f1a\u89e6\u53d1\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var c=s(67294);const d={},r=c.createContext(d);function l(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);