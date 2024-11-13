"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[550],{8031:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"expansions","title":"Expansions","description":"Ranges {start..stop..step}","source":"@site/docs/015-expansions.md","sourceDirName":".","slug":"/expansions","permalink":"/bash-script-reference/docs/expansions","draft":false,"unlisted":false,"editUrl":"https://github.com/seeker-3/bash-script-reference/tree/main/docs/015-expansions.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{},"sidebar":"referenceSidebar","previous":{"title":"Arithmetic ((x+=y))","permalink":"/bash-script-reference/docs/arithmetic"},"next":{"title":"Strict Mode","permalink":"/bash-script-reference/docs/strict-mode"}}');var i=s(6070),a=s(5658);const l={},d="Expansions",c={},t=[{value:"Ranges <code>{start..stop..step}</code>",id:"ranges-startstopstep",level:2},{value:"Brace Expansions <code>prefix{middle1,middle2,}suffix</code>",id:"brace-expansions-prefixmiddle1middle2suffix",level:2},{value:"Parameter Expansions <code>VAR2=${VAR...}</code>",id:"parameter-expansions-var2var",level:2},{value:"Tilde Expansion <code>~</code>",id:"tilde-expansion-",level:2}];function o(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"expansions",children:"Expansions"})}),"\n",(0,i.jsxs)(r.h2,{id:"ranges-startstopstep",children:["Ranges ",(0,i.jsx)(r.code,{children:"{start..stop..step}"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"echo {1..5} # 1 2 3 4 5\n"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:'for i in {1..5}; do\n  echo "$i"\ndone\n'})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"echo {0..10..2} # 0 2 4 6 8 10\n"})}),"\n",(0,i.jsxs)(r.h2,{id:"brace-expansions-prefixmiddle1middle2suffix",children:["Brace Expansions ",(0,i.jsx)(r.code,{children:"prefix{middle1,middle2,}suffix"})]}),"\n",(0,i.jsxs)(r.h2,{id:"parameter-expansions-var2var",children:["Parameter Expansions ",(0,i.jsx)(r.code,{children:"VAR2=${VAR...}"})]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter:-word}"})," default value"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter:=word}"})," default value and set"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter:?word}"})," error message"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter:+word}"})," alternate value"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${!prefix*}"})," all variables with prefix as a single string"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${!prefix@}"})," all variables with prefix as separate strings"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter#word}"})," remove prefix"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter##word}"})," remove prefix greedy"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter%word}"})," remove suffix"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter%%word}"})," remove suffix greedy"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter/pattern/string}"})," replace first"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter//pattern/string}"})," replace all"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter/#pattern/string}"})," replace prefix"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter/%pattern/string}"})," replace suffix"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter^pattern}"})," capitalize first"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter^^pattern}"})," capitalize all"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter,pattern}"})," lower first"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter,,pattern}"})," lower all"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"${parameter@operator}"})," apply operator","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"U"})," uppercase"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"u"})," capitalize"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"L"})," lowercase"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"Q"})," escape and quote"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"E"})," escape?"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"P"})," interpret string as a variable"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"A"})," Generate a declare statement that, when evaluated, will recreate the array"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"K"})," Get all dict keys and values as a string. Values will be double quoted ",(0,i.jsx)(r.code,{children:'\'key1 "value1" key2 "value2"\''})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"a"})," Get all the flags for the variable's declaration"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"k"})," Get all dict keys and values as separate strings ",(0,i.jsx)(r.code,{children:"${!parameter[@]}"})," ",(0,i.jsx)(r.code,{children:"'key1' 'value1' 'key2' 'value2'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"tilde-expansion-",children:["Tilde Expansion ",(0,i.jsx)(r.code,{children:"~"})]})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},5658:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>d});var n=s(758);const i={},a=n.createContext(i);function l(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);