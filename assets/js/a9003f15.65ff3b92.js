"use strict";(self.webpackChunkbash_script_reference=self.webpackChunkbash_script_reference||[]).push([[328],{3714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"strict-mode","title":"Strict Mode","description":"","source":"@site/docs/019-strict-mode.md","sourceDirName":".","slug":"/strict-mode","permalink":"/bash-script-reference/docs/strict-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/seeker-3/bash-script-reference/tree/main/docs/019-strict-mode.md","tags":[],"version":"current","sidebarPosition":19,"frontMatter":{},"sidebar":"referenceSidebar","previous":{"title":"Tilde Expansion ~","permalink":"/bash-script-reference/docs/tilde-expansions"},"next":{"title":"Running Scripts","permalink":"/bash-script-reference/docs/running-scripts"}}');var s=t(6070),c=t(5658);const i={},o="Strict Mode",a={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"strict-mode",children:"Strict Mode"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"set -euo pipefail\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'command || STATUS=$?\n\ncase $STATUS in\n0) echo "Success" ;;\n1) echo "Failure" ;;\n*) echo "Unknown" ;;\nesac\n'})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5658:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(758);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);