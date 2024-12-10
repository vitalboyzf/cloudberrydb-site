"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2368],{27199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=r(85893),d=r(11151);const n={title:"Text Search Functions and Operators"},c="Text Search Functions and Operators in Cloudberry Database",i={id:"functions/text-search-functions-and-operators",title:"Text Search Functions and Operators",description:"The following tables summarize the functions and operators that are provided for full text searching.",source:"@site/docs/functions/text-search-functions-and-operators.md",sourceDirName:"functions",slug:"/functions/text-search-functions-and-operators",permalink:"/zh/docs/functions/text-search-functions-and-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/functions/text-search-functions-and-operators.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733824616,formattedLastUpdatedAt:"2024\u5e7412\u670810\u65e5",frontMatter:{title:"Text Search Functions and Operators"},sidebar:"docsbars",previous:{title:"Advanced Aggregate Functions",permalink:"/zh/docs/functions/advanced-aggregate-functions"},next:{title:"Range Functions and Operators",permalink:"/zh/docs/functions/range-functions-and-operators"}},o={},l=[];function h(e){const t={blockquote:"blockquote",code:"code",h1:"h1",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"text-search-functions-and-operators-in-cloudberry-database",children:"Text Search Functions and Operators in Cloudberry Database"}),"\n",(0,s.jsx)(t.p,{children:"The following tables summarize the functions and operators that are provided for full text searching."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operator"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"}),(0,s.jsx)(t.th,{children:"Result"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"@@"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"tsvector"})," matches ",(0,s.jsx)(t.code,{children:"tsquery"})," ?"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"to_tsvector('fat cats ate rats') @@ to_tsquery('cat & rat')"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"t"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"@@@"})}),(0,s.jsxs)(t.td,{children:["deprecated synonym for ",(0,s.jsx)(t.code,{children:"@@"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"to_tsvector('fat cats ate rats') @@@ to_tsquery('cat & rat')"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"t"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"||"})}),(0,s.jsxs)(t.td,{children:["concatenate",(0,s.jsx)(t.code,{children:"tsvector"}),"s"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'a:1 b:2'::tsvector || 'c:1 d:2 b:3'::tsvector"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'a':1 'b':2,5 'c':3 'd':4"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"&&"})}),(0,s.jsxs)(t.td,{children:["AND ",(0,s.jsx)(t.code,{children:"tsquery"}),"s together"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'fat | rat'::tsquery && 'cat'::tsquery"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"( 'fat' | 'rat' ) & 'cat'"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"||"})}),(0,s.jsxs)(t.td,{children:["OR ",(0,s.jsx)(t.code,{children:"tsquery"}),"s together"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'fat | rat'::tsquery || 'cat'::tsquery"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"( 'fat' | 'rat' ) | 'cat'"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"!!"})}),(0,s.jsxs)(t.td,{children:["negate a",(0,s.jsx)(t.code,{children:"tsquery"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"!! 'cat'::tsquery"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"!'cat'"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"@>"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"tsquery"})," contains another ?"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'cat'::tsquery @> 'cat & rat'::tsquery"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"f"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<@"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"tsquery"})," is contained in ?"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"'cat'::tsquery <@ 'cat & rat'::tsquery"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"t"})})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"})," The ",(0,s.jsx)(t.code,{children:"tsquery"})," containment operators consider only the lexemes listed in the two queries, ignoring the combining operators."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In addition to the operators shown in the table, the ordinary B-tree comparison operators (",(0,s.jsx)(t.code,{children:"="}),", ",(0,s.jsx)(t.code,{children:"<"}),", etc) are defined for types ",(0,s.jsx)(t.code,{children:"tsvector"})," and ",(0,s.jsx)(t.code,{children:"tsquery"}),". These are not very useful for text searching but allow, for example, unique indexes to be built on columns of these types."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Function"}),(0,s.jsx)(t.th,{children:"Return Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"}),(0,s.jsx)(t.th,{children:"Result"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"get_current_ts_config()"})}),(0,s.jsx)(t.td,{children:"regconfig"}),(0,s.jsx)(t.td,{children:"get default text search configuration"}),(0,s.jsx)(t.td,{children:"get_current_ts_config()"}),(0,s.jsx)(t.td,{children:"english"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"length(tsvector)"})}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"number of lexemes in tsvector"}),(0,s.jsx)(t.td,{children:"length('fat:2,4 cat:3 rat:5A'::tsvector)"}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"numnode(tsquery)"})}),(0,s.jsx)(t.td,{children:"integer"}),(0,s.jsx)(t.td,{children:"number of lexemes plus operators in tsquery"}),(0,s.jsx)(t.td,{children:"numnode('(fat & rat) | cat'::tsquery)"}),(0,s.jsx)(t.td,{children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"plainto_tsquery([ config regconfig , ] querytext)"})}),(0,s.jsx)(t.td,{children:"tsquery"}),(0,s.jsx)(t.td,{children:"produce tsquery ignoring punctuation"}),(0,s.jsx)(t.td,{children:"plainto_tsquery('english', 'The Fat Rats')"}),(0,s.jsx)(t.td,{children:"'fat' & 'rat'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"querytree(query tsquery)"})}),(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:"get indexable part of a tsquery"}),(0,s.jsx)(t.td,{children:"querytree('foo & ! bar'::tsquery)"}),(0,s.jsx)(t.td,{children:"'foo'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'setweight(tsvector, "char")'})}),(0,s.jsx)(t.td,{children:"tsvector"}),(0,s.jsx)(t.td,{children:"assign weight to each element of tsvector"}),(0,s.jsx)(t.td,{children:"setweight('fat:2,4 cat:3 rat:5B'::tsvector, 'A')"}),(0,s.jsx)(t.td,{children:"'cat':3A 'fat':2A,4A 'rat':5A"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"strip(tsvector)"})}),(0,s.jsx)(t.td,{children:"tsvector"}),(0,s.jsx)(t.td,{children:"remove positions and weights from tsvector"}),(0,s.jsx)(t.td,{children:"strip('fat:2,4 cat:3 rat:5A'::tsvector)"}),(0,s.jsx)(t.td,{children:"'cat' 'fat' 'rat'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"to_tsquery([ config regconfig , ] query text)"})}),(0,s.jsx)(t.td,{children:"tsquery"}),(0,s.jsx)(t.td,{children:"normalize words and convert to tsquery"}),(0,s.jsx)(t.td,{children:"to_tsquery('english', 'The & Fat & Rats')"}),(0,s.jsx)(t.td,{children:"'fat' & 'rat'"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"to_tsvector([ config regconfig , ] documenttext)"})}),(0,s.jsx)(t.td,{children:"tsvector"}),(0,s.jsx)(t.td,{children:"reduce document text to tsvector"}),(0,s.jsx)(t.td,{children:"to_tsvector('english', 'The Fat Rats')"}),(0,s.jsx)(t.td,{children:"'fat':2 'rat':3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_headline([ config regconfig, ] documenttext, query tsquery [, options text ])"})}),(0,s.jsx)(t.td,{children:"text"}),(0,s.jsx)(t.td,{children:"display a query match"}),(0,s.jsx)(t.td,{children:"ts_headline('x y z', 'z'::tsquery)"}),(0,s.jsxs)(t.td,{children:["x y ",(0,s.jsx)("b",{children:"z"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_rank([ weights float4[], ] vector tsvector,query tsquery [, normalization integer ])"})}),(0,s.jsx)(t.td,{children:"float4"}),(0,s.jsx)(t.td,{children:"rank document for query"}),(0,s.jsx)(t.td,{children:"ts_rank(textsearch, query)"}),(0,s.jsx)(t.td,{children:"0.818"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_rank_cd([ weights float4[], ] vectortsvector, query tsquery [, normalizationinteger ])"})}),(0,s.jsx)(t.td,{children:"float4"}),(0,s.jsx)(t.td,{children:"rank document for query using cover density"}),(0,s.jsxs)(t.td,{children:["ts_rank_cd('",1,"', textsearch, query)"]}),(0,s.jsx)(t.td,{children:"2.01317"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_rewrite(query tsquery, target tsquery,substitute tsquery)"})}),(0,s.jsx)(t.td,{children:"tsquery"}),(0,s.jsx)(t.td,{children:"replace target with substitute within query"}),(0,s.jsx)(t.td,{children:"ts_rewrite('a & b'::tsquery, 'a'::tsquery, 'foo|bar'::tsquery)"}),(0,s.jsx)(t.td,{children:"'b' & ( 'foo' | 'bar' )"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_rewrite(query tsquery, select text)"})}),(0,s.jsx)(t.td,{children:"tsquery"}),(0,s.jsx)(t.td,{children:"replace using targets and substitutes from a SELECTcommand"}),(0,s.jsx)(t.td,{children:"SELECT ts_rewrite('a & b'::tsquery, 'SELECT t,s FROM aliases')"}),(0,s.jsx)(t.td,{children:"'b' & ( 'foo' | 'bar' )"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tsvector_update_trigger()"})}),(0,s.jsx)(t.td,{children:"trigger"}),(0,s.jsx)(t.td,{children:"trigger function for automatic tsvector column update"}),(0,s.jsx)(t.td,{children:"CREATE TRIGGER ... tsvector_update_trigger(tsvcol, 'pg_catalog.swedish', title, body)"}),(0,s.jsx)(t.td,{children:"\xa0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tsvector_update_trigger_column()"})}),(0,s.jsx)(t.td,{children:"trigger"}),(0,s.jsx)(t.td,{children:"trigger function for automatic tsvector column update"}),(0,s.jsx)(t.td,{children:"CREATE TRIGGER ... tsvector_update_trigger_column(tsvcol, configcol, title, body)"}),(0,s.jsx)(t.td,{children:"\xa0"})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"})," All the text search functions that accept an optional ",(0,s.jsx)(t.code,{children:"regconfig"})," argument will use the configuration specified by ",(0,s.jsx)(t.code,{children:"default_text_search_config"})," when that argument is omitted."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The functions in the following table are listed separately because they are not usually used in everyday text searching operations. They are helpful for development and debugging of new text search configurations."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Function"}),(0,s.jsx)(t.th,{children:"Return Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"}),(0,s.jsx)(t.th,{children:"Result"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_debug([ *config* regconfig, ] *document* text, OUT *alias* text, OUT *description* text, OUT *token* text, OUT *dictionaries* regdictionary[], OUT *dictionary* regdictionary, OUT *lexemes* text[])"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"setof record"})}),(0,s.jsx)(t.td,{children:"test a configuration"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_debug('english', 'The Brightest supernovaes')"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'(asciiword,"Word, all ASCII",The,{english_stem},english_stem,{}) ...'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_lexize(*dict* regdictionary, *token* text)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"text[]"})}),(0,s.jsx)(t.td,{children:"test a dictionary"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_lexize('english_stem', 'stars')"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"{star}"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_parse(*parser_name* text, *document* text, OUT *tokid* integer, OUT *token* text)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"setof record"})}),(0,s.jsx)(t.td,{children:"test a parser"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_parse('default', 'foo - bar')"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"(1,foo) ..."})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_parse(*parser_oid* oid, *document* text, OUT *tokid* integer, OUT *token* text)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"setof record"})}),(0,s.jsx)(t.td,{children:"test a parser"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_parse(3722, 'foo - bar')"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"(1,foo) ..."})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_token_type(*parser_name* text, OUT *tokid* integer, OUT *alias* text, OUT description text)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"setof record"})}),(0,s.jsx)(t.td,{children:"get token types defined by parser"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_token_type('default')"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'(1,asciiword,"Word, all ASCII") ...'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_token_type(*parser_oid* oid, OUT *tokid* integer, OUT *alias* text, OUT *description* text)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"setof record"})}),(0,s.jsx)(t.td,{children:"get token types defined by parser"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_token_type(3722)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'(1,asciiword,"Word, all ASCII") ...'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_stat(*sqlquery* text, [ *weights* text, ] OUT *word* text, OUT *ndocinteger*, OUT *nentry* integer)"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"setof record"})}),(0,s.jsx)(t.td,{children:"get statistics of a tsvectorcolumn"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ts_stat('SELECT vector from apod')"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"(foo,10,15) ..."})})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var s=r(67294);const d={},n=s.createContext(d);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);