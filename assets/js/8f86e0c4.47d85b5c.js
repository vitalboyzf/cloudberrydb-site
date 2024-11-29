"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6660],{41341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(85893),i=n(11151);const a={title:"CREATE CAST"},o="CREATE CAST",r={id:"sql-stmts/create-cast",title:"CREATE CAST",description:"Defines a new cast.",source:"@site/docs/sql-stmts/create-cast.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-cast",permalink:"/docs/sql-stmts/create-cast",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-cast.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1732847277,formattedLastUpdatedAt:"Nov 29, 2024",frontMatter:{title:"CREATE CAST"},sidebar:"docsbars",previous:{title:"CREATE AGGREGATE",permalink:"/docs/sql-stmts/create-aggregate"},next:{title:"CREATE COLLATION",permalink:"/docs/sql-stmts/create-collation"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-cast",children:"CREATE CAST"}),"\n",(0,s.jsx)(t.p,{children:"Defines a new cast."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE CAST (<sourcetype> AS <targettype>) \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WITH FUNCTION <funcname> (<argtype> [, ...]) \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[AS ASSIGNMENT | AS IMPLICIT]\n\nCREATE CAST (<sourcetype> AS <targettype>)\n       WITHOUT FUNCTION \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[AS ASSIGNMENT | AS IMPLICIT]\n\nCREATE CAST (<sourcetype> AS <targettype>)\n       WITH INOUT \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[AS ASSIGNMENT | AS IMPLICIT]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CREATE CAST"})," defines a new cast. A cast specifies how to perform a conversion between two data types. For example,"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT CAST(42 AS float8);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["converts the integer constant ",(0,s.jsx)(t.code,{children:"42"})," to type ",(0,s.jsx)(t.code,{children:"float8"})," by invoking a previously specified function, in this case ",(0,s.jsx)(t.code,{children:"float8(int4)"}),". If no suitable cast has been defined, the conversion fails."]}),"\n",(0,s.jsxs)(t.p,{children:["Two types may be binary coercible, which means that the types can be converted into one another without invoking any function. This requires that corresponding values use the same internal representation. For instance, the types ",(0,s.jsx)(t.code,{children:"text"})," and ",(0,s.jsx)(t.code,{children:"varchar"})," are binary coercible in both directions. Binary coercibility is not necessarily a symmetric relationship. For example, the cast from ",(0,s.jsx)(t.code,{children:"xml"})," to ",(0,s.jsx)(t.code,{children:"text"})," can be performed for free in the present implementation, but the reverse direction requires a function that performs at least a syntax check. (Two types that are binary coercible both ways are also referred to as binary compatible.)"]}),"\n",(0,s.jsxs)(t.p,{children:["You can define a cast as an ",(0,s.jsx)(t.em,{children:"I/O conversion cast"})," by using the ",(0,s.jsx)(t.code,{children:"WITH INOUT"})," syntax. An I/O conversion cast is performed by invoking the output function of the source data type, and passing the resulting string to the input function of the target data type. In many common cases, this feature avoids the need to write a separate cast function for conversion. An I/O conversion cast acts the same as a regular function-based cast; only the implementation is different."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, a cast can be invoked only by an explicit cast request, that is an explicit ",(0,s.jsx)(t.code,{children:"CAST(x AS"})," typename",(0,s.jsx)(t.code,{children:")"})," or ",(0,s.jsx)(t.code,{children:"x:: typename"})," construct."]}),"\n",(0,s.jsxs)(t.p,{children:["If the cast is marked ",(0,s.jsx)(t.code,{children:"AS ASSIGNMENT"})," then it can be invoked implicitly when assigning a value to a column of the target data type. For example, supposing that ",(0,s.jsx)(t.code,{children:"foo.f1"})," is a column of type ",(0,s.jsx)(t.code,{children:"text"}),", then:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"INSERT INTO foo (f1) VALUES (42);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["will be allowed if the cast from type ",(0,s.jsx)(t.code,{children:"integer"})," to type ",(0,s.jsx)(t.code,{children:"text"})," is marked ",(0,s.jsx)(t.code,{children:"AS ASSIGNMENT"}),", otherwise not. The term ",(0,s.jsx)(t.em,{children:"assignment cast"})," is typically used to describe this kind of cast."]}),"\n",(0,s.jsxs)(t.p,{children:["If the cast is marked ",(0,s.jsx)(t.code,{children:"AS IMPLICIT"})," then it can be invoked implicitly in any context, whether assignment or internally in an expression. The term ",(0,s.jsx)(t.em,{children:"implicit cast"})," is typically used to describe this kind of cast. For example, consider this query:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT 2 + 4.0;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The parser initially marks the constants as being of type ",(0,s.jsx)(t.code,{children:"integer"})," and ",(0,s.jsx)(t.code,{children:"numeric"}),", respectively. There is no ",(0,s.jsx)(t.code,{children:"integer + numeric"})," operator in the system catalogs, but there is a ",(0,s.jsx)(t.code,{children:"numeric + numeric"})," operator. This query succeeds if a cast from ",(0,s.jsx)(t.code,{children:"integer"})," to ",(0,s.jsx)(t.code,{children:"numeric"})," exists (it does) and is marked ",(0,s.jsx)(t.code,{children:"AS IMPLICIT"}),", which in fact it is. The parser applies only the implicit cast and resolves the query as if it had been written as the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT CAST ( 2 AS numeric ) + 4.0;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The catalogs also provide a cast from ",(0,s.jsx)(t.code,{children:"numeric"})," to ",(0,s.jsx)(t.code,{children:"integer"}),". If that cast were marked ",(0,s.jsx)(t.code,{children:"AS IMPLICIT"}),", which it is not, then the parser would be faced with choosing between the above interpretation and the alternative of casting the ",(0,s.jsx)(t.code,{children:"numeric"})," constant to ",(0,s.jsx)(t.code,{children:"integer"})," and applying the ",(0,s.jsx)(t.code,{children:"integer + integer"})," operator. Lacking any knowledge of which choice to prefer, the parser would give up and declare the query ambiguous. The fact that only one of the two casts is implicit is the way in which we teach the parser to prefer resolution of a mixed ",(0,s.jsx)(t.code,{children:"numeric"}),"-and-",(0,s.jsx)(t.code,{children:"integer"})," expression as ",(0,s.jsx)(t.code,{children:"numeric"}),"; the parser has no built-in knowledge about that."]}),"\n",(0,s.jsxs)(t.p,{children:["It is wise to be conservative about marking casts as implicit. An overabundance of implicit casting paths can cause Cloudberry Database to choose surprising interpretations of commands, or to be unable to resolve commands at all because there are multiple possible interpretations. A good general rule is to make a cast implicitly invokable only for information-preserving transformations between types in the same general type category. For example, the cast from ",(0,s.jsx)(t.code,{children:"int2"})," to ",(0,s.jsx)(t.code,{children:"int4"})," can reasonably be implicit, but the cast from ",(0,s.jsx)(t.code,{children:"float8"})," to ",(0,s.jsx)(t.code,{children:"int4"})," should probably be assignment-only. Cross-type-category casts, such as ",(0,s.jsx)(t.code,{children:"text"})," to ",(0,s.jsx)(t.code,{children:"int4"}),", are best made explicit-only."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"})," Sometimes it is necessary for usability or standards-compliance reasons to provide multiple implicit casts among a set of types, resulting in ambiguity that cannot be avoided as described above. The parser uses a fallback heuristic based on type categories and preferred types that helps to provide desired behavior in such cases. See ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-type",children:"CREATE TYPE"})," for more information."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To be able to create a cast, you must own the source or the target data type and have ",(0,s.jsx)(t.code,{children:"USAGE"})," privilege on the other type. To create a binary-coercible cast, you must be superuser. (This restriction is made because an erroneous binary-coercible cast conversion can easily crash the server.)"]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"sourcetype"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the source data type of the cast."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"targettype"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the target data type of the cast."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"funcname(argtype [, ...])"})})}),"\n",(0,s.jsx)(t.p,{children:"The function used to perform the cast. The function name may be schema-qualified. If it is not, Cloudberry Database looks for the function in the schema search path. The function's result data type must match the target type of the cast."}),"\n",(0,s.jsxs)(t.p,{children:["Cast implementation functions may have one to three arguments. The first argument type must be identical to or binary-coercible from the cast's source type. The second argument, if present, must be type ",(0,s.jsx)(t.code,{children:"integer"}),"; it receives the type modifier associated with the destination type, or ",(0,s.jsx)(t.code,{children:"-1"})," if there is none. The third argument, if present, must be type ",(0,s.jsx)(t.code,{children:"boolean"}),"; it receives ",(0,s.jsx)(t.code,{children:"true"})," if the cast is an explicit cast, ",(0,s.jsx)(t.code,{children:"false"})," otherwise. The SQL specification demands different behaviors for explicit and implicit casts in some cases. This argument is supplied for functions that must implement such casts. It is not recommended that you design your own data types this way."]}),"\n",(0,s.jsx)(t.p,{children:"The return type of a cast function must be identical to or binary-coercible to the cast's target type."}),"\n",(0,s.jsx)(t.p,{children:"Ordinarily a cast must have different source and target data types. However, you are permitted to declare a cast with identical source and target types if it has a cast implementation function that takes more than one argument. This is used to represent type-specific length coercion functions in the system catalogs. The named function is used to coerce a value of the type to the type modifier value given by its second argument."}),"\n",(0,s.jsx)(t.p,{children:"When a cast has different source and target types and a function that takes more than one argument, the cast converts from one type to another and applies a length coercion in a single step. When no such entry is available, coercion to a type that uses a type modifier involves two steps, one to convert between data types and a second to apply the modifier."}),"\n",(0,s.jsx)(t.p,{children:"A cast to or from a domain type currently has no effect. Casting to or from a domain uses the casts associated with its underlying type."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"WITHOUT FUNCTION"})})}),"\n",(0,s.jsx)(t.p,{children:"Indicates that the source type is binary-coercible to the target type, so no function is required to perform the cast."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"WITH INOUT"})})}),"\n",(0,s.jsx)(t.p,{children:"Indicates that the cast is an I/O conversion cast, performed by invoking the output function of the source data type, and passing the resulting string to the input function of the target data type."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AS ASSIGNMENT"})})}),"\n",(0,s.jsx)(t.p,{children:"Indicates that the cast may be invoked implicitly in assignment contexts."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AS IMPLICIT"})})}),"\n",(0,s.jsx)(t.p,{children:"Indicates that the cast may be invoked implicitly in any context."}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.p,{children:["Note that in this release of Cloudberry Database, user-defined functions used in a user-defined cast must be defined as ",(0,s.jsx)(t.code,{children:"IMMUTABLE"}),". Any compiled code (shared library files) for custom functions must be placed in the same location on every host in your Cloudberry Database array (coordinator and all segments). This location must also be in the ",(0,s.jsx)(t.code,{children:"LD_LIBRARY_PATH"})," so that the server can locate the files."]}),"\n",(0,s.jsx)(t.p,{children:"Remember that if you want to be able to convert types both ways you need to declare casts both ways explicitly."}),"\n",(0,s.jsxs)(t.p,{children:["It is normally not necessary to create casts between user-defined types and the standard string types (",(0,s.jsx)(t.code,{children:"text"}),", ",(0,s.jsx)(t.code,{children:"varchar"}),", and ",(0,s.jsx)(t.code,{children:"char(*n*)"}),", as well as user-defined types that are defined to be in the string category). Cloudberry Database provides automatic I/O conversion casts for these. The automatic casts to string types are treated as assignment casts, while the automatic casts from string types are explicit-only. You can override this behavior by declaring your own cast to replace an automatic cast, but usually the only reason to do so is if you want the conversion to be more easily invokable than the standard assignment-only or explicit-only setting. Another possible reason is that you want the conversion to behave differently from the type's I/O function - think twice before doing this. (A small number of the built-in types do indeed have different behaviors for conversions, mostly because of requirements of the SQL standard.)"]}),"\n",(0,s.jsxs)(t.p,{children:["It is recommended that you follow the convention of naming cast implementation functions after the target data type, as the built-in cast implementation functions are named. Many users are used to being able to cast data types using a function-style notation, that is ",(0,s.jsx)(t.code,{children:"typename(x)"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["There are two cases in which a function-call construct is treated as a cast request without having matched it to an actual function. If a function call ",(0,s.jsx)(t.code,{children:"*name(x)*"})," does not exactly match any existing function, but ",(0,s.jsx)(t.code,{children:"*name*"})," is the name of a data type and ",(0,s.jsx)(t.code,{children:"pg_cast"})," provides a binary-coercible cast to this type from the type of ",(0,s.jsx)(t.code,{children:"*x*"}),", then the call will be construed as a binary-coercible cast. Cloudberry Database makes this exception so that binary-coercible casts can be invoked using functional syntax, even though they lack any function. Likewise, if there is no ",(0,s.jsx)(t.code,{children:"pg_cast"})," entry but the cast would be to or from a string type, the call is construed as an I/O conversion cast. This exception allows I/O conversion casts to be invoked using functional syntax."]}),"\n",(0,s.jsxs)(t.p,{children:["There is an exception to the exception above: I/O conversion casts from composite types to string types cannot be invoked using functional syntax, but must be written in explicit cast syntax (either ",(0,s.jsx)(t.code,{children:"CAST"})," or :: notation). This exception exists because after the introduction of automatically-provided I/O conversion casts, it was found to be too easy to accidentally invoke such a cast when you intended a function or column reference."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["To create an assignment cast from type ",(0,s.jsx)(t.code,{children:"bigint"})," to type ",(0,s.jsx)(t.code,{children:"int4"})," using the function ",(0,s.jsx)(t.code,{children:"int4(bigint)"})," (This cast is already predefined in the system.):"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE CAST (bigint AS int4) WITH FUNCTION int4(bigint) AS ASSIGNMENT;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"CREATE CAST"})," command conforms to the SQL standard, except that SQL does not make provisions for binary-coercible types or extra arguments to implementation functions. ",(0,s.jsx)(t.code,{children:"AS IMPLICIT"})," is a Cloudberry Database extension, too."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-function",children:"CREATE FUNCTION"}),", ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-type",children:"CREATE TYPE"}),", ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/drop-cast",children:"DROP CAST"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);