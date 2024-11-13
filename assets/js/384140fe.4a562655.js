"use strict";(self.webpackChunkbash_script_reference=self.webpackChunkbash_script_reference||[]).push([[480],{9962:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"associative-arrays","title":"Associative Arrays","description":"Associative arrays are similar to arrays except they use keys instead of indexes so nearly all the same features apply. However, associative arrays do not support an easy way to concatenated/union them together like arrays, and reading them from a string is not as straight forward.","source":"@site/docs/005-associative-arrays.md","sourceDirName":".","slug":"/associative-arrays","permalink":"/bash-script-reference/docs/associative-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/seeker-3/bash-script-reference/tree/main/docs/005-associative-arrays.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"referenceSidebar","previous":{"title":"Arrays","permalink":"/bash-script-reference/docs/arrays"},"next":{"title":"Globbing","permalink":"/bash-script-reference/docs/globbing"}}');var n=s(6070),t=s(5658);const i={},o="Associative Arrays",c={},l=[{value:"Declaring Associative Arrays",id:"declaring-associative-arrays",level:2},{value:"Associative Array Expansions",id:"associative-array-expansions",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"associative-arrays",children:"Associative Arrays"})}),"\n",(0,n.jsx)(a.p,{children:"Associative arrays are similar to arrays except they use keys instead of indexes so nearly all the same features apply. However, associative arrays do not support an easy way to concatenated/union them together like arrays, and reading them from a string is not as straight forward."}),"\n",(0,n.jsx)(a.p,{children:"Associative arrays are seldom needed and you may need a more powerful language if you find yourself needing them."}),"\n",(0,n.jsx)(a.h2,{id:"declaring-associative-arrays",children:"Declaring Associative Arrays"}),"\n",(0,n.jsx)(a.p,{children:"You can declare a associative arrays two ways."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"declare -A DICT1\nDICT1[key1]=value1\nDICT1[key2]=value2\n\n# or\ndeclare -A DICT2=([key1]=value1 [key2]=value2)\n"})}),"\n",(0,n.jsx)(a.p,{children:"Or multiline:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"declare -A DICT2=(\n  [key1]=value1\n  [key2]=value2\n)\n"})}),"\n",(0,n.jsx)(a.h2,{id:"associative-array-expansions",children:"Associative Array Expansions"}),"\n",(0,n.jsxs)(a.p,{children:["Get the keys of a associative arrays using the ",(0,n.jsx)(a.code,{children:"!"})," symbol (same as arrays). Use ",(0,n.jsx)(a.code,{children:"@"})," to get them an an array ",(0,n.jsx)(a.code,{children:"*"})," to get them as a string."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"declare -A DICT2=([key1]=value1 [key2]=value2)\necho \"${!DICT2[@]}\" # 'key1' 'key2'\necho \"${!DICT2[*]}\" # 'key1 key2'\n"})}),"\n",(0,n.jsx)(a.p,{children:"Values:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"declare -A DICT2=([key1]=value1 [key2]=value2)\necho \"${DICT2[@]}\" # 'key1 key2'\necho \"${DICT2[*]}\" # 'key1 key2'\n"})})]})}function y(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5658:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>o});var r=s(758);const n={},t=r.createContext(n);function i(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);