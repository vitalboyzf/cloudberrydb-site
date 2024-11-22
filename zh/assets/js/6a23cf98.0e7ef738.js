"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5301],{80085:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=a(85893),i=a(11151);const r={title:"[104-1] Introduction to CloudberryDB In-Database Analytics",description:"Run analytics directly in the Cloudberry Database by MADlib."},s=void 0,l={type:"mdx",permalink:"/zh/bootcamp/104-1-introduction-to-cloudberrydb-in-database-analytics",source:"@site/i18n/zh/docusaurus-plugin-content-pages/bootcamp/104-1-introduction-to-cloudberrydb-in-database-analytics.md",title:"[104-1] Introduction to CloudberryDB In-Database Analytics",description:"Run analytics directly in the Cloudberry Database by MADlib.",frontMatter:{title:"[104-1] Introduction to CloudberryDB In-Database Analytics",description:"Run analytics directly in the Cloudberry Database by MADlib."},unlisted:!1},o={},h=[{value:"Prepare Apache Zeppelin",id:"prepare-apache-zeppelin",level:2},{value:"Run PostgreSQL built-in aggregates",id:"run-postgresql-built-in-aggregates",level:2},{value:"Run Apache MADlib ANOVA",id:"run-apache-madlib-anova",level:2},{value:"Perform Linear Regression",id:"perform-linear-regression",level:2},{value:"Learn more about Apache MADlib",id:"learn-more-about-apache-madlib",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Running analytics directly in Cloudberry Database, rather than exporting data to a separate analytics engine, allows greater agility when exploring large data sets and much better performance due to parallelizing the analytic processes across all the segments."}),"\n",(0,t.jsx)(n.p,{children:"A variety of power analytic tools is available for use with Cloudberry Database:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["MADlib, an open-source, MPP implementation of many analytic algorithms, available at ",(0,t.jsx)(n.a,{href:"http://madlib.apache.org/",children:"http://madlib.apache.org/"})]}),"\n",(0,t.jsx)(n.li,{children:"R statistical language"}),"\n",(0,t.jsx)(n.li,{children:"SAS, in many forms, but especially with the SAS Accelerator for Cloudberry"}),"\n",(0,t.jsx)(n.li,{children:"PMML, Predictive Modeling Markup Language"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The exercises in this chapter introduce using MADlib with Cloudberry Database, using the FAA on-time data example dataset. You will examine scenarios comparing airlines and airports to learn whether there are significant relationships to be found."}),"\n",(0,t.jsxs)(n.p,{children:["In this lesson, you will use ",(0,t.jsx)(n.a,{href:"https://zeppelin.apache.org/",children:"Apache Zeppelin"})," to submit SQL statements to the Cloudberry Database.  Apache Zeppelin is a web-based notebook that enables interactive data analytics. A ",(0,t.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/ZEPPELIN-250",children:"PostgreSQL interpreter"})," has been added to Zeppelin, so that it can now work directly with products such as Pivotal Cloudberry Database and Pivotal HDB."]}),"\n",(0,t.jsx)(n.h2,{id:"prepare-apache-zeppelin",children:"Prepare Apache Zeppelin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open a browser on your desktop and browse to ",(0,t.jsx)(n.code,{children:"http://X.X.X.X:8080"})," using the same IP address that you used for the ssh step. You will see the Apache Zepplin Welcome page."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Apache Zeppelin welcome page",src:a(77957).Z+"",width:"1337",height:"1175"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click Interpreter at the top of the Screen and scroll down to the psql section and press edit."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit the ",(0,t.jsx)(n.em,{children:"postgresql.url"})," entry by adding tutorial to the end, so that it will connect to the ",(0,t.jsx)("strong",{children:"tutorial"})," database."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click Save and then Hit OK to restart the Interpreter"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on Create new note underneath the Notebook heading and type: ",(0,t.jsx)(n.code,{children:"tutorial"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Apache Zeppelin create page",src:a(19522).Z+"",width:"725",height:"475"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Click "tutorial" to open the newly created notebook.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'You should now see the the open notebook with a "paragraph" ready for input. Click in the the empty white rectangle (called paragraph) and type:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql select count(*) from faa.otp.c;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the play button:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Apache Zeppelin icons",src:a(23368).Z+"",width:"88",height:"33"})}),"\n",(0,t.jsx)(n.p,{children:"The result should look like the graphic below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Apache Zeppelin output",src:a(68233).Z+"",width:"1197",height:"171"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run-postgresql-built-in-aggregates",children:"Run PostgreSQL built-in aggregates"}),"\n",(0,t.jsx)(n.p,{children:"PostgreSQL has built-in aggregate functions to get standard statistics on database columns\u2014minimum, maximum, average, and standard deviation, for example. The functions take advantage of the Cloudberry Database MPP architecture, aggregating data on the segments and then assembling results on the master."}),"\n",(0,t.jsx)(n.p,{children:"First, gather simple descriptive statistics on some of the data you will analyze with MADlib. The commands in this exercise are in the stats.sql script in the sample data directory."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get average delay, standard deviation, and number of flights for USAir and Delta airlines.  Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql SELECT carrier, AVG(arrdelayminutes),STDDEV(arrdelayminutes),\nCOUNT(*) FROM faa.otp_c WHERE carrier = 'US' OR carrier = 'DL'\nGROUP BY carrier;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get average delay, standard deviation, and number of flights originating from Chicago O\u2019Hare or Atlanta Hartsfield airports.  Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql SELECT origin, AVG(arrdelayminutes),STDDEV(arrdelayminutes),\nCOUNT(*) FROM faa.otp_c WHERE origin = 'ORD' OR origin = 'ATL'\nGROUP BY origin;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get average delay, standard deviation, and number of flights originating from Chicago O\u2019Hare or Atlanta Hartsfield airports.  Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql SELECT origin, AVG(arrdelayminutes),STDDEV(arrdelayminutes),\nCOUNT(*) FROM faa.otp_c WHERE carrier = 'DL' AND origin IN ('ATL', 'MSP',\n'DTW') GROUP BY origin;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get average delay, standard deviation, and number of flights for Delta and USAir flights originating from Atlanta Harsfield.  Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql SELECT carrier, AVG(arrdelayminutes),STDDEV(arrdelayminutes),\nCOUNT(*) FROM faa.otp_c WHERE carrier IN ('DL', 'UA') AND origin = 'ATL'\nGROUP BY carrier;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run-apache-madlib-anova",children:"Run Apache MADlib ANOVA"}),"\n",(0,t.jsx)(n.p,{children:"ANOVA (Analysis of Variance) shows whether groups of samples are significantly different from each other. The MADlib ANOVA function uses an integer value to distinguish between the groups to compare and a column for the data. The groups we want to analyze in the FAA fact table are text in the data, so we use a PostgreSQL CASE statement to assign the samples to integer values based on the text values. The ANOVA module then divides the rows into groups and performs the test."}),"\n",(0,t.jsx)(n.p,{children:"ANOVA is a general linear model. To determine whether statistical data samples are significantly different from one another, you compare the total variability of the group by the variability between the groups. This is tempered by the number of observations, which is summarized by the degrees of freedom within the groups. The relevant statistic that measures the degree to which the difference between groups is significant is the ratio of the variance between groups divided by the variance within groups, called the F statistic. If it is close to zero, the groups do not differ by much. If it is far from zero, they do."}),"\n",(0,t.jsx)(n.p,{children:"From statistical theory you can determine the probability distribution of the F statistic if the groups were identical given sampling error. This is given by the p-value. A p-value close to zero indicates it is very likely that the groups are different. A p-value close to one indicates that it is very likely the groups are the same."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run an ANOVA analysis on the average delay minutes between USAir and Delta airlines. The CASE clause assigns USAir flights to group 1 and Delta flights to group 2."}),"\n",(0,t.jsx)(n.p,{children:"Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql  SELECT (MADlib.one_way_anova (\nCASE WHEN carrier = 'US' THEN 1\nWHEN carrier = 'DL' THEN 2\nELSE NULL\nEND,\narrdelayminutes\n)).* FROM faa.otp_r;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run an ANOVA analysis to determine if the average delays for flights from Chicago and Atlanta are statistically different."}),"\n",(0,t.jsx)(n.p,{children:"Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql  SELECT (MADlib.one_way_anova (\nCASE WHEN origin = 'ORD' THEN 1\nWHEN origin = 'ATL' THEN 2\nELSE NULL\nEND,\narrdelayminutes\n)).* FROM faa.otp_r;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run an ANOVA analysis to determine if the differences in average delay minutes from three Delta hubs are significant."}),"\n",(0,t.jsx)(n.p,{children:"Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql   SELECT (MADlib.one_way_anova (\nCASE WHEN carrier = 'DL' AND origin = 'ATL' THEN 1\nWHEN carrier = 'DL' AND origin = 'MSP' THEN 2\nWHEN carrier = 'DL' AND origin = 'DTW' THEN 3\nELSE NULL\nEND,\narrdelayminutes\n)).* FROM faa.otp_r;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run an ANOVA analysis to determine if the differences in average delay minutes between Delta and USAir flights from Atlanta are significant."}),"\n",(0,t.jsx)(n.p,{children:"Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql  SELECT (MADlib.one_way_anova (\nCASE WHEN carrier = 'DL' AND origin = 'ATL' THEN 1\nWHEN carrier = 'UA' AND origin = 'ATL' THEN 2\nELSE NULL\nEND,\narrdelayminutes\n)).* FROM faa.otp_r;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n",(0,t.jsx)(n.p,{children:"From these ANOVA analyses we have learned the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"There is a fairly certain difference between delays for USAir and Delta, but the difference is not great."}),"\n",(0,t.jsx)(n.li,{children:"Delays from O\u2019Hare seem to be significantly different than from Atlanta."}),"\n",(0,t.jsx)(n.li,{children:"There is a large difference between delays at the three Delta hubs."}),"\n",(0,t.jsx)(n.li,{children:"There is no significant difference in delays from Atlanta between United and Delta."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"perform-linear-regression",children:"Perform Linear Regression"}),"\n",(0,t.jsx)(n.p,{children:"Linear regression shows the relationship between variables. A classic example is the linear relationship between height and weight of adult males in a particular country or ethnic group. MADlib includes modules to perform linear regression with one or multiple independent variables."}),"\n",(0,t.jsx)(n.p,{children:"The r2 statistic measures the proportion of the total variability in the dependent variable that can be explained by the independent variable."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Perform a linear regression to see if there is any relationship between distance and arrival delay. This tests the hypothesis that longer flights are  more likely to be on time because the flight crew can make up delays by flying faster over longer periods of time. Test this by running a regression on arrival time as the dependent variable and distance as the independent variable."}),"\n",(0,t.jsx)(n.p,{children:"Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql SELECT ( madlib.linregr(arrdelayminutes,\nARRAY[1,distance])).* FROM faa.otp_c;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n",(0,t.jsx)(n.p,{children:"The regression shows that r2 is close to zero, which means that distance is not a good predictor for arrival delay time."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run a regression with departure delay time as the independent variable and arrival delay time as the dependent variable. This tests the hypothesis that if a flight departs late, it is unlikely that the crew can make up the time."}),"\n",(0,t.jsx)(n.p,{children:"Click a new white rectangle and enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"%psql.sql  SELECT ( madlib.linregr(arrdelayminutes,\nARRAY[1,depdelayminutes])).* FROM faa.otp_c;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then press the Play button to execute the query."}),"\n",(0,t.jsx)(n.p,{children:"The r2 statistic is very high, especially with 1.5 million samples. The linear relationship can be written as"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Arrival_delay = 1.2502729312843388 + 0.96360804792526189 * departure_delay"})}),"\n",(0,t.jsx)(n.p,{children:"If you scroll over in the results, the condition_no result is a measure of the mathematical stability of the solution. In computer arithmetic, numbers do not have infinite precision, and round-off error in calculations can be significant, especially if there are a large number of independent variables and they are highly correlated. This is very common in econometric data and techniques have evolved to deal with it."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"learn-more-about-apache-madlib",children:"Learn more about Apache MADlib"}),"\n",(0,t.jsxs)(n.p,{children:["MADlib is an Apache open source project on GitHub. You can find source code for the latest release and information about participating in the project in the GitHub repository. Access the MADlib user documentation on the MADlib Web site at ",(0,t.jsx)(n.a,{href:"http://madlib.apache.org/",children:"http://madlib.apache.org"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},68233:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/count-bd0b2bd7e6c828aa8306322877fd9bfc.jpg"},23368:(e,n,a)=>{a.d(n,{Z:()=>t});const t="data:image/jpeg;base64,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"},19522:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/zep-create-c49e794e05eafbb509f5b1548870f9d5.jpg"},77957:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/zepp-81da15d97bea52c310a38d9dae2be01c.jpg"},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var t=a(67294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);