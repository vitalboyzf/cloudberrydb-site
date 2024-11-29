"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4804],{63764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(85893),r=t(11151);const o={title:"CREATE RULE"},i="CREATE RULE",a={id:"sql-stmts/create-rule",title:"CREATE RULE",description:"Defines a new rewrite rule.",source:"@site/docs/sql-stmts/create-rule.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-rule",permalink:"/zh/docs/sql-stmts/create-rule",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-rule.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"2024\u5e7411\u670829\u65e5",frontMatter:{title:"CREATE RULE"},sidebar:"docsbars",previous:{title:"CREATE ROLE",permalink:"/zh/docs/sql-stmts/create-role"},next:{title:"CREATE SCHEMA",permalink:"/zh/docs/sql-stmts/create-schema"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-rule",children:"CREATE RULE"}),"\n",(0,s.jsx)(n.p,{children:"Defines a new rewrite rule."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE [OR REPLACE] RULE <name> AS ON <event>\n\xa0\xa0TO <table_name> [WHERE <condition>] \n\xa0\xa0DO [ALSO | INSTEAD] { NOTHING | <command> | (<command>; <command> \n  ...) }\n\n-- where <event> can be one of:\n\n  SELECT | INSERT | UPDATE | DELETE\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE RULE"})," defines a new rule applying to a specified table or view. ",(0,s.jsx)(n.code,{children:"CREATE OR REPLACE RULE"})," will either create a new rule, or replace an existing rule of the same name for the same table."]}),"\n",(0,s.jsxs)(n.p,{children:["The Cloudberry Database rule system allows one to define an alternate action to be performed on insertions, updates, or deletions in database tables. A rule causes additional or alternate commands to be run when a given command on a given table is run. An ",(0,s.jsx)(n.code,{children:"INSTEAD"})," rule can replace a given command by another, or cause a command to not be run at all. Rules can be used to implement SQL views as well. It is important to realize that a rule is really a command transformation mechanism, or command macro. The transformation happens before the execution of the command starts. It does not operate independently for each physical row as does a trigger."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ON SELECT"})," rules must be unconditional ",(0,s.jsx)(n.code,{children:"INSTEAD"})," rules and must have actions that consist of a single ",(0,s.jsx)(n.code,{children:"SELECT"})," command. Thus, an ",(0,s.jsx)(n.code,{children:"ON SELECT"})," rule effectively turns the table into a view, whose visible contents are the rows returned by the rule's ",(0,s.jsx)(n.code,{children:"SELECT"})," command rather than whatever had been stored in the table (if anything). It is considered better style to write a ",(0,s.jsx)(n.code,{children:"CREATE VIEW"})," command than to create a real table and define an ",(0,s.jsx)(n.code,{children:"ON SELECT"})," rule for it."]}),"\n",(0,s.jsxs)(n.p,{children:["You can create the illusion of an updatable view by defining ",(0,s.jsx)(n.code,{children:"ON INSERT"}),", ",(0,s.jsx)(n.code,{children:"ON UPDATE"}),", and ",(0,s.jsx)(n.code,{children:"ON DELETE"})," rules (or any subset of those that is sufficient for your purposes) to replace update actions on the view with appropriate updates on other tables. If you want to support ",(0,s.jsx)(n.code,{children:"INSERT RETURNING"})," and so on, be sure to put a suitable ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause into each of these rules."]}),"\n",(0,s.jsxs)(n.p,{children:["There is a catch if you try to use conditional rules for complex view updates: there ",(0,s.jsx)(n.em,{children:"must"})," be an unconditional ",(0,s.jsx)(n.code,{children:"INSTEAD"})," rule for each action you wish to allow on the view. If the rule is conditional, or is not ",(0,s.jsx)(n.code,{children:"INSTEAD"}),", then the system will still reject attempts to perform the update action, because it thinks it might end up trying to perform the action on the dummy table of the view in some cases. If you want to handle all of the useful cases in conditional rules, add an unconditional ",(0,s.jsx)(n.code,{children:"DO INSTEAD NOTHING"})," rule to ensure that the system understands it will never be called on to update the dummy table. Then make the conditional rules non-",(0,s.jsx)(n.code,{children:"INSTEAD"}),"; in the cases where they are applied, they add to the default ",(0,s.jsx)(n.code,{children:"INSTEAD NOTHING"})," action. (This method does not currently work to support ",(0,s.jsx)(n.code,{children:"RETURNING"})," queries, however.)"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," A view that is simple enough to be automatically updatable (see ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-view",children:"CREATE VIEW"}),") does not require a user-created rule in order to be updatable. While you can create an explicit rule anyway, the automatic update transformation will generally outperform an explicit rule."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name of a rule to create. This must be distinct from the name of any other rule for the same table. Multiple rules on the same table and same event type are applied in alphabetical name order."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"event"})})}),"\n",(0,s.jsxs)(n.p,{children:["The event is one of ",(0,s.jsx)(n.code,{children:"SELECT"}),", ",(0,s.jsx)(n.code,{children:"INSERT"}),", ",(0,s.jsx)(n.code,{children:"UPDATE"}),", or ",(0,s.jsx)(n.code,{children:"DELETE"}),". Note that an ",(0,s.jsx)(n.code,{children:"INSERT"})," containing an ",(0,s.jsx)(n.code,{children:"ON CONFLICT"})," clause cannot be used on tables that have either ",(0,s.jsx)(n.code,{children:"INSERT"})," or ",(0,s.jsx)(n.code,{children:"UPDATE"})," rules. Consider using an updatable view instead."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"table_name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of the table or view the rule applies to."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"condition"})})}),"\n",(0,s.jsxs)(n.p,{children:["Any SQL conditional expression (returning ",(0,s.jsx)(n.code,{children:"boolean"}),"). The condition expression can not refer to any tables except ",(0,s.jsx)(n.code,{children:"NEW"})," and ",(0,s.jsx)(n.code,{children:"OLD"}),", and can not contain aggregate functions."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"INSTEAD"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"INSTEAD"})," indicates that the commands should be run ",(0,s.jsx)(n.em,{children:"instead of"})," the original command."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ALSO"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALSO"})," indicates that the commands should be run ",(0,s.jsx)(n.em,{children:"in addition"})," to the original command. If neither ",(0,s.jsx)(n.code,{children:"ALSO"})," nor ",(0,s.jsx)(n.code,{children:"INSTEAD"})," is specified, ",(0,s.jsx)(n.code,{children:"ALSO"})," is the default."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"command"})})}),"\n",(0,s.jsxs)(n.p,{children:["The command or commands that make up the rule action. Valid commands are ",(0,s.jsx)(n.code,{children:"SELECT"}),", ",(0,s.jsx)(n.code,{children:"INSERT"}),", ",(0,s.jsx)(n.code,{children:"UPDATE"}),", ",(0,s.jsx)(n.code,{children:"DELETE"}),", or ",(0,s.jsx)(n.code,{children:"NOTIFY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Within condition and command, the special table names ",(0,s.jsx)(n.code,{children:"NEW"})," and ",(0,s.jsx)(n.code,{children:"OLD"})," can be used to refer to values in the referenced table. ",(0,s.jsx)(n.code,{children:"NEW"})," is valid in ",(0,s.jsx)(n.code,{children:"ON INSERT"})," and ",(0,s.jsx)(n.code,{children:"ON UPDATE"})," rules to refer to the new row being inserted or updated. ",(0,s.jsx)(n.code,{children:"OLD"})," is valid in ",(0,s.jsx)(n.code,{children:"ON UPDATE"})," and ",(0,s.jsx)(n.code,{children:"ON DELETE"})," rules to refer to the existing row being updated or deleted."]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.p,{children:"You must be the owner of a table to create or change rules for it."}),"\n",(0,s.jsxs)(n.p,{children:["In a rule for ",(0,s.jsx)(n.code,{children:"INSERT"}),", ",(0,s.jsx)(n.code,{children:"UPDATE"}),", or ",(0,s.jsx)(n.code,{children:"DELETE"})," on a view, you can add a ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause that emits the view's columns. This clause will be used to compute the outputs if the rule is triggered by an ",(0,s.jsx)(n.code,{children:"INSERT RETURNING"}),", ",(0,s.jsx)(n.code,{children:"UPDATE RETURNING"}),", or ",(0,s.jsx)(n.code,{children:"DELETE RETURNING"})," command respectively. When the rule is triggered by a command without ",(0,s.jsx)(n.code,{children:"RETURNING"}),", the rule's ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause will be ignored. The current implementation allows only unconditional ",(0,s.jsx)(n.code,{children:"INSTEAD"})," rules to contain ",(0,s.jsx)(n.code,{children:"RETURNING"}),"; furthermore there can be at most one ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause among all the rules for the same event. (This ensures that there is only one candidate ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause to be used to compute the results.) ",(0,s.jsx)(n.code,{children:"RETURNING"})," queries on the view will be rejected if there is no ",(0,s.jsx)(n.code,{children:"RETURNING"})," clause in any available rule."]}),"\n",(0,s.jsxs)(n.p,{children:["It is very important to take care to avoid circular rules. For example, though each of the following two rule definitions are accepted by Cloudberry Database, the ",(0,s.jsx)(n.code,{children:"SELECT"})," command would cause Cloudberry to report an error because of recursive expansion of a rule:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE RULE "_RETURN" AS\n    ON SELECT TO t1\n    DO INSTEAD\n        SELECT * FROM t2;\n\nCREATE RULE "_RETURN" AS\n    ON SELECT TO t2\n    DO INSTEAD\n        SELECT * FROM t1;\n\nSELECT * FROM t1;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If a rule action contains a ",(0,s.jsx)(n.code,{children:"NOTIFY"})," command, the ",(0,s.jsx)(n.code,{children:"NOTIFY"})," command will be executed unconditionally, that is, the ",(0,s.jsx)(n.code,{children:"NOTIFY"})," will be issued even if there are not any rows that the rule should apply to. For example, in:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE RULE notify_me AS ON UPDATE TO mytable DO ALSO NOTIFY mytable;\n\nUPDATE mytable SET name = 'foo' WHERE id = 42;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["one ",(0,s.jsx)(n.code,{children:"NOTIFY"})," event will be sent during the ",(0,s.jsx)(n.code,{children:"UPDATE"}),", whether or not there are any rows that match the condition id = 42."]}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE RULE"})," is a Cloudberry Database extension, as is the entire query rewrite system."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-rule",children:"ALTER RULE"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-rule",children:"DROP RULE"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);